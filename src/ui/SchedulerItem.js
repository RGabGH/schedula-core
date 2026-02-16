export class SchedulerItem {
    constructor() {
        this.From = 0;
        this.Effort = 0;
        this.Duration = 0;
        this.ControlBit = false;
    }
}
export class SchedulerItem2 {
    constructor(scheduler, itemData, calendar) {
        this.Duration = 0;
        this.ControlBit = false;
        this._element = null;
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
        this._calendar = null;
        this._id = "";
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
    get Id() {
        return this._id;
    }
    get Resource() {
        var _a;
        if (this._resource < 0) {
            (_a = this._scheduler.data.Resources) === null || _a === void 0 ? void 0 : _a.forEach((resource, ri) => {
                var _a;
                (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                    if (item.Id == this._data.Id) {
                        this._resource = ri;
                    }
                });
            });
        }
        return this._resource;
    }
    set Resource(value) {
        var _a, _b, _c, _d;
        if (value >= 0) {
            let resourceIndex = Math.trunc(value);
            let y = (this._settings.resourceHeight * resourceIndex) + this._scheduler.headerHeight;
            let x = parseFloat(((_a = this._element) === null || _a === void 0 ? void 0 : _a.getAttribute('x')) || '0');
            if (resourceIndex != this._resource) {
                (_b = this._scheduler.data.Resources[this.Resource].Items) === null || _b === void 0 ? void 0 : _b.splice((_c = this._scheduler.data.Resources[this.Resource].Items) === null || _c === void 0 ? void 0 : _c.indexOf(this._data), 1);
                if (!this._scheduler.data.Resources[resourceIndex].Items)
                    this._scheduler.data.Resources[resourceIndex].Items = [];
                this._data.Modified = true;
                (_d = this._scheduler.data.Resources[resourceIndex].Items) === null || _d === void 0 ? void 0 : _d.push(this._data);
                this._resource = resourceIndex;
                this._data.Resource = this._resource;
                this.moveTo(x, y);
            }
            else
                this.moveTo(x, y);
        }
    }
    get From() {
        return this._from;
    }
    set From(value) {
        if (value >= 0) {
            this._from = value;
            this.Offset = this.calcOffset();
        }
    }
    get Offset() {
        return this._offset;
    }
    set Offset(value) {
        if (value >= 0) {
            this._offset = value;
            this._from = this.calcFrom();
            if (this._calendar && this._settings.optimizeStart == true) {
                this._from = this._calendar.optimazeStart(this);
                this._offset = this.calcOffset();
            }
            let x = this.convertOffsetToX();
            if (this._element) {
                let y = parseFloat(this._element.getAttribute('y') || '0');
                this.moveTo(x, y);
            }
            this._data.Offset = this._offset;
            this._data.From = this._from;
            this._data.Modified = true;
            if (this._calendar && this._settings.calcEffort == true) {
                let w = this._calendar.calcDuration(this);
                w = this.getModulo(w, this._settings.gridStep, this._settings.gridStep);
                this._width = w;
                this._w = this._width / this._settings.timeUnitVal * this._settings.timeWidth;
                this.setWidth(this._w);
                this._data.Width = this._width;
            }
            this._data.To = this._from + this._width;
        }
    }
    get To() {
        return this._from + this._width;
    }
    get Width() {
        return this._width;
    }
    set Width(value) {
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
    }
    get W() {
        var _a, _b;
        return parseFloat((_b = (_a = this._element) === null || _a === void 0 ? void 0 : _a.getAttribute('width')) !== null && _b !== void 0 ? _b : '0');
    }
    set W(value) {
        if (value > 0) {
            let val = value * this._settings.timeUnitVal / this._settings.timeWidth;
            this.Width = val;
        }
    }
    get X() {
        var _a, _b;
        return parseFloat((_b = (_a = this._element) === null || _a === void 0 ? void 0 : _a.getAttribute('x')) !== null && _b !== void 0 ? _b : '0');
    }
    set X(value) {
        if (value > 0) {
            let offset = this.convertXToOffset(value);
            this.Offset = this.getModulo(offset, this._settings.gridStep, this._settings.gridStep);
            this._x = this.convertOffsetToX();
            this._data.Offset = this._offset;
            this._data.Modified = true;
        }
    }
    get Y() {
        var _a, _b;
        return parseFloat((_b = (_a = this._element) === null || _a === void 0 ? void 0 : _a.getAttribute('y')) !== null && _b !== void 0 ? _b : '0');
    }
    set Y(value) {
        var _a, _b;
        let min = 0;
        let max = (_b = (_a = this._scheduler.data.Resources) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        let r = Math.trunc((value - this._scheduler.headerHeight) / this._settings.resourceHeight);
        if (r < min)
            r = min;
        if (r > max)
            r = max;
        this.Resource = r;
    }
    get Effort() {
        return this._effort;
    }
    set Effort(value) {
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
    }
    moveTo(x, y) {
        var _a;
        if (!this._element)
            return;
        if ((_a = this._settings.animation) !== null && _a !== void 0 ? _a : false) {
            this.moveAnimatedTo(x, y);
        }
        this._element.setAttribute('x', x.toString());
        this._element.setAttribute('y', y.toString());
    }
    moveAnimatedTo(x, y) {
        var _a, _b;
        if (!this._element)
            return;
        let cx = parseFloat((_a = this._element.getAttribute('x')) !== null && _a !== void 0 ? _a : '0');
        let cy = parseFloat((_b = this._element.getAttribute('y')) !== null && _b !== void 0 ? _b : '0');
        let animatex = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animatex.setAttribute('attributeName', 'x');
        animatex.setAttribute('values', cx.toString() + ';' + x.toString());
        animatex.setAttribute('dur', '0.25s');
        this._element.append(animatex);
        animatex.beginElement();
        animatex.addEventListener('end', function () {
            animatex.remove();
        });
        let animatey = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animatey.setAttribute('attributeName', 'y');
        animatey.setAttribute('values', cy.toString() + ';' + y.toString());
        animatey.setAttribute('dur', '0.15s');
        this._element.append(animatey);
        animatey.beginElement();
        animatey.addEventListener('end', function () {
            animatey.remove();
        });
    }
    setWidth(width) {
        var _a;
        if (this._settings.animation == true) {
            this.setAnimatedWidth(width);
        }
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.setAttribute('width', width.toString());
    }
    setAnimatedWidth(width) {
        var _a;
        if (!this._element)
            return;
        let w = parseFloat((_a = this._element.getAttribute('width')) !== null && _a !== void 0 ? _a : '0');
        let animatew = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animatew.setAttribute('attributeName', 'width');
        animatew.setAttribute('values', w.toString() + ';' + width.toString());
        animatew.setAttribute('dur', '0.15s');
        this._element.append(animatew);
        animatew.beginElement();
        animatew.addEventListener('end', function () {
            animatew.remove();
        });
    }
    getModulo(value, step, min) {
        const modulo = (value - (min !== null && min !== void 0 ? min : 0)) % step;
        const correction = modulo > step / 2 ? step - modulo : -modulo;
        let result = value + correction;
        result = min != null && result < min ? min : result;
        return result;
    }
    calcFrom() {
        let date = this._settings.date;
        let ticks = this._offset;
        if (date) {
            ticks += (date.getTime() / 60000);
        }
        return ticks;
    }
    calcOffset() {
        let date = this._settings.date;
        let ticks = this._from;
        if (date) {
            ticks -= (date.getTime() / 60000);
        }
        return ticks;
    }
    convertOffsetToX() {
        let x = this._offset / this._settings.timeUnitVal * this._settings.timeWidth;
        return x;
    }
    convertXToOffset(x) {
        let offset = x * this._settings.timeUnitVal / this._settings.timeWidth;
        return offset;
    }
    convertWToTicks(w) {
        let ticks = w / this._settings.timeWidth * this._settings.timeUnitVal;
        return ticks;
    }
    checkInterference() {
        var _a, _b, _c;
        let result = true;
        let x1 = this.Offset;
        let x2 = this.Offset + this.Width;
        if (this.Resource >= 0 && this.Resource < ((_b = (_a = this._scheduler.data.Resources) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0)) {
            (_c = this._scheduler.data.Resources[this.Resource].Items) === null || _c === void 0 ? void 0 : _c.forEach((item) => {
                if (item.Id != this._data.Id) {
                    let cx1 = item.Offset;
                    let cx2 = item.Offset + item.Width;
                    result = result && ((x2 <= cx1) || (x1 >= cx2));
                }
            });
        }
        return result;
    }
}
//# sourceMappingURL=SchedulerItem.js.map