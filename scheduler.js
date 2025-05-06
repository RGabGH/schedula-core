var CalendarItem = /** @class */ (function () {
    function CalendarItem() {
        this._duration = 1440;
        this._denominator = 60000;
        this._capacity = 0;
        this._step = 60;
        this._type = '';
        this._day = -1;
        this._orderIndex = 1000;
        var now = new Date();
        var date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        this._from = Math.trunc(date.getTime() / this._denominator);
        this.type = 'event';
    }
    Object.defineProperty(CalendarItem.prototype, "capacity", {
        get: function () {
            return this._capacity;
        },
        set: function (val) {
            this._capacity = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (val) {
            if ((val >= -1) && (val <= 6))
                this._day = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "dateFrom", {
        get: function () {
            return new Date(this._from * this._denominator).toString();
        },
        set: function (value) {
            var dt = value;
            if (!value.includes('T'))
                dt += 'T00:00:00';
            var date = new Date(dt);
            if (date.toString() != 'Invalid Date') {
                this.from = date.getTime();
            }
            else
                console.log(value + ' - Invalid Date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "dateTo", {
        get: function () {
            return new Date((this._from + this._duration) * this._denominator);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        set: function (value) {
            var duration = value;
            duration = this.getModulo(duration);
            if (duration > 0) {
                this._duration = duration;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "denominator", {
        set: function (value) {
            this.from *= this._denominator;
            this.from /= value;
            this._capacity *= this._denominator;
            this._capacity /= value;
            this._denominator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "from", {
        get: function () {
            return this._from;
        },
        set: function (value) {
            var f = Math.trunc(value / this._denominator);
            f = this.getModulo(f);
            this._from = f;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "to", {
        get: function () {
            return this._from + this._duration;
        },
        set: function (value) {
            var v = Math.trunc(value / this._denominator);
            v = this.getModulo(v);
            if (v > 0 && v > this._from) {
                this._duration = v - this._from;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            if (value == 'rule') {
                this._orderIndex = 0;
            }
            else if (value == 'calendar') {
                this._orderIndex = 1;
            }
            else if (value == 'event') {
                this._orderIndex = 2;
            }
            else {
                this._orderIndex = 1000;
                this._type = 'event';
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "orderIndex", {
        get: function () {
            return this._orderIndex;
        },
        enumerable: false,
        configurable: true
    });
    CalendarItem.prototype.getModulo = function (value) {
        var v = value;
        var r = value % this._step;
        if ((r) > (this._step / 2))
            v = v - r + this._step;
        else
            v -= r;
        return v;
    };
    return CalendarItem;
}());
var Calendar = /** @class */ (function () {
    function Calendar() {
        this._items = [];
        this._capacity = 0;
        this._denominator = 60000;
        this._reference = 1440;
        this._step = 15;
    }
    Calendar.prototype.newItem = function () {
        var item = new CalendarItem();
        this._items.push(item);
        return item;
    };
    Calendar.prototype.addItem = function (item) {
        if (item instanceof CalendarItem) {
            this._items.push(item);
            return item;
        }
        else
            return null;
    };
    Object.defineProperty(Calendar.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "itemCount", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    Calendar.prototype.calcDuration = function (item) {
        var duration = 0;
        var effort = 0;
        var sum = 0;
        var denom = this._denominator;
        var reference = this._reference;
        var step = this._step;
        var minutes = 0;
        var hours = 0;
        var dayMinTot = 0;
        while (effort < item.Effort) {
            var cursor = item.From + sum;
            var e = 0;
            var dt = new Date(cursor * denom);
            //check rules
            var capacity = this.getCapacity(cursor, dt.getUTCDay());
            minutes = dt.getUTCMinutes();
            hours = dt.getUTCHours();
            dayMinTot = (hours * 60) + minutes;
            if (capacity > 0) {
                //  e=(capacity/reference)*step;  
                if (dayMinTot >= capacity)
                    e = 0;
                else
                    e = step;
            }
            effort += e;
            effort = Math.round(effort * 1000) / 1000;
            sum += step;
        }
        duration = sum;
        if (duration < step)
            duration = step;
        return duration;
    };
    Calendar.prototype.calcEffort = function (item) {
        var duration = item.Width;
        var d = 0;
        var effort = 0;
        var denom = this._denominator;
        var reference = this._reference;
        var step = this._step;
        var minutes = 0;
        var hours = 0;
        var dayMinTot = 0;
        while (d < duration) {
            var cursor = item.From + d;
            var e = 0;
            var dt = new Date(cursor * denom);
            minutes = dt.getUTCMinutes();
            hours = dt.getUTCHours();
            dayMinTot = (hours * 60) + minutes;
            //check rules
            var capacity = this.getCapacity(cursor, dt.getUTCDay());
            if (capacity > 0) {
                if (dayMinTot >= capacity)
                    e = 0;
                else
                    e = step;
                //e=(capacity/reference)*step;  
            }
            effort += e;
            effort = Math.ceil(effort * 100) / 100;
            d += step;
        }
        return effort;
    };
    Calendar.prototype.optimazeStart = function (item) {
        var sum = 0;
        var denom = this._denominator;
        var reference = this._reference;
        var step = this._step;
        var capacity = 0;
        var go = true;
        console.log('optimization start');
        while (go && sum < (reference * 20)) {
            var cursor = item.From + sum;
            var dt = new Date(cursor * denom);
            var minutes = dt.getUTCMinutes();
            var hours = dt.getUTCHours();
            var dayMinTot = (hours * 60) + minutes;
            // console.log(dayMinTot);
            // console.log(cursor+ ' '+denom);
            capacity = this.getCapacity(cursor, dt.getUTCDay());
            if ((capacity == 0) || (dayMinTot >= capacity)) {
                sum += step;
                go = true;
            }
            else
                go = false;
            //e=(capacity/reference)*step;  
        }
        return item.From + sum;
    };
    Calendar.prototype.getCapacity = function (instant, day) {
        var capacity = this._capacity;
        var dayRuleItem = this.items.filter(function (item) {
            return (item.type == 'rule' && item.day == day) && (item.from <= instant) && (item.to > instant);
        })[0];
        capacity = dayRuleItem ? dayRuleItem.capacity : capacity;
        if (dayRuleItem == undefined) {
            var capacityRuleItem = this.items.filter(function (item) {
                return (item.type == 'rule' && item.day == -1) && (item.from <= instant) && (item.to > instant);
            })[0];
            capacity = capacityRuleItem ? capacityRuleItem.capacity : capacity;
        }
        var calendarItem = this.items.filter(function (item) {
            return (item.type == 'calendar' && item.day == -1) && (item.from <= instant) && (item.to > instant);
        })[0];
        capacity = calendarItem ? calendarItem.capacity : capacity;
        return capacity;
    };
    Object.defineProperty(Calendar.prototype, "reference", {
        get: function () {
            return this._reference;
        },
        enumerable: false,
        configurable: true
    });
    return Calendar;
}());
var SchedulerItem = /** @class */ (function () {
    function SchedulerItem() {
        this.From = 0;
        this.Effort = 0;
        this.Duration = 0;
        this.ControlBit = false;
    }
    return SchedulerItem;
}());
var SchedulerItem2 = /** @class */ (function () {
    function SchedulerItem2(scheduler, itemData, calendar) {
        this.Duration = 0;
        this.ControlBit = false;
        this._resource = 0;
        this._width = 0;
        this._height = 0;
        this._from = 0;
        this._to = 0;
        this._offset = 0;
        this._effort = 2880;
        this._x = 0;
        this._y = 0;
        this._w = 0;
        if (itemData) {
            if (itemData.Id) {
                this._element = document.querySelector('svg[data-id="' + itemData.Id + '"]');
                this._data = itemData;
                this._id = itemData.Id;
            }
        }
        this._scheduler = scheduler;
        this._resource = -1;
        this._settings = scheduler.settings;
        this._calendar = scheduler.calendar;
        if (calendar != null)
            this._calendar = calendar;
        this._offset = itemData.Offset;
        this._width = itemData.Width;
        this._from = this.calcFrom();
        if (this._calendar != null) {
            this._effort = this._calendar.calcEffort(this);
            this._data.Effort = this._effort;
        }
    }
    Object.defineProperty(SchedulerItem2.prototype, "Id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem2.prototype, "Resource", {
        get: function () {
            var _this = this;
            var _a;
            if (this._resource < 0) {
                (_a = this._scheduler.data.Resources) === null || _a === void 0 ? void 0 : _a.forEach(function (resource, ri) {
                    var _a;
                    (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                        if (item.Id == _this._data.Id) {
                            _this._resource = ri;
                        }
                    });
                });
            }
            return this._resource;
        },
        set: function (value) {
            var _a, _b, _c, _d;
            if (value >= 0) {
                var resourceIndex = Math.trunc(value);
                // if (resourceIndex>0 && resourceIndex<this._scheduler.data.Resources.length)
                // {
                var y = (this._settings.resourceHeight * resourceIndex) + this._scheduler.headerHeight;
                var x = parseFloat((_a = this._element) === null || _a === void 0 ? void 0 : _a.getAttribute('x'));
                if (resourceIndex != this._resource) {
                    (_b = this._scheduler.data.Resources[this.Resource].Items) === null || _b === void 0 ? void 0 : _b.splice((_c = this._scheduler.data.Resources[this.Resource].Items) === null || _c === void 0 ? void 0 : _c.indexOf(this._data), 1);
                    if (!this._scheduler.data.Resources[resourceIndex].Items)
                        this._scheduler.data.Resources[resourceIndex].Items = [];
                    this._data.Modified = true;
                    (_d = this._scheduler.data.Resources[resourceIndex].Items) === null || _d === void 0 ? void 0 : _d.push(this._data);
                    this._resource = resourceIndex;
                    this._data.Resource = this._resource;
                    // if (this.checkInterference()==true){
                    //     this.moveTo(x,y);
                    // }
                    this.moveTo(x, y);
                }
                else
                    this.moveTo(x, y);
                // }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem2.prototype, "From", {
        get: function () {
            return this._from;
        },
        set: function (value) {
            if (value >= 0) {
                this._from = value;
                this.Offset = this.calcOffset();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem2.prototype, "Offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            if (value >= 0) {
                this._offset = value;
                this._from = this.calcFrom();
                if (this._calendar && this._settings.optimizeStart == true) {
                    this._from = this._calendar.optimazeStart(this);
                    this._offset = this.calcOffset();
                }
                var x = this.convertOffsetToX();
                if (this._element) {
                    var y = parseFloat(this._element.getAttribute('y'));
                    this.moveTo(x, y);
                }
                this._data.Offset = this._offset;
                this._data.From = this._from;
                this._data.Modified = true;
                if (this._calendar && this._settings.calcEffort == true) {
                    var w = this._calendar.calcDuration(this);
                    w = this.getModulo(w, this._settings.gridStep, this._settings.gridStep);
                    this._width = w;
                    this._w = this._width / this._settings.timeUnitVal * this._settings.timeWidth;
                    this.setWidth(this._w);
                    this._data.Width = this._width;
                }
                this._data.To = this._from + this._width;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem2.prototype, "To", {
        get: function () {
            return this._from + this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem2.prototype, "Width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (value >= this._settings.gridStep) {
                this._width = this.getModulo(value, this._settings.gridStep, this._settings.gridStep);
                this._w = this._width / this._settings.timeUnitVal * this._settings.timeWidth;
                this.setWidth(this._w);
                if (this._calendar) {
                    this._effort = this._calendar.calcEffort(this);
                }
                else
                    this._effort = this._width;
                this._data.Width = this._width;
                this._data.Effort = this.Effort;
                this._data.To = this._from + this._width;
                this._data.Modified = true;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem2.prototype, "W", {
        get: function () {
            var _a, _b;
            return parseFloat((_b = (_a = this._element) === null || _a === void 0 ? void 0 : _a.getAttribute('width')) !== null && _b !== void 0 ? _b : '0');
        },
        set: function (value) {
            if (value > 0) {
                var val = value * this._settings.timeUnitVal / this._settings.timeWidth;
                this.Width = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem2.prototype, "X", {
        get: function () {
            var _a, _b;
            return parseFloat((_b = (_a = this._element) === null || _a === void 0 ? void 0 : _a.getAttribute('x')) !== null && _b !== void 0 ? _b : '0');
        },
        set: function (value) {
            if (value > 0) {
                var offset = this.convertXToOffset(value);
                this.Offset = this.getModulo(offset, this._settings.gridStep, this._settings.gridStep);
                this._x = this.convertOffsetToX();
                this._data.Offset = this._offset;
                this._data.Modified = true;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem2.prototype, "Y", {
        get: function () {
            var _a, _b;
            return parseFloat((_b = (_a = this._element) === null || _a === void 0 ? void 0 : _a.getAttribute('y')) !== null && _b !== void 0 ? _b : '0');
        },
        set: function (value) {
            var _a, _b;
            // let max=this._scheduler.headerHeight+((this._scheduler.data.Resources?.length ?? 0)*this._settings.resourceHeight)+(this._settings.resourceHeight/2);
            // let min=this._scheduler.headerHeight-(this._settings.resourceHeight/2);
            // console.log('set y:'+value+' min:'+min+' max:'+max);
            var min = 0;
            var max = (_b = (_a = this._scheduler.data.Resources) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
            var r = Math.trunc((value - this._scheduler.headerHeight) / this._settings.resourceHeight);
            if (r < min)
                r = min;
            if (r > max)
                r = max;
            this.Resource = r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem2.prototype, "Effort", {
        get: function () {
            return this._effort;
        },
        set: function (value) {
            if (value >= this._settings.gridStep) {
                this._effort = this.getModulo(value, this._settings.gridStep, this._settings.gridStep);
                if (this._calendar) {
                    this._width = this._calendar.calcDuration(this);
                }
                else
                    this._width = this._effort;
                this._w = this._width / this._settings.timeUnitVal * this._settings.timeWidth;
                this.setWidth(this._w);
                this._data.Width = this._width;
                this._data.Effort = this._effort;
                this._data.Modified = true;
            }
        },
        enumerable: false,
        configurable: true
    });
    SchedulerItem2.prototype.moveTo = function (x, y) {
        var _a;
        if (!this._element)
            return;
        if ((_a = this._settings.animation) !== null && _a !== void 0 ? _a : false) {
            this.moveAnimatedTo(x, y);
        }
        this._element.setAttribute('x', x.toString());
        this._element.setAttribute('y', y.toString());
    };
    SchedulerItem2.prototype.moveAnimatedTo = function (x, y) {
        var _a, _b;
        if (!this._element)
            return;
        var cx = parseFloat((_a = this._element.getAttribute('x')) !== null && _a !== void 0 ? _a : '0');
        var cy = parseFloat((_b = this._element.getAttribute('y')) !== null && _b !== void 0 ? _b : '0');
        var animatex = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animatex.setAttribute('attributeName', 'x');
        animatex.setAttribute('values', cx.toString() + ';' + x.toString());
        animatex.setAttribute('dur', '0.25s');
        this._element.append(animatex);
        animatex.beginElement();
        animatex.addEventListener('end', function () {
            animatex.remove();
        });
        var animatey = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animatey.setAttribute('attributeName', 'y');
        animatey.setAttribute('values', cy.toString() + ';' + y.toString());
        animatey.setAttribute('dur', '0.15s');
        this._element.append(animatey);
        animatey.beginElement();
        animatey.addEventListener('end', function () {
            animatey.remove();
        });
        // element.setAttribute('x',x.toString());
        // element.setAttribute('y',y.toString());
    };
    SchedulerItem2.prototype.setWidth = function (width) {
        var _a;
        if (this._settings.animation == true) {
            this.setAnimatedWidth(width);
        }
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.setAttribute('width', width.toString());
    };
    SchedulerItem2.prototype.setAnimatedWidth = function (width) {
        var _a;
        if (!this._element)
            return;
        var w = parseFloat((_a = this._element.getAttribute('width')) !== null && _a !== void 0 ? _a : '0');
        var animatew = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animatew.setAttribute('attributeName', 'width');
        animatew.setAttribute('values', w.toString() + ';' + width.toString());
        animatew.setAttribute('dur', '0.15s');
        this._element.append(animatew);
        animatew.beginElement();
        animatew.addEventListener('end', function () {
            animatew.remove();
        });
    };
    SchedulerItem2.prototype.getModulo = function (value, step, min) {
        var modulo = (value - (min !== null && min !== void 0 ? min : 0)) % step;
        var correction = modulo > step / 2 ? step - modulo : -modulo;
        var result = value + correction;
        result = min != null && result < min ? min : result;
        return result;
    };
    SchedulerItem2.prototype.convertXToTicks = function (x) {
        var date = this._settings.date;
        var ticks = 0;
        if (date) {
            ticks = x / this._settings.timeWidth * this._settings.timeUnitVal;
            ticks += (date.getTime() / 60000);
        }
        return ticks;
    };
    SchedulerItem2.prototype.calcFrom = function () {
        var date = this._settings.date;
        var ticks = this._offset;
        if (date) {
            ticks += (date.getTime() / 60000);
        }
        return ticks;
    };
    SchedulerItem2.prototype.calcOffset = function () {
        var date = this._settings.date;
        var ticks = this._from;
        if (date) {
            ticks -= (date.getTime() / 60000);
        }
        return ticks;
    };
    SchedulerItem2.prototype.convertOffsetToX = function () {
        var x = this._offset / this._settings.timeUnitVal * this._settings.timeWidth;
        return x;
    };
    SchedulerItem2.prototype.convertXToOffset = function (x) {
        var offset = x * this._settings.timeUnitVal / this._settings.timeWidth;
        return offset;
    };
    SchedulerItem2.prototype.convertWToTicks = function (w) {
        var ticks = w / this._settings.timeWidth * this._settings.timeUnitVal;
        return ticks;
    };
    SchedulerItem2.prototype.getItemOffset = function (from) {
        var date = this._settings.date;
        var x = 0;
        var ticks = 0;
        if (date) {
            ticks = (date.getTime() / 60000);
        }
        return from - ticks;
    };
    SchedulerItem2.prototype.checkInterference = function () {
        var _this = this;
        var _a, _b, _c;
        var result = true;
        var x1 = this.Offset;
        var x2 = this.Offset + this.Width;
        if (this.Resource >= 0 && this.Resource < ((_b = (_a = this._scheduler.data.Resources) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0)) {
            (_c = this._scheduler.data.Resources[this.Resource].Items) === null || _c === void 0 ? void 0 : _c.forEach(function (item) {
                if (item.Id != _this._data.Id) {
                    var cx1 = item.Offset;
                    var cx2 = item.Offset + item.Width;
                    result = result && ((x2 <= cx1) || (x1 >= cx2));
                }
            });
        }
        return result;
    };
    return SchedulerItem2;
}());
var CalendarMousePos = /** @class */ (function () {
    function CalendarMousePos() {
        this.x = 0;
        this.y = 0;
        this.timeOffset = 0;
        this.resourceIndex = 0;
        this.date = new Date();
    }
    return CalendarMousePos;
}());
var mousePos = /** @class */ (function () {
    function mousePos() {
        this.x = 0;
        this.y = 0;
    }
    return mousePos;
}());
var SchedulerSettings = /** @class */ (function () {
    function SchedulerSettings() {
        this.splitBarToggleButtons = true;
        this.resHeaderText = "";
        this.footerHeight = 0;
        this.storeData = true;
        this.animation = true;
        this.canMoveItems = true;
        this.canResizeItems = true;
        this.viewWeeks = true;
        this.viewInfoElements = false;
        this.viewInfo = true;
        this.checkInterferences = true;
        this.shiftItems = true;
        this.calcEffort = true;
        this.optimizeStart = true;
        this.roundRectRadius = 2;
        this.resourceHeight = 40;
        this.resourceWidth = 200;
        this.resourceImages = true;
        this.resourceChange = false;
        this.resCollapsedWidth = 1000;
        this.splitBarinitPos = 300;
        this.infoElementSize = 15;
        this.resRoundRect = 2;
        this.resPadding = 2;
        this.resUnitsView = 0;
        this.timeUnitsView = 30; //number of time units shown in a screen
        this.timeUnitVal = 1440; //number of minutes in time unit
        this.gridStep = 1440;
        this.gridOffset = 0; //grid step in minutes
        this.timeUnitsCount = 90; //number of time units view
        this.timeWidth = 144; //graphic width of time unit
        this.timeElementHeight = 15;
        this.monthBoxHeight = 50;
        this.weekBoxHeight = 15;
        this.infoElementHeight = 15;
        this.viewMonthLogo = true;
        this.logoTitle = "";
        this.splitterWidth = 10;
        this.sidebarMaxWidth = 350;
        this.sidebarMinWidth = 40;
        this.date = new Date('2023-09-21');
        this.groupFilter = 0;
        this.hilightSunday = true;
        this.logo = "";
        this.dropEnable = true;
        this.itemsLinks = false;
        this.drawLinks = false;
        this.linkSpline = true;
        this.itemsPadding = 3;
        this.itemsText = true;
        this.itemTextOffestX = 50;
        this.itemTextOffestY = 40;
        this.itemTextFont = "Arial";
        this.itemTextSize = '40%';
        this.gStyle = "round-rect";
        this.arrowSize = 6;
        this.perfectMatch = false;
        this.viewYear = true;
        this.viewShifters = true;
        this.shifterStep = 10;
        this.viewEvents = true;
        this.viewEventExtended = true;
        this.canMoveEvents = true;
        this.viewStars = false;
        this.progressBar = true;
        this.progressBarAnimation = true;
        this.icons = "";
        this.theme = "";
        this.months = ["January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ];
    }
    return SchedulerSettings;
}());
var SchedulerView;
(function (SchedulerView) {
    SchedulerView["Year"] = "year";
    SchedulerView["Month"] = "month";
    SchedulerView["Week"] = "week";
    SchedulerView["Day"] = "day";
    SchedulerView["Resource"] = "resource";
    SchedulerView["Time"] = "time";
    SchedulerView["Info"] = "info";
    SchedulerView["None"] = "none";
})(SchedulerView || (SchedulerView = {}));
var Scheduler = /** @class */ (function () {
    function Scheduler(scheduler, jsonData, template) {
        var _this = this;
        var _a;
        this.version = '5.0.0';
        this.scheduler_id = 'scheduler';
        this.headerHeight = 100;
        this.splitBarPos = 0;
        this.calendarMousePos = new CalendarMousePos();
        this.mpos = new mousePos();
        this.schedulerMousePos = new mousePos();
        this.action = '';
        this.linkPoint = new mousePos();
        this.linkId = '';
        this.actionMemoPos = new mousePos();
        this.ratio = 1;
        this.zoom = 1;
        this.template = '';
        this.calendar = null;
        this.currentView = SchedulerView.Month;
        this.scheduler_id = scheduler;
        this.data = jsonData;
        this.settings = new SchedulerSettings();
        this.template = template !== null && template !== void 0 ? template : '';
        if (this.data.Calendar) {
            console.log(this.data.Calendar);
            this.calendar = new Calendar();
            var r = this.calendar.newItem();
            r.capacity = this.data.Calendar.Reference;
            r.day = -1;
            r.from = 0;
            r.duration = 999999999;
            r.type = 'rule';
            console.log('calendar items');
            (_a = this.data.Calendar.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                var i = _this.calendar.newItem();
                i.capacity = item.Capacity;
                i.day = item.Day;
                var dtfrom = new Date(item.DateFrom);
                var dtto = new Date(item.DateTo);
                var f = dtfrom.getTime();
                console.log(f);
                i.from = f;
                console.log(dtto);
                console.log(i.from);
                i.duration = (new Date(item.DateTo).getTime() / 60000) - (new Date(item.DateFrom).getTime() / 60000);
                i.type = 'rule';
                console.log(i);
            });
        }
    }
    Scheduler.prototype.init = function () {
        var _this = this;
        this.schedulerContainer = document.getElementById(this.scheduler_id);
        if (this.schedulerContainer != null) {
            this.schedulerContainer.textContent = "";
            if (this.settings.theme) {
                this.schedulerContainer.classList.add(this.settings.theme);
            }
            //append template
            this.schedulerContainer.innerHTML = this.template;
            document.body.style.overflow = 'auto';
            //get svg element
            this.schedulerSVG = document.querySelector('#main-svg');
            var parser = new DOMParser();
            var svgIconsElement = parser.parseFromString(this.settings.icons, "image/svg+xml").documentElement;
            this.schedulerSVG.getElementById('defs').append(svgIconsElement);
            this.schedulerItems = document.getElementById('scheduler-items');
            this.splitBar = document.getElementById('scheduler-splitter');
            if (this.schedulerContainer != null) {
                if (this.schedulerSVG != null) {
                    this.draw();
                    this.processData();
                    this.storeData();
                    this.schedulerSVG.addEventListener('mousemove', function (event) {
                        _this.handleMouseMove(event);
                    });
                    this.schedulerSVG.addEventListener('mouseup', function (event) {
                        _this.svgMouseUp(event);
                    });
                    this.schedulerSVG.addEventListener('drop', function (event) {
                        console.log(event.dataTransfer.getData('task'));
                        _this.dropEventManagement(event);
                    });
                    this.schedulerSVG.addEventListener('dragover', function (event) {
                        if (event.target.classList.contains('box-element')) {
                            event.preventDefault();
                        }
                    });
                    var scheduler_1 = this;
                    document.addEventListener('keyup', (function (e) {
                        if (e.key === "Escape") { // escape key maps to keycode `27`
                            // <DO YOUR WORK HERE>
                            scheduler_1.escapePressed();
                        }
                    }));
                    window.addEventListener('resize', (function (e) {
                        scheduler_1.resized();
                    }));
                }
                else {
                    this.schedulerContainer.textContent = "Error: Template is null";
                    console.log('Error: Template is null');
                }
            }
            else {
                console.log('scheduler id is null or div');
            }
        }
    };
    Scheduler.prototype.dropEventManagement = function (evt) {
        var _a, _b;
        console.log('drop management');
        console.log(evt);
        evt.stopImmediatePropagation();
        if (this.settings.dropEnable && evt.target.classList.contains('box-element')) {
            var y = parseFloat(evt.target.getAttribute('y'));
            var res = (y - this.headerHeight) / this.settings.resourceHeight;
            console.log('res:' + res);
            var strdata = evt.dataTransfer.getData("task");
            if (strdata != undefined && strdata != '') {
                var data_1 = JSON.parse(strdata);
                var dd = new Date(evt.target.getAttribute('data-date'));
                //var testdate = new Date(dd.getFullYear() + '-' + (dd.getMonth() + 1) + '-' + dd.getDate());
                var sd = this.settings.date;
                //var testdate2 = new Date(sd.getFullYear() + '-' + (sd.getMonth() + 1) + '-' + sd.getDate());
                var timespan_1 = Math.trunc((dd.getTime() - sd.getTime()) / 1000 / 60);
                // let test = getModuloValue(dd.getTime(), 86400000);
                // timespan=getModuloValue(timespan,scheduler.settings.timeUnit);
                var resource = this.data.Resources[res];
                if (!resource.Items == null || resource.Items == undefined)
                    resource.Items = [];
                (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                    var start = item.Offset;
                    var stop = item.Offset + item.Width;
                    if (timespan_1 < stop && timespan_1 >= start)
                        timespan_1 = stop;
                });
                var link_1 = '';
                this.data.Resources.forEach(function (r, resource) {
                    var _a;
                    (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (i, item) {
                        var guid = 'link_' + Math.floor(Math.random() * 10000000);
                        if (item.Text == data_1.text1 && item.Reference == data_1.ref && data_1.ref != '' && data_1.ref != undefined && data_1.text1 != '') {
                            item.Link = guid;
                            item.Modified = true;
                            link_1 = guid;
                        }
                    });
                });
                var ra = Math.floor(Math.random() * 10000000);
                var dropped = {};
                dropped.Id = '_temp_id_' + ra.toString();
                dropped.Text = data_1.text1;
                dropped.Description = data_1.text2;
                dropped.Offset = timespan_1;
                dropped.Width = parseInt(data_1.width);
                dropped.Effort = dropped.Width;
                dropped.Link = link_1;
                dropped.IsNew = true;
                dropped.Modified = true;
                dropped.Color1 = data_1.color1;
                dropped.Classes = data_1.classes;
                dropped.From = (sd.getTime() / 1000 / 60) + timespan_1;
                dropped.To = dropped.From + dropped.Width;
                dropped.ForeignKey = data_1.key;
                dropped.Reference = data_1.ref;
                dropped.Pieces = data_1.pieces;
                console.log(data_1);
                if (resource.Items == undefined) {
                    var items = [];
                    resource.Items = items;
                }
                resource.Items.push(dropped);
                this.drawItem(dropped, res);
                dropped.Effort = dropped.Width;
                var scitem = new SchedulerItem2(this, dropped, this.calendar);
                scitem.Effort = dropped.Width;
                console.log(data_1.width);
                if (typeof modified === 'function')
                    modified();
                if (data_1.elementId)
                    (_b = document.getElementById(data_1.elementId)) === null || _b === void 0 ? void 0 : _b.remove();
            }
        }
    };
    Scheduler.prototype.resized = function () {
        this.ratio = this.schedulerSVG.viewBox.baseVal.width / this.schedulerSVG.clientWidth;
    };
    Scheduler.prototype.draw = function () {
        var _a, _b;
        this.settings.timeWidth = this.schedulerSVG.clientWidth / this.settings.timeUnitsView;
        var w = (this.settings.timeUnitsView * this.settings.timeWidth);
        //header height calc
        this.headerHeight = this.settings.timeElementHeight + this.settings.monthBoxHeight;
        if (this.settings.viewWeeks) {
            this.headerHeight += this.settings.weekBoxHeight;
        }
        if (this.settings.viewInfoElements || this.settings.viewEvents) {
            this.headerHeight += this.settings.infoElementHeight;
        }
        var h = (((_b = (_a = this.data.Resources) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) * this.settings.resourceHeight) + this.headerHeight + this.settings.footerHeight;
        if (this.settings.viewWeeks == true) {
            h += this.settings.weekBoxHeight;
        }
        h += 5;
        this.schedulerSVG.viewBox.baseVal.x = 0;
        this.schedulerSVG.viewBox.baseVal.y = 0;
        this.schedulerSVG.viewBox.baseVal.width = w / this.zoom;
        this.schedulerSVG.viewBox.baseVal.height = h / this.zoom;
        // this.schedulerSVG.setAttribute('x','0');
        // this.schedulerSVG.setAttribute('y','0');
        // this.schedulerSVG.setAttribute('height',h.toString());
        // this.schedulerSVG.setAttribute('width','100%');
        this.ratio = this.schedulerSVG.viewBox.baseVal.width / this.schedulerSVG.clientWidth;
        this.resourceFilteredCount = 0; //this.filteredResources.length;
        if (this.settings.groupFilter != 0) {
            this.resourceFilteredCount = this.data.Resources.filter(function (x) {
                return x.group == this.settings.groupFilter;
            }).length;
        }
        this.drawHeader();
        this.drawMonths();
        this.drawWeeks();
        this.drawTimeUnits();
        this.drawBackGroud();
        this.drawEvents();
        this.drawInfoUnits();
        this.drawResBg();
        // this.drawSplitter();
        this.initSplitter();
        this.drawItems();
        this.drawResources();
        var that = this;
        this.splitBar.addEventListener('mousedown', function (event) {
            that.splitterBarMouseDown(event);
        });
        if (this.settings.itemsLinks == true) {
            this.initLinks();
        }
        if (this.settings.drawLinks == true) {
            this.drawLinks();
        }
        if (this.settings.viewShifters == true) {
            var cdx = document.getElementById("shifter-dx");
            var step_1 = this.settings.shifterStep;
            var that_1 = this;
            if (cdx != null) {
                cdx.style.visibility = 'visible';
                cdx.addEventListener('click', function () {
                    that_1.shift(-step_1);
                });
            }
            var csx = document.getElementById("shifter-sx");
            if (csx != null) {
                csx.style.visibility = 'visible';
                csx.addEventListener('click', function () {
                    that_1.shift(step_1);
                });
            }
        }
    };
    Scheduler.prototype.svgMouseUp = function (event) {
        this.clearAction();
    };
    Scheduler.prototype.removeItem = function (id) {
        var _a;
        var scheduler = this;
        (_a = this.data.Resources) === null || _a === void 0 ? void 0 : _a.forEach(function (resource) {
            var _a;
            (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                if (item.Id == id) {
                    item.Modified = true;
                    item.Removed = true;
                    scheduler.clearItems();
                    scheduler.drawItems();
                    return;
                }
            });
        });
    };
    Scheduler.prototype.handleMouseMove = function (event) {
        var _a, _b;
        this.mpos.x = event.pageX;
        this.mpos.y = event.pageY;
        var offsets = (_b = (_a = document.getElementById('scheduler')) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : {
            x: 0,
            y: 0
        };
        ;
        this.schedulerMousePos.x = (this.mpos.x - offsets.x) * this.ratio;
        this.schedulerMousePos.y = (this.mpos.y - offsets.y) * this.ratio;
        var items = document.getElementById('scheduler-items');
        var transform = this.getTranslateValues(items);
        var mydate = this.settings.date;
        this.calendarMousePos.x = this.schedulerMousePos.x - transform.x - this.splitBarPos - 100;
        this.calendarMousePos.y = this.schedulerMousePos.y - transform.y;
        this.calendarMousePos.timeOffset = this.calendarMousePos.x / this.settings.timeWidth;
        this.calendarMousePos.resourceIndex = Math.floor((this.calendarMousePos.y - this.headerHeight) / this.settings.resourceHeight);
        this.calendarMousePos.date = new Date(mydate.getTime() + (this.calendarMousePos.timeOffset * 86400000) + (mydate.getTimezoneOffset() * 60000));
        if (this.action == 'linking') {
            this.linkItem();
        }
        else if (this.action == 'moving') {
            this.moveItem();
        }
        else if (this.action == 'sizing') {
            this.resizeItem();
        }
        else if (this.action == 'splitter') {
            this.splitArea();
        }
    };
    Scheduler.prototype.escapePressed = function () {
        var _a, _b, _c, _d, _e;
        if (this.action == 'moving') {
            this.element.setAttribute('x', (_a = this.element.getAttribute('data-x')) !== null && _a !== void 0 ? _a : '0');
            this.element.setAttribute('y', (_b = this.element.getAttribute('data-y')) !== null && _b !== void 0 ? _b : '0');
            (_c = this.element.querySelector('rect.item')) === null || _c === void 0 ? void 0 : _c.classList.remove('moving');
        }
        else if (this.action == 'sizing') {
            this.element.setAttribute('width', (_d = this.element.getAttribute('data-w')) !== null && _d !== void 0 ? _d : '0');
            (_e = this.element.querySelector('rect.item')) === null || _e === void 0 ? void 0 : _e.classList.remove('sizing');
        }
        else if (this.action == 'linking') {
            this.resetLinkLine();
        }
        this.action = '';
    };
    Scheduler.prototype.getModulo = function (value, step, min) {
        var modulo = (value - (min !== null && min !== void 0 ? min : 0)) % step;
        var correction = modulo > step / 2 ? step - modulo : -modulo;
        var result = value + correction;
        result = min != null && result < min ? min : result;
        return result;
    };
    Scheduler.prototype.moveItem = function () {
        var _a, _b;
        var x = parseFloat((_a = this.element.getAttribute('data-x')) !== null && _a !== void 0 ? _a : '0');
        var y = parseFloat((_b = this.element.getAttribute('data-y')) !== null && _b !== void 0 ? _b : '0');
        var variationx = Math.round(((this.mpos.x - this.actionMemoPos.x) * this.ratio) * 100) / 100;
        var variationy = Math.round(((this.mpos.y - this.actionMemoPos.y) * this.ratio) * 100) / 100;
        var newx = x + (variationx);
        var newy = y + (variationy);
        this.schedulerItems.append(this.element);
        this.element.setAttribute('x', newx.toString());
        if (this.settings.resourceChange) {
            this.element.setAttribute('y', newy.toString());
        }
        var datalink = this.element.getAttribute('data-link');
        if (datalink != null) {
            // this.updatePath(datalink);
        }
    };
    Scheduler.prototype.linkItem = function () {
        var line = document.getElementById('link-line');
        line === null || line === void 0 ? void 0 : line.setAttribute('x1', this.linkPoint.x.toString());
        line === null || line === void 0 ? void 0 : line.setAttribute('y1', this.linkPoint.y.toString());
        line === null || line === void 0 ? void 0 : line.setAttribute('x2', this.calendarMousePos.x.toString());
        line === null || line === void 0 ? void 0 : line.setAttribute('y2', (this.calendarMousePos.y - 3).toString());
    };
    Scheduler.prototype.resizeItem = function () {
        var _a;
        var variationx = Math.round(((this.mpos.x - this.actionMemoPos.x) * this.ratio) * 100) / 100;
        var w = parseFloat((_a = this.element.getAttribute('data-w')) !== null && _a !== void 0 ? _a : '0');
        var neww = w + (variationx);
        this.schedulerItems.append(this.element);
        this.element.setAttribute('width', neww.toString());
        var datalink = this.element.getAttribute('data-link');
        if (datalink != null) {
            // this.updatePath(datalink);
        }
    };
    Scheduler.prototype.splitArea = function () {
        var _a;
        var sidebar = document.getElementById('scheduler-sidebar');
        var w = parseFloat((_a = sidebar.getAttribute('data-w')) !== null && _a !== void 0 ? _a : '0');
        var variationw = Math.round(((this.mpos.x - this.actionMemoPos.x) * this.ratio) * 100) / 100;
        var neww = w + (variationw);
        if (neww > this.settings.sidebarMinWidth && neww < this.settings.sidebarMaxWidth)
            sidebar.setAttribute('width', neww.toString());
        //  let wrapper = document.getElementById('wrapper');
        //  wrapper?.setAttribute('transform','translate(' + neww.toString() + ',0)');
    };
    Scheduler.prototype.getTranslateValues = function (element) {
        if (!element) {
            return { x: 0, y: 0, z: 0 };
        }
        var style = window.getComputedStyle(element);
        var transform = style.transform;
        if (transform == null) {
            transform = 'matrix(1,0,0,1,0,0)';
        }
        var m = transform.substring(7, transform.length - 1);
        var values = m.split(',');
        var x = parseFloat(values[4]);
        var y = parseFloat(values[5]);
        if (transform === 'none' || typeof transform === 'undefined' || transform === null) {
            return {
                x: 0,
                y: 0,
                z: 0
            };
        }
        return {
            x: x,
            y: y,
            z: 0
        };
    };
    Scheduler.prototype.processData = function () {
        var _a;
        console.log('process data');
        if (!this.data.Resources)
            return;
        var date = this.settings.date;
        console.log('process data date:' + date);
        var scheduler = this;
        (_a = this.data.Resources) === null || _a === void 0 ? void 0 : _a.forEach(function (resource, ri) {
            if (resource.Items) {
                resource.Items.forEach(function (item, ii) {
                    var from = (date.getTime() / 60000) + (item.Offset);
                    var to = (date.getTime() / 60000) + parseInt(((item.Offset + item.Width)));
                    item.From = from;
                    item.To = to;
                    if (scheduler.calendar != null && scheduler.settings.calcEffort == true && item.Effort == undefined) {
                        var schedulerItem = new SchedulerItem2(scheduler, item, scheduler.calendar);
                        schedulerItem.From = from;
                        schedulerItem.Duration = to - from;
                        // let effort=scheduler.calendar.calcEffort(schedulerItem);
                        // item.Effort=effort;
                        // console.log('effort:'+item.Effort);
                    }
                    //  else item.Effort=item.Width;
                });
            }
        });
    };
    Scheduler.prototype.storeData = function () {
        if (this.settings.storeData) {
            localStorage.setItem('data', JSON.stringify(this.data));
        }
    };
    Scheduler.prototype.drawBackGroud = function () {
        var _this = this;
        var parent = document.getElementById('scheduler-background');
        if (parent) {
            var h = (this.settings.resourceHeight * this.data.Resources.length);
            var w = (this.settings.timeUnitsCount * this.settings.timeWidth);
            var y = this.headerHeight;
            var x = 0;
            var background = document.createElementNS('http://www.w3.org/2000/svg', "rect");
            background.setAttribute('x', '0');
            background.setAttribute('y', y.toString());
            background.setAttribute('width', w.toString());
            background.setAttribute('height', h.toString());
            background.setAttribute('transform', 'translate(0,0)');
            background.setAttribute('fill', 'white');
            background.classList.add('bg');
            parent.append(background);
            if (this.data.Resources) {
                this.data.Resources.forEach(function (resource, ri) {
                    var ly = (ri * _this.settings.resourceHeight) + _this.headerHeight;
                    var line = document.createElementNS('http://www.w3.org/2000/svg', "line");
                    line.setAttribute('x1', x.toString());
                    line.setAttribute('x2', w.toString());
                    line.setAttribute('y1', ly.toString());
                    line.setAttribute('y2', ly.toString());
                    line.setAttribute('class', "bg-hl");
                    parent === null || parent === void 0 ? void 0 : parent.append(line);
                });
                var rcount = this.data.Resources.length;
                var today = new Date();
                var _loop_1 = function (c) {
                    var hilight = false;
                    var dt = this_1.settings.date;
                    if (dt) {
                        var cdate_1 = new Date(dt.getTime() + (c * this_1.settings.timeUnitVal * 60 * 1000));
                        hilight = (cdate_1.getUTCDay() == 0) && this_1.settings.hilightSunday;
                        var saturday = (cdate_1.getUTCDay() == 6);
                        var ratio = 1;
                        if (this_1.calendar != null) {
                            if (this_1.calendar.reference > 0) {
                                ratio = this_1.calendar.getCapacity((cdate_1.getTime() / 60000) + 10, cdate_1.getUTCDay()) / this_1.calendar.reference;
                                if (saturday == true) {
                                    console.log('saturday ratio:' + ratio);
                                }
                                if (ratio > 1)
                                    ratio = 1;
                                if (ratio < 0)
                                    ratio = 0;
                            }
                        }
                        ratio = 1;
                        var ry = this_1.headerHeight;
                        var rx = (c * this_1.settings.timeWidth);
                        var rw = this_1.settings.timeWidth;
                        var rh = this_1.settings.resourceHeight * rcount;
                        var line = document.createElementNS('http://www.w3.org/2000/svg', "line");
                        line.setAttribute('x1', rx.toString());
                        line.setAttribute('x2', rx.toString());
                        line.setAttribute('y1', ry.toString());
                        line.setAttribute('y2', (ry + rh).toString());
                        line.setAttribute('class', "bg-vl");
                        parent === null || parent === void 0 ? void 0 : parent.append(line);
                        var box = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                        box.setAttribute('x', rx.toString());
                        box.setAttribute('y', ry.toString());
                        box.setAttribute('width', rw.toString());
                        box.setAttribute('height', rh.toString());
                        box.setAttribute('data-date', cdate_1.toUTCString());
                        box.classList.add('daybox-element');
                        if (hilight == true)
                            box.classList.add('sunday');
                        if (saturday == true)
                            box.classList.add('saturday');
                        parent.append(line);
                        parent.append(box);
                        var _loop_2 = function (rr) {
                            ry = this_1.headerHeight + (rr * this_1.settings.resourceHeight);
                            rx = (c * this_1.settings.timeWidth);
                            rw = this_1.settings.timeWidth * ratio;
                            rh = this_1.settings.resourceHeight;
                            var rect = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                            rect.setAttribute('x', rx.toString());
                            rect.setAttribute('y', ry.toString());
                            rect.setAttribute('width', rw.toString());
                            rect.setAttribute('height', rh.toString());
                            rect.setAttribute('data-date', cdate_1.toUTCString());
                            rect.setAttribute('data-res', this_1.data.Resources[rr].id);
                            rect.setAttribute('class', 'box-element');
                            rect.addEventListener('click', function (ev) {
                                if (typeof gridMouseClick == 'function') {
                                    gridMouseClick(ev, cdate_1);
                                }
                            });
                            var that = this_1;
                            rect.addEventListener('mouseover', function (ev) {
                                if (typeof gridMouseOver == 'function') {
                                    var i = that.getSum(ev.target);
                                    gridMouseOver(ev, i);
                                }
                            });
                            parent.append(rect);
                        };
                        for (var rr = 0; rr < rcount; rr++) {
                            _loop_2(rr);
                        }
                    }
                };
                var this_1 = this;
                for (var c = 0; c < this.settings.timeUnitsCount; c++) {
                    _loop_1(c);
                }
            }
        }
    };
    Scheduler.prototype.filterItems = function (filter) {
        var items = document.querySelectorAll('.svg-item');
        items.forEach(function (item) {
            item.style.opacity = '1';
            item.classList.remove('selected');
            var filterlower = filter.toLowerCase();
            if (filterlower != '') {
                var data = item.querySelector('text').getAttribute('data');
                var ref = item.getAttribute('data-ref');
                var key = item.getAttribute('data-key');
                var show = true;
                if (data != undefined) {
                    show = data.toLowerCase().startsWith(filterlower);
                }
                else
                    show = false;
                if (key != undefined) {
                    show = show || key.toLowerCase().startsWith(filterlower);
                }
                ;
                if (ref != undefined) {
                    show = show || ref.toLowerCase().startsWith(filterlower);
                }
                if (show) {
                    item.style.opacity = '1';
                    item.classList.add('selected');
                }
                else {
                    item.style.opacity = '0.2';
                    item.classList.remove('selected');
                }
            }
        });
    };
    Scheduler.prototype.drawResBg = function () {
        var parent = document.getElementById('scheduler-resources');
        var resources = this.data.Resources || [];
        var h = this.settings.resourceHeight * resources.length;
        var w = this.settings.resourceWidth;
        var y = this.headerHeight;
        var x = 0;
        var clip = document.getElementById('clip-res');
        if (clip == null) {
            var clip_1 = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
            clip_1.setAttribute('id', 'clip-res');
            var box = document.createElementNS('http://www.w3.org/2000/svg', "rect");
            box.setAttribute('x', x.toString());
            box.setAttribute('y', y.toString());
            box.setAttribute('width', '100%');
            box.setAttribute('height', '100%');
            box.setAttribute('id', 'clip-res-rect');
            clip_1.append(box);
            parent === null || parent === void 0 ? void 0 : parent.append(clip_1);
        }
        var rect = document.createElementNS('http://www.w3.org/2000/svg', "rect");
        rect.setAttribute('x', x.toString());
        rect.setAttribute('y', y.toString());
        rect.setAttribute('width', '100%');
        rect.setAttribute('height', '100%');
        rect.setAttribute('class', 'sb-rbg');
        rect.setAttribute('fill', 'transparent');
        rect.setAttribute('clip-path', 'Url(#clip-res)');
        parent === null || parent === void 0 ? void 0 : parent.append(rect);
        h = this.headerHeight;
        w = this.settings.resourceWidth;
        y = 0;
        x = 0;
        var svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
        svg.setAttribute('x', x.toString());
        svg.setAttribute('y', y.toString());
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', h.toString());
        svg.setAttribute('class', 'sb-hbg');
        var elem = document.createElementNS('http://www.w3.org/2000/svg', "rect");
        elem.setAttribute('x', x.toString());
        elem.setAttribute('y', y.toString());
        elem.setAttribute('width', '100%');
        elem.setAttribute('height', h.toString());
        elem.setAttribute('class', 'sb-hbg');
        var text = document.createElementNS('http://www.w3.org/2000/svg', "text");
        text.setAttribute('x', (x + 2).toString());
        text.setAttribute('y', (y - 2).toString());
        text.setAttribute('class', 'resource-header-text');
        text.innerHTML = this.settings.resHeaderText;
        elem.append(text);
        svg.append(elem);
        parent === null || parent === void 0 ? void 0 : parent.append(svg);
    };
    Scheduler.prototype.initSplitter = function () {
        var _a;
        var splitbarpos = parseFloat((_a = localStorage.getItem('splitbarpos')) !== null && _a !== void 0 ? _a : '0');
        splitbarpos = this.settings.splitBarinitPos;
        var sh = (this.settings.resourceHeight * this.data.Resources.length) + this.headerHeight;
        var sw = this.settings.splitterWidth;
        var sy = 0;
        var sx = splitbarpos;
        var wrapper = document.getElementById('wrapper');
        //  wrapper?.setAttribute('transform','translate(' + (splitbarpos+sw+0.2) + ',0)');
        var splitter = document.getElementById('scheduler-splitter');
        // const toggledx = document.querySelector('.toggle-dx');
        // const togglesx = document.querySelector('.toggle-sx');
        // toggledx.setAttribute('cy',this.headerHeight.toString());
        // togglesx.setAttribute('cy',this.headerHeight.toString());
        // let that=this;
        // toggledx.addEventListener('click', function(){
        //     that.setSplitBarPos(that.settings.sidebarMaxWidth)
        // });
        // togglesx.addEventListener('click',  function(){
        //     that.setSplitBarPos(that.settings.sidebarMinWidth)
        // });
        if (splitter)
            this.splitBar = splitter;
        var sidebar = document.getElementById('scheduler-sidebar');
        sidebar.setAttribute('width', sx.toString());
        // splitter.addEventListener('mousedown', function(event) {
        //     that.splitterBarMouseDown(event);
        // });
        // splitter.addEventListener('mouseup', function(event) {
        //     that.splitterBarMouseUp(event);
        // });
    };
    Scheduler.prototype.drawResources = function () {
        var _this = this;
        var _a;
        var sidebar = document.getElementById('scheduler-sidebar');
        var resources = document.getElementById('scheduler-resources');
        var h = this.headerHeight;
        var w = (this.settings.timeUnitsCount * this.settings.timeWidth);
        var y = 0;
        var x = 0;
        var splitbarpos = parseFloat((_a = localStorage.getItem('splitbarpos')) !== null && _a !== void 0 ? _a : '0');
        if (splitbarpos != null) {
            if ((splitbarpos > this.settings.resourceWidth) || (splitbarpos < this.settings.resCollapsedWidth))
                splitbarpos = this.settings.resourceWidth;
        }
        else {
            splitbarpos = this.settings.resourceWidth;
        }
        sidebar === null || sidebar === void 0 ? void 0 : sidebar.setAttribute('width', splitbarpos.toString());
        var count = 0;
        if (this.data.Resources) {
            //get text lenght
            this.data.Resources.forEach(function (resource, ri) {
            });
            this.data.Resources.forEach(function (resource, ri) {
                var _a, _b;
                var y = (count * _this.settings.resourceHeight) + _this.headerHeight;
                var ty = ((count + 1) * _this.settings.resourceHeight) + _this.headerHeight - 2;
                var x = 1;
                var rsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                rsvg.setAttribute('x', '0');
                rsvg.setAttribute('y', y.toString());
                rsvg.setAttribute('width', '100%');
                rsvg.setAttribute('height', _this.settings.resourceHeight.toString());
                rsvg.setAttribute('font-size', _this.settings.resourceHeight.toString());
                var clipid = 'clip-res-' + Math.floor(Math.random() * 10000000);
                var clip = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
                clip.setAttribute('x', '0');
                clip.setAttribute('y', '0');
                clip.setAttribute('width', '100%');
                clip.setAttribute('height', '100%');
                clip.setAttribute('id', clipid);
                var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                rect.setAttribute('x', '0');
                rect.setAttribute('y', '0');
                rect.setAttribute('width', '100%');
                rect.setAttribute('height', '100%');
                clip.append(rect);
                rsvg === null || rsvg === void 0 ? void 0 : rsvg.append(clip);
                var res = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                res.setAttribute('x', '0');
                res.setAttribute('y', _this.settings.resPadding.toString());
                res.setAttribute('width', '100%');
                res.setAttribute('height', 'calc(100% - ' + (_this.settings.resPadding * 2).toString() + 'px)');
                res.setAttribute('id', resource.Id.toString());
                res.setAttribute('class', 'resource');
                if (resource.Classes) {
                    resource.Classes.split(' ').forEach(function (c) {
                        if (c != '')
                            res.classList.add(c);
                    });
                }
                res.setAttribute('clip-path', 'Url(#' + clipid + ')');
                if (_this.settings.resRoundRect > 0)
                    res.setAttribute('rx', _this.settings.resRoundRect.toString());
                res.addEventListener('click', function (event) {
                    _this.resourceClick(event, { resource: resource });
                    if (typeof resourceClick === 'function') {
                        resourceClick(event, resource);
                    }
                });
                rsvg === null || rsvg === void 0 ? void 0 : rsvg.append(res);
                x = 2;
                if (resource.Image && _this.settings.resourceImages) {
                    var imgdim = _this.settings.resourceHeight * 0.8;
                    var imgspace = _this.settings.resourceHeight * 0.1;
                    var clipid_1 = 'clip-' + Math.floor(Math.random() * 10000000);
                    var imgsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    imgsvg.setAttribute('x', x.toString());
                    imgsvg.setAttribute('y', '10%');
                    imgsvg.setAttribute('height', imgdim.toString());
                    imgsvg.setAttribute('width', imgdim.toString());
                    imgsvg.setAttribute('class', 'resource-image');
                    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    circle.setAttribute('cx', (imgdim / 2).toString());
                    circle.setAttribute('cy', '50%');
                    circle.setAttribute('r', (imgdim / 2).toString());
                    var clip_2 = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
                    clip_2.setAttribute('id', clipid_1);
                    clip_2.append(circle);
                    imgsvg.append(clip_2);
                    var rimage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                    rimage.setAttribute('x', '0');
                    rimage.setAttribute('y', '0');
                    rimage.setAttribute('width', '100%');
                    rimage.setAttribute('height', '100%');
                    rimage.setAttribute('href', (_a = resource.Image) !== null && _a !== void 0 ? _a : '');
                    rimage.setAttribute('clip-path', 'Url(#' + clipid_1 + ')');
                    rimage.setAttribute('class', 'resource-image');
                    imgsvg === null || imgsvg === void 0 ? void 0 : imgsvg.append(rimage);
                    rsvg.append(imgsvg);
                    x += imgdim + imgspace;
                }
                var restext = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                restext.setAttribute('x', x.toString());
                restext.setAttribute('y', '55%');
                restext.setAttribute('class', "resource-text");
                restext.setAttribute('font-size', "35%");
                restext.setAttribute('dominant-baseline', 'middle');
                restext.setAttribute('clip-path', 'Url(#' + clipid + ')');
                restext.innerHTML = resource.Name;
                restext.addEventListener('click', function (event) {
                    _this.resourceClick(event, { resource: resource });
                    if (typeof resourceClick === 'function') {
                        resourceClick(event, { resource: resource });
                    }
                });
                resources.append(rsvg);
                rsvg === null || rsvg === void 0 ? void 0 : rsvg.append(restext);
                x += restext.getBBox().width + 6;
                var icndim = _this.settings.resourceHeight * 0.4;
                var halficn = icndim / 2;
                (_b = resource.Icons) === null || _b === void 0 ? void 0 : _b.forEach(function (icon, ii) {
                    if (icon.Name) {
                        var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
                        use.setAttribute('href', '#' + icon.Name);
                        use.setAttribute('x', x.toString());
                        use.setAttribute('y', 'calc(50% - ' + halficn.toString() + 'px)');
                        use.setAttribute('height', icndim.toString());
                        use.setAttribute('width', icndim.toString());
                        use.setAttribute('class', 'resource-icon');
                        if (icon.Classes)
                            use.setAttribute('class', 'resource-icon ' + icon.Classes);
                        rsvg.append(use);
                        x += icndim + 4;
                    }
                });
                count++;
            });
        }
    };
    Scheduler.prototype.drawInfoUnits = function () {
        if (this.settings.viewInfoElements) {
            var parent_1 = document.getElementById('scheduler-header');
            var dt = this.settings.date;
            if (dt) {
                var increment = 60 * 1000 * this.settings.timeUnitVal; //one day = 864000000
                var _loop_3 = function (i) {
                    var cdate = new Date(dt.getTime() + (i * increment));
                    var shift = 0;
                    this_2.data.Calendar.Exceptions.forEach(function (element) {
                        var dtfrom = new Date(element.DateFrom);
                        var dtto = new Date(element.DateTo);
                        dtto = new Date(dtto.getTime() + (60 * 1000 * 1440));
                        if (cdate >= dtfrom && cdate <= dtto) {
                            if ((element.Day > -1) && (element.Day < 7) && cdate.getDay() == element.Day) {
                                if (element.Capacity == 480)
                                    shift = 1;
                                if (element.Capacity == 960)
                                    shift = 2;
                                if (element.Capacity == 1440)
                                    shift = 3;
                            }
                            if (element.Day == -1) {
                                if (element.Capacity == -2)
                                    shift = -2;
                                if (element.Capacity == -1)
                                    shift = -1;
                                if (element.Capacity == 0)
                                    shift = -1;
                                if (element.Capacity == 480)
                                    shift = 1;
                                if (element.Capacity == 960)
                                    shift = 2;
                                if (element.Capacity == 1440)
                                    shift = 3;
                            }
                        }
                    });
                    var h = this_2.settings.infoElementHeight;
                    var w = this_2.settings.timeWidth;
                    var y = this_2.headerHeight - this_2.settings.timeElementHeight - this_2.settings.infoElementHeight;
                    var x = (i * this_2.settings.timeWidth);
                    var elem = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                    elem.setAttribute('x', x.toString());
                    elem.setAttribute('y', y.toString());
                    elem.setAttribute('width', w.toString());
                    elem.setAttribute('height', h.toString());
                    elem.setAttribute('fill', 'transparent');
                    elem.classList.add('info-element');
                    parent_1.append(elem);
                    var feriale = cdate.getDay() != 0 && cdate.getDay() != 6 && shift >= 0;
                    if (((feriale) || (shift > 0))) {
                        var shiftssvg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
                        shiftssvg.setAttribute('x', (x + 2).toString());
                        shiftssvg.setAttribute('y', (y + 1).toString());
                        shiftssvg.setAttribute('width', '40');
                        shiftssvg.setAttribute('height', (h - 2).toString());
                        shiftssvg.setAttribute('viewBox', '0 0 300 100');
                        shiftssvg.setAttribute('preserveAspectRatio', 'none');
                        shiftssvg.classList.add('shift-info');
                        var poly1 = document.createElementNS('http://www.w3.org/2000/svg', "polygon");
                        poly1.setAttribute('points', '50,0 0,100 100,100 50,0');
                        poly1.setAttribute('stroke', 'black');
                        poly1.setAttribute('fill', 'transparent');
                        poly1.setAttribute('opacity', '0.5');
                        poly1.setAttribute('stroke-width', '3');
                        var poly2 = document.createElementNS('http://www.w3.org/2000/svg', "polygon");
                        poly2.setAttribute('points', '150,0 100,100 200,100 150,0');
                        poly2.setAttribute('stroke', 'black');
                        poly2.setAttribute('fill', 'transparent');
                        poly2.setAttribute('opacity', '0.5');
                        poly2.setAttribute('stroke-width', '3');
                        var poly3 = document.createElementNS('http://www.w3.org/2000/svg', "polygon");
                        poly3.setAttribute('points', '250,0 200,100 300,100 250,0');
                        poly3.setAttribute('stroke', 'black');
                        poly3.setAttribute('fill', 'transparent');
                        poly3.setAttribute('opacity', '0.5');
                        poly3.setAttribute('stroke-width', '3');
                        if (((feriale) && (shift == 0)) || shift == 1) {
                            poly1.setAttribute('fill', '#364A6E');
                            if (shift >= 1)
                                poly1.setAttribute('fill', '#b12531');
                        }
                        if (((feriale) && (shift == 0)) || shift == 2) {
                            poly2.setAttribute('fill', '#364A6E');
                            if (shift >= 2)
                                poly2.setAttribute('fill', '#b12531');
                        }
                        if (shift == 3) {
                            poly3.setAttribute('fill', '#b12531');
                            //  if (shift>=2) $(poly2).attr('fill','#b12531');
                        }
                        shiftssvg.append(poly1);
                        shiftssvg.append(poly2);
                        shiftssvg.append(poly3);
                        parent_1.append(shiftssvg);
                    }
                };
                var this_2 = this;
                for (var i = 0; i < this.settings.timeUnitsCount; i++) {
                    _loop_3(i);
                }
            }
        }
    };
    Scheduler.prototype.refreshItems = function () {
        this.clearItems();
        this.drawItems();
        this.drawLinks();
    };
    Scheduler.prototype.hideItems = function () {
        this.schedulerItems.querySelectorAll('.svg-item').forEach(function (item) {
            item.style.display = 'none';
        });
        this.schedulerItems.querySelectorAll('.link').forEach(function (item) {
            item.style.display = 'none';
        });
    };
    Scheduler.prototype.showItems = function () {
        this.schedulerItems.querySelectorAll('.svg-item').forEach(function (item) {
            item.style.display = 'block';
        });
        this.schedulerItems.querySelectorAll('.link').forEach(function (item) {
            item.style.display = 'block';
        });
    };
    Scheduler.prototype.clearItems = function () {
        this.schedulerItems.querySelectorAll('.svg-item').forEach(function (item) {
            item.remove();
        });
        this.schedulerItems.querySelectorAll('.link').forEach(function (link) {
            link.remove();
        });
    };
    Scheduler.prototype.drawItems = function () {
        var _this = this;
        var count = 0;
        var that = this;
        if (this.data.Resources) {
            this.data.Resources.forEach(function (resource, ri) {
                if (resource.Items) {
                    resource.Items.forEach(function (item, ii) {
                        _this.drawItem(item, ri);
                    });
                }
            });
        }
    };
    Scheduler.prototype.drawItem = function (item, ri) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        if (!item.Removed == true) {
            var guid = Math.floor(Math.random() * 10000000);
            var maskid = 'mask-' + guid;
            var clipid = 'clip-' + guid;
            var nopadding = (_b = (_a = item.Classes) === null || _a === void 0 ? void 0 : _a.includes('nopadding')) !== null && _b !== void 0 ? _b : false;
            var arrow = (this.settings.gStyle === 'arrow' || ((_d = (_c = item.Classes) === null || _c === void 0 ? void 0 : _c.includes('arrow')) !== null && _d !== void 0 ? _d : false));
            var gantt = false;
            var mask = arrow || gantt;
            var roundrect = (this.settings.gStyle === 'round-rect' || ((_f = (_e = item.Classes) === null || _e === void 0 ? void 0 : _e.includes('round-rect')) !== null && _f !== void 0 ? _f : false));
            var circle = (this.settings.gStyle === 'circle' || ((_h = (_g = item.Classes) === null || _g === void 0 ? void 0 : _g.includes('circle')) !== null && _h !== void 0 ? _h : false));
            var h = this.settings.resourceHeight;
            var y = (ri * this.settings.resourceHeight) + this.headerHeight;
            var padding = 0;
            if (!nopadding)
                padding = this.settings.itemsPadding;
            var height = 'calc(100% - ' + (padding * 2) + 'px)';
            var x = (item.Offset * this.settings.timeWidth) / this.settings.timeUnitVal;
            var w = (item.Width * this.settings.timeWidth) / this.settings.timeUnitVal;
            var ItemSVG_1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            ItemSVG_1.setAttribute('id', item.Id.toString());
            ItemSVG_1.setAttribute('x', x.toString());
            ItemSVG_1.setAttribute('y', y.toString());
            ItemSVG_1.setAttribute('width', w.toString());
            ItemSVG_1.setAttribute('height', h.toString());
            ItemSVG_1.setAttribute('font-size', h.toString());
            var classes = 'svg-item';
            if (this.settings.canMoveItems && !((_k = (_j = item.Classes) === null || _j === void 0 ? void 0 : _j.includes('no-drag')) !== null && _k !== void 0 ? _k : false))
                classes += ' draggable';
            if (this.settings.canResizeItems && (!((_m = (_l = item.Classes) === null || _l === void 0 ? void 0 : _l.includes('no-resize')) !== null && _m !== void 0 ? _m : false)))
                classes += ' sizable';
            ItemSVG_1.setAttribute('class', classes);
            ItemSVG_1.setAttribute('data-id', item.Id.toString());
            ItemSVG_1.setAttribute('data-res', ri.toString());
            ItemSVG_1.setAttribute('data-ref', (_o = item.Reference) !== null && _o !== void 0 ? _o : '');
            var itemrect_1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            itemrect_1.setAttribute('x', '0');
            itemrect_1.setAttribute('y', padding.toString());
            itemrect_1.setAttribute('width', '100%');
            itemrect_1.setAttribute('height', height);
            itemrect_1.style.transition = '0.1';
            itemrect_1.setAttribute('stroke', 'transparent');
            itemrect_1.setAttribute('stroke-width', '0.2');
            itemrect_1.classList.add('item');
            (_p = item.Classes) === null || _p === void 0 ? void 0 : _p.split(' ').forEach(function (c) {
                if (c)
                    itemrect_1.classList.add(c);
            });
            if (roundrect && !nopadding) {
                itemrect_1.setAttribute('rx', this.settings.roundRectRadius.toString());
            }
            if (circle) {
                itemrect_1.setAttribute('rx', (h / 2).toString());
            }
            if (typeof item.Color1 !== "undefined") {
                if (item.Color1 !== "" && item.Color1 !== null) {
                    itemrect_1.classList.add('custom-color');
                    itemrect_1.setAttribute('fill', item.Color1);
                }
            }
            if (typeof item.Color2 !== "undefined") {
                if (item.Color2 !== "" && item.Color2 !== null) {
                    itemrect_1.setAttribute('stroke', item.Color2);
                }
            }
            var cliprect = itemrect_1.cloneNode(false);
            cliprect.classList.value = '';
            var clip = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
            clip.setAttribute('id', clipid);
            clip.append(cliprect);
            ItemSVG_1.append(clip);
            ItemSVG_1.append(itemrect_1);
            var imgdim_1 = this.settings.resourceHeight * 0.35;
            var imgspace_1 = this.settings.resourceHeight * 0.1;
            var imgX_1 = imgspace_1;
            (_q = item.Icons) === null || _q === void 0 ? void 0 : _q.forEach(function (icon, ii) {
                if (icon.Name) {
                    var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
                    use.setAttribute('href', '#' + icon.Name);
                    use === null || use === void 0 ? void 0 : use.setAttribute('x', imgX_1.toString());
                    use === null || use === void 0 ? void 0 : use.setAttribute('y', '50%');
                    use === null || use === void 0 ? void 0 : use.setAttribute('height', imgdim_1.toString());
                    use === null || use === void 0 ? void 0 : use.setAttribute('width', imgdim_1.toString());
                    use === null || use === void 0 ? void 0 : use.setAttribute('class', 'item-icon');
                    if (icon.Classes)
                        use === null || use === void 0 ? void 0 : use.setAttribute('class', 'item-icon ' + icon.Classes);
                    ItemSVG_1.append(use);
                    imgX_1 += imgdim_1 + imgspace_1;
                }
            });
            if (this.settings.progressBar == true) {
                if ((item.Completion != null) && (item.Completion != undefined)) {
                    var progressGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                    progressGroup.setAttribute('class', 'progressbar');
                    var pback = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    pback.setAttribute('x', '0');
                    pback.setAttribute('y', '80%');
                    pback.setAttribute('width', '100%');
                    pback.setAttribute('height', 'calc(20% - ' + padding.toString() + 'px)');
                    pback.setAttribute('class', 'progress-back');
                    pback.setAttribute('fill', 'white');
                    pback.setAttribute('opacity', '0.2');
                    pback.setAttribute('clip-path', 'url(#' + clipid + ')');
                    if (mask)
                        pback.setAttribute('mask', 'url(#' + maskid + ')');
                    progressGroup.append(pback);
                    if ((item.Completion > 0) && (item.Completion <= 100)) {
                        var pbfill = 'black';
                        if (this.settings.progressBarAnimation == true && item.Completion < 100)
                            pbfill = 'url(#progress-pattern)';
                        var completion = 0;
                        completion = item.Completion;
                        var pbar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                        pbar.setAttribute('x', '0');
                        pbar.setAttribute('y', '80%');
                        pbar.setAttribute('width', 'calc(' + completion + '%)');
                        pbar.setAttribute('height', 'calc(20% - ' + padding.toString() + 'px)');
                        pbar.setAttribute('class', 'progress-bar');
                        pbar.setAttribute('fill', pbfill);
                        pbar.setAttribute('opacity', '0.3');
                        pbar.setAttribute('clip-path', 'url(#' + clipid + ')');
                        if (mask)
                            pbar.setAttribute('mask', 'url(#' + maskid + ')');
                        progressGroup.append(pbar);
                    }
                    ItemSVG_1.append(progressGroup);
                }
            }
            if (this.settings.canResizeItems == true) {
                //  const resgroup=document.createElementNS('http://www.w3.org/2000/svg','g');
                //  resgroup.setAttribute('class','resize-area');
                var resize = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                resize.setAttribute('x', 'calc(100% - 10px)');
                resize.setAttribute('y', '0');
                resize.setAttribute('width', '10');
                resize.setAttribute('height', '100%');
                resize.setAttribute('class', 'resize');
                resize.setAttribute('fill', 'transparent');
                resize.style.cursor = 'ew-resize';
                var l1y1 = '15%';
                var l2y1 = '15%';
                var l1y2 = '85%';
                var l2y2 = '85%';
                if (arrow) {
                    l1y1 = '45%';
                    l2y1 = '38%';
                    l1y2 = '55%';
                    l2y2 = '62%';
                }
                var line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line1.setAttribute('x1', 'calc(100% - 4px)');
                line1.setAttribute('x2', 'calc(100% - 4px)');
                line1.setAttribute('y1', l1y1);
                line1.setAttribute('y2', l1y2);
                line1.setAttribute('class', 'resize-line');
                line1.setAttribute('stroke-width', '1');
                line1.setAttribute('stroke', 'white');
                var line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line2.setAttribute('x1', 'calc(100% - 6px)');
                line2.setAttribute('x2', 'calc(100% - 6px)');
                line2.setAttribute('y1', l2y1);
                line2.setAttribute('y2', l2y2);
                line2.setAttribute('class', 'resize-line');
                line2.setAttribute('stroke-width', '1');
                line2.setAttribute('stroke', 'white');
                ItemSVG_1.append(line1);
                ItemSVG_1.append(line2);
                ItemSVG_1.append(resize);
                // ItemSVG.append(resgroup);
            }
            if (item.ViewInfo == true) {
                var mysize = this.settings.infoElementSize;
                var info = void 0;
                if (arrow) {
                    info = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    info.setAttribute('x', '0');
                    info.setAttribute('y', '0');
                    info.setAttribute('width', mysize.toString());
                    info.setAttribute('height', mysize.toString());
                    info.setAttribute('mask', 'url(#' + maskid + ')');
                }
                else {
                    info = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                    info.setAttribute('points', '0,0 0,' + mysize.toString() + ' ' + mysize.toString() + ',0 0,0');
                }
                info.setAttribute('fill', 'black');
                info.setAttribute('opacity', '0.5');
                info.setAttribute('class', 'additional-info');
                info.setAttribute('clip-path', 'url(#' + clipid + ')');
                ItemSVG_1.append(info);
            }
            if (this.settings.itemsText) {
                var x_1 = 4;
                if (arrow)
                    x_1 += (h / 2);
                var itemtext = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                itemtext.setAttribute('x', x_1.toString());
                itemtext.setAttribute('y', '15%');
                itemtext.setAttribute('font-size', '30%');
                itemtext.setAttribute('dominant-baseline', 'hanging');
                itemtext.setAttribute('class', 'item-text');
                itemtext.setAttribute('clip-path', 'url(#' + clipid + ')');
                itemtext.innerHTML = (_r = item.Text) !== null && _r !== void 0 ? _r : '';
                ItemSVG_1.append(itemtext);
                var itemtext2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                itemtext2.setAttribute('x', x_1.toString());
                itemtext2.setAttribute('y', '50%');
                itemtext2.setAttribute('font-size', '25%');
                itemtext2.setAttribute('dominant-baseline', 'hanging');
                itemtext2.setAttribute('class', 'item-text2');
                itemtext2.setAttribute('clip-path', 'url(#' + clipid + ')');
                itemtext2.innerHTML = (_s = item.Description) !== null && _s !== void 0 ? _s : '';
                ItemSVG_1.append(itemtext2);
            }
            if (arrow) {
                var mask_1 = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
                mask_1.setAttribute('id', maskid);
                var maskrect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                maskrect.setAttribute('x', '0');
                maskrect.setAttribute('y', '0');
                maskrect.setAttribute('width', 'calc(100% - ' + h / 2 + 'px)');
                maskrect.setAttribute('height', '100%');
                maskrect.setAttribute('fill', 'white');
                var square1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                square1.setAttribute('x', 'calc(100%)');
                square1.setAttribute('y', (h / 2).toString());
                square1.setAttribute('width', h.toString());
                square1.setAttribute('height', '100%');
                square1.setAttribute('fill', 'white');
                square1.setAttribute('transform', 'rotate(135)');
                square1.setAttribute('transform-origin', 'calc(100%) calc(50%)');
                var square2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                square2.setAttribute('x', (-h / 2).toString());
                square2.setAttribute('y', (h / 2).toString());
                square2.setAttribute('width', h.toString());
                square2.setAttribute('height', h.toString());
                square2.setAttribute('fill', 'black');
                square2.setAttribute('transform', 'rotate(45)');
                square2.setAttribute('transform-origin', h / 2 + ' ' + h / 2);
                mask_1.append(maskrect);
                mask_1.append(square1);
                mask_1.append(square2);
                itemrect_1.setAttribute('mask', 'url(#' + maskid + ')');
                ItemSVG_1.append(mask_1);
            }
            if (gantt) {
                var mask_2 = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
                mask_2.setAttribute('id', maskid);
                var maskrect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                maskrect.setAttribute('x', '0');
                maskrect.setAttribute('y', '0');
                maskrect.setAttribute('width', '100%');
                maskrect.setAttribute('height', '100%');
                maskrect.setAttribute('fill', 'white');
                var maskrect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                maskrect2.setAttribute('x', '20');
                maskrect2.setAttribute('y', 'calc(100% - 20px)');
                maskrect2.setAttribute('width', 'calc(100% - 40px)');
                maskrect2.setAttribute('height', '20');
                maskrect2.setAttribute('fill', 'black');
                var maskrect3 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                maskrect3.setAttribute('x', '20');
                maskrect3.setAttribute('y', 'calc(100% - 20px)');
                maskrect3.setAttribute('width', '40');
                maskrect3.setAttribute('height', '40');
                maskrect3.setAttribute('fill', 'black');
                maskrect3.setAttribute('transform', 'rotate(50)');
                maskrect3.setAttribute('transform-origin', '20 calc(100% - 20px)');
                var maskrect4 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                maskrect4.setAttribute('x', 'calc(100% - 20px)');
                maskrect4.setAttribute('y', 'calc(100% - 20px)');
                maskrect4.setAttribute('width', '40');
                maskrect4.setAttribute('height', '40');
                maskrect4.setAttribute('fill', 'black');
                maskrect4.setAttribute('transform', 'rotate(40)');
                maskrect4.setAttribute('transform-origin', 'calc(100% - 20px) calc(100% - 20px)');
                mask_2.append(maskrect);
                mask_2.append(maskrect2);
                mask_2.append(maskrect3);
                mask_2.append(maskrect4);
                ItemSVG_1.append(mask_2);
                itemrect_1.setAttribute('mask', 'url(#' + maskid + ')');
            }
            var that_2 = this;
            ItemSVG_1.addEventListener('mousedown', function (event) {
                that_2.itemMouseDown(event, { item: item, element: this });
            });
            ItemSVG_1.addEventListener('mouseup', function (event) {
                that_2.itemMouseUp(event, { item: item, element: this });
            });
            ItemSVG_1.addEventListener('click', function (event) {
                that_2.itemClick(event, { item: item, element: this });
                if (typeof taskClick === 'function') {
                    taskClick(event, item);
                }
                ;
            });
            ItemSVG_1.addEventListener('mouseenter', function (event) {
                that_2.itemOver(event, { item: item });
            });
            ItemSVG_1.addEventListener('mouseleave', function (event) {
                that_2.itemOut(event, { item: item, element: this });
            });
            ItemSVG_1.addEventListener('drop', function (event) {
                that_2.dropOnElement(event, { item: item, element: this });
            });
            ItemSVG_1.addEventListener('dragover', function (event) {
                that_2.dragOverElement(event, { item: item, element: this });
            });
            this.schedulerItems.append(ItemSVG_1);
        }
    };
    Scheduler.prototype.initLinks = function () {
        var _this = this;
        var _a, _b, _c, _d, _e;
        if (this.settings.itemsLinks == true) {
            this.itemConnPoint1 = document.createElementNS('http://www.w3.org/2000/svg', "circle");
            this.itemConnPoint1.setAttribute('cx', '0');
            this.itemConnPoint1.setAttribute('cx', '0');
            this.itemConnPoint1.setAttribute('cy', '0');
            this.itemConnPoint1.setAttribute('r', '5');
            this.itemConnPoint1.setAttribute('fill', 'white');
            this.itemConnPoint1.setAttribute('stroke', '#00ff00');
            this.itemConnPoint1.setAttribute('class', 'c1 link-point');
            this.itemConnPoint1.setAttribute('stroke-width', '1');
            this.itemConnPoint2 = document.createElementNS('http://www.w3.org/2000/svg', "circle");
            this.itemConnPoint2.setAttribute('cx', '0');
            this.itemConnPoint2.setAttribute('cy', '0');
            this.itemConnPoint2.setAttribute('r', '5');
            this.itemConnPoint2.setAttribute('fill', 'white');
            this.itemConnPoint2.setAttribute('stroke', '#00ff00');
            this.itemConnPoint2.setAttribute('class', 'c2 link-point');
            this.itemConnPoint2.setAttribute('stroke-width', '1');
            this.itemConnPoint3 = document.createElementNS('http://www.w3.org/2000/svg', "circle");
            this.itemConnPoint3.setAttribute('cx', '0');
            this.itemConnPoint3.setAttribute('cy', '0');
            this.itemConnPoint3.setAttribute('r', '5');
            this.itemConnPoint3.setAttribute('fill', 'white');
            this.itemConnPoint3.setAttribute('stroke', '#00ff00');
            this.itemConnPoint3.setAttribute('class', 'c3 link-point');
            this.itemConnPoint3.setAttribute('stroke-width', '1');
            this.itemConnPoint4 = document.createElementNS('http://www.w3.org/2000/svg', "circle");
            this.itemConnPoint4.setAttribute('cx', '0');
            this.itemConnPoint4.setAttribute('cy', '0');
            this.itemConnPoint4.setAttribute('r', '5');
            this.itemConnPoint4.setAttribute('fill', 'white');
            this.itemConnPoint4.setAttribute('stroke', '#00ff00');
            this.itemConnPoint4.setAttribute('class', 'c4 link-point');
            this.itemConnPoint4.setAttribute('stroke-width', '1');
            this.connLine = document.createElementNS('http://www.w3.org/2000/svg', "line");
            this.connLine.setAttribute('x1', '0');
            this.connLine.setAttribute('y1', '0');
            this.connLine.setAttribute('x2', '0');
            this.connLine.setAttribute('y2', '0');
            this.connLine.setAttribute('stroke-width', '1');
            this.connLine.setAttribute('id', 'link-line');
            this.connLine.setAttribute('stroke', '#00ff00');
            (_a = this.schedulerItems) === null || _a === void 0 ? void 0 : _a.append(this.connLine);
            (_b = this.schedulerItems) === null || _b === void 0 ? void 0 : _b.append(this.itemConnPoint1);
            (_c = this.schedulerItems) === null || _c === void 0 ? void 0 : _c.append(this.itemConnPoint2);
            (_d = this.schedulerItems) === null || _d === void 0 ? void 0 : _d.append(this.itemConnPoint3);
            (_e = this.schedulerItems) === null || _e === void 0 ? void 0 : _e.append(this.itemConnPoint4);
            document.querySelectorAll('.link-point').forEach(function (element) {
                element.addEventListener('click', function (event) { return _this.linkPointClick(event); });
            });
        }
    };
    Scheduler.prototype.drawLinks = function () {
        var _this = this;
        var _a;
        this.clearLinks();
        if (this.settings.drawLinks == true) {
            (_a = this.data.Resources) === null || _a === void 0 ? void 0 : _a.forEach(function (resource, resindex) {
                var _a;
                (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (item1, index) {
                    var _a;
                    if (typeof item1.Link !== "undefined") {
                        if (item1.Link !== "" && item1.Link !== null) {
                            (_a = _this.data.Resources) === null || _a === void 0 ? void 0 : _a.forEach(function (resource2, resindex2) {
                                var _a;
                                (_a = resource2.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (item2, index2) {
                                    var _a;
                                    var samelink = item2.Link == item1.Link;
                                    var idlink = item1.Link == item2.Id;
                                    var singletime = (samelink && ((item1.Offset < item2.Offset) || ((item1.Offset == item2.Offset) && (resindex > resindex2)))) || idlink;
                                    var notitself = item2.Id != item1.Id;
                                    var cond = resindex == resindex2; //Math.abs(resindex - resindex2)<=1;
                                    if ((samelink || idlink) && singletime && notitself) {
                                        var x1 = (_this.settings.timeWidth * ((item1.Offset + (item1.Width / 2)) / _this.settings.timeUnitVal));
                                        var x2 = (_this.settings.timeWidth * ((item2.Offset + (item2.Width / 2)) / _this.settings.timeUnitVal));
                                        var y1 = (resindex * _this.settings.resourceHeight) + _this.headerHeight + _this.settings.itemsPadding;
                                        var y2 = ((resindex2 - 1) * _this.settings.resourceHeight) + _this.headerHeight - _this.settings.itemsPadding;
                                        if (cond) { //resindex == resindex2
                                            var i1 = item1.Offset > item2.Offset ? item2 : item1;
                                            var i2 = item1.Offset > item2.Offset ? item1 : item2;
                                            x1 = (_this.settings.timeWidth * ((i1.Offset + i1.Width) / _this.settings.timeUnitVal));
                                            x2 = (_this.settings.timeWidth * ((i2.Offset) / _this.settings.timeUnitVal));
                                            y1 = ((resindex + 0.5) * _this.settings.resourceHeight) + _this.headerHeight;
                                            y2 = y1;
                                        }
                                        if (!cond && resindex < resindex2) {
                                            y1 = ((resindex + 1) * _this.settings.resourceHeight) + _this.headerHeight - _this.settings.itemsPadding;
                                            y2 = (resindex2 * _this.settings.resourceHeight) + _this.headerHeight + _this.settings.itemsPadding;
                                        }
                                        var y3 = ((((resindex + resindex2) / 2) + 0.5) * _this.settings.resourceHeight) + _this.headerHeight;
                                        var strpath = '';
                                        strpath = ' M' + x1 + ',' + y1 + ' V ' + y3 + ' H' + x2 + ' V' + y2;
                                        if (_this.settings.linkSpline == true) {
                                            strpath = ' M' + x1 + ',' + y1 + ' C' + x1 + ',' + y3 + ' ' + x2 + ',' + y3 + '  ' + x2 + ',' + y2;
                                        }
                                        if (cond) { //resindex == resindex2
                                            strpath = ' M' + x1 + ',' + y1 + ' L' + x2 + ',' + y1;
                                        }
                                        else if (!cond && resindex > resindex2) {
                                            y2 = ((resindex2 + 1) * _this.settings.resourceHeight) + _this.headerHeight - _this.settings.itemsPadding;
                                            strpath = ' M ' + x1 + ',' + y1 + ' V ' + y3 + ' H ' + x2 + ' V ' + y2;
                                            if (_this.settings.linkSpline == true) {
                                                strpath = ' M ' + x1 + ',' + y1 + ' C' + x1 + ' ' + y3 + ' ' + x2 + ',' + y3 + ' ' + x2 + ' ' + y2;
                                            }
                                        }
                                        var linkline = document.createElementNS('http://www.w3.org/2000/svg', "path");
                                        var linkid = 'link-' + Math.floor(Math.random() * 10000000);
                                        linkline.setAttribute('id', linkid);
                                        linkline.setAttribute('d', strpath);
                                        linkline.setAttribute('fill', 'none');
                                        linkline.setAttribute('stroke-width', '4');
                                        linkline.setAttribute('class', 'link link-wire');
                                        linkline.setAttribute('stroke-linecap', 'round');
                                        linkline.setAttribute('data-link', item1.Link.toString());
                                        // linkline.setAttribute('marker-end','url(#circle-marker-end)');
                                        // linkline.setAttribute('marker-start','url(#circle-marker-end)');
                                        (_a = _this.schedulerItems) === null || _a === void 0 ? void 0 : _a.append(linkline);
                                        var elem1 = document.getElementById(item1.Id.toString());
                                        elem1.setAttribute('data-link', linkid);
                                        var elem2 = document.getElementById(item2.Id.toString());
                                        elem2.setAttribute('data-link', linkid);
                                    }
                                });
                            });
                        }
                    }
                });
            });
        }
    };
    Scheduler.prototype.updatePath = function (linkid) {
        var _a;
        var elem1 = document.querySelectorAll('[data-link="' + linkid + '"]')[0];
        var elem2 = document.querySelectorAll('[data-link="' + linkid + '"]')[1];
        var h = this.settings.resourceHeight;
        var strpath = '';
        var x1 = parseFloat(elem1.getAttribute('x')) + (parseFloat(elem1.getAttribute('width')) / 2);
        var x2 = parseFloat(elem2.getAttribute('x')) + (parseFloat(elem2.getAttribute('width')) / 2);
        var y1 = parseFloat(elem1.getAttribute('y'));
        var y2 = parseFloat(elem2.getAttribute('y'));
        var sameycond = Math.abs(y1 - y2) < (h);
        var i1 = x1 > x2 ? elem2 : elem1;
        var i2 = x1 > x2 ? elem1 : elem2;
        if (sameycond) {
            x1 = parseFloat(i1.getAttribute('x')) + (parseFloat(i1.getAttribute('width')));
            x2 = parseFloat(i2.getAttribute('x'));
            y1 = parseFloat(i1.getAttribute('y'));
            y2 = parseFloat(i2.getAttribute('y'));
            y1 = y1 + (h / 2);
            y2 = y2 + (h / 2);
        }
        var y3 = ((y1 + y2 + h) / 2);
        if (sameycond) {
            strpath = ' M' + x1 + ',' + y1 + ' L' + x2 + ',' + y2;
        }
        else if (y1 > y2) {
            y2 += h;
            strpath = ' M ' + x1 + ',' + y1 + ' V ' + y3 + ' H ' + x2 + ' V ' + y2;
            if (this.settings.linkSpline == true) {
                strpath = ' M ' + x1 + ',' + y1 + ' C' + x1 + ' ' + y3 + ' ' + x2 + ',' + y3 + ' ' + x2 + ' ' + y2;
            }
        }
        else {
            y1 += h;
            strpath = ' M' + x1 + ',' + y1 + ' V ' + y3 + ' H' + x2 + ' V' + y2;
            if (this.settings.linkSpline == true) {
                strpath = ' M' + x1 + ',' + y1 + ' C' + x1 + ',' + y3 + ' ' + x2 + ',' + y3 + '  ' + x2 + ',' + y2;
            }
        }
        var linkline = document.getElementById(linkid);
        linkline === null || linkline === void 0 ? void 0 : linkline.setAttribute('d', strpath);
        if (linkline) {
            (_a = this.schedulerItems) === null || _a === void 0 ? void 0 : _a.append(linkline);
        }
    };
    Scheduler.prototype.splitterBarMouseDown = function (event) {
        if (this.action == '')
            this.action = 'splitter';
        var sidebar = document.getElementById('scheduler-sidebar');
        event.target.classList.add('sizing');
        this.element = event.target;
        this.actionMemoPos.x = event.pageX;
        this.actionMemoPos.y = event.pageY;
        sidebar.setAttribute('data-w', sidebar.getAttribute('width'));
        // $('#splitter-bar').addClass('sizing');
        // $('#splitter-bar').attr('data-x', $('#splitter-bar').attr('x'));
        // var x = parseFloat($('#splitter-area').attr('x'));
        // var w = parseFloat($('#splitter-area').attr('width'));
        // x -= 4;
        // w += 8;
        // $('#splitter-area').attr('x', x);
        // $('#splitter-area').attr('width', w);
        // mousePos = {
        //     x: evt.pageX,
        //     y: evt.pageY
        // };
        // scheduler.mpos = mousePos;
    };
    Scheduler.prototype.shift = function (step) {
        var _a;
        var items = document.getElementById('scheduler-items');
        var anim = (_a = items === null || items === void 0 ? void 0 : items.getElementsByTagName("animateTransform")) !== null && _a !== void 0 ? _a : null;
        console.log(anim);
        if (anim) {
            var minpos = 0;
            var maxpos = -((this.settings.timeUnitsCount - this.settings.timeUnitsView - 1) * this.settings.timeWidth);
            var transform = this.getTranslateValues(items);
            var pos = transform.x + (step * this.settings.timeWidth);
            if (pos > minpos)
                pos = minpos;
            if (pos < maxpos)
                pos = maxpos;
            anim[0].setAttribute('from', transform === null || transform === void 0 ? void 0 : transform.x.toString());
            anim[0].setAttribute('to', pos.toString());
            anim[0].beginElement();
        }
    };
    Scheduler.prototype.clearLinks = function () {
        document.querySelectorAll('.link').forEach(function (element) {
            element.remove();
        });
    };
    Scheduler.prototype.hideLinkpoints = function () {
        document.querySelectorAll('.link-point').forEach(function (element) {
            element.style.visibility = 'hidden';
        });
    };
    Scheduler.prototype.showLinkpoints = function () {
        document.querySelectorAll('.link-point').forEach(function (element) {
            element.style.visibility = 'visible';
        });
    };
    Scheduler.prototype.itemMouseDown = function (event, data) {
        // this.action='split';
        if (this.action == '') {
            if (event.button == 0 && this.settings.canMoveItems && event.target.classList.contains('item')) {
                this.action = 'moving';
            }
            else if (event.button == 0 && this.settings.canResizeItems && event.target.classList.contains('resize')) {
                this.action = 'sizing';
            }
            if (this.action == 'moving' || this.action == 'sizing') {
                // this.clearLinks();
                // this.hideLinkpoints();
            }
        }
        if (this.action != '') {
            this.element = event.target.parentElement;
            if (event.target.classList.contains('item'))
                event.target.classList.add(this.action);
            if (event.target.classList.contains('resize')) {
                var id = event.target.parentElement.getAttribute('data-id');
                document.querySelector('svg[data-id="' + id + '"]>rect.item').classList.add(this.action);
            }
            this.element.setAttribute('data-x', data.element.getAttribute('x'));
            this.element.setAttribute('data-y', data.element.getAttribute('y'));
            this.element.setAttribute('data-w', data.element.getAttribute('width'));
            this.actionMemoPos.x = event.pageX;
            this.actionMemoPos.y = event.pageY;
        }
        if (typeof itemMouseDown == 'function') {
            itemMouseDown(event, data);
        }
    };
    Scheduler.prototype.itemMouseUp = function (event, data) {
        var _a;
        // if (event.target.classList.contains('item')) event.target.classList.remove('moving');
        // if (event.target.classList.contains('resize')) {
        //     let id=event.target.parentElement.getAttribute('data-id');
        //     document.querySelector('svg[data-id="'+id+'"]>rect.item').classList.remove('sizing');
        // }
        var itemClone = Object.assign({}, data.item);
        this.element = event.target.parentElement;
        this.processItemAction2(this.element, data.item, event.ctrlKey);
        this.setAction('');
        var datalink = (_a = this.element) === null || _a === void 0 ? void 0 : _a.getAttribute('data-link');
        if (datalink != null) {
            this.drawLinks();
        }
        if (typeof modified == 'function') {
            if ((itemClone.To != data.item.To) || (itemClone.From != data.item.From) || itemClone.Resource != data.item.Resource) {
                modified();
            }
        }
        // this.processData();
        this.storeData();
        console.log(this.data);
    };
    Scheduler.prototype.processItemAction = function (element, data) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f;
        console.log('process item action');
        var x = parseFloat((_a = element.getAttribute('x')) !== null && _a !== void 0 ? _a : '0');
        var y = parseFloat((_b = element.getAttribute('y')) !== null && _b !== void 0 ? _b : '0');
        var w = parseFloat((_c = element.getAttribute('width')) !== null && _c !== void 0 ? _c : '0');
        var dx = parseFloat((_d = element.getAttribute('data-x')) !== null && _d !== void 0 ? _d : '0');
        var dy = parseFloat((_e = element.getAttribute('data-y')) !== null && _e !== void 0 ? _e : '0');
        var dw = parseFloat((_f = element.getAttribute('data-w')) !== null && _f !== void 0 ? _f : '0');
        var axisXsteps = this.settings.gridStep / (this.settings.timeUnitVal / this.settings.timeWidth);
        var gridOffset = this.settings.gridOffset / (this.settings.timeUnitVal / this.settings.timeWidth);
        x = this.getModulo(x, axisXsteps, gridOffset);
        y = this.getModulo(y, this.settings.resourceHeight, this.headerHeight);
        w = this.getModulo(w, axisXsteps);
        console.log(w);
        if (this.calendar != null && this.settings.calcEffort == true) {
            var schedulerItem = new SchedulerItem();
            var item = this.getItemData(data.Id);
            schedulerItem.From = this.convertXToTicks(x);
            if (this.action == 'moving') {
                schedulerItem.Effort = item.Effort;
                var start = this.calendar.optimazeStart(schedulerItem);
                x = this.convertTicksToX(start);
                schedulerItem.From = this.convertXToTicks(x);
                var d = this.calendar.calcDuration(schedulerItem);
                w = d / this.settings.timeUnitVal * this.settings.timeWidth;
                item.From = schedulerItem.From;
                item.Width = d;
                console.log('0:' + item.Text);
                console.log(item);
            }
            if (this.action == 'sizing') {
                var ticks = this.convertWToTicks(w);
                schedulerItem.Duration = ticks;
                schedulerItem.Effort = this.calendar.calcEffort(schedulerItem);
                item.Effort = schedulerItem.Effort;
                console.log('effort' + item.Effort);
            }
        }
        var moved = Math.abs(dx - x) > (axisXsteps / 3) || Math.abs(dy - y) > (this.settings.resourceHeight / 3);
        var resized = Math.abs(dw - w) > (axisXsteps / 3);
        console.log(resized);
        if (!this.checkInterference(x, y, w, element) && false) {
            console.log('check interference false');
            var resourceIndex = (y - this.headerHeight) / this.settings.resourceHeight;
            var validResIndex = resourceIndex >= 0 && resourceIndex < this.data.Resources.length;
            if (!this.settings.shiftItems || !validResIndex) {
                x = dx;
                y = dy;
                w = dw;
            }
            else {
                var s_1 = x + w;
                var items = this.data.Resources[resourceIndex].Items.sort(function (a, b) { return a.Offset - b.Offset; });
                items.forEach(function (currentitem, i) {
                    if (currentitem.Id != data.Id) {
                        console.log('1:' + currentitem.Text);
                        var cx = currentitem.Offset / _this.settings.timeUnitVal * _this.settings.timeWidth;
                        var cw = currentitem.Width / _this.settings.timeUnitVal * _this.settings.timeWidth;
                        var cx2 = cx + cw;
                        // if (cx2>x && cx<x){
                        //     x=cx2;
                        //     s=x+w;
                        //     console.log('2:'+currentitem.Text); 
                        // }
                        console.log('2:' + x.toString() + ' ' + cx.toString() + ' ' + s_1.toString());
                        if (cx2 > x && cx < s_1 && cx >= x) {
                            console.log('3:' + currentitem.Text);
                            var el = _this.schedulerItems.querySelector('.svg-item[data-id="' + currentitem.Id + '"]');
                            if (el) {
                                var from = _this.convertXToTicks(s_1);
                                currentitem.From = from;
                                currentitem.Offset = _this.getItemOffset(from);
                                if (_this.calendar != null && _this.settings.calcEffort == true) {
                                    var schedulerItem = new SchedulerItem();
                                    schedulerItem.From = from;
                                    schedulerItem.Effort = currentitem.Effort;
                                    var start = _this.calendar.optimazeStart(schedulerItem);
                                    var cx_1 = _this.convertTicksToX(start);
                                    schedulerItem.From = _this.convertXToTicks(cx_1);
                                    currentitem.From = schedulerItem.From;
                                    currentitem.Offset = _this.getItemOffset(currentitem.From);
                                    _this.moveTo(el, cx_1, y);
                                    var d = _this.calendar.calcDuration(schedulerItem);
                                    var cw_1 = d / _this.settings.timeUnitVal * _this.settings.timeWidth;
                                    currentitem.Width = d;
                                    _this.setWidth(el, cw_1);
                                    s_1 = s_1 + cw_1;
                                }
                                else {
                                    _this.moveTo(el, s_1, y);
                                    s_1 = s_1 + w;
                                }
                            }
                        }
                    }
                });
            }
        }
        if (!moved) {
            x = dx;
            y = dy;
        }
        if (!resized) {
            w = dw;
        }
        if (this.action == 'moving') {
            this.moveTo(element, x, y);
            this.setWidth(element, w);
            //  this.updateData(element);
            var datalink = element.getAttribute('data-link');
            if (datalink != null) {
                // this.updatePath(datalink);
            }
        }
        else if (this.action == 'sizing--') {
            this.setWidth(element, w);
            this.updateData(element);
            var datalink = element.getAttribute('data-link');
            if (datalink != null) {
                // this.updatePath(datalink);
            }
        }
        else if (this.action == 'size') {
            this.setWidth(element, w);
            this.updateData(element);
            var datalink = element.getAttribute('data-link');
            if (datalink != null) {
                // this.updatePath(datalink);
            }
        }
        if (this.settings.drawLinks == true) {
            this.drawLinks();
        }
    };
    Scheduler.prototype.processItemAction2 = function (element, data, ctrl) {
        var _a, _b, _c, _d, _e, _f;
        console.log('process item action');
        var x = parseFloat((_a = element.getAttribute('x')) !== null && _a !== void 0 ? _a : '0');
        var y = parseFloat((_b = element.getAttribute('y')) !== null && _b !== void 0 ? _b : '0');
        var w = parseFloat((_c = element.getAttribute('width')) !== null && _c !== void 0 ? _c : '0');
        var dx = parseFloat((_d = element.getAttribute('data-x')) !== null && _d !== void 0 ? _d : '0');
        var dy = parseFloat((_e = element.getAttribute('data-y')) !== null && _e !== void 0 ? _e : '0');
        var dw = parseFloat((_f = element.getAttribute('data-w')) !== null && _f !== void 0 ? _f : '0');
        var axisXsteps = this.settings.gridStep / (this.settings.timeUnitVal / this.settings.timeWidth);
        var gridOffset = this.settings.gridOffset / (this.settings.timeUnitVal / this.settings.timeWidth);
        x = this.getModulo(x, axisXsteps, gridOffset);
        y = this.getModulo(y, this.settings.resourceHeight, this.headerHeight);
        w = this.getModulo(w, axisXsteps);
        console.log('dx:' + dx + ' dy:' + dy);
        var moved = Math.abs(dx - x) > (axisXsteps / 2) || y != dy;
        var resized = Math.abs(dw - w) > (axisXsteps / 3);
        var si = new SchedulerItem2(this, data, this.calendar);
        console.log('created');
        if (moved) {
            si.X = x;
            si.Y = y;
            console.log('moved:' + x + ' ' + y);
        }
        else {
            element.setAttribute('x', dx.toString());
            element.setAttribute('y', dy.toString());
            if (resized) {
                si.W = w;
                console.log('w:' + w + ' effort:' + si.Effort);
            }
            else
                element.setAttribute('width', dw.toString());
        }
        if (this.settings.checkInterferences) {
            var interference = si.checkInterference();
            if (!interference) {
                if (!this.settings.shiftItems || !ctrl) {
                    si.X = dx;
                    si.Y = dy;
                }
                else {
                    // let item=this.data.Resources[si.Resource].Items.filter((i)=>(i.Offset+i.Width)>si.Offset && i.Offset < si.Offset)
                    // .sort((a,b)=>{return a.Offset-b.Offset})[0];
                    var item = this.data.Resources[si.Resource].Items.filter(function (i) { return (i.Offset + i.Width) > si.Offset && i.Offset < si.Offset; })
                        .sort(function (a, b) { return a.Offset - b.Offset; })[0];
                    if (item) {
                        var si2 = new SchedulerItem2(this, item, this.calendar);
                        si.X = si2.X + si2.W;
                    }
                    var xxx = si.X + si.W;
                    //  let xxx=si.Offset+si.Width;
                    var items = this.data.Resources[si.Resource].Items.filter(function (i) { return i.Offset >= si.Offset && i.Id != si.Id; })
                        .sort(function (a, b) { return parseInt(a.Offset) - parseInt(b.Offset); });
                    console.log(items);
                    for (var i = 0; i < items.length; i++) {
                        var item_1 = items[i];
                        var si2 = new SchedulerItem2(this, item_1, this.calendar);
                        if (xxx > si2.X)
                            si2.X = xxx;
                        //    si2.Offset=xxx;
                        xxx = si2.X + si2.W;
                        interference = si2.checkInterference();
                        //  if (interference) break;
                    }
                }
            }
        }
    };
    Scheduler.prototype.setItemColor = function (id, c) {
        var _a;
        var sc = this;
        (_a = sc.data.Resources) === null || _a === void 0 ? void 0 : _a.forEach(function (resource) {
            var _a;
            (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                if (item.Id == id) {
                    item.Color1 = c;
                    item.Modified = true;
                    sc.redrawItems();
                    return;
                }
            });
        });
    };
    Scheduler.prototype.convertXToTicks = function (x) {
        var date = this.settings.date;
        var ticks = 0;
        if (date) {
            ticks = x / this.settings.timeWidth * this.settings.timeUnitVal;
            ticks += (date.getTime() / 60000);
        }
        return ticks;
    };
    Scheduler.prototype.convertTicksToX = function (ticks) {
        var date = this.settings.date;
        var x = 0;
        if (date) {
            ticks -= (date.getTime() / 60000);
        }
        x = ticks / this.settings.timeUnitVal * this.settings.timeWidth;
        return x;
    };
    Scheduler.prototype.convertWToTicks = function (w) {
        var ticks = w / this.settings.timeWidth * this.settings.timeUnitVal;
        return ticks;
    };
    Scheduler.prototype.getItemOffset = function (from) {
        var date = this.settings.date;
        var x = 0;
        var ticks = 0;
        if (date) {
            ticks = (date.getTime() / 60000);
        }
        return from - ticks;
    };
    Scheduler.prototype.processRowShift = function (element, data) {
        var _a, _b;
        if (this.calendar != null) {
            var y = parseFloat((_a = element.getAttribute('y')) !== null && _a !== void 0 ? _a : '0');
            var dy = parseFloat((_b = element.getAttribute('data-y')) !== null && _b !== void 0 ? _b : '0');
            var item = this.getItemData(data.Id);
            if (item) {
                console.log(item);
                var s = new SchedulerItem();
                s.From = item.From;
                s.Effort = item.Width;
                var d = this.calendar.calcDuration(s);
                console.log(d);
                // w=d/this.settings.timeUnitVal*this.settings.timeWidth;
                // w=this.getModulo(w,axisXsteps);
                // console.log(w);
            }
        }
    };
    Scheduler.prototype.setAction = function (action) {
        var _this = this;
        var _a;
        if (action == '') {
            if (this.action != '') {
                (_a = this.schedulerItems) === null || _a === void 0 ? void 0 : _a.querySelectorAll('rect.item').forEach(function (element) { return element.classList.remove(_this.action); });
            }
        }
        this.action = action;
    };
    Scheduler.prototype.checkInterference = function (x, y, w, e) {
        var res = true;
        if (this.settings.checkInterferences) {
            var x2_1 = x + w;
            var elements = document.querySelectorAll('svg.svg-item');
            elements.forEach(function (element, i) {
                var _a, _b, _c;
                if (element != e) {
                    var cx1 = parseFloat((_a = element.getAttribute('x')) !== null && _a !== void 0 ? _a : '0');
                    var cy = parseFloat((_b = element.getAttribute('y')) !== null && _b !== void 0 ? _b : '0');
                    var cw = parseFloat((_c = element.getAttribute('width')) !== null && _c !== void 0 ? _c : '0');
                    var cx2 = cx1 + cw;
                    if (cy == y) {
                        res = res && ((x2_1 <= cx1) || (x >= cx2));
                    }
                }
            });
        }
        return res;
    };
    Scheduler.prototype.getItemData = function (id) {
        var _a;
        var res = null;
        (_a = this.data.Resources) === null || _a === void 0 ? void 0 : _a.forEach(function (resource) {
            var _a;
            (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                if (item.Id == id)
                    res = item;
            });
        });
        return res;
    };
    Scheduler.prototype.updateData = function (element) {
        var _this = this;
        var _a;
        var y = element.getAttribute('y');
        var resourceIndex = (y - this.headerHeight) / this.settings.resourceHeight;
        var id = element.getAttribute('data-id');
        console.log('update data');
        (_a = this.data.Resources) === null || _a === void 0 ? void 0 : _a.forEach(function (resource, ri) {
            var _a;
            (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                var _a, _b, _c, _d, _e;
                if (item.Id == id) {
                    var x = parseFloat((_a = element.getAttribute('x')) !== null && _a !== void 0 ? _a : '0');
                    var w = parseFloat((_b = element.getAttribute('width')) !== null && _b !== void 0 ? _b : '0');
                    var offset = x / _this.settings.timeWidth * _this.settings.timeUnitVal;
                    var width = w / _this.settings.timeWidth * _this.settings.timeUnitVal;
                    item.Offset = Math.round(offset);
                    item.Width = Math.round(width);
                    item.Modified = true;
                    var from = (_this.settings.date.getTime() / 60000) + (item.Offset);
                    var to = (_this.settings.date.getTime() / 60000) + parseInt(((item.Offset + item.Width)));
                    item.From = from;
                    item.To = to;
                    if (ri != resourceIndex) {
                        (_c = _this.data.Resources[ri].Items) === null || _c === void 0 ? void 0 : _c.splice((_d = _this.data.Resources[ri].Items) === null || _d === void 0 ? void 0 : _d.indexOf(item), 1);
                        if (!_this.data.Resources[resourceIndex].Items)
                            _this.data.Resources[resourceIndex].Items = [];
                        (_e = _this.data.Resources[resourceIndex].Items) === null || _e === void 0 ? void 0 : _e.push(item);
                    }
                }
            });
        });
        this.storeData();
    };
    Scheduler.prototype.moveTo = function (element, x, y) {
        var _a;
        if ((_a = this.settings.animation) !== null && _a !== void 0 ? _a : false) {
            this.moveAnimatedTo(element, x, y);
        }
        element.setAttribute('x', x.toString());
        if (this.settings.resourceChange) {
            element.setAttribute('y', y.toString());
        }
    };
    Scheduler.prototype.moveAnimatedTo = function (element, x, y) {
        var _a, _b;
        if (!element)
            return;
        var cx = parseFloat((_a = element.getAttribute('x')) !== null && _a !== void 0 ? _a : '0');
        var cy = parseFloat((_b = element.getAttribute('y')) !== null && _b !== void 0 ? _b : '0');
        var animatex = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animatex.setAttribute('attributeName', 'x');
        animatex.setAttribute('values', cx.toString() + ';' + x.toString());
        animatex.setAttribute('dur', '0.25s');
        element.append(animatex);
        animatex.beginElement();
        animatex.addEventListener('end', function () {
            animatex.remove();
        });
        if (this.settings.resourceChange) {
            var animatey_1 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
            animatey_1.setAttribute('attributeName', 'y');
            animatey_1.setAttribute('values', cy.toString() + ';' + y.toString());
            animatey_1.setAttribute('dur', '0.15s');
            element.append(animatey_1);
            animatey_1.beginElement();
            animatey_1.addEventListener('end', function () {
                animatey_1.remove();
            });
        }
        // element.setAttribute('x',x.toString());
        // element.setAttribute('y',y.toString());
    };
    Scheduler.prototype.shiftNoAnimation = function (step) {
        var items = document.getElementById('scheduler-items');
        var minpos = 0;
        var maxpos = -((this.settings.timeUnitsCount - this.settings.timeUnitsView - 1) * this.settings.timeWidth);
        var transform = this.getTranslateValues(items);
        var pos = transform.x + (step * this.settings.timeWidth);
        if (pos > minpos)
            pos = minpos;
        if (pos < maxpos)
            pos = maxpos;
        items.setAttribute('transform', 'translate(' + pos + ' , 0)');
    };
    Scheduler.prototype.setDayView = function (startDate) {
        this.settings.timeUnitsView = 3;
        this.settings.gridStep = 60;
        this.settings.timeUnitsCount = 192;
        this.settings.shifterStep = 0.5;
        var dt1 = new Date(this.settings.date);
        var dt2 = startDate;
        var timespan = (dt2.getTime() - dt1.getTime()) / 86400000;
        timespan -= 0.5;
        this.init();
        this.shiftNoAnimation(-timespan);
    };
    Scheduler.prototype.setWeekView = function (startDate) {
        this.settings.timeUnitsView = 7;
        this.settings.gridStep = 60;
        this.settings.timeUnitsCount = 192;
        var dt1 = new Date(this.settings.date);
        var dt2 = startDate;
        var timespan = (dt2.getTime() - dt1.getTime()) / 86400000;
        timespan -= 0.5;
        this.settings.shifterStep = 3;
        this.init();
        this.shiftNoAnimation(-timespan);
    };
    Scheduler.prototype.setView = function (event, view) {
        var _a;
        var variation = 1;
        switch (view) {
            case SchedulerView.Day:
                this.settings.timeUnitsView = 2;
                this.settings.shifterStep = 1;
                variation = 0.5;
                break;
            case SchedulerView.Week:
                this.settings.timeUnitsView = 7;
                this.settings.shifterStep = 4;
                variation = 1;
                break;
            case SchedulerView.Month:
                this.settings.timeUnitsView = 31;
                this.settings.shifterStep = 15;
                variation = 3;
                break;
            default:
                break;
        }
        var startDate = new Date((_a = event.target.getAttribute('data-date')) !== null && _a !== void 0 ? _a : '');
        var dt1 = this.settings.date;
        var dt2 = startDate;
        var timespan = (dt2.getTime() - dt1.getTime()) / 86400000;
        timespan -= variation;
        this.currentView = view;
        this.init();
        this.shiftNoAnimation(-timespan);
    };
    Scheduler.prototype.setMonthView = function (startDate) {
        this.settings.timeUnitsView = 15;
        this.settings.timeUnitVal = 1440;
        this.settings.timeWidth = 1440;
        this.settings.gridStep = 120;
        this.settings.timeUnitsCount = 60;
        var dt1 = new Date(this.settings.date);
        var dt2 = startDate;
        var timespan = (dt2.getTime() - dt1.getTime()) / 86400000;
        timespan -= 0.5;
        this.settings.shifterStep = 3;
        this.init();
        this.shiftNoAnimation(-timespan);
    };
    Scheduler.prototype.setWidth = function (element, width) {
        if (this.settings.animation == true) {
            this.setAnimatedWidth(element, width);
        }
        element.setAttribute('width', width.toString());
    };
    Scheduler.prototype.setItemWidth = function (itemId, width) {
        var element = this.schedulerItems.querySelector('svg.svg-item[data-id="' + itemId + '"]');
        var w = width;
        var step = this.settings.gridStep / (this.settings.timeUnitVal / this.settings.timeWidth);
        if (w < step)
            w = step;
        var item = this.getItemData(itemId);
        if (element) {
            this.setAction('size');
            this.setWidth(element, w);
            this.processItemAction(element, item);
            this.setAction('');
        }
    };
    Scheduler.prototype.setAnimatedWidth = function (element, width) {
        var _a;
        if (!element)
            return;
        var w = parseFloat((_a = element.getAttribute('width')) !== null && _a !== void 0 ? _a : '0');
        var animatew = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animatew.setAttribute('attributeName', 'width');
        animatew.setAttribute('values', w.toString() + ';' + width.toString());
        animatew.setAttribute('dur', '0.15s');
        element.append(animatew);
        animatew.beginElement();
        animatew.addEventListener('end', function () {
            animatew.remove();
        });
    };
    Scheduler.prototype.itemClick = function (event, element) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        //  let itemData=this.getItemData(element.item.Id);
        //  let si2=new SchedulerItem2(this,itemData);
        console.log('9');
        // // si2.Y=si2.Y+50;
        // console.log('interference:'+si2.checkInterference());
        var popup = document.getElementById('scheduler-popup');
        if (!popup) {
            popup = document.createElement('div');
            popup.innerHTML = "<div id = \"scheduler-popup\" class=\"scheduler-popup\" >\n                                <div class=\"popup-container\">\n                                    <div class=\"popup-header\">\n                                        <button class=\"close-button\">&times;</button>\n                                    </div>\n                                    <div class=\"popup-content\">\n                                        <div class=\"tab\">\n                                            <button class=\"tablinks active\" data-tab=\"schedulertasktab\" >Task</button>\n                                            <button class=\"tablinks\" data-tab=\"schedulerdatatab\">Data</button>\n                                            <button class=\"tablinks\" data-tab=\"schedulerothertab\">Note</button>\n                                        </div>\n            \n                                        <div id=\"schedulertasktab\" class=\"tabcontent active\">\n                                            <div class=\"formgroup\">\n                                                <label>Task Id</label>\n                                                <input class=\"taskinput taskid\" placeholder=\"Id\" disabled/>\n                                            </div>\n                                            <div class=\"formgroup\">\n                                                <label>Task</label>\n                                                <input class=\"taskinput taskname\" placeholder=\"Name\"/>\n                                            </div>\n                                            <div class=\"formgroup\">\n                                                <label>Description</label>\n                                                <input class=\"taskinput taskdescription\" placeholder=\"Description\"/>\n                                            </div>\n                                            <div class=\"formgroup\">\n                                                <label>Start</label>\n                                                <input type=\"datetime\" class=\"taskinput taskstart\" />\n                                            </div>\n                                            <div class=\"formgroup\">\n                                                <label>Finish</label>\n                                                <input type=\"datetime\" class=\"taskinput taskfinish\" />\n                                            </div>\n                                           \n                                        </div>\n            \n                                        <div id=\"schedulerdatatab\" class=\"tabcontent\">     \n                                            <textarea class=\"taskdata\" disabled></textarea> \n                                        </div>\n            \n                                        <div id=\"schedulerothertab\" class=\"tabcontent\"> \n                                            <textarea></textarea> \n                                        </div>\n                        \n                                    \n                                    </div>    \n                                    <div class=\"popup-footer\">           \n                                        <button type=\"button\" class=\"scheduler-popup-btn close-button\" >Close</button>\n                                        <button type=\"button\" class=\"scheduler-popup-btn\" >OK</button>\n                                    </div>\n                                </div>  \n                            </div>";
            this.schedulerContainer.append(popup);
            this.initPopup(popup);
        }
        console.log(new Date(((_a = element.item) === null || _a === void 0 ? void 0 : _a.From) * 60 * 1000).toString());
        popup.querySelector('input.taskid').value = (_c = (_b = element.item) === null || _b === void 0 ? void 0 : _b.Id) !== null && _c !== void 0 ? _c : '';
        popup.querySelector('input.taskname').value = (_e = (_d = element.item) === null || _d === void 0 ? void 0 : _d.Text) !== null && _e !== void 0 ? _e : '';
        popup.querySelector('input.taskdescription').value = (_g = (_f = element.item) === null || _f === void 0 ? void 0 : _f.Description) !== null && _g !== void 0 ? _g : '';
        popup.querySelector('input.taskstart').value = this.getDate((_h = element.item) === null || _h === void 0 ? void 0 : _h.From);
        popup.querySelector('input.taskfinish').value = this.getDate((_j = element.item) === null || _j === void 0 ? void 0 : _j.To);
        if (element.item)
            popup.querySelector('textarea.taskdata').value = JSON.stringify(element.item, null, 2);
        else
            popup.querySelector('textarea.taskdata').value = '';
        this.showTab(event, 'schedulertasktab');
        popup.style.display = 'block';
    };
    Scheduler.prototype.getDate = function (value) {
        var day = new Date(value * 60 * 1000).getUTCDate().toString().padStart(2, '0');
        var month = new Date(value * 60 * 1000).getUTCMonth().toString().padStart(2, '0');
        var year = new Date(value * 60 * 1000).getUTCFullYear().toString().padStart(2, '0');
        var result = year + '-' + month + '-' + day;
        console.log(result);
        return result;
    };
    Scheduler.prototype.getTaskData = function (id) {
        var _a;
        var res = null;
        (_a = this.data.Resources) === null || _a === void 0 ? void 0 : _a.forEach(function (resource) {
            var _a;
            (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                if (item.Id == id)
                    res = item;
            });
        });
        return res;
    };
    Scheduler.prototype.initPopup = function (popup) {
        var _this = this;
        popup.querySelector('textarea').value = JSON.stringify(this.data, null, 2);
        popup.querySelectorAll('.close-button').forEach(function (element) { return element.addEventListener('click', function (event) { return _this.closePopup(event); }); });
        popup.querySelectorAll('.tablinks').forEach(function (element) {
            element.addEventListener('click', function (event) { var _a; return _this.showTab(event, (_a = element.getAttribute('data-tab')) !== null && _a !== void 0 ? _a : ''); });
        });
    };
    Scheduler.prototype.showTab = function (evt, tabid) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabid).style.display = "block";
        evt.currentTarget.className += " active";
    };
    Scheduler.prototype.closePopup = function (evt) {
        document.getElementById('scheduler-popup').style.display = 'none';
    };
    Scheduler.prototype.getSum = function (box) {
        var _a;
        var dt = box.getAttribute('data-date');
        var dt1 = this.settings.date;
        var dt2 = new Date(dt);
        var start = Math.trunc((dt2.getTime() - dt1.getTime()) / 1000 / 60);
        var stop = start + this.settings.timeUnitVal;
        var sum = 0;
        var y = parseFloat(box.getAttribute('y'));
        var resIndex = (y - (this.headerHeight)) / this.settings.resourceHeight;
        var resource = this.data.Resources[resIndex];
        var name = resource.Name;
        (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (i, item) {
            var x = i.Offset;
            var w = i.Offset + i.Width;
            //  console.log('x:'+x+' w:'+w+' start:'+start+' stop:'+stop);
            if (x < start && w > start && w <= stop) {
                sum += w - start;
            }
            else if (x >= start && w <= stop) {
                sum += i.Width;
            }
            else if (x >= start && x < stop && w > stop) {
                sum += stop - x;
            }
            else if (x < start && w > stop) {
                sum += stop - start;
            }
        });
        var info = {};
        info['sum'] = sum;
        info['name'] = name;
        info['info'] = '-- --';
        info['resource'] = dt2.toLocaleDateString() + " | " + name;
        if (sum > 0) {
            var hh = Math.trunc(sum / 60);
            var mm = sum - (hh * 60);
            var time = this.pad(hh) + ':' + this.pad(mm);
            info['info'] = time;
        }
        return info;
    };
    Scheduler.prototype.pad = function (d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    };
    Scheduler.prototype.linkPointClick = function (event) {
        var _this = this;
        var _a, _b, _c, _d;
        if (this.settings.itemsLinks == true && this.action == '') {
            this.action = 'linking';
            this.linkPoint.x = parseFloat((_a = event.target.getAttribute('cx')) !== null && _a !== void 0 ? _a : '0');
            this.linkPoint.y = parseFloat((_b = event.target.getAttribute('cy')) !== null && _b !== void 0 ? _b : '0');
            this.linkId = (_c = event.target.getAttribute('target')) !== null && _c !== void 0 ? _c : '-----';
        }
        else {
            if (this.action == 'linking' && this.linkId != event.target.getAttribute('target')) {
                (_d = this.data.Resources) === null || _d === void 0 ? void 0 : _d.forEach(function (resource) {
                    var _a;
                    (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                        if (item.Id == _this.linkId) {
                            item.Link = event.target.getAttribute('target');
                            if (_this.settings.drawLinks == true) {
                                _this.drawLinks();
                            }
                        }
                    });
                });
            }
            this.clearAction();
        }
    };
    Scheduler.prototype.clearAction = function () {
        if (this.action == 'splitter')
            this.action = '';
        this.resetLinkLine();
        document.querySelector('.splitter').classList.remove('sizing');
        // this.element?.classList.remove('moving');
        // this.element?.classList.remove('sizing');
    };
    Scheduler.prototype.redrawItems = function () {
        this.clearItems();
        this.drawItems();
    };
    Scheduler.prototype.resetLinkLine = function () {
        var line = document.getElementById('link-line');
        line === null || line === void 0 ? void 0 : line.setAttribute('x1', '0');
        line === null || line === void 0 ? void 0 : line.setAttribute('x2', '0');
        line === null || line === void 0 ? void 0 : line.setAttribute('y1', '0');
        line === null || line === void 0 ? void 0 : line.setAttribute('y2', '0');
        this.linkId = '';
        this.linkPoint.x = 0;
        this.linkPoint.y = 0;
    };
    Scheduler.prototype.itemOver = function (event, item) {
        var _a, _b, _c, _d;
        if (this.settings.itemsLinks == true) {
            // let ev=event.originalEvent;
            var cx = parseFloat((_a = event.currentTarget.getAttribute('x')) !== null && _a !== void 0 ? _a : '0');
            var cy = parseFloat((_b = event.currentTarget.getAttribute('y')) !== null && _b !== void 0 ? _b : '0');
            var cw = parseFloat((_c = event.currentTarget.getAttribute('width')) !== null && _c !== void 0 ? _c : '0');
            var ch = parseFloat((_d = event.currentTarget.getAttribute('height')) !== null && _d !== void 0 ? _d : '0');
            var cx1 = cx;
            var cy1 = cy + ch / 2;
            var cx2 = cx + cw / 2;
            var cy2 = cy;
            var cx3 = cx + cw;
            var cy3 = cy + ch;
            this.itemConnPoint1.setAttribute('cx', cx1.toString());
            this.itemConnPoint1.setAttribute('cy', cy1.toString());
            this.itemConnPoint2.setAttribute('cx', cx2.toString());
            this.itemConnPoint2.setAttribute('cy', cy2.toString());
            this.itemConnPoint3.setAttribute('cx', cx2.toString());
            this.itemConnPoint3.setAttribute('cy', cy3.toString());
            this.itemConnPoint4.setAttribute('cx', cx3.toString());
            this.itemConnPoint4.setAttribute('cy', cy1.toString());
            this.itemConnPoint1.setAttribute('target', event.currentTarget.getAttribute('data-id'));
            this.itemConnPoint2.setAttribute('target', event.currentTarget.getAttribute('data-id'));
            this.itemConnPoint3.setAttribute('target', event.currentTarget.getAttribute('data-id'));
            this.itemConnPoint4.setAttribute('target', event.currentTarget.getAttribute('data-id'));
            this.showLinkpoints();
        }
        if (typeof itemMouseEnter === 'function') {
            itemMouseEnter(event, item);
        }
    };
    Scheduler.prototype.itemOut = function (event, item) {
        var _a, _b, _c, _d, _e;
        if (this.settings.itemsLinks == true) {
            (_a = this.schedulerItems) === null || _a === void 0 ? void 0 : _a.append(this.connLine);
            (_b = this.schedulerItems) === null || _b === void 0 ? void 0 : _b.append(this.itemConnPoint1);
            (_c = this.schedulerItems) === null || _c === void 0 ? void 0 : _c.append(this.itemConnPoint2);
            (_d = this.schedulerItems) === null || _d === void 0 ? void 0 : _d.append(this.itemConnPoint3);
            (_e = this.schedulerItems) === null || _e === void 0 ? void 0 : _e.append(this.itemConnPoint4);
        }
        if (typeof itemMouseExit === 'function') {
            itemMouseExit(event, item);
        }
    };
    Scheduler.prototype.dropOnElement = function (event, element) {
    };
    Scheduler.prototype.dragOverElement = function (event, element) {
    };
    Scheduler.prototype.splitterBarMouseUp = function (event) {
        this.action = '';
    };
    Scheduler.prototype.splitterBarMouseMove = function () {
    };
    Scheduler.prototype.splitterBarDblClick = function () {
    };
    Scheduler.prototype.setSplitBarPos = function (pos) {
        var sidebar = document.getElementById('scheduler-sidebar');
        sidebar.setAttribute('width', pos.toString());
        // const wrapper = document.getElementById('wrapper');
        // wrapper?.setAttribute('transform','translate(400,0)');
    };
    Scheduler.prototype.splitBarToggle = function () {
    };
    Scheduler.prototype.resourceClick = function (event, data) {
    };
    Scheduler.prototype.drawEvents = function () {
        var _this = this;
        if (this.settings.viewEvents == true) {
            var parent = document.getElementById('scheduler-background');
            if (this.data.Events) {
                var ry_1 = this.settings.monthBoxHeight;
                if (this.settings.viewWeeks)
                    ry_1 += this.settings.weekBoxHeight;
                this.data.Events.forEach(function (event, ei) {
                    var rx = (event.Offset * _this.settings.timeWidth / _this.settings.timeUnitVal);
                    var rw = _this.settings.timeWidth * event.Width / _this.settings.timeUnitVal;
                    var rhh = (_this.data.Resources.length * _this.settings.resourceHeight) + _this.headerHeight;
                    var rh = _this.settings.infoElementHeight;
                    var svgevent = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svgevent.setAttribute('x', rx.toString());
                    svgevent.setAttribute('y', ry_1.toString());
                    svgevent.setAttribute('width', rw.toString());
                    svgevent.setAttribute('height', rhh.toString());
                    svgevent.setAttribute('class', "svg-event draggable-x");
                    svgevent.setAttribute('cursor', 'pointer');
                    svgevent.setAttribute('data-id', event.Id);
                    var ev = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                    ev.setAttribute('x', '0');
                    ev.setAttribute('y', '0');
                    ev.setAttribute('width', rw.toString());
                    ev.setAttribute('height', rh.toString());
                    ev.setAttribute('class', 'event-header ' + event.Classes);
                    ev.setAttribute('fill', event.Color);
                    var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                    title.innerHTML = event.Description;
                    ev.append(title);
                    if (_this.settings.viewEventExtended == true) {
                        var p = document.getElementById('scheduler-items');
                        var y = _this.headerHeight;
                        var extevent = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                        extevent.setAttribute('x', rx.toString());
                        extevent.setAttribute('y', y.toString());
                        extevent.setAttribute('width', rw.toString());
                        extevent.setAttribute('height', rhh.toString());
                        extevent.setAttribute('fill', event.Color);
                        extevent.setAttribute('class', 'event-extension ' + event.Classes);
                        p.append(extevent);
                    }
                    svgevent.append(ev);
                    console.log(ev);
                    parent === null || parent === void 0 ? void 0 : parent.append(svgevent);
                });
            }
        }
    };
    Scheduler.prototype.drawHeader = function () {
        var parent = document.getElementById('scheduler-header');
        if (parent) {
            var h = this.headerHeight;
            var w = (this.settings.timeUnitsCount * this.settings.timeWidth);
            var y = 0;
            var x = 0;
            var header = document.createElementNS('http://www.w3.org/2000/svg', "rect");
            header.setAttribute("x", x.toString());
            header.setAttribute("y", y.toString());
            header.setAttribute('width', w.toString());
            header.setAttribute('height', h.toString());
            header.setAttribute('class', "header-bg");
            parent.appendChild(header);
        }
    };
    Scheduler.prototype.drawMonths = function () {
        var parent = document.getElementById('scheduler-header');
        var dt = this.settings.date;
        if (dt && parent) {
            var lastmonth = -1;
            var increment = 60 * 1000 * this.settings.timeUnitVal; //one day = 864000000
            var _loop_4 = function (i) {
                cdate = new Date(dt.getTime() + (i * increment));
                var w = this_3.settings.timeWidth;
                var x = (i * this_3.settings.timeWidth);
                var day = cdate.getUTCDate();
                var month = cdate.getUTCMonth();
                if (month != lastmonth) {
                    days = new Date(cdate.getUTCFullYear(), cdate.getUTCMonth() + 1, 1).getUTCDate();
                    mw = w * days;
                    if (this_3.settings.timeUnitVal == 60)
                        mw = w * 24;
                    my = 0;
                    mh = this_3.settings.monthBoxHeight;
                    mx = x;
                    if (this_3.settings.timeUnitVal == 1440) {
                        if (day != 1)
                            mx = x - ((day - 1) * w);
                    }
                    else {
                        mx = x + this_3.settings.timeWidth;
                    }
                    t = this_3.settings.months[cdate.getUTCMonth()];
                    if (this_3.settings.viewYear == true) {
                        t += ' ' + cdate.getUTCFullYear();
                    }
                    if (this_3.settings.timeUnitVal == 60)
                        t = cdate.toLocaleDateString();
                    var monthsvg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
                    monthsvg.setAttribute("x", mx.toString());
                    monthsvg.setAttribute("y", my.toString());
                    monthsvg.setAttribute('width', mw.toString());
                    monthsvg.setAttribute('height', mh.toString());
                    monthsvg.setAttribute('font-size', '100%');
                    var monthBox = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                    monthBox.setAttribute("x", '0');
                    monthBox.setAttribute("y", '0');
                    monthBox.setAttribute('width', '100%');
                    monthBox.setAttribute('height', '100%');
                    monthBox.setAttribute('data-date', cdate.toUTCString());
                    monthBox.setAttribute('class', "monthbox");
                    var that_3 = this_3;
                    monthBox.addEventListener('click', function (event) {
                        that_3.setView(event, SchedulerView.Month);
                    });
                    var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                    title.innerHTML = t;
                    monthBox.append(title);
                    monthsvg.append(monthBox);
                    var tx = 10;
                    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    text.setAttribute("x", tx.toString());
                    text.setAttribute("y", '50%');
                    text.setAttribute('font-size', "40%");
                    text.setAttribute('dominant-baseline', 'middle');
                    text.setAttribute('class', "header-text");
                    text.innerHTML = t;
                    monthsvg.append(text);
                    if (this_3.settings.viewStars == true) {
                        var stars = document.createElementNS('http://www.w3.org/2000/svg', 'use');
                        stars.setAttribute('x', (mx - 31).toString());
                        stars.setAttribute('y', (my + 8).toString());
                        stars.setAttribute('href', '#stars');
                        monthsvg.append(stars);
                    }
                    if (this_3.settings.viewMonthLogo == true) {
                        var logo = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                        logo.setAttribute('x', (mw - mh).toString());
                        logo.setAttribute('y', (mh / 8).toString());
                        logo.setAttribute('width', (mh / 4 * 3).toString());
                        logo.setAttribute('height', (mh / 4 * 3).toString());
                        logo.setAttribute('href', this_3.settings.logo);
                        //   logo.setAttribute('href','data:image/png+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABeCAYAAAAkCOoSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAQpklEQVR4Xu2dCXBURRrHv5wEcnBf6rIESLglAgkENly5Jhy67qrgKuh6BahyBXRLEeRYqwRBLYVaPEqtRdEqt0rLA6EEq2RBqrwQ8SAgEM5whDvnTJIJ2/9OD8wkb2bee/29BKr4qWX6SyDv9dfd37+/r9+biEsCus41QaT6/3WuAa476xoi7DL49bZtdGD/AZI/FqGMVhB/7uyZs9S3fz8amZlJl+rraf36z+jIkcPUsUNH9UMWiGi4CG9dHRry6+bAW++l0lOnKC/fRekZGXS6tJQ2bthIUVGRFNe6tfopi4i+wZ8dOnQopfbtq4zBCeqslcufp9defZViYmIoOjpadIv1jrkk/jlz+jS9vXYtTZw8SVkbmP/kk7R8xQqKuQbmtreeSPxLP+38kYak3dJgVNx+6220a+dOio9PUBYriB4S3e/2eKhDhw708upVNGr0aPW9phg6y5WTS0cOH6a27dqJgWx/9J47d46eW76c/nLHX5UlkAf/fj+9t+5dSkpKUparD3TPmfMX6WDxQeqZ3FNZA8keO47KysrkwLYDfofX66VTJ0/S/IULaObs2eo7gTRx1uzCQtr6v63aHVgnlqn4Nm3oq6+3KYsx0WIwtGuXRJGRV+cUKy8vowcefJj+/eprytKUPUVFNNk1kTp36aw1uOGKkpIS+u+HH4qQMVJZrxDQQ4fFbNqw/nNKTExUFvtUVVbRI7NnqVZwFi1eROViVF6N1Iv46q6tD+ko0K9/f0pJTZEDVAc4ulu3bjTn0UeVJZAAZ61b+4720gcwQjweN901daqyBGfRkqVUg5ggOuZqo7q6mqYGWcIb88BDD1F1VZVq2ScqKkrG+eLiYmW5QoCz9u7dI8WELnW1tTRg0CD5i83wt2lTZcdcTWDAVXlqacnSZ5UlNLfd/meqEvfQKKpYBhOlVVwc/fzTLmW5QoCzsHTpzirgEerGVVCgWuFZLGYXOkb3RjmpFQOuT6+e1G9Af2UJTWxsLPXq1VsKBV3gg/LyctW6QoCzOBwFqt1uys3LU63wYI+R2qeX7KCrhfKKKnpm0WLVMkdefp4cqBwY+SLAWRwg9rQWG70+KX2UxRzoGHTQ1QDuAV014777GwwmyXO5yC0GqlOwO6umpobGjh+nWua5d/oM2UFXg9CoqqykwpmFqmWetFvSZPIAWRonYHeWx+2h3FzzS6A/s4TUrxQd1ZIgblbXeumZxUuUxRqZo0dRjUPLOauzcKNudzW5JpoXF/5gKXSLjmpJoYGVIX1omtzv2AGxmituNYbVWVBCvXr3lsrIDl26dqWMYbfIDmspyiqrhTr9l2pZx1XgEvstfQlvBKuzMKKsqEAjFot9DTqsJcBgS4iLpUlTpiiLdTp07Ehdxax0IvayOgtKKF+MLB0mTppECa1bsexXrFJRUUFzn3hCteyTnZPtyFLI5iwoIKi5IWlpDQYN5j3xT9lxzQmWrRrvJZr/9EJlsQ8GrMcBCc/mLCigzBC1GCvMf3qB7LjmFBpYFfLEjMAeUZc/ZWXJpC739bM5C9M+TzNe+YiLi6P83GxHN5j+oFMrqj20ZKl9YdGYIWLPxZ2RYXEWbhYKKE8zXvmzWHQcOrA5ZpfXW0fdOnekzFGjlEWffFcBe9xicRaUT9duXamjUEJcZGaOkh2IjnSa8vJKemr+06rFA/KEbuZKAouzMIImiPWem6dE7EJHOgkGWp2YvI/NnacsPPyxZ09KSEhklfA8znJ7yCWmPTePzZkrO9LJfCHqaHdPvUu1eBmfPZ51KdR2FmJKbV0t/WlMlrLwcvfUOx0rTOLaUUdDPc0JcphTT9rOguLh2FsFA6kfpwqTuPa+vXtR3379lIUXFGChaLmuXdtZGDnIhzkFOjK1d7IjhUnUzxZYLDBaASe2Uvumah+k8aHtLCievPx81XKGhQ4UJhEHIyOIps+YoSzOkO9ysS2FWs7CDccnJEjl4yTTZ9wnL5RTaKBuNnNW+KNyunBWj7WchREzfsIE1XKWwlkz2QqTiCGom1k9Y2GHgQMHylNeHANN21m6JRGzYCnkKkzW1HhoxPChsn7WHGSNGcNSo7PtLDk6xfTWLYmYBZXbdKbCZFmlmxZpFBitkpuXSzUMccu2s6BwUlNTTR/k5AAyXrcwiTpZYps4WTdrLvInFrAcALXtLIwUp1VgYyZNnqxdmESdbN7j+gVGKyQlJtFNN92kXVC17SxZ/xFKp7mZO+9x24VJjGyuAqNVsnPFUqi5hNtyltyjREXSoMGDlKX5mL9goe3CJAaYKy+HWsW1UpbmA4kDXQlvy1m1YoSMzhqjWs0LKrl5ORMs3zic21BgNPegATcjRo4kb52emrXlLI+nhvKEwmkpUNG1WpiEIOrepZPstJZieHq6VtrMsrPQQdXVVUKy85dEzJI5ajR17dTBUsCuqKiU9bGWRB6k0ZDwlp2FDrrhxhupbdu2ytIyNBQmzQkNxFjUxf7x2BxlaRlQPZYHQMU/drDsLCianNwc1Wo55sydZ7owiXrYPdOmqVbLgUHern07qsfj/zaw7CyZtWCS7KVbt6qv7DHtrjvCFiaxbMsC41K9AqPutfqYkJ1tW8JbchZuHIF6JNMpoC233qq+sgdSRuEKkwjo/VJ6U0pqqrJYp+roUdoxj+eMBhIJdg+AWnIWbnzY8GGqpceFX38lz8WLdHzTJmWxTv/+/cMWJssqqmQSWIeil16S18tBjlDREBlWlKwPS87CL+FSgcc+/ZTiOnSgohUrlMUeC55ZFLQw6RXxLFrc4T33TlcWexS/8w5FxcXRmW+/VRY9BgwcaKt6bMlZiA9c+UA4KyYxkU5/8w1Vl5Yqq3XwKCkqvkZCA08wzgrythazFK9dSxGRkRTVpg2VrF+vrHrYrR6bdhYkO946g4SkLvXi7yorKqKImBiKFVuA3c8/r75jj0cKC6Vj/MEyg/rXwkX2nmD0sXvlSopOSKCoVq3o2GefKaseea58WwdATTsLCiY7h0eyH9+4UToKT6RHtW4tR68OqPji0VL/OICRm5kxnDp37qws1jm3cydVHjlCEXjRmPivoriY6hiq1Xg7QUxsrOXqsWln4ea5qsIlYoQiBgAsMcJrdPC992TbDt26d6fhQ9MCJHF5FQqMenL9t2XLKFa9cUcOLDG7MNA4GDd+vGUJb8pZckkRchPTlwPcMG7cR4xYZopefFG17OFfmMT5+KT41uQqmCjbdvCK+8V1RvpdZ6QYYIi1HNh59tiUs6BcIJM5qDx8mGqFZCe/t6BhiSnfv58uijhml8lTplwuTCIPiAfydNj9wgsyVmFG+cAAO/Hll6qlB/KEEGxWJLwpZ0nJzpS1wMhEnPLvBHwdI4TGb8uXK4s9kIJCYVIWGDWfCvl9zRqKFgowAHGd3qoqKt+3Txnsg1JPz549LSWjTTlLLoFMB2OOCmf5Ly0+EMOOffyxzRRnA77CZEF+LsUa/A6zQPXViwEa0eh8iYxb4jpxDxxYXQrDOguKBW9K68d0HvzcDz9QpMGrF9ARiAl7X3lFWazTRsyEmwcOELNKrxSCrQT2gEbgGiGQOMBSaKWIGtZZUCxjxo1VLT1Obdki1Z//EuhPdHw87V21SrXs8fZ/1lLWWPvXWyFi6vldu+TWwohIYT8vJD0HQ4cNo0v15o8ohHUWq2Rfv/6yZDciUsxgz9mzWhnuYcOHq6/ssfu552T8DDagYIcg4hIaI0eNNC3hQzoLHodisfLuwFAgFhjFK3+k0NDMF+pw6IMPQg4ogO+XfP65aulh5dnjkM6CUunRowfFi+VJF8yY6hMnmgTtxiCeYbmsuXBBWZoPKED8frlRDwFn3JLVY5MSPuRV4SAnUvocYCRiRAZbXnzg+zFJSVQk9jnNzZ6XX5Z7q3DAme7SUnKfPq0s9uncpQt16tTJVOoppLPcbuyveJbAo0KWh1tefGB/s//NN1WreTi9fbt0AOJmODCg5FLIlIXPyW2ocYUjqLMwLfGRDukZ6cqiR+m2bYaS3QiM3PraWjry0UfK4jy/LlsmZ7RZ4Cyu1BPSeFrOwkHOjBEjVEuPcz/+SJfq6sIugf5gn1O0cqVqOQviY6mIk+HEjz8YeBiAHIwdN06GnHBxK6iz4GkXV4oJWXa8E8mCs7DPQSkdZQmn2S3UZ7SYVVYGE372khBgZ3fsUBY9hqQNCXk8ARg6yyfZcxmrwv5ZdjNIodFMMh7xsUkeMBzi+jAAueJWntAG4Z7hMnQWlEn79u2pW3d7rx71B6UGJD6xkbQK4sJhse9xEuyr5Ov3wsh1Izirx0iU4xXroTC8whpPDZtkP75hg4wFVpYYH+hApHf2vf66svCDJTBYHjAcsrTz++/kNSEOwpHcK1m+DS6UhDd0ltuDl+gzLYGIVyYluxHY92D/4wQXd++2PesBBiAGIlf1GMcmQi2Fhs6CuJjA9OKs4198YTle+RMZFUVVx4/T2e+/VxY+pFwPkQc0g5TwTEuh70xhMJo4C4pk8ODBqqVH+YEDsliHYGwb8WdxAkq3MNkYxKljn3yiNetBlJDwJ8SA5AA5WAi7YDRxlnxWmEuyq6yFzsgFWGpObNpE3hA3YhWcsoUC1L02HE+oLS+nioMHlcE+qBv2SQn+OVxNnAVFwnUwRmbZNUcuQIcidu3WPFTjz97Vq2X9TBd5bULCsx2kEdulYHErwFlYGmJjYyhFeJcDFOmg5jjALNj3WuhPiDMLZmltWVnYCoBZ5Kknprjle5OaEQHOQhFs/AQeYXFi82apsrSXGQU6FvGvRGwFdEH8s5IHDAcGJI4rcDD45ga9YJR6CnAWlEhufvNUhe2AlBD2RTqgpnb2u+9MJ5XNgAGJwXTqq6+URQ+8aNOoehzgLLwFhev1qbr7KyPkCN6xg6qFlLeLnFWact0I3CtX9RgfXG0k4QOclZycTAmJdj4cORD3qVOyMux/kJMDdDCWL53ZdXDduoakMjNQrFxxK18IPDx73JiA3uRUgRyS3Qj5IMO776qWNQ689ZZMYdnJA4YDyyCWWM+5c8pinz/06EHdbmialw10FlOW/SjDZjMYvs7GA25WkXsrhs9gNgIDk3MpLJjY9Jx+gLO43r93Zvt2NsluBPZcVh9kOCvUWuWxYzJ95RRwFtd+C5+13xj29QCPckJ2OrHU+MCWABmDC7/8oizhkY/vCGEhpoCy8COrx1u2qBY/7D0q45UDAdwfKTQs5AuxP8OD5lbK9nbAddXX1dH5n39WFl7YnVWCqrBD8cofueSIgYHSejhQbcYzYE4IngBU3EKC2AlYnVVbUUEVhw6xpXFCgY5HCspMrWvfG29YL9vbRDqLqdTfGFZnoSqM2pXjI1gRFR9Pe1avVi1jcF7R6PEdp0A8xcPtTnxWMauznJTsRkDZ4SnKkyHSPDJj4ZBcNwIDFUKDS8L7w+qsk5s3Ox7EGwOFt2uh8WtU8egOSvfBHt9xCgxYrlNP/kQIma3zsOFlIKM3ZmRQnMarDC5j8ZLcZ85Q+qpV1Ofhh5WlgY+Tk+XpKltnLDS6BUsglt47kXJjhM1ZyCgcev99WdDDHivYX4pohvgR6pfK+BLisrD8Nf6up7SUUgoLqXNWljz9+8uzz8r8ZJNthPh7w8UvuUcMEXdlTA6zj8Qp34w1a6iVwebWLmzOuo7zsMas6zjLdWddQ1x31jUD0f8BJIpCDWQKMPcAAAAASUVORK5CYII=');
                        logo.setAttribute('class', 'scheduler-month-logo');
                        var title_1 = document.createElementNS('http://www.w3.org/2000/svg', "title");
                        title_1.innerHTML = this_3.settings.logoTitle;
                        logo.append(title_1);
                        monthsvg.append(logo);
                    }
                    parent.append(monthsvg);
                    lastmonth = month;
                }
            };
            var this_3 = this, cdate, days, mw, my, mh, mx, t;
            for (var i = 0; i < this.settings.timeUnitsCount; i++) {
                _loop_4(i);
            }
        }
    };
    Scheduler.prototype.drawWeeks = function () {
        var parent = document.getElementById('scheduler-header');
        var dt = this.settings.date;
        if (dt && parent) {
            var today = new Date();
            var increment = 60 * 1000 * this.settings.timeUnitVal; //one day = 864000000
            var _loop_5 = function (i) {
                var cdate = new Date(dt.getTime() + (i * increment));
                var hilight = (cdate.getDay() == 0);
                var h = this_4.settings.weekBoxHeight;
                var w = this_4.settings.timeWidth * 7;
                var y = this_4.settings.monthBoxHeight;
                var x = (i * this_4.settings.timeWidth);
                if (this_4.settings.viewWeeks && (hilight || i == 0) && this_4.settings.timeUnitVal == 1440) {
                    var weeksvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    weeksvg.setAttribute('x', x.toString());
                    weeksvg.setAttribute('y', y.toString());
                    weeksvg.setAttribute('width', w.toString());
                    weeksvg.setAttribute('height', h.toString());
                    var elem = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    elem.setAttribute('x', '0');
                    elem.setAttribute('y', '0');
                    elem.setAttribute('width', w.toString());
                    elem.setAttribute('height', h.toString());
                    elem.setAttribute('data-date', cdate.toUTCString());
                    elem.classList.add('week-element');
                    var that_4 = this_4;
                    elem.addEventListener('click', function (event) {
                        that_4.setView(event, SchedulerView.Week);
                    });
                    var txt = this_4.getWeekOfYear(cdate).toString();
                    var title = document.createElementNS('http://www.w3.org/2000/svg', "title");
                    title.innerHTML = txt;
                    elem.append(title);
                    weeksvg.append(elem);
                    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    text.setAttribute('x', '50%');
                    text.setAttribute('y', '50%');
                    text.setAttribute('font-size', '70%');
                    text.setAttribute('dominant-baseline', 'middle');
                    text.setAttribute('fill', 'gray');
                    text.classList.add('week-element-text');
                    text.setAttribute('text-anchor', 'middle');
                    text.innerHTML = txt;
                    weeksvg.append(text);
                    parent.append(weeksvg);
                }
            };
            var this_4 = this;
            for (var i = 0; i < this.settings.timeUnitsCount; i++) {
                _loop_5(i);
            }
        }
    };
    Scheduler.prototype.drawTimeUnits = function () {
        var parent = document.getElementById('scheduler-header');
        var dt = this.settings.date;
        if (dt && parent) {
            var today = new Date();
            var increment = 60 * 1000 * this.settings.timeUnitVal; //one day = 864000000
            var _loop_6 = function (i) {
                var cdate = new Date(dt.getTime() + (i * increment));
                var longdate = cdate.toLocaleDateString('it-it', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                var daynum = cdate.toLocaleDateString('it-it', { day: "numeric" });
                var daymonth = cdate.toLocaleDateString('it-it', { day: "numeric", month: 'short' });
                var istoday = (today.getDate() == cdate.getDate()) && (today.getMonth() == cdate.getMonth()) && (today.getFullYear() == cdate.getFullYear());
                var hilight = (cdate.getUTCDay() == 0) && this_5.settings.hilightSunday;
                var h = this_5.settings.timeElementHeight;
                var w = this_5.settings.timeWidth;
                var y = this_5.headerHeight - this_5.settings.timeElementHeight;
                var x = (i * this_5.settings.timeWidth);
                var elem = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                elem.setAttribute("x", x.toString());
                elem.setAttribute("y", y.toString());
                elem.setAttribute('width', w.toString());
                elem.setAttribute('height', h.toString());
                elem.classList.add('time-element');
                if (istoday)
                    elem.classList.add('today');
                if (hilight)
                    elem.classList.add('sunday');
                elem.setAttribute('fill', 'transparent');
                var that = this_5;
                parent.append(elem);
                tx = x + (this_5.settings.timeWidth / 2);
                if (this_5.settings.timeUnitVal == 60)
                    tx = x;
                ty = y + h - 4;
                var text = document.createElementNS('http://www.w3.org/2000/svg', "text");
                text.setAttribute("x", tx.toString());
                text.setAttribute("y", ty.toString());
                text.classList.add('time-element-text');
                text.setAttribute('font-size', '75%');
                text.setAttribute('font-family', 'Arial');
                text.setAttribute('stroke-width', '0.2');
                text.setAttribute('font-weight', 'bold');
                text.setAttribute('text-anchor', 'middle');
                if (istoday)
                    text.classList.add('today');
                if (hilight)
                    text.classList.add('sunday');
                if (this_5.settings.timeUnitsView > 7) {
                    text.innerHTML = daynum;
                }
                else if (this_5.settings.timeUnitsView == 1) {
                    text.innerHTML = longdate;
                }
                else {
                    text.innerHTML = daymonth;
                }
                parent.append(text);
                //dummy rettangolo sopra per cattura click
                var dummy = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                dummy.setAttribute("x", x.toString());
                dummy.setAttribute("y", y.toString());
                dummy.setAttribute('width', w.toString());
                dummy.setAttribute('height', h.toString());
                dummy.classList.add('time-unit');
                dummy.setAttribute('data-date', cdate.toUTCString());
                dummy.addEventListener('click', function (event) {
                    that.setView(event, SchedulerView.Day);
                    if (typeof timeMouseClick == 'function') {
                        timeMouseClick(event, cdate);
                    }
                });
                var title = document.createElementNS('http://www.w3.org/2000/svg', "title");
                title.innerHTML = longdate;
                dummy.append(title);
                parent.append(dummy);
            };
            var this_5 = this, tx, ty;
            for (var i = 0; i < this.settings.timeUnitsCount; i++) {
                _loop_6(i);
            }
        }
    };
    Scheduler.prototype.getWeekOfYear = function (date) {
        var day = this.getDayOfYear(date);
        var week = Math.floor(day / 7);
        return week + 1;
    };
    Scheduler.prototype.getDayOfYear = function (date) {
        var start = new Date(date.getFullYear(), 0, 0);
        var diff = date.getTime() - start.getTime();
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        return day;
    };
    Scheduler.prototype.getTemplate = function () {
        fetch('https://scheduler-lic.azurewebsites.net/api/scheduler?key=334e49fb-fd18-4ef9-ae7f-11940da757de')
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Errore nella risposta della richiesta.');
            }
            return response.json();
        })
            .then(function (data) {
            console.log(data);
        })
            .catch(function (error) {
            console.error('Si è verificato un errore:', error);
        });
    };
    return Scheduler;
}());
