(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

  // src/models/SchedulaSettings.js
  var SchedulaSettings = class {
    constructor() {
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
      this.resourceHeight = 48;
      this.resourceWidth = 200;
      this.resourceImages = true;
      this.resourceChange = true;
      this.resCollapsedWidth = 1e3;
      this.splitBarinitPos = 300;
      this.infoElementSize = 15;
      this.resRoundRect = 2;
      this.resPadding = 2;
      this.roundRect = 5;
      this.progressBarPattern = true;
      this.resUnitsView = 0;
      this.timeUnitsView = 30;
      this.timeUnitVal = 1440;
      this.gridStep = 1440;
      this.gridOffset = 0;
      this.timeUnitsCount = 90;
      this.timeWidth = 144;
      this.timeElementHeight = 15;
      this.monthBoxHeight = 50;
      this.weekBoxHeight = 15;
      this.infoElementHeight = 15;
      this.viewMonthLogo = true;
      this.logoTitle = "";
      this.splitterWidth = 10;
      this.sidebarMaxWidth = 350;
      this.sidebarMinWidth = 40;
      this.date = /* @__PURE__ */ new Date("2023-09-21");
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
      this.itemTextSize = "30%";
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
      this.template = "";
      this.months = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre"
      ];
    }
  };

  // src/ui/SchedulaTemplate.js
  var SchedulaTemplate = class {
    constructor() {
      this.svgString = ` 
    
    <svg 
    
            xmlns='http://www.w3.org/2000/svg' 
            id="main-svg" viewBox="0 0 1000 1000"
            version="1.1" 
           
          
            
         
            > 
            <pattern id="pattern-chevron" x="0" y="0" patternUnits="objectBoundingBox" width="100" height="180" viewBox="0 0 10 18"> 
         
           
            <g id="chevron">
            
              <path class="left" d="M0 0l5 3v5l-5 -3z"></path>
              <path class="right" d="M10 0l-5 3v5l5 -3"></path>
            </g>
           
           
            <use x="0" y="9" xlink:href="#chevron"></use>
          
          </pattern>
          <pattern id="progress-pattern" x="0" y="0" width="50" height="140" patternUnits="userSpaceOnUse" >    
          <rect x="0" y="0" width="25" height="140" fill="black" opacity="0.4"/>
          <rect x="25" y="0" width="25" height="140" fill="white" opacity="0.4"/>
          <animateTransform attributeName="patternTransform" type="rotate" from="30" to="30" dur="4s" repeatCount="indefinite"/> 
          <animateTransform attributeName="patternTransform" type="translate" from="0" to="100" dur="4s" repeatCount="indefinite"  additive="sum"/>  
        </pattern>
          <pattern
        id="p_circles"
        x=".125"
        y=".125"
        width=".25"
        height=".25"
        patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="10" />
      </pattern>
      <pattern id="obliqueLines"
      x="0" y="0" width="2" height="2"
      patternUnits="userSpaceOnUse" 
      patternTransform="rotate(45)">
    <rect x="0" y="0" width="1" height="0.2" style="stroke: 2; fill: #0000ff" />
    
    </pattern>
            <animate id="vanim" attributeName="viewBox" 
                to="" 
                from="" 
                dur="0.3s" 
                fill="freeze" 
                repeatCount="1" 
                begin="indefinite"/> 
    
            <defs id="defs" > 
                <marker id="circle-marker-end" markerWidth="8" markerHeight="8" refX="5" class="marker-end" refY="5" orient="auto">
                    <circle class="link-wire-marker-end" cx="5" cy="5" r="2"></circle>
                </marker>
    
                <linearGradient id="gradV1" x1="0%" y1="0%" x2="0%" y2="100%"> 
                    <stop class="grad-color1" offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0.8" /> 
                    <stop class="grad-color2" offset="100%" style="stop-color:rgb(123, 175, 196);stop-opacity:0.8" /> 
                
                </linearGradient> 
               <linearGradient id="gradH1" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop  class="grad-color1" offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0.8" />
                   <stop  class="grad-color2" offset="100%" style="stop-color:rgb(123, 175, 196);stop-opacity:0.8" />
    
                </linearGradient>
    
                
                <g id="stars" transform="scale(0.7)">
                    <path
                       transform="rotate(16.166027,247.23984,-34.317252)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,251.21746,-4.9164116)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-4"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,255.36117,24.260777)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-2"
                       style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,259.48588,53.211077)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-9"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,263.61059,82.161379)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-5"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                </g>
                <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
                            <path d="M-1,1 l2,-2
                                    M0,4 l4,-4
                                    M3,5 l2,-2" 
                                    style="stroke:#00ff00; stroke-width:0.7" fill="orange"/>
                </pattern>
            </defs>'
    
    
        <g id="wrapper" transform="translate(0,0)">
            <g  id="scheduler-items" left="0px" transform="translate(0,0)">
    
                <animateTransform  
                    xlink:href="#scheduler-items"
                    attributeName="transform" 
                    attributeType="XML"
                    type="translate"
                    from="0"
                    to="50"
                    dur="0.4s"
    
                    calcMode="spline"
                    keyTimes="0;1" 
                    keySplines=" .4 0 .6 1  " 
                    repeatCount="1"
                    begin="indefinite"
                    fill="freeze" />
    
    
                <g id="scheduler-header">
                
                </g>
                <g id="scheduler-background" transform="translate(0,0)">
                
                </g>
    
    
    
            </g>
            
        
        </g>
        <svg id="scheduler-sidebar" x="0" y="0" width="6000" height="100%" >
            <svg id="scheduler-resources" x="0" y="0" height="100%" width="calc(100% - 40px)">
            </svg>
            <svg id="scheduler-splitter" x="calc(100% - 80px)" y="0" width="80" height="100%" >
             
                <rect x="calc(100% - 45px)" y="0" width="10" height="100%" class="splitter" fill="white" style="cursor:ew-resize;"/>
               
          
            </svg>
        </svg>
      
    </svg>
    
    <svg id="shifter-dx" class="shifter svg-overlay right" style="visibility:hidden">
        <g transform="scale(4)">
            <circle  cx="8" cy="8" r="8" fill="white" ></circle>
            <path  d='M 3, 2 L 5,4 L 3, 6' stroke="#6699cc" fill="none" transform="scale(2)"/>
        </g>
    </svg>
    
    <svg id="shifter-sx" class="shifter svg-overlay left" style="visibility:hidden">
            
        <g transform="scale(4) rotate(180 8 8)">
            <circle  cx="8" cy="8" r="8" fill="white" ></circle>
            <path  d='M 3, 2 L 5,4 L 3, 6' stroke="#6699cc" fill="none" transform="scale(2)"/>
        </g>
    </svg>
    
    `;
    }
  };

  // src/models/SchedulaCalendar.js
  var SchedulaCalendarItem = class {
    constructor() {
      this._duration = 1440;
      this._denominator = 6e4;
      this._capacity = 0;
      this._step = 60;
      this._type = "";
      this._day = -1;
      this._orderIndex = 1e3;
      var now = /* @__PURE__ */ new Date();
      var date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      this._from = Math.trunc(date.getTime() / this._denominator);
      this.type = "event";
    }
    get capacity() {
      return this._capacity;
    }
    set capacity(val) {
      this._capacity = val;
    }
    get day() {
      return this._day;
    }
    set day(val) {
      if (val >= -1 && val <= 6)
        this._day = val;
    }
    get dateFrom() {
      return new Date(this._from * this._denominator).toString();
    }
    get dateTo() {
      return new Date((this._from + this._duration) * this._denominator);
    }
    get duration() {
      return this._duration;
    }
    set denominator(value) {
      this.from *= this._denominator;
      this.from /= value;
      this._capacity *= this._denominator;
      this._capacity /= value;
      this._denominator = value;
    }
    set duration(value) {
      var duration = value;
      duration = this.getModulo(duration);
      if (duration > 0) {
        this._duration = duration;
      }
    }
    set from(value) {
      let f = Math.trunc(value / this._denominator);
      f = this.getModulo(f);
      this._from = f;
    }
    get from() {
      return this._from;
    }
    get to() {
      return this._from + this._duration;
    }
    set type(value) {
      this._type = value;
      if (value == "rule") {
        this._orderIndex = 0;
      } else if (value == "calendar") {
        this._orderIndex = 1;
      } else if (value == "event") {
        this._orderIndex = 2;
      } else {
        this._orderIndex = 1e3;
        this._type = "event";
      }
    }
    get type() {
      return this._type;
    }
    get orderIndex() {
      return this._orderIndex;
    }
    set to(value) {
      let v = Math.trunc(value / this._denominator);
      v = this.getModulo(v);
      if (v > 0 && v > this._from) {
        this._duration = v - this._from;
      }
    }
    set dateFrom(value) {
      let dt = value;
      if (!value.includes("T"))
        dt += "T00:00:00";
      let date = new Date(dt);
      if (date.toString() != "Invalid Date") {
        this.from = date.getTime();
      } else
        console.log(value + " - Invalid Date");
    }
    getModulo(value) {
      let v = value;
      let r = value % this._step;
      if (r > this._step / 2)
        v = v - r + this._step;
      else
        v -= r;
      return v;
    }
  };
  var SchedulaCalendar = class {
    constructor() {
      this._items = [];
      this._capacity = 0;
      this._denominator = 6e4;
      this._reference = 1440;
      this._step = 15;
    }
    newItem() {
      let item = new SchedulaCalendarItem();
      this._items.push(item);
      return item;
    }
    addItem(item) {
      if (item instanceof SchedulaCalendarItem) {
        this._items.push(item);
        return item;
      } else
        return null;
    }
    get items() {
      return this._items;
    }
    get itemCount() {
      return this.items.length;
    }
    calcDuration(item) {
      let duration = 0;
      let effort = 0;
      let sum = 0;
      let denom = this._denominator;
      let reference = this._reference;
      let step = this._step;
      let minutes = 0;
      let hours = 0;
      let dayMinTot = 0;
      while (effort < item.Effort) {
        let cursor = item.From + sum;
        let e = 0;
        let dt = new Date(cursor * denom);
        let capacity = this.getCapacity(cursor, dt.getUTCDay());
        minutes = dt.getUTCMinutes();
        hours = dt.getUTCHours();
        dayMinTot = hours * 60 + minutes;
        if (capacity > 0) {
          if (dayMinTot >= capacity)
            e = 0;
          else
            e = step;
        }
        effort += e;
        effort = Math.round(effort * 1e3) / 1e3;
        sum += step;
      }
      duration = sum;
      if (duration < step)
        duration = step;
      return duration;
    }
    calcEffort(item) {
      let duration = item.Width;
      let d = 0;
      let effort = 0;
      let denom = this._denominator;
      let reference = this._reference;
      let step = this._step;
      let minutes = 0;
      let hours = 0;
      let dayMinTot = 0;
      while (d < duration) {
        let cursor = item.From + d;
        let e = 0;
        let dt = new Date(cursor * denom);
        minutes = dt.getUTCMinutes();
        hours = dt.getUTCHours();
        dayMinTot = hours * 60 + minutes;
        let capacity = this.getCapacity(cursor, dt.getUTCDay());
        if (capacity > 0) {
          if (dayMinTot >= capacity)
            e = 0;
          else
            e = step;
        }
        effort += e;
        effort = Math.ceil(effort * 100) / 100;
        d += step;
      }
      return effort;
    }
    optimazeStart(item) {
      let sum = 0;
      let denom = this._denominator;
      let reference = this._reference;
      let step = this._step;
      let capacity = 0;
      let go = true;
      console.log("optimization start");
      while (go && sum < reference * 20) {
        let cursor = item.From + sum;
        let dt = new Date(cursor * denom);
        let minutes = dt.getUTCMinutes();
        let hours = dt.getUTCHours();
        let dayMinTot = hours * 60 + minutes;
        capacity = this.getCapacity(cursor, dt.getUTCDay());
        if (capacity == 0 || dayMinTot >= capacity) {
          sum += step;
          go = true;
        } else
          go = false;
      }
      return item.From + sum;
    }
    getCapacity(instant, day) {
      let capacity = this._capacity;
      let dayRuleItem = this.items.filter((item) => item.type == "rule" && item.day == day && item.from <= instant && item.to > instant)[0];
      capacity = dayRuleItem ? dayRuleItem.capacity : capacity;
      if (dayRuleItem == void 0) {
        let capacityRuleItem = this.items.filter((item) => item.type == "rule" && item.day == -1 && item.from <= instant && item.to > instant)[0];
        capacity = capacityRuleItem ? capacityRuleItem.capacity : capacity;
      }
      let calendarItem = this.items.filter((item) => item.type == "calendar" && item.day == -1 && item.from <= instant && item.to > instant)[0];
      capacity = calendarItem ? calendarItem.capacity : capacity;
      return capacity;
    }
    get reference() {
      return this._reference;
    }
  };
  var CalendarMousePos = class {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.timeOffset = 0;
      this.resourceIndex = 0;
      this.date = /* @__PURE__ */ new Date();
    }
  };

  // src/ui/SchedulaItem.js
  var SchedulaItem = class {
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
          var _a2;
          (_a2 = resource.Items) === null || _a2 === void 0 ? void 0 : _a2.forEach((item) => {
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
        let y = this._settings.resourceHeight * resourceIndex + this._scheduler.headerHeight + this._settings.itemsPadding;
        let x = parseFloat(((_a = this._element) === null || _a === void 0 ? void 0 : _a.getAttribute("x")) || "0");
        if (resourceIndex != this._resource) {
          (_b = this._scheduler.data.Resources[this.Resource].Items) === null || _b === void 0 ? void 0 : _b.splice((_c = this._scheduler.data.Resources[this.Resource].Items) === null || _c === void 0 ? void 0 : _c.indexOf(this._data), 1);
          if (!this._scheduler.data.Resources[resourceIndex].Items)
            this._scheduler.data.Resources[resourceIndex].Items = [];
          this._data.Modified = true;
          (_d = this._scheduler.data.Resources[resourceIndex].Items) === null || _d === void 0 ? void 0 : _d.push(this._data);
          this._resource = resourceIndex;
          this._data.Resource = this._resource;
          this.moveTo(x, y);
        } else
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
          let y = parseFloat(this._element.getAttribute("y") || "0");
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
        } else
          this._effort = this._width;
        this._data.Width = this._width;
        this._data.Effort = this.Effort;
        this._data.To = this._from + this._width;
        this._data.Modified = true;
      }
    }
    get W() {
      var _a, _b;
      return parseFloat((_b = (_a = this._element) === null || _a === void 0 ? void 0 : _a.getAttribute("width")) !== null && _b !== void 0 ? _b : "0");
    }
    set W(value) {
      if (value > 0) {
        let val = value * this._settings.timeUnitVal / this._settings.timeWidth;
        this.Width = val;
      }
    }
    get X() {
      var _a, _b;
      return parseFloat((_b = (_a = this._element) === null || _a === void 0 ? void 0 : _a.getAttribute("x")) !== null && _b !== void 0 ? _b : "0");
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
      return parseFloat((_b = (_a = this._element) === null || _a === void 0 ? void 0 : _a.getAttribute("y")) !== null && _b !== void 0 ? _b : "0");
    }
    set Y(value) {
      var _a, _b;
      let min = 0;
      let max = (_b = (_a = this._scheduler.data.Resources) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
      let r = Math.trunc((value - this._scheduler.headerHeight - this._settings.itemsPadding) / this._settings.resourceHeight);
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
        } else
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
      this._element.setAttribute("x", x.toString());
      this._element.setAttribute("y", y.toString());
    }
    moveAnimatedTo(x, y) {
      var _a, _b;
      if (!this._element)
        return;
      let cx = parseFloat((_a = this._element.getAttribute("x")) !== null && _a !== void 0 ? _a : "0");
      let cy = parseFloat((_b = this._element.getAttribute("y")) !== null && _b !== void 0 ? _b : "0");
      let animatex = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animatex.setAttribute("attributeName", "x");
      animatex.setAttribute("values", cx.toString() + ";" + x.toString());
      animatex.setAttribute("dur", "0.25s");
      this._element.append(animatex);
      animatex.beginElement();
      animatex.addEventListener("end", function() {
        animatex.remove();
      });
      let animatey = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animatey.setAttribute("attributeName", "y");
      animatey.setAttribute("values", cy.toString() + ";" + y.toString());
      animatey.setAttribute("dur", "0.15s");
      this._element.append(animatey);
      animatey.beginElement();
      animatey.addEventListener("end", function() {
        animatey.remove();
      });
    }
    setWidth(width) {
      var _a;
      if (this._settings.animation == true) {
        this.setAnimatedWidth(width);
      }
      (_a = this._element) === null || _a === void 0 ? void 0 : _a.setAttribute("width", width.toString());
    }
    setAnimatedWidth(width) {
      var _a;
      if (!this._element)
        return;
      let w = parseFloat((_a = this._element.getAttribute("width")) !== null && _a !== void 0 ? _a : "0");
      let animatew = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animatew.setAttribute("attributeName", "width");
      animatew.setAttribute("values", w.toString() + ";" + width.toString());
      animatew.setAttribute("dur", "0.15s");
      this._element.append(animatew);
      animatew.beginElement();
      animatew.addEventListener("end", function() {
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
        ticks += date.getTime() / 6e4;
      }
      return ticks;
    }
    calcOffset() {
      let date = this._settings.date;
      let ticks = this._from;
      if (date) {
        ticks -= date.getTime() / 6e4;
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
            result = result && (x2 <= cx1 || x1 >= cx2);
          }
        });
      }
      return result;
    }
  };

  // src/models/SchedulaView.js
  var SchedulaView;
  (function(SchedulaView2) {
    SchedulaView2["Year"] = "year";
    SchedulaView2["Month"] = "month";
    SchedulaView2["Week"] = "week";
    SchedulaView2["Day"] = "day";
    SchedulaView2["Resource"] = "resource";
    SchedulaView2["Time"] = "time";
    SchedulaView2["Info"] = "info";
    SchedulaView2["None"] = "none";
  })(SchedulaView || (SchedulaView = {}));
  var mousePos = class {
    constructor() {
      this.x = 0;
      this.y = 0;
    }
  };

  // src/plugins/DefaultPopupPlugin.ts
  var DefaultPopupPlugin = class {
    constructor() {
      this.name = "defaultpopup";
      this._currentItem = null;
      /**
       * Custom brand color used in the popup header. Override as needed.
       */
      this.brandColor = "#1e293b";
    }
    init(core) {
      this._core = core;
      if (!core.settings.popupProvider) {
        core.settings.popupProvider = this;
      }
    }
    destroy() {
      const popup = document.getElementById("scheduler-default-popup");
      if (popup) popup.remove();
      this._core = null;
    }
    onItemClick(event, element) {
      const item = element == null ? void 0 : element.item;
      if (!item) return;
      this._currentItem = item;
      const popup = this._ensurePopup();
      this._populatePopup(popup, item);
      popup.style.display = "block";
    }
    show(item, event, scheduler) {
      this._currentItem = item;
      const popup = this._ensurePopup();
      this._populatePopup(popup, item);
      popup.style.display = "block";
    }
    refreshItem(item) {
      var _a;
      const popup = document.getElementById("scheduler-default-popup");
      if (!popup || popup.style.display === "none") return;
      this._currentItem = item;
      const fmt = (mins) => mins != null ? new Date(Math.trunc(mins) * 6e4).toLocaleString(void 0, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }) : "";
      const fmtMins = (mins) => mins != null ? `${Math.floor(mins / 60)}h ${String(Math.trunc(mins) % 60).padStart(2, "0")}m` : "";
      popup.querySelector("#scheduler-default-popup-title").textContent = item.Text || "Task";
      popup.querySelector("#default-popup-field-text").value = item.Text || "";
      popup.querySelector("#default-popup-field-desc").value = item.Description || "";
      popup.querySelector("#default-popup-field-from").value = fmt(item.From);
      popup.querySelector("#default-popup-field-to").value = fmt(item.To);
      popup.querySelector("#default-popup-field-duration").value = fmtMins(item.Width);
      popup.querySelector("#default-popup-field-effort").value = fmtMins(item.Effort);
      this._applyColor(popup, item.Color1);
      popup.querySelector("#default-popup-field-completion").value = (_a = item.Completion) != null ? _a : "";
      popup.querySelector("#default-popup-field-ref").value = item.Reference || "";
    }
    hide() {
      const popup = document.getElementById("scheduler-default-popup");
      if (popup) popup.style.display = "none";
    }
    _ensurePopup() {
      let popup = document.getElementById("scheduler-default-popup");
      if (!popup) {
        popup = document.createElement("div");
        popup.id = "scheduler-default-popup";
        popup.className = "scheduler-popup";
        popup.style.cssText = "display:none;position:fixed;z-index:9999;";
        popup.innerHTML = `
                <div class="popup-container">
                    <div class="popup-header" id="scheduler-default-popup-header" style="background:${this.brandColor};">
                        <button class="close-button" id="scheduler-default-popup-close" style="color:#fff;">&#x2715;</button>
                        <span id="scheduler-default-popup-title" style="color:#fff;">Task</span>
                    </div>
                    <div class="popup-content">
                        <div class="tab">
                            <button class="tab-btn active" data-tab="general">General</button>
                            <button class="tab-btn" data-tab="data">Data</button>
                        </div>
                        <div class="tabcontent active" id="scheduler-default-popup-tab-general">
                            <div class="formgroup"><label>Text</label><input class="taskinput" id="default-popup-field-text" type="text"></div>
                            <div class="formgroup"><label>Description</label><input class="taskinput" id="default-popup-field-desc" type="text"></div>
                            <div class="formgroup formgroup-inline"><label>From</label><input class="taskinput" id="default-popup-field-from" type="text" readonly><label>To</label><input class="taskinput" id="default-popup-field-to" type="text" readonly></div>
                            <div class="formgroup formgroup-inline"><label>Duration</label><input class="taskinput" id="default-popup-field-duration" type="text" readonly title="Tempo totale (inclusi non lavorativi)"><label>Effort</label><input class="taskinput" id="default-popup-field-effort" type="text" readonly title="Tempo lavorativo effettivo"></div>
                            <div class="formgroup"><label>Color</label><div class="color-field-wrapper"><div class="color-swatch" id="default-popup-color-swatch"></div><span class="color-field-label" id="default-popup-color-label">Non assegnato</span><input type="color" id="default-popup-field-color" tabindex="-1" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none"><button type="button" class="color-clear-btn" id="default-popup-color-clear">&#x2715;</button></div></div>
                            <div class="formgroup"><label>Completion %</label><input class="taskinput" id="default-popup-field-completion" type="number" min="0" max="100"></div>
                            <div class="formgroup"><label>Reference</label><input class="taskinput" id="default-popup-field-ref" type="text"></div>
                        </div>
                        <div class="tabcontent" id="scheduler-default-popup-tab-data">
                            <!-- Custom fields from item.data are injected here at runtime -->
                            <div id="default-popup-custom-fields" style="padding:8px;font-size:13px;color:#475569;"></div>
                        </div>
                    </div>
                    <div class="popup-footer">
                        <button class="scheduler-popup-btn" id="default-popup-btn-cancel">Cancel</button>
                        <button class="scheduler-popup-btn" id="default-popup-btn-save">Save</button>
                    </div>
                </div>`;
        document.body.appendChild(popup);
        const colorSwatch = popup.querySelector("#default-popup-color-swatch");
        const colorInput = popup.querySelector("#default-popup-field-color");
        const colorLabel = popup.querySelector("#default-popup-color-label");
        const colorClear = popup.querySelector("#default-popup-color-clear");
        colorSwatch.addEventListener("click", () => colorInput.click());
        colorInput.addEventListener("input", () => {
          colorSwatch.style.background = colorInput.value;
          colorSwatch.dataset.color = colorInput.value;
          colorSwatch.classList.add("has-color");
          colorLabel.textContent = colorInput.value;
          colorClear.style.display = "";
        });
        colorClear.addEventListener("click", () => {
          colorSwatch.style.background = "";
          colorSwatch.dataset.color = "";
          colorSwatch.classList.remove("has-color");
          colorLabel.textContent = "Non assegnato";
          colorClear.style.display = "none";
        });
        popup.querySelectorAll(".tab-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            var _a;
            popup.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
            popup.querySelectorAll(".tabcontent").forEach((t) => t.classList.remove("active"));
            btn.classList.add("active");
            const tab = btn.dataset.tab;
            (_a = document.getElementById(`scheduler-default-popup-tab-${tab}`)) == null ? void 0 : _a.classList.add("active");
          });
        });
        this._makePopupDraggable(popup);
      }
      return popup;
    }
    _populatePopup(popup, item) {
      var _a;
      const core = this._core;
      const fmt = (mins) => mins != null ? new Date(Math.trunc(mins) * 6e4).toLocaleString(void 0, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }) : "";
      const fmtMins = (mins) => mins != null ? `${Math.floor(mins / 60)}h ${String(Math.trunc(mins) % 60).padStart(2, "0")}m` : "";
      popup.querySelector("#scheduler-default-popup-title").textContent = item.Text || "Task";
      popup.querySelector("#default-popup-field-text").value = item.Text || "";
      popup.querySelector("#default-popup-field-desc").value = item.Description || "";
      popup.querySelector("#default-popup-field-from").value = fmt(item.From);
      popup.querySelector("#default-popup-field-to").value = fmt(item.To);
      popup.querySelector("#default-popup-field-duration").value = fmtMins(item.Width);
      popup.querySelector("#default-popup-field-effort").value = fmtMins(item.Effort);
      this._applyColor(popup, item.Color1);
      popup.querySelector("#default-popup-field-completion").value = (_a = item.Completion) != null ? _a : "";
      popup.querySelector("#default-popup-field-ref").value = item.Reference || "";
      const customContainer = popup.querySelector("#default-popup-custom-fields");
      customContainer.innerHTML = "";
      if (item.data && typeof item.data === "object") {
        Object.entries(item.data).forEach(([key, value]) => {
          const row = document.createElement("div");
          row.className = "formgroup";
          row.innerHTML = `<label>${key}</label><input class="taskinput" type="text" value="${value != null ? value : ""}" readonly data-custom-key="${key}">`;
          customContainer.appendChild(row);
        });
      } else {
        customContainer.innerHTML = '<p style="color:#94a3b8;font-style:italic;">No custom data (item.data) available.</p>';
      }
      const saveBtn = popup.querySelector("#default-popup-btn-save");
      const newSave = saveBtn.cloneNode(true);
      saveBtn.parentNode.replaceChild(newSave, saveBtn);
      newSave.addEventListener("click", () => {
        item.Text = popup.querySelector("#default-popup-field-text").value;
        item.Description = popup.querySelector("#default-popup-field-desc").value;
        const swatchEl = popup.querySelector("#default-popup-color-swatch");
        item.Color1 = swatchEl.dataset.color || void 0;
        const comp = parseInt(popup.querySelector("#default-popup-field-completion").value);
        item.Completion = isNaN(comp) ? void 0 : comp;
        item.Reference = popup.querySelector("#default-popup-field-ref").value;
        popup.style.display = "none";
        core.refreshItem(item);
        if (typeof window.modified === "function") window.modified();
      });
      const cancelBtn = popup.querySelector("#default-popup-btn-cancel");
      const newCancel = cancelBtn.cloneNode(true);
      cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);
      newCancel.addEventListener("click", () => {
        popup.style.display = "none";
      });
      const closeBtn = popup.querySelector("#scheduler-default-popup-close");
      const newClose = closeBtn.cloneNode(true);
      closeBtn.parentNode.replaceChild(newClose, closeBtn);
      newClose.addEventListener("click", () => {
        popup.style.display = "none";
      });
      if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.left = "50%";
        popup.style.top = "50%";
        popup.style.transform = "translate(-50%,-50%)";
      }
    }
    _applyColor(popup, color) {
      const swatch = popup.querySelector("#default-popup-color-swatch");
      const label = popup.querySelector("#default-popup-color-label");
      const clearBtn = popup.querySelector("#default-popup-color-clear");
      const input = popup.querySelector("#default-popup-field-color");
      if (color) {
        swatch.style.background = color;
        swatch.dataset.color = color;
        swatch.classList.add("has-color");
        label.textContent = color;
        input.value = color;
        clearBtn.style.display = "";
      } else {
        swatch.style.background = "";
        swatch.dataset.color = "";
        swatch.classList.remove("has-color");
        label.textContent = "Non assegnato";
        input.value = "#5762ca";
        clearBtn.style.display = "none";
      }
    }
    _makePopupDraggable(popup) {
      const header = popup.querySelector("#scheduler-default-popup-header");
      if (!header) return;
      let isDragging = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;
      header.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        const rect = popup.getBoundingClientRect();
        startLeft = rect.left + window.scrollX;
        startTop = rect.top + window.scrollY;
        popup.style.left = startLeft + "px";
        popup.style.top = startTop + "px";
        popup.style.transform = "none";
        e.preventDefault();
      });
      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        popup.style.left = startLeft + e.clientX - startX + "px";
        popup.style.top = startTop + e.clientY - startY + "px";
      });
      document.addEventListener("mouseup", () => {
        isDragging = false;
      });
    }
  };

  // src/SchedulaCore.ts
  var SchedulaCore = class {
    constructor(scheduler, jsonData, settings) {
      this.version = "5.0.0";
      this.scheduler_id = "scheduler";
      this.headerHeight = 100;
      this.resourceFilteredCount = 0;
      this.splitBarPos = 0;
      this.calendarMousePos = new CalendarMousePos();
      this.mpos = new mousePos();
      this.schedulerMousePos = new mousePos();
      this.action = "";
      this.linkPoint = new mousePos();
      this.linkId = "";
      // Was SVGSVGElement | HTMLElement in logic, using any to contain complexity
      this.actionMemoPos = new mousePos();
      this.ratio = 1;
      this.zoom = 1;
      this.schedulerSVG = null;
      this.schedulerItems = null;
      this.schedulerContainer = null;
      this.splitBar = null;
      this.template = "";
      this.calendar = null;
      this._clickStart = { x: 0, y: 0 };
      this.itemConnPoint1 = null;
      this.itemConnPoint2 = null;
      this.itemConnPoint3 = null;
      this.itemConnPoint4 = null;
      this.connLine = null;
      this.currentView = SchedulaView.Month;
      /** Plugin registry — maps plugin name to plugin instance */
      this._plugins = /* @__PURE__ */ new Map();
      this.eventsSetup = false;
      this.scheduler_id = scheduler;
      this.data = jsonData;
      if (settings) {
        this.settings = settings;
      } else {
        this.settings = new SchedulaSettings();
      }
      ;
      this.initCalendar();
    }
    // ── Public accessors for plugin use ──────────────────────────────────────
    get schedulerSVGElement() {
      return this.schedulerSVG;
    }
    get schedulerItemsElement() {
      return this.schedulerItems;
    }
    get schedulerId() {
      return this.scheduler_id;
    }
    get currentAction() {
      return this.action;
    }
    set currentAction(val) {
      this.action = val;
    }
    get mousePosition() {
      return this.mpos;
    }
    get actionMemoPosition() {
      return this.actionMemoPos;
    }
    set actionMemoPosition(val) {
      this.actionMemoPos = val;
    }
    get calendarPosition() {
      return this.calendarMousePos;
    }
    get viewRatio() {
      return this.ratio;
    }
    get splitBarElement() {
      return this.splitBar;
    }
    get splitBarCurrentPos() {
      return this.splitBarPos;
    }
    set splitBarCurrentPos(val) {
      this.splitBarPos = val;
    }
    get currentElement() {
      return this.element;
    }
    set currentElement(val) {
      this.element = val;
    }
    get linkPointPos() {
      return this.linkPoint;
    }
    set linkPointPos(val) {
      this.linkPoint = val;
    }
    get currentLinkId() {
      return this.linkId;
    }
    set currentLinkId(val) {
      this.linkId = val;
    }
    get connPointElements() {
      return {
        p1: this.itemConnPoint1,
        p2: this.itemConnPoint2,
        p3: this.itemConnPoint3,
        p4: this.itemConnPoint4,
        line: this.connLine
      };
    }
    set connPointElements(val) {
      this.itemConnPoint1 = val.p1;
      this.itemConnPoint2 = val.p2;
      this.itemConnPoint3 = val.p3;
      this.itemConnPoint4 = val.p4;
      this.connLine = val.line;
    }
    // ── Plugin registry ──────────────────────────────────────────────────────
    registerPlugin(plugin) {
      if (this._plugins.has(plugin.name)) {
        console.warn(`[SchedulaCore] Plugin '${plugin.name}' already registered \u2014 skipping.`);
        return;
      }
      plugin.init(this);
      this._plugins.set(plugin.name, plugin);
    }
    getPlugin(name) {
      var _a;
      return (_a = this._plugins.get(name)) != null ? _a : null;
    }
    initCalendar() {
      var _a;
      this.calendar = new SchedulaCalendar();
      let r = this.calendar.newItem();
      r.capacity = this.calendar.reference;
      r.day = -1;
      r.from = 0;
      r.duration = 999999999;
      r.type = "rule";
      const calPlugin = this.getPlugin("calendar");
      if (calPlugin) calPlugin.applyData((_a = this.data) == null ? void 0 : _a.Calendar);
    }
    getCalendarForResource(resourceId) {
      const calPlugin = this.getPlugin("calendar");
      if (calPlugin) {
        const resCal = calPlugin.getResourceCalendar(String(resourceId));
        if (resCal) return resCal;
      }
      return this.calendar;
    }
    setData(data) {
      this.data = data;
      this.initCalendar();
      this.processData();
      this.refresh();
    }
    setView(num) {
      this.settings.timeUnitsView = num;
      this.refresh();
    }
    setStyle(style) {
      this.settings.gStyle = style;
      this.refresh();
    }
    clearGroupSafe(groupId) {
      const group = document.getElementById(groupId);
      if (!group) return;
      if (groupId === "scheduler-items") {
        const nodesToRemove = [];
        group.childNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node;
            if (el.id !== "scheduler-header" && el.id !== "scheduler-background" && el.tagName !== "animateTransform") {
              nodesToRemove.push(node);
            }
          } else {
            nodesToRemove.push(node);
          }
        });
        nodesToRemove.forEach((node) => {
          var _a;
          return (_a = node.parentNode) == null ? void 0 : _a.removeChild(node);
        });
      } else {
        group.innerHTML = "";
      }
    }
    refresh() {
      if (this.schedulerSVG) {
        const groups = ["scheduler-background", "scheduler-header", "scheduler-resources", "scheduler-events", "scheduler-info", "scheduler-items"];
        groups.forEach((id) => {
          this.clearGroupSafe(id);
        });
        const items = document.getElementById("scheduler-items");
        if (items) {
          items.setAttribute("transform", "translate(0,0)");
          const anims = items.getElementsByTagName("animateTransform");
          if (anims.length > 0) {
            anims[0].setAttribute("from", "0");
            anims[0].setAttribute("to", "0");
          }
        }
        this.draw();
        this.storeData();
      }
    }
    init() {
      this.schedulerContainer = document.getElementById(this.scheduler_id);
      if (this.schedulerContainer != null) {
        this.schedulerContainer.textContent = "";
        if (this.settings.theme) {
          this.schedulerContainer.classList.add(this.settings.theme);
        }
        if (this.settings.template) {
          this.template = this.settings.template;
        } else {
          this.template = new SchedulaTemplate().svgString;
        }
        this.schedulerContainer.innerHTML = this.template;
        document.body.style.overflow = "auto";
        this.schedulerSVG = document.querySelector("#main-svg");
        let defs = this.schedulerSVG.getElementById("defs");
        const parser = new DOMParser();
        const wrapped = `<svg xmlns="http://www.w3.org/2000/svg">${this.settings.icons}</svg>`;
        const doc = parser.parseFromString(wrapped, "image/svg+xml");
        const icons = doc.documentElement.childNodes;
        icons.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.schedulerSVG.ownerDocument.importNode(node, true);
            defs.appendChild(node);
          }
        });
        this.schedulerItems = document.getElementById("scheduler-items");
        this.splitBar = document.getElementById("scheduler-splitter");
        this.settings.plugins.forEach((p) => this.registerPlugin(p));
        if (!this.getPlugin("defaultpopup")) {
          this.registerPlugin(new DefaultPopupPlugin());
        }
        this.restoreView();
        if (this.schedulerContainer != null) {
          if (this.schedulerSVG != null) {
            this.draw();
            this.restoreShiftPos();
            this.processData();
            this.storeData();
            this.schedulerSVG.addEventListener("mousemove", (event) => {
              this.handleMouseMove(event);
            });
            this.schedulerSVG.addEventListener("mouseup", (event) => {
              this.svgMouseUp(event);
            });
            this.schedulerSVG.addEventListener("drop", (event) => {
              const dragDrop = this.getPlugin("dragdrop");
              if (dragDrop) dragDrop.onDrop(event);
            });
            this.schedulerSVG.addEventListener("dragover", (event) => {
              if (event.target.classList.contains("box-element")) {
                event.preventDefault();
              }
            });
            if (!this.eventsSetup) {
              let scheduler = this;
              document.addEventListener("keyup", (function(e) {
                if (e.key === "Escape") {
                  scheduler.escapePressed();
                }
              }));
              window.addEventListener("resize", (function(e) {
                scheduler.resized();
              }));
              this.eventsSetup = true;
            }
          } else {
            this.schedulerContainer.textContent = "Error: Template is null";
            console.log("Error: Template is null");
          }
        } else {
          console.log("scheduler id is null or div");
        }
      }
    }
    dropEventManagement(evt) {
      var _a, _b;
      evt.stopImmediatePropagation();
      if (this.settings.dropEnable && evt.target.classList.contains("box-element")) {
        let y = parseFloat(evt.target.getAttribute("y"));
        let res = (y - this.headerHeight) / this.settings.resourceHeight;
        console.log("res:" + res);
        const strdata = evt.dataTransfer.getData("task");
        if (strdata != void 0 && strdata != "") {
          let data = JSON.parse(strdata);
          let dd = new Date(evt.target.getAttribute("data-date"));
          let sd = this.settings.date;
          let timespan = Math.trunc((dd.getTime() - sd.getTime()) / 1e3 / 60);
          let resource = this.data.Resources[res];
          if (!resource.Items == null || resource.Items == void 0) resource.Items = [];
          (_a = resource.Items) == null ? void 0 : _a.forEach((item) => {
            let start = item.Offset;
            let stop = item.Offset + item.Width;
            if (timespan < stop && timespan >= start)
              timespan = stop;
          });
          let link = "";
          this.data.Resources.forEach(function(r, resource2) {
            var _a2;
            (_a2 = resource2.Items) == null ? void 0 : _a2.forEach(function(i, item) {
              let guid = "link_" + Math.floor(Math.random() * 1e7);
              if (item.Text == data.text1 && item.Reference == data.ref && data.ref != "" && data.ref != void 0 && data.text1 != "") {
                item.Link = guid;
                item.Modified = true;
                link = guid;
              }
            });
          });
          let ra = Math.floor(Math.random() * 1e7);
          let dropped = {};
          dropped.Id = "_temp_id_" + ra.toString();
          dropped.Text = data.text1;
          dropped.Description = data.text2;
          dropped.Offset = timespan;
          dropped.Width = parseInt(data.width);
          dropped.Effort = dropped.Width;
          dropped.Link = link;
          dropped.IsNew = true;
          dropped.Modified = true;
          dropped.Color1 = data.color1;
          dropped.Classes = data.classes;
          dropped.From = sd.getTime() / 1e3 / 60 + timespan;
          dropped.To = dropped.From + dropped.Width;
          dropped.ForeignKey = data.key;
          dropped.Reference = data.ref;
          dropped.Pieces = data.pieces;
          if (resource.Items == void 0) {
            var items = [];
            resource.Items = items;
          }
          resource.Items.push(dropped);
          this.drawItem(dropped, res);
          dropped.Effort = dropped.Width;
          let scitem = new SchedulaItem(this, dropped, this.calendar);
          scitem.Effort = dropped.Width;
          if (this.settings.optimizeStart) scitem.Offset = scitem.Offset;
          if (typeof modified === "function") modified();
          if (data.elementId) (_b = document.getElementById(data.elementId)) == null ? void 0 : _b.remove();
        }
      }
    }
    resized() {
      if (this.schedulerSVG)
        this.ratio = this.schedulerSVG.viewBox.baseVal.width / this.schedulerSVG.clientWidth;
    }
    draw() {
      var _a, _b;
      if (!this.schedulerSVG) return;
      this.settings.timeWidth = this.schedulerSVG.clientWidth / this.settings.timeUnitsView;
      let w = this.settings.timeUnitsView * this.settings.timeWidth;
      this.headerHeight = this.settings.timeElementHeight + this.settings.monthBoxHeight;
      if (this.settings.viewWeeks) {
        this.headerHeight += this.settings.weekBoxHeight;
      }
      if (this.settings.viewInfoElements || this.settings.viewEvents) {
        this.headerHeight += this.settings.infoElementHeight;
      }
      let h = ((_b = (_a = this.data.Resources) == null ? void 0 : _a.length) != null ? _b : 0) * this.settings.resourceHeight + this.headerHeight + this.settings.footerHeight;
      if (this.settings.viewWeeks == true) {
        h += this.settings.weekBoxHeight;
      }
      h += 5;
      this.schedulerSVG.viewBox.baseVal.x = 0;
      this.schedulerSVG.viewBox.baseVal.y = 0;
      this.schedulerSVG.viewBox.baseVal.width = w / this.zoom;
      this.schedulerSVG.viewBox.baseVal.height = h / this.zoom;
      this.ratio = this.schedulerSVG.viewBox.baseVal.width / this.schedulerSVG.clientWidth;
      this.resourceFilteredCount = 0;
      if (this.settings.groupFilter != 0) {
        this.resourceFilteredCount = this.data.Resources.filter((x) => {
          return x.group == this.settings.groupFilter;
        }).length;
      }
      this.drawHeader();
      this.drawMonths();
      this.drawWeeks();
      this.drawTimeUnits();
      this.drawBackGroud();
      const eventsPlugin = this.getPlugin("events");
      if (eventsPlugin) {
        eventsPlugin.drawEvents();
        eventsPlugin.drawInfoUnits();
      }
      this.drawResBg();
      this.initSplitter();
      this.drawItems();
      this.drawResources();
      var that = this;
      this.splitBar.addEventListener("mousedown", function(event) {
        that.splitterBarMouseDown(event);
      });
      const linksPlugin = this.getPlugin("links");
      if (linksPlugin) {
        if (this.settings.itemsLinks) linksPlugin.initLinks();
        if (this.settings.drawLinks) linksPlugin.drawLinks();
      }
      if (this.settings.viewShifters == true) {
        const cdx = document.getElementById("shifter-dx");
        let step = this.settings.shifterStep;
        let that2 = this;
        if (cdx != null) {
          cdx.style.visibility = "visible";
          cdx.addEventListener("click", function() {
            that2.shift(-step);
          });
        }
        const csx = document.getElementById("shifter-sx");
        if (csx != null) {
          csx.style.visibility = "visible";
          csx.addEventListener("click", function() {
            that2.shift(step);
          });
        }
      }
    }
    svgMouseUp(event) {
      const dragDrop = this.getPlugin("dragdrop");
      if (dragDrop) {
        dragDrop.onMouseUp(event);
      } else {
        this.clearAction();
      }
    }
    removeItem(id) {
      var _a;
      let scheduler = this;
      (_a = this.data.Resources) == null ? void 0 : _a.forEach(function(resource) {
        var _a2;
        (_a2 = resource.Items) == null ? void 0 : _a2.forEach(function(item) {
          if (item.Id == id) {
            item.Modified = true;
            item.Removed = true;
            scheduler.clearItems();
            scheduler.drawItems();
            return;
          }
        });
      });
    }
    handleMouseMove(event) {
      var _a, _b;
      this.mpos.x = event.pageX;
      this.mpos.y = event.pageY;
      let offsets = (_b = (_a = document.getElementById(this.scheduler_id)) == null ? void 0 : _a.getBoundingClientRect()) != null ? _b : { x: 0, y: 0 };
      this.schedulerMousePos.x = (this.mpos.x - offsets.x) * this.ratio;
      this.schedulerMousePos.y = (this.mpos.y - offsets.y) * this.ratio;
      const items = document.getElementById("scheduler-items");
      let transform = this.getTranslateValues(items);
      let mydate = this.settings.date;
      this.calendarMousePos.x = this.schedulerMousePos.x - transform.x - this.splitBarPos - 100;
      this.calendarMousePos.y = this.schedulerMousePos.y - transform.y;
      this.calendarMousePos.timeOffset = this.calendarMousePos.x / this.settings.timeWidth;
      this.calendarMousePos.resourceIndex = Math.floor((this.calendarMousePos.y - this.headerHeight) / this.settings.resourceHeight);
      this.calendarMousePos.date = new Date(mydate.getTime() + this.calendarMousePos.timeOffset * 864e5 + mydate.getTimezoneOffset() * 6e4);
      if (this.action === "splitter") {
        this.splitArea();
        return;
      }
      if (this.action === "linking") {
        const links = this.getPlugin("links");
        if (links) links.onLinkMouseMove(event);
        else this.linkItem();
        return;
      }
      if (this.action === "moving" || this.action === "sizing") {
        const dragDrop = this.getPlugin("dragdrop");
        if (dragDrop) dragDrop.onMouseMove(event);
        else if (this.action === "moving") this.moveItem();
        else if (this.action === "sizing") this.resizeItem();
      }
    }
    escapePressed() {
      var _a, _b, _c, _d, _e;
      if (this.settings.popupProvider && this.settings.licenseKey) {
        this.settings.popupProvider.hide();
      }
      const dragDrop = this.getPlugin("dragdrop");
      if (dragDrop) {
        dragDrop.onEscape();
        return;
      }
      if (this.action == "moving") {
        this.element.setAttribute("x", (_a = this.element.getAttribute("data-x")) != null ? _a : "0");
        this.element.setAttribute("y", (_b = this.element.getAttribute("data-y")) != null ? _b : "0");
        (_c = this.element.querySelector("rect.item")) == null ? void 0 : _c.classList.remove("moving");
      } else if (this.action == "sizing") {
        this.element.setAttribute("width", (_d = this.element.getAttribute("data-w")) != null ? _d : "0");
        (_e = this.element.querySelector("rect.item")) == null ? void 0 : _e.classList.remove("sizing");
      } else if (this.action == "linking") {
        this.resetLinkLine();
      }
      this.action = "";
    }
    getModulo(value, step, min) {
      const modulo = (value - (min != null ? min : 0)) % step;
      const correction = modulo > step / 2 ? step - modulo : -modulo;
      let result = value + correction;
      result = min != null && result < min ? min : result;
      return result;
    }
    moveItem() {
      var _a, _b;
      var x = parseFloat((_a = this.element.getAttribute("data-x")) != null ? _a : "0");
      var y = parseFloat((_b = this.element.getAttribute("data-y")) != null ? _b : "0");
      let variationx = Math.round((this.mpos.x - this.actionMemoPos.x) * this.ratio * 100) / 100;
      let variationy = Math.round((this.mpos.y - this.actionMemoPos.y) * this.ratio * 100) / 100;
      let newx = x + variationx;
      let newy = y + variationy;
      this.schedulerItems.append(this.element);
      this.element.setAttribute("x", newx.toString());
      if (this.settings.resourceChange) {
        this.element.setAttribute("y", newy.toString());
      }
      let datalink = this.element.getAttribute("data-link");
      if (datalink != null) {
      }
    }
    linkItem() {
      const line = document.getElementById("link-line");
      line == null ? void 0 : line.setAttribute("x1", this.linkPoint.x.toString());
      line == null ? void 0 : line.setAttribute("y1", this.linkPoint.y.toString());
      line == null ? void 0 : line.setAttribute("x2", this.calendarMousePos.x.toString());
      line == null ? void 0 : line.setAttribute("y2", (this.calendarMousePos.y - 3).toString());
    }
    resizeItem() {
      var _a;
      let variationx = Math.round((this.mpos.x - this.actionMemoPos.x) * this.ratio * 100) / 100;
      let w = parseFloat((_a = this.element.getAttribute("data-w")) != null ? _a : "0");
      let neww = w + variationx;
      this.schedulerItems.append(this.element);
      this.element.setAttribute("width", neww.toString());
      let datalink = this.element.getAttribute("data-link");
      if (datalink != null) {
      }
    }
    splitArea() {
      var _a;
      const sidebar = document.getElementById("scheduler-sidebar");
      let w = parseFloat((_a = sidebar.getAttribute("data-w")) != null ? _a : "0");
      let variationw = Math.round((this.mpos.x - this.actionMemoPos.x) * this.ratio * 100) / 100;
      let neww = w + variationw;
      if (neww > this.settings.sidebarMinWidth && neww < this.settings.sidebarMaxWidth) {
        sidebar.setAttribute("width", neww.toString());
        localStorage.setItem("splitbarpos", neww.toString());
      }
    }
    getTranslateValues(element) {
      if (!element) {
        return { x: 0, y: 0, z: 0 };
      }
      const style = window.getComputedStyle(element);
      let transform = style.transform;
      if (transform == null) {
        transform = "matrix(1,0,0,1,0,0)";
      }
      var m = transform.substring(7, transform.length - 1);
      var values = m.split(",");
      var x = parseFloat(values[4]);
      var y = parseFloat(values[5]);
      if (transform === "none" || typeof transform === "undefined" || transform === null) {
        return {
          x: 0,
          y: 0,
          z: 0
        };
      }
      return {
        x,
        y,
        z: 0
      };
    }
    processData() {
      var _a;
      if (!this.data.Resources) return;
      this.settings.date = new Date(this.settings.date.getFullYear(), this.settings.date.getMonth(), this.settings.date.getDate());
      let date = this.settings.date;
      let scheduler = this;
      (_a = this.data.Resources) == null ? void 0 : _a.forEach((resource, ri) => {
        if (resource.Items) {
          resource.Items.forEach(function(item, ii) {
            item.Offset = Math.trunc(item.Offset);
            item.Width = Math.trunc(item.Width);
            let from = date.getTime() / 6e4 + item.Offset;
            let to = date.getTime() / 6e4 + parseInt(item.Offset + item.Width);
            item.From = from;
            item.To = to;
            if (scheduler.calendar != null && scheduler.settings.calcEffort == true && item.Effort == void 0) {
              let schedulerItem = new SchedulaItem(scheduler, item, scheduler.calendar);
              schedulerItem.From = from;
              schedulerItem.Duration = to - from;
            }
          });
        }
      });
    }
    storeData() {
      if (this.settings.storeData) {
        localStorage.setItem("data", JSON.stringify(this.data));
      }
    }
    // ... Additional draw methods ...
    // Note: Due to size limits, I am summarizing the remaining methods. I will need to complete the rest in a subsequent file part or assume they are copied from Scheduler.ts
    // For brevity in this task, I will include the critical rendering methods.
    drawBackGroud() {
      var parent = document.getElementById("scheduler-background");
      if (parent) {
        var h = this.settings.resourceHeight * this.data.Resources.length;
        var w = this.settings.timeUnitsCount * this.settings.timeWidth;
        var y = this.headerHeight;
        var x = 0;
        const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        background.setAttribute("x", "0");
        background.setAttribute("y", y.toString());
        background.setAttribute("width", w.toString());
        background.setAttribute("height", h.toString());
        background.setAttribute("transform", "translate(0,0)");
        background.setAttribute("fill", "white");
        background.classList.add("bg");
        parent.append(background);
        if (this.data.Resources) {
          this.data.Resources.forEach((resource, ri) => {
            var ly = ri * this.settings.resourceHeight + this.headerHeight;
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", x.toString());
            line.setAttribute("x2", w.toString());
            line.setAttribute("y1", ly.toString());
            line.setAttribute("y2", ly.toString());
            line.setAttribute("class", "bg-hl");
            parent == null ? void 0 : parent.append(line);
          });
          let rcount = this.data.Resources.length;
          var today = /* @__PURE__ */ new Date();
          console.log(this.calendar);
          for (let c = 0; c < this.settings.timeUnitsCount; c++) {
            let hilight = false;
            let dt = this.settings.date;
            if (dt) {
              let cdate = new Date(dt.getTime() + c * this.settings.timeUnitVal * 60 * 1e3);
              hilight = cdate.getUTCDay() == 0 && this.settings.hilightSunday;
              let saturday = cdate.getUTCDay() == 6;
              let ratio = 1;
              if (this.calendar != null) {
                if (this.calendar.reference > 0) {
                  ratio = this.calendar.getCapacity(cdate.getTime() / 6e4 + 10, cdate.getUTCDay()) / this.calendar.reference;
                  if (ratio > 1) ratio = 1;
                  if (ratio < 0) ratio = 0;
                }
              }
              let ry = this.headerHeight;
              let rx = c * this.settings.timeWidth;
              let rw = this.settings.timeWidth;
              let rh = this.settings.resourceHeight * rcount;
              const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
              line.setAttribute("x1", rx.toString());
              line.setAttribute("x2", rx.toString());
              line.setAttribute("y1", ry.toString());
              line.setAttribute("y2", (ry + rh).toString());
              line.setAttribute("class", "bg-vl");
              parent == null ? void 0 : parent.append(line);
              const box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
              box.setAttribute("x", rx.toString());
              box.setAttribute("y", ry.toString());
              box.setAttribute("width", rw.toString());
              box.setAttribute("height", rh.toString());
              box.setAttribute("data-date", cdate.toUTCString());
              box.classList.add("daybox-element");
              if (hilight == true) box.classList.add("sunday");
              if (saturday == true) box.classList.add("saturday");
              parent.append(line);
              parent.append(box);
              for (let rr = 0; rr < rcount; rr++) {
                ry = this.headerHeight + rr * this.settings.resourceHeight;
                rx = c * this.settings.timeWidth;
                rw = this.settings.timeWidth * ratio;
                if (isNaN(rw)) rw = 0;
                const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                rect.setAttribute("x", rx.toString());
                rect.setAttribute("y", ry.toString());
                rect.setAttribute("width", rw.toString());
                rect.setAttribute("height", this.settings.resourceHeight.toString());
                rect.setAttribute("data-date", cdate.toUTCString());
                rect.setAttribute("data-res", this.data.Resources[rr].id);
                rect.setAttribute("class", "box-element");
                rect.addEventListener("click", function(ev) {
                  if (typeof gridMouseClick == "function") {
                    gridMouseClick(ev, cdate);
                  }
                });
                let that = this;
                rect.addEventListener("mouseover", function(ev) {
                  if (typeof gridMouseOver == "function") {
                    var i = that.getSum(ev.target);
                    gridMouseOver(ev, i);
                  }
                });
                parent.append(rect);
              }
            }
          }
        }
      }
    }
    filterItems(filter) {
      const items = document.querySelectorAll(".svg-item");
      items.forEach((item) => {
        item.style.opacity = "1";
        item.classList.remove("selected");
        let filterlower = filter.toLowerCase();
        if (filterlower != "") {
          let data = item.querySelectorAll("text");
          let ref = item.getAttribute("data-ref");
          let key = item.getAttribute("data-key");
          let show = false;
          if (data != void 0) {
            data.forEach((text) => {
              show = show || text.innerHTML.toLowerCase().startsWith(filterlower);
            });
          } else show = false;
          if (key != void 0) {
            show = show || key.toLowerCase().startsWith(filterlower);
          }
          ;
          if (ref != void 0) {
            show = show || ref.toLowerCase().startsWith(filterlower);
          }
          if (show) {
            item.style.opacity = "1";
            item.classList.add("selected");
          } else {
            item.style.opacity = "0.2";
            item.classList.remove("selected");
          }
        }
      });
    }
    drawResBg() {
      let parent = document.getElementById("scheduler-resources");
      const resources = this.data.Resources || [];
      let h = this.settings.resourceHeight * resources.length;
      let w = this.settings.resourceWidth;
      let y = this.headerHeight;
      let x = 0;
      let clip = document.getElementById("clip-res");
      if (clip == null) {
        let clip2 = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        clip2.setAttribute("id", "clip-res");
        const box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        box.setAttribute("x", x.toString());
        box.setAttribute("y", y.toString());
        box.setAttribute("width", "100%");
        box.setAttribute("height", "100%");
        box.setAttribute("id", "clip-res-rect");
        clip2.append(box);
        parent == null ? void 0 : parent.append(clip2);
      }
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", x.toString());
      rect.setAttribute("y", y.toString());
      rect.setAttribute("width", "100%");
      rect.setAttribute("height", "100%");
      rect.setAttribute("class", "sb-rbg");
      rect.setAttribute("fill", "transparent");
      rect.setAttribute("clip-path", "Url(#clip-res)");
      parent == null ? void 0 : parent.append(rect);
      h = this.headerHeight;
      w = this.settings.resourceWidth;
      y = 0;
      x = 0;
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("x", x.toString());
      svg.setAttribute("y", y.toString());
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", h.toString());
      svg.setAttribute("class", "sb-hbg");
      const elem = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      elem.setAttribute("x", x.toString());
      elem.setAttribute("y", y.toString());
      elem.setAttribute("width", "100%");
      elem.setAttribute("height", h.toString());
      elem.setAttribute("class", "sb-hbg");
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", (x + 2).toString());
      text.setAttribute("y", (y - 2).toString());
      text.setAttribute("class", "resource-header-text");
      text.innerHTML = this.settings.resHeaderText;
      elem.append(text);
      svg.append(elem);
      parent == null ? void 0 : parent.append(svg);
    }
    initSplitter() {
      let stored = localStorage.getItem("splitbarpos");
      let splitbarpos = stored ? parseFloat(stored) : this.settings.splitBarinitPos;
      if (isNaN(splitbarpos) || splitbarpos <= 0) splitbarpos = this.settings.splitBarinitPos;
      let sh = this.settings.resourceHeight * this.data.Resources.length + this.headerHeight;
      let sw = this.settings.splitterWidth;
      let sy = 0;
      let sx = splitbarpos;
      let wrapper = document.getElementById("wrapper");
      let splitter = document.getElementById("scheduler-splitter");
      if (splitter) this.splitBar = splitter;
      const sidebar = document.getElementById("scheduler-sidebar");
      sidebar.setAttribute("width", sx.toString());
    }
    drawResources() {
      var _a;
      const sidebar = document.getElementById("scheduler-sidebar");
      const resources = document.getElementById("scheduler-resources");
      let h = this.headerHeight;
      let w = this.settings.timeUnitsCount * this.settings.timeWidth;
      let y = 0;
      let x = 0;
      let splitbarpos = parseFloat((_a = localStorage.getItem("splitbarpos")) != null ? _a : "0");
      if (!splitbarpos || splitbarpos < this.settings.sidebarMinWidth || splitbarpos > this.settings.sidebarMaxWidth) {
        splitbarpos = this.settings.splitBarinitPos;
      }
      sidebar == null ? void 0 : sidebar.setAttribute("width", splitbarpos.toString());
      var count = 0;
      if (this.data.Resources) {
        this.data.Resources.forEach((resource, ri) => {
          var _a2, _b;
          let y2 = count * this.settings.resourceHeight + this.headerHeight;
          let ty = (count + 1) * this.settings.resourceHeight + this.headerHeight - 2;
          let x2 = 1;
          const rsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          rsvg.setAttribute("x", "0");
          rsvg.setAttribute("y", y2.toString());
          rsvg.setAttribute("width", "100%");
          rsvg.setAttribute("height", this.settings.resourceHeight.toString());
          rsvg.setAttribute("font-size", this.settings.resourceHeight.toString());
          let clipid = "clip-res-" + Math.floor(Math.random() * 1e7);
          const clip = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
          clip.setAttribute("x", "0");
          clip.setAttribute("y", "0");
          clip.setAttribute("width", "100%");
          clip.setAttribute("height", "100%");
          clip.setAttribute("id", clipid);
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("x", "0");
          rect.setAttribute("y", "0");
          rect.setAttribute("width", "100%");
          rect.setAttribute("height", "100%");
          clip.append(rect);
          rsvg == null ? void 0 : rsvg.append(clip);
          const res = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          res.setAttribute("x", "0");
          res.setAttribute("y", this.settings.resPadding.toString());
          res.setAttribute("width", "100%");
          res.setAttribute("height", "calc(100% - " + (this.settings.resPadding * 2).toString() + "px)");
          res.setAttribute("id", resource.Id.toString());
          res.setAttribute("class", "resource");
          if (resource.Classes) {
            resource.Classes.split(" ").forEach((c) => {
              if (c != "") res.classList.add(c);
            });
          }
          res.setAttribute("clip-path", "Url(#" + clipid + ")");
          if (this.settings.resRoundRect > 0) res.setAttribute("rx", this.settings.resRoundRect.toString());
          res.addEventListener("click", (event) => {
            this.resourceClick(event, { resource });
            if (typeof resourceClick === "function") {
              resourceClick(event, resource);
            }
          });
          rsvg == null ? void 0 : rsvg.append(res);
          x2 = 2;
          if (resource.Image && this.settings.resourceImages) {
            let imgdim = this.settings.resourceHeight * 0.8;
            let imgspace = this.settings.resourceHeight * 0.1;
            let clipid2 = "clip-" + Math.floor(Math.random() * 1e7);
            const imgsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            imgsvg.setAttribute("x", x2.toString());
            imgsvg.setAttribute("y", "10%");
            imgsvg.setAttribute("height", imgdim.toString());
            imgsvg.setAttribute("width", imgdim.toString());
            imgsvg.setAttribute("class", "resource-image");
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", (imgdim / 2).toString());
            circle.setAttribute("cy", "50%");
            circle.setAttribute("r", (imgdim / 2).toString());
            const clip2 = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
            clip2.setAttribute("id", clipid2);
            clip2.append(circle);
            imgsvg.append(clip2);
            const rimage = document.createElementNS("http://www.w3.org/2000/svg", "image");
            rimage.setAttribute("x", "0");
            rimage.setAttribute("y", "0");
            rimage.setAttribute("width", "100%");
            rimage.setAttribute("height", "100%");
            rimage.setAttribute("href", (_a2 = resource.Image) != null ? _a2 : "");
            rimage.setAttribute("clip-path", "Url(#" + clipid2 + ")");
            rimage.setAttribute("class", "resource-image");
            imgsvg == null ? void 0 : imgsvg.append(rimage);
            rsvg.append(imgsvg);
            x2 += imgdim + imgspace;
          }
          const restext = document.createElementNS("http://www.w3.org/2000/svg", "text");
          restext.setAttribute("x", x2.toString());
          restext.setAttribute("y", "55%");
          restext.setAttribute("class", "resource-text");
          restext.setAttribute("font-size", "35%");
          restext.setAttribute("dominant-baseline", "middle");
          restext.setAttribute("clip-path", "Url(#" + clipid + ")");
          restext.innerHTML = resource.Name;
          restext.addEventListener("click", (event) => {
            this.resourceClick(event, { resource });
            if (typeof resourceClick === "function") {
              resourceClick(event, { resource });
            }
          });
          resources.append(rsvg);
          rsvg == null ? void 0 : rsvg.append(restext);
          x2 += restext.getBBox().width + 6;
          let icndim = this.settings.resourceHeight * 0.4;
          let halficn = icndim / 2;
          (_b = resource.Icons) == null ? void 0 : _b.forEach((icon, ii) => {
            if (icon.Name) {
              const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
              use.setAttribute("href", "#" + icon.Name);
              use.setAttribute("x", x2.toString());
              use.setAttribute("y", "calc(50% - " + halficn.toString() + "px)");
              use.setAttribute("height", icndim.toString());
              use.setAttribute("width", icndim.toString());
              use.setAttribute("class", "resource-icon");
              if (icon.Classes) use.setAttribute("class", "resource-icon " + icon.Classes);
              rsvg.append(use);
              x2 += icndim + 4;
            }
          });
          count++;
        });
      }
    }
    drawItems() {
      var _a;
      this.clearItems();
      let scheduler = this;
      let cdate = this.settings.date;
      (_a = this.data.Resources) == null ? void 0 : _a.forEach((resource, ri) => {
        var _a2;
        if (this.settings.groupFilter == 0 || resource.group == this.settings.groupFilter) {
          (_a2 = resource.Items) == null ? void 0 : _a2.forEach(function(item) {
            scheduler.drawItem(item, ri);
          });
        }
      });
    }
    /**
     * Refreshes a single item visually without redrawing the whole SVG.
     * @param item The item data object to refresh
     */
    refreshItem(item) {
      var _a;
      if (!item || !item.Id) return;
      const oldElement = document.querySelector(`svg[data-id="${item.Id}"]`);
      if (oldElement) {
        oldElement.remove();
      }
      let resIndex = -1;
      (_a = this.data.Resources) == null ? void 0 : _a.forEach((res, idx) => {
        if (res.Items && res.Items.some((i) => i.Id === item.Id)) {
          resIndex = idx;
        }
      });
      if (resIndex !== -1) {
        let date = this.settings.date;
        item.Offset = Math.trunc(item.Offset);
        item.Width = Math.trunc(item.Width);
        let from = date.getTime() / 6e4 + item.Offset;
        let to = date.getTime() / 6e4 + parseInt(item.Offset + item.Width);
        item.From = from;
        item.To = to;
        if (this.calendar != null && this.settings.calcEffort == true && item.Effort == void 0) {
          let schedulerItem = new SchedulaItem(this, item, this.calendar);
          schedulerItem.From = from;
          schedulerItem.Duration = to - from;
        }
        this.drawItem(item, resIndex);
        const links = this.getPlugin("links");
        if (links && this.settings.drawLinks) {
          links.drawLinks();
        }
      }
    }
    clearItems() {
      this.clearGroupSafe("scheduler-items");
      if (this.settings.itemsLinks) {
        const links = this.getPlugin("links");
        if (links) links.initLinks();
        else this.initLinks();
      }
    }
    drawItem(item, resindex, mask = true) {
      var _a, _b, _c;
      let x = 0;
      let y = 0;
      let w = 0;
      let h = this.settings.resourceHeight;
      let offset = item.Offset;
      let width = item.Width;
      w = this.settings.timeWidth * (width / this.settings.timeUnitVal);
      if (width == 0) w = 0;
      x = this.settings.timeWidth * (offset / this.settings.timeUnitVal);
      y = resindex * this.settings.resourceHeight + this.headerHeight + this.settings.itemsPadding;
      h = h - this.settings.itemsPadding * 2;
      if (this.settings.viewWeeks == true) {
      }
      let itemData = new SchedulaItem(this, item, this.calendar);
      let drawItem = true;
      if (drawItem) {
        let ItemSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        ItemSVG.setAttribute("x", x.toString());
        ItemSVG.setAttribute("y", y.toString());
        ItemSVG.setAttribute("width", w.toString());
        ItemSVG.setAttribute("height", h.toString());
        ItemSVG.setAttribute("class", "svg-item");
        if (this.settings.canMoveItems) ItemSVG.classList.add("draggable");
        ItemSVG.setAttribute("data-id", item.Id);
        ItemSVG.setAttribute("data-ref", item.Reference);
        ItemSVG.setAttribute("data-key", item.ForeignKey);
        if (item.Link) ItemSVG.setAttribute("data-link", item.Link);
        let clipid = "clip-" + item.Id;
        let maskid = "mask-" + item.Id;
        let rx = this.settings.roundRect;
        if (this.settings.gStyle == "round-rect" && rx == 0) rx = 5;
        if (this.settings.gStyle == "rect") rx = 0;
        if (this.settings.gStyle == "circle") rx = 0;
        const clip = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        clip.setAttribute("id", clipid);
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", "0");
        rect.setAttribute("y", "0");
        rect.setAttribute("width", "100%");
        rect.setAttribute("height", "100%");
        if (rx > 0) rect.setAttribute("rx", rx.toString());
        clip.append(rect);
        ItemSVG.append(clip);
        const itemrect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        itemrect.setAttribute("x", "0");
        itemrect.setAttribute("y", "0");
        itemrect.setAttribute("width", "100%");
        itemrect.setAttribute("height", "100%");
        if (rx > 0) itemrect.setAttribute("rx", rx.toString());
        if (item.Color1) {
          itemrect.classList.add("custom-color");
          itemrect.style.fill = item.Color1;
        }
        if (item.Classes) {
          let classes = item.Classes.split(" ");
          classes.forEach((c) => {
            if (c != "") itemrect.classList.add(c);
          });
        }
        itemrect.classList.add("item");
        itemrect.setAttribute("clip-path", "url(#" + clipid + ")");
        let arrow = false;
        if (item.Type == "Arrow" || this.settings.gStyle == "arrow") arrow = true;
        let circle = false;
        if (item.Type == "Circle" || this.settings.gStyle == "circle") circle = true;
        let gantt = false;
        if (item.Type == "Gantt") gantt = true;
        if (circle) {
          itemrect.setAttribute("rx", (h / 2).toString());
          clip.querySelector("rect").setAttribute("rx", (h / 2).toString());
        }
        ItemSVG.append(itemrect);
        (_a = item.Pieces) == null ? void 0 : _a.forEach((piece) => {
          var completion = piece.Width;
          const pback = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          pback.setAttribute("x", piece.Start);
          pback.setAttribute("y", "0");
          pback.setAttribute("width", piece.Width);
          pback.setAttribute("height", "100%");
          pback.setAttribute("fill", piece.Color);
          pback.setAttribute("clip-path", "url(#" + clipid + ")");
          ItemSVG.append(pback);
        });
        if (item.Completion != null) {
          const progressGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
          let padding = 1;
          if (this.settings.progressBarPattern) {
            const pback = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            pback.setAttribute("x", "0");
            pback.setAttribute("y", "80%");
            pback.setAttribute("width", "100%");
            pback.setAttribute("height", "calc(20% - " + padding.toString() + "px)");
            pback.setAttribute("class", "progress-bar-background");
            pback.setAttribute("fill", "white");
            pback.setAttribute("opacity", "0.2");
            pback.setAttribute("clip-path", "url(#" + clipid + ")");
            progressGroup.append(pback);
            if (item.Completion > 0 && item.Completion <= 100) {
              var pbfill = "black";
              if (this.settings.progressBarAnimation == true && item.Completion < 100)
                pbfill = "url(#progress-pattern)";
              const pbar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
              pbar.setAttribute("x", "0");
              pbar.setAttribute("y", "80%");
              pbar.setAttribute("width", "calc(" + item.Completion + "%)");
              pbar.setAttribute("height", "calc(20% - " + padding.toString() + "px)");
              pbar.setAttribute("class", "progress-bar");
              pbar.setAttribute("fill", pbfill);
              pbar.setAttribute("opacity", "0.3");
              pbar.setAttribute("clip-path", "url(#" + clipid + ")");
              progressGroup.append(pbar);
            }
            ItemSVG.append(progressGroup);
          }
        }
        if (this.settings.canResizeItems == true) {
          const resize = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          resize.setAttribute("x", "calc(100% - 10px)");
          resize.setAttribute("y", "0");
          resize.setAttribute("width", "10");
          resize.setAttribute("height", "100%");
          resize.setAttribute("class", "resize");
          resize.setAttribute("fill", "transparent");
          resize.style.cursor = "ew-resize";
          let l1y1 = "15%";
          let l2y1 = "15%";
          let l1y2 = "85%";
          let l2y2 = "85%";
          if (arrow) {
            l1y1 = "45%";
            l2y1 = "38%";
            l1y2 = "55%";
            l2y2 = "62%";
          }
          const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line1.setAttribute("x1", "calc(100% - 4px)");
          line1.setAttribute("x2", "calc(100% - 4px)");
          line1.setAttribute("y1", l1y1);
          line1.setAttribute("y2", l1y2);
          line1.setAttribute("class", "resize-line");
          line1.setAttribute("stroke-width", "1");
          line1.setAttribute("stroke", "white");
          const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line2.setAttribute("x1", "calc(100% - 6px)");
          line2.setAttribute("x2", "calc(100% - 6px)");
          line2.setAttribute("y1", l2y1);
          line2.setAttribute("y2", l2y2);
          line2.setAttribute("class", "resize-line");
          line2.setAttribute("stroke-width", "1");
          line2.setAttribute("stroke", "white");
          ItemSVG.append(line1);
          ItemSVG.append(line2);
          ItemSVG.append(resize);
        }
        if (item.ViewInfo == true) {
          let mysize = this.settings.infoElementSize;
          let info;
          if (arrow) {
            info = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            info.setAttribute("x", "0");
            info.setAttribute("y", "0");
            info.setAttribute("width", mysize.toString());
            info.setAttribute("height", mysize.toString());
            info.setAttribute("mask", "url(#" + maskid + ")");
          } else {
            info = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            info.setAttribute("points", "0,0 0," + mysize.toString() + " " + mysize.toString() + ",0 0,0");
          }
          info.setAttribute("fill", "black");
          info.setAttribute("opacity", "0.5");
          info.setAttribute("class", "additional-info");
          info.setAttribute("clip-path", "url(#" + clipid + ")");
          ItemSVG.append(info);
        }
        if (this.settings.itemsText) {
          let lx = 4;
          if (arrow) lx += h / 2;
          const itemtext = document.createElementNS("http://www.w3.org/2000/svg", "text");
          itemtext.setAttribute("x", lx.toString());
          itemtext.setAttribute("y", "15%");
          let fontSize = 12;
          if (typeof this.settings.itemTextSize === "string" && this.settings.itemTextSize.includes("%")) {
            const pct = parseFloat(this.settings.itemTextSize) / 100;
            fontSize = this.settings.resourceHeight * pct;
          } else if (typeof this.settings.itemTextSize === "string" && this.settings.itemTextSize.includes("px")) {
            fontSize = parseFloat(this.settings.itemTextSize);
          }
          itemtext.setAttribute("font-size", fontSize.toString());
          itemtext.setAttribute("dominant-baseline", "hanging");
          itemtext.setAttribute("class", "item-text");
          itemtext.setAttribute("clip-path", "url(#" + clipid + ")");
          itemtext.innerHTML = (_b = item.Text) != null ? _b : "";
          ItemSVG.append(itemtext);
          const itemtext2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
          itemtext2.setAttribute("x", lx.toString());
          itemtext2.setAttribute("y", "50%");
          let descSize = this.settings.resourceHeight * 0.25;
          itemtext2.setAttribute("font-size", descSize.toString());
          itemtext2.setAttribute("dominant-baseline", "hanging");
          itemtext2.setAttribute("class", "item-text2");
          itemtext2.setAttribute("clip-path", "url(#" + clipid + ")");
          itemtext2.innerHTML = (_c = item.Description) != null ? _c : "";
          ItemSVG.append(itemtext2);
        }
        if (arrow) {
          const mask2 = document.createElementNS("http://www.w3.org/2000/svg", "mask");
          mask2.setAttribute("id", maskid);
          const maskrect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          maskrect.setAttribute("x", "0");
          maskrect.setAttribute("y", "0");
          maskrect.setAttribute("width", "calc(100% - " + h / 2 + "px)");
          maskrect.setAttribute("height", "100%");
          maskrect.setAttribute("fill", "white");
          const square1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          square1.setAttribute("x", "calc(100%)");
          square1.setAttribute("y", (h / 2).toString());
          square1.setAttribute("width", h.toString());
          square1.setAttribute("height", "100%");
          square1.setAttribute("fill", "white");
          square1.setAttribute("transform", "rotate(135)");
          square1.setAttribute("transform-origin", "calc(100%) calc(50%)");
          const square2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          square2.setAttribute("x", (-h / 2).toString());
          square2.setAttribute("y", (h / 2).toString());
          square2.setAttribute("width", h.toString());
          square2.setAttribute("height", h.toString());
          square2.setAttribute("fill", "black");
          square2.setAttribute("transform", "rotate(45)");
          square2.setAttribute("transform-origin", h / 2 + " " + h / 2);
          mask2.append(maskrect);
          mask2.append(square1);
          mask2.append(square2);
          itemrect.setAttribute("mask", "url(#" + maskid + ")");
          ItemSVG.append(mask2);
        }
        let that = this;
        ItemSVG.addEventListener("mousedown", function(event) {
          that.itemMouseDown(event, { item, element: this });
        });
        ItemSVG.addEventListener("mouseup", function(event) {
          that.itemMouseUp(event, { item, element: this });
        });
        ItemSVG.addEventListener("click", function(event) {
          that.itemClick(event, { item, element: this });
          if (typeof taskClick === "function") {
            taskClick(event, item);
          }
          ;
        });
        ItemSVG.addEventListener("mouseenter", function(event) {
          that.itemOver(event, { item });
        });
        ItemSVG.addEventListener("mouseleave", function(event) {
          that.itemOut(event, { item, element: this });
        });
        ItemSVG.addEventListener("drop", function(event) {
          that.dropOnElement(event, { item, element: this });
        });
        ItemSVG.addEventListener("dragover", function(event) {
          that.dragOverElement(event, { item, element: this });
        });
        this.schedulerItems.append(ItemSVG);
      }
    }
    initLinks() {
      var _a, _b, _c, _d, _e;
      if (this.settings.itemsLinks == true) {
        this.itemConnPoint1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.itemConnPoint1.setAttribute("cx", "0");
        this.itemConnPoint1.setAttribute("cy", "0");
        this.itemConnPoint1.setAttribute("r", "5");
        this.itemConnPoint1.setAttribute("fill", "white");
        this.itemConnPoint1.setAttribute("stroke", "#00ff00");
        this.itemConnPoint1.setAttribute("class", "c1 link-point");
        this.itemConnPoint1.setAttribute("stroke-width", "1");
        this.itemConnPoint2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.itemConnPoint2.setAttribute("cx", "0");
        this.itemConnPoint2.setAttribute("cy", "0");
        this.itemConnPoint2.setAttribute("r", "5");
        this.itemConnPoint2.setAttribute("fill", "white");
        this.itemConnPoint2.setAttribute("stroke", "#00ff00");
        this.itemConnPoint2.setAttribute("class", "c2 link-point");
        this.itemConnPoint2.setAttribute("stroke-width", "1");
        this.itemConnPoint3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.itemConnPoint3.setAttribute("cx", "0");
        this.itemConnPoint3.setAttribute("cy", "0");
        this.itemConnPoint3.setAttribute("r", "5");
        this.itemConnPoint3.setAttribute("fill", "white");
        this.itemConnPoint3.setAttribute("stroke", "#00ff00");
        this.itemConnPoint3.setAttribute("class", "c3 link-point");
        this.itemConnPoint3.setAttribute("stroke-width", "1");
        this.itemConnPoint4 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.itemConnPoint4.setAttribute("cx", "0");
        this.itemConnPoint4.setAttribute("cy", "0");
        this.itemConnPoint4.setAttribute("r", "5");
        this.itemConnPoint4.setAttribute("fill", "white");
        this.itemConnPoint4.setAttribute("stroke", "#00ff00");
        this.itemConnPoint4.setAttribute("class", "c4 link-point");
        this.itemConnPoint4.setAttribute("stroke-width", "1");
        this.connLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.connLine.setAttribute("x1", "0");
        this.connLine.setAttribute("y1", "0");
        this.connLine.setAttribute("x2", "0");
        this.connLine.setAttribute("y2", "0");
        this.connLine.setAttribute("stroke-width", "1");
        this.connLine.setAttribute("id", "link-line");
        this.connLine.setAttribute("stroke", "#00ff00");
        (_a = this.schedulerItems) == null ? void 0 : _a.append(this.connLine);
        (_b = this.schedulerItems) == null ? void 0 : _b.append(this.itemConnPoint1);
        (_c = this.schedulerItems) == null ? void 0 : _c.append(this.itemConnPoint2);
        (_d = this.schedulerItems) == null ? void 0 : _d.append(this.itemConnPoint3);
        (_e = this.schedulerItems) == null ? void 0 : _e.append(this.itemConnPoint4);
        document.querySelectorAll(".link-point").forEach((element) => {
          element.addEventListener("click", (event) => this.linkPointClick(event));
        });
      }
    }
    drawLinks() {
      var _a;
      this.clearLinks();
      if (this.settings.drawLinks == true) {
        (_a = this.data.Resources) == null ? void 0 : _a.forEach((resource, resindex) => {
          var _a2;
          (_a2 = resource.Items) == null ? void 0 : _a2.forEach((item1, index) => {
            var _a3;
            if (typeof item1.Link !== "undefined") {
              if (item1.Link !== "" && item1.Link !== null) {
                (_a3 = this.data.Resources) == null ? void 0 : _a3.forEach((resource2, resindex2) => {
                  var _a4;
                  (_a4 = resource2.Items) == null ? void 0 : _a4.forEach((item2, index2) => {
                    var _a5;
                    let samelink = item2.Link == item1.Link;
                    let idlink = item1.Link == item2.Id;
                    let singletime = samelink && (item1.Offset < item2.Offset || item1.Offset == item2.Offset && resindex > resindex2) || idlink;
                    let notitself = item2.Id != item1.Id;
                    let cond = resindex == resindex2;
                    if ((samelink || idlink) && singletime && notitself) {
                      var x1 = this.settings.timeWidth * ((item1.Offset + item1.Width / 2) / this.settings.timeUnitVal);
                      var x2 = this.settings.timeWidth * ((item2.Offset + item2.Width / 2) / this.settings.timeUnitVal);
                      var y1 = resindex * this.settings.resourceHeight + this.headerHeight + this.settings.itemsPadding;
                      var y2 = (resindex2 - 1) * this.settings.resourceHeight + this.headerHeight - this.settings.itemsPadding;
                      if (cond) {
                        let i1 = item1.Offset > item2.Offset ? item2 : item1;
                        let i2 = item1.Offset > item2.Offset ? item1 : item2;
                        x1 = this.settings.timeWidth * ((i1.Offset + i1.Width) / this.settings.timeUnitVal);
                        x2 = this.settings.timeWidth * (i2.Offset / this.settings.timeUnitVal);
                        y1 = (resindex + 0.5) * this.settings.resourceHeight + this.headerHeight;
                        y2 = y1;
                      }
                      if (!cond && resindex < resindex2) {
                        y1 = (resindex + 1) * this.settings.resourceHeight + this.headerHeight - this.settings.itemsPadding;
                        y2 = resindex2 * this.settings.resourceHeight + this.headerHeight + this.settings.itemsPadding;
                      }
                      var y3 = ((resindex + resindex2) / 2 + 0.5) * this.settings.resourceHeight + this.headerHeight;
                      let strpath = "";
                      strpath = " M" + x1 + "," + y1 + " V " + y3 + " H" + x2 + " V" + y2;
                      if (this.settings.linkSpline == true) {
                        strpath = " M" + x1 + "," + y1 + " C" + x1 + "," + y3 + " " + x2 + "," + y3 + "  " + x2 + "," + y2;
                      }
                      if (cond) {
                        strpath = " M" + x1 + "," + y1 + " L" + x2 + "," + y1;
                      } else if (!cond && resindex > resindex2) {
                        y2 = (resindex2 + 1) * this.settings.resourceHeight + this.headerHeight - this.settings.itemsPadding;
                        strpath = " M " + x1 + "," + y1 + " V " + y3 + " H " + x2 + " V " + y2;
                        if (this.settings.linkSpline == true) {
                          strpath = " M " + x1 + "," + y1 + " C" + x1 + " " + y3 + " " + x2 + "," + y3 + " " + x2 + " " + y2;
                        }
                      }
                      const linkline = document.createElementNS("http://www.w3.org/2000/svg", "path");
                      let linkid = "link-" + Math.floor(Math.random() * 1e7);
                      linkline.setAttribute("id", linkid);
                      linkline.setAttribute("d", strpath);
                      linkline.setAttribute("fill", "none");
                      linkline.setAttribute("stroke-width", "4");
                      linkline.setAttribute("class", "link link-wire");
                      linkline.setAttribute("stroke-linecap", "round");
                      linkline.setAttribute("data-link", item1.Link.toString());
                      (_a5 = this.schedulerItems) == null ? void 0 : _a5.append(linkline);
                      const elem1 = document.getElementById(item1.Id.toString());
                      if (elem1) elem1.setAttribute("data-link", linkid);
                      const elem2 = document.getElementById(item2.Id.toString());
                      if (elem2) elem2.setAttribute("data-link", linkid);
                    }
                  });
                });
              }
            }
          });
        });
      }
    }
    clearLinks() {
      document.querySelectorAll(".link").forEach((element) => {
        element.remove();
      });
    }
    hideLinkpoints() {
      document.querySelectorAll(".link-point").forEach((element) => {
        element.style.visibility = "hidden";
      });
    }
    showLinkpoints() {
      document.querySelectorAll(".link-point").forEach((element) => {
        element.style.visibility = "visible";
      });
    }
    splitterBarMouseDown(event) {
      if (this.action == "") this.action = "splitter";
      const sidebar = document.getElementById("scheduler-sidebar");
      event.target.classList.add("sizing");
      this.element = event.target;
      this.actionMemoPos.x = event.pageX;
      this.actionMemoPos.y = event.pageY;
      sidebar.setAttribute("data-w", sidebar.getAttribute("width"));
    }
    shift(step) {
      var _a;
      const items = document.getElementById("scheduler-items");
      const anim = (_a = items == null ? void 0 : items.getElementsByTagName("animateTransform")) != null ? _a : null;
      console.log(anim);
      if (anim && anim.length > 0) {
        let minpos = 0;
        let maxpos = -((this.settings.timeUnitsCount - this.settings.timeUnitsView - 1) * this.settings.timeWidth);
        let transform = this.getTranslateValues(items);
        var pos = transform.x + step * this.settings.timeWidth;
        if (pos > minpos) pos = minpos;
        if (pos < maxpos) pos = maxpos;
        anim[0].setAttribute("from", transform == null ? void 0 : transform.x.toString());
        anim[0].setAttribute("to", pos.toString());
        anim[0].beginElement();
        localStorage.setItem("schedulaShiftPos", pos.toString());
      } else if (items) {
        let minpos = 0;
        let maxpos = -((this.settings.timeUnitsCount - this.settings.timeUnitsView - 1) * this.settings.timeWidth);
        let transform = this.getTranslateValues(items);
        var pos = transform.x + step * this.settings.timeWidth;
        if (pos > minpos) pos = minpos;
        if (pos < maxpos) pos = maxpos;
        items.setAttribute("transform", "translate(" + pos + ",0)");
        localStorage.setItem("schedulaShiftPos", pos.toString());
      }
    }
    itemMouseDown(event, data) {
      const dragDrop = this.getPlugin("dragdrop");
      if (dragDrop) {
        dragDrop.onItemMouseDown(event, data);
      } else {
        if (typeof window.itemMouseDown === "function") {
          window.itemMouseDown(event, data);
        }
      }
    }
    itemMouseUp(event, data) {
      const dragDrop = this.getPlugin("dragdrop");
      if (dragDrop) {
        dragDrop.onItemMouseUp(event, data);
      } else {
        this.setAction("");
      }
      const linksPlugin = this.getPlugin("links");
      if (linksPlugin && this.settings.drawLinks) linksPlugin.drawLinks();
      this.storeData();
    }
    itemClick(event, element) {
      if (typeof window.taskClick === "function") {
        window.taskClick(event, element == null ? void 0 : element.item);
      }
      if (!this.settings.enablePopup || !(element == null ? void 0 : element.item)) return;
      if (this.settings.popupProvider && this.settings.licenseKey) {
        this.settings.popupProvider.show(element.item, event, this);
        return;
      }
      const defaultPopup = this.getPlugin("defaultpopup");
      if (defaultPopup && typeof defaultPopup.onItemClick === "function") {
        defaultPopup.onItemClick(event, element);
        return;
      }
    }
    ensurePopup() {
      let popup = document.getElementById("scheduler-popup");
      if (!popup) {
        popup = document.createElement("div");
        popup.id = "scheduler-popup";
        popup.className = "scheduler-popup";
        popup.style.display = "none";
        popup.innerHTML = `
                <div class="popup-container">
                    <div class="popup-header" id="scheduler-popup-header">
                        <button class="close-button" id="scheduler-popup-close">&#x2715;</button>
                        <span id="scheduler-popup-title">Task</span>
                    </div>
                    <div class="popup-content">
                        <div class="tab">
                            <button class="tab-btn active" data-tab="info">Info</button>
                            <button class="tab-btn" data-tab="json">JSON</button>
                        </div>
                        <div class="tabcontent active" id="scheduler-popup-tab-info">
                            <div class="formgroup">
                                <label>Text</label>
                                <input class="taskinput" id="popup-field-text" type="text">
                            </div>
                            <div class="formgroup">
                                <label>Description</label>
                                <input class="taskinput" id="popup-field-desc" type="text">
                            </div>
                            <div class="formgroup">
                                <label>From</label>
                                <input class="taskinput" id="popup-field-from" type="text" readonly>
                            </div>
                            <div class="formgroup">
                                <label>To</label>
                                <input class="taskinput" id="popup-field-to" type="text" readonly>
                            </div>
                            <div class="formgroup">
                                <label>Color</label>
                                <input class="taskinput" id="popup-field-color" type="color">
                            </div>
                            <div class="formgroup">
                                <label>Completion %</label>
                                <input class="taskinput" id="popup-field-completion" type="number" min="0" max="100">
                            </div>
                            <div class="formgroup">
                                <label>Reference</label>
                                <input class="taskinput" id="popup-field-ref" type="text">
                            </div>
                        </div>
                        <div class="tabcontent" id="scheduler-popup-tab-json">
                            <textarea id="popup-field-json"></textarea>
                        </div>
                    </div>
                    <div class="popup-footer">
                        <button class="scheduler-popup-btn" id="popup-btn-cancel">Cancel</button>
                        <button class="scheduler-popup-btn" id="popup-btn-save">Save</button>
                    </div>
                </div>`;
        document.body.appendChild(popup);
        popup.querySelectorAll(".tab-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            popup.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
            popup.querySelectorAll(".tabcontent").forEach((t) => t.classList.remove("active"));
            btn.classList.add("active");
            const tab = btn.dataset.tab;
            if (tab === "info") {
              document.getElementById("scheduler-popup-tab-info").classList.add("active");
            } else if (tab === "json") {
              document.getElementById("scheduler-popup-tab-json").classList.add("active");
            }
          });
        });
        this.makePopupDraggable(popup);
      }
      return popup;
    }
    makePopupDraggable(popup) {
      const header = popup.querySelector("#scheduler-popup-header");
      if (!header) return;
      let isDragging = false;
      let startX = 0, startY = 0, startLeft = 0, startTop = 0;
      header.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        const rect = popup.getBoundingClientRect();
        startLeft = rect.left + window.scrollX;
        startTop = rect.top + window.scrollY;
        popup.style.left = startLeft + "px";
        popup.style.top = startTop + "px";
        popup.style.transform = "none";
        e.preventDefault();
      });
      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        popup.style.left = startLeft + e.clientX - startX + "px";
        popup.style.top = startTop + e.clientY - startY + "px";
      });
      document.addEventListener("mouseup", () => {
        isDragging = false;
      });
    }
    itemOver(event, item) {
      var _a, _b, _c, _d;
      if (this.settings.itemsLinks) {
        const linksPlugin = this.getPlugin("links");
        if (linksPlugin) {
          const el = event.currentTarget;
          const cx = parseFloat((_a = el.getAttribute("x")) != null ? _a : "0");
          const cy = parseFloat((_b = el.getAttribute("y")) != null ? _b : "0");
          const cw = parseFloat((_c = el.getAttribute("width")) != null ? _c : "0");
          const ch = parseFloat((_d = el.getAttribute("height")) != null ? _d : "0");
          const pts = this.connPointElements;
          if (pts.p1) {
            pts.p1.setAttribute("cx", cx.toString());
            pts.p1.setAttribute("cy", (cy + ch / 2).toString());
            pts.p1.setAttribute("target", el.getAttribute("data-id"));
          }
          if (pts.p2) {
            pts.p2.setAttribute("cx", (cx + cw / 2).toString());
            pts.p2.setAttribute("cy", cy.toString());
            pts.p2.setAttribute("target", el.getAttribute("data-id"));
          }
          if (pts.p3) {
            pts.p3.setAttribute("cx", (cx + cw / 2).toString());
            pts.p3.setAttribute("cy", (cy + ch).toString());
            pts.p3.setAttribute("target", el.getAttribute("data-id"));
          }
          if (pts.p4) {
            pts.p4.setAttribute("cx", (cx + cw).toString());
            pts.p4.setAttribute("cy", (cy + ch / 2).toString());
            pts.p4.setAttribute("target", el.getAttribute("data-id"));
          }
          document.querySelectorAll(".link-point").forEach((e) => e.style.visibility = "visible");
        }
      }
      const dragDrop = this.getPlugin("dragdrop");
      if (dragDrop) dragDrop.onItemOver(event, item);
      else if (typeof window.itemMouseEnter === "function") window.itemMouseEnter(event, item);
    }
    itemOut(event, item) {
      if (this.settings.itemsLinks) {
        const pts = this.connPointElements;
        const itemsEl = this.schedulerItems;
        if (pts.line) itemsEl == null ? void 0 : itemsEl.append(pts.line);
        if (pts.p1) itemsEl == null ? void 0 : itemsEl.append(pts.p1);
        if (pts.p2) itemsEl == null ? void 0 : itemsEl.append(pts.p2);
        if (pts.p3) itemsEl == null ? void 0 : itemsEl.append(pts.p3);
        if (pts.p4) itemsEl == null ? void 0 : itemsEl.append(pts.p4);
      }
      const dragDrop = this.getPlugin("dragdrop");
      if (dragDrop) dragDrop.onItemOut(event, item);
      else if (typeof window.itemMouseExit === "function") window.itemMouseExit(event, item);
    }
    dropOnElement(event, element) {
    }
    dragOverElement(event, element) {
    }
    linkPointClick(event) {
      var _a, _b, _c, _d;
      if (this.settings.itemsLinks == true && this.action == "") {
        this.action = "linking";
        this.linkPoint.x = parseFloat((_a = event.target.getAttribute("cx")) != null ? _a : "0");
        this.linkPoint.y = parseFloat((_b = event.target.getAttribute("cy")) != null ? _b : "0");
        this.linkId = (_c = event.target.getAttribute("target")) != null ? _c : "-----";
      } else {
        if (this.action == "linking" && this.linkId != event.target.getAttribute("target")) {
          (_d = this.data.Resources) == null ? void 0 : _d.forEach((resource) => {
            var _a2;
            (_a2 = resource.Items) == null ? void 0 : _a2.forEach((item) => {
              if (item.Id == this.linkId) {
                item.Link = event.target.getAttribute("target");
                if (this.settings.drawLinks == true) {
                  this.drawLinks();
                }
              }
            });
          });
        }
        this.clearAction();
      }
    }
    clearAction() {
      var _a;
      if (this.action == "splitter") this.action = "";
      this.resetLinkLine();
      (_a = document.querySelector(".splitter")) == null ? void 0 : _a.classList.remove("sizing");
    }
    resetLinkLine() {
      const line = document.getElementById("link-line");
      line == null ? void 0 : line.setAttribute("x1", "0");
      line == null ? void 0 : line.setAttribute("x2", "0");
      line == null ? void 0 : line.setAttribute("y1", "0");
      line == null ? void 0 : line.setAttribute("y2", "0");
      this.linkId = "";
      this.linkPoint.x = 0;
      this.linkPoint.y = 0;
    }
    setAction(action) {
      var _a;
      if (action == "") {
        if (this.action != "") {
          (_a = this.schedulerItems) == null ? void 0 : _a.querySelectorAll("rect.item").forEach((element) => element.classList.remove(this.action));
        }
      }
      this.action = action;
    }
    drawEvents() {
      if (this.settings.viewEvents == true) {
        var parent = document.getElementById("scheduler-background");
        if (this.data.Events) {
          let ry = this.settings.monthBoxHeight;
          if (this.settings.viewWeeks)
            ry += this.settings.weekBoxHeight;
          this.data.Events.forEach((event, ei) => {
            let rx = event.Offset * this.settings.timeWidth / this.settings.timeUnitVal;
            let rw = this.settings.timeWidth * event.Width / this.settings.timeUnitVal;
            let rhh = this.data.Resources.length * this.settings.resourceHeight + this.headerHeight;
            let rh = this.settings.infoElementHeight;
            const svgevent = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgevent.setAttribute("x", rx.toString());
            svgevent.setAttribute("y", ry.toString());
            svgevent.setAttribute("width", rw.toString());
            svgevent.setAttribute("height", rhh.toString());
            svgevent.setAttribute("class", "svg-event draggable-x");
            svgevent.setAttribute("cursor", "pointer");
            svgevent.setAttribute("data-id", event.Id);
            const ev = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            ev.setAttribute("x", "0");
            ev.setAttribute("y", "0");
            ev.setAttribute("width", rw.toString());
            ev.setAttribute("height", rh.toString());
            ev.setAttribute("class", "event-header " + event.Classes);
            ev.setAttribute("fill", event.Color);
            const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
            title.innerHTML = event.Description;
            ev.append(title);
            if (this.settings.viewEventExtended == true) {
              let p = document.getElementById("scheduler-items");
              let y = this.headerHeight;
              const extevent = document.createElementNS("http://www.w3.org/2000/svg", "rect");
              extevent.setAttribute("x", rx.toString());
              extevent.setAttribute("y", y.toString());
              extevent.setAttribute("width", rw.toString());
              extevent.setAttribute("height", rhh.toString());
              extevent.setAttribute("fill", event.Color);
              extevent.setAttribute("class", "event-extension " + event.Classes);
              p == null ? void 0 : p.append(extevent);
            }
            svgevent.append(ev);
            parent == null ? void 0 : parent.append(svgevent);
          });
        }
      }
    }
    drawInfoUnits() {
      if (this.settings.viewInfoElements) {
      }
    }
    // Helper to get sum for mouse over
    getSum(box) {
      var _a;
      let dt = box.getAttribute("data-date");
      if (!dt) return {};
      let dt1 = this.settings.date;
      let dt2 = new Date(dt);
      let start = Math.trunc((dt2.getTime() - dt1.getTime()) / 1e3 / 60);
      let stop = start + this.settings.timeUnitVal;
      let sum = 0;
      let y = parseFloat(box.getAttribute("y"));
      let resIndex = (y - this.headerHeight) / this.settings.resourceHeight;
      let resource = this.data.Resources[resIndex];
      let name = resource.Name;
      (_a = resource.Items) == null ? void 0 : _a.forEach(function(i, item) {
        let x = i.Offset;
        let w = i.Offset + i.Width;
        if (x < start && w > start && w <= stop) {
          sum += w - start;
        } else if (x >= start && w <= stop) {
          sum += i.Width;
        } else if (x >= start && x < stop && w > stop) {
          sum += stop - x;
        } else if (x < start && w > stop) {
          sum += stop - start;
        }
      });
      var info = {};
      info["sum"] = sum;
      info["name"] = name;
      info["info"] = "-- --";
      info["resource"] = dt2.toLocaleDateString() + " | " + name;
      if (sum > 0) {
        let hh = Math.trunc(sum / 60);
        let mm = sum - hh * 60;
        let time = this.pad(hh) + ":" + this.pad(mm);
        info["info"] = time;
      }
      return info;
    }
    pad(d) {
      return d < 10 ? "0" + d.toString() : d.toString();
    }
    switchViewMode(event, view) {
      var _a;
      switch (view) {
        case SchedulaView.Day:
          this.settings.timeUnitsView = 2;
          this.settings.shifterStep = 1;
          break;
        case SchedulaView.Week:
          this.settings.timeUnitsView = 7;
          this.settings.shifterStep = 4;
          break;
        case SchedulaView.Month:
          this.settings.timeUnitsView = 31;
          this.settings.shifterStep = 15;
          break;
        default:
          break;
      }
      const clickedDateStr = (_a = event.target.getAttribute("data-date")) != null ? _a : "";
      if (clickedDateStr) {
        this.settings.date = new Date(clickedDateStr);
      }
      this.currentView = view;
      localStorage.setItem("schedulaView", view);
      localStorage.removeItem("schedulaShiftPos");
      const items = document.getElementById("scheduler-items");
      if (items) items.setAttribute("transform", "translate(0,0)");
      this.refresh();
    }
    restoreView() {
      let savedView = localStorage.getItem("schedulaView");
      if (savedView && Object.values(SchedulaView).includes(savedView)) {
        this.currentView = savedView;
        switch (savedView) {
          case SchedulaView.Day:
            this.settings.timeUnitsView = 2;
            this.settings.shifterStep = 1;
            break;
          case SchedulaView.Week:
            this.settings.timeUnitsView = 7;
            this.settings.shifterStep = 4;
            break;
          case SchedulaView.Month:
            this.settings.timeUnitsView = 31;
            this.settings.shifterStep = 15;
            break;
        }
      }
    }
    restoreShiftPos() {
      let savedPos = localStorage.getItem("schedulaShiftPos");
      if (savedPos) {
        let pos = parseFloat(savedPos);
        if (!isNaN(pos) && pos !== 0) {
          const items = document.getElementById("scheduler-items");
          if (items) {
            let minpos = 0;
            let maxpos = -((this.settings.timeUnitsCount - this.settings.timeUnitsView - 1) * this.settings.timeWidth);
            if (pos > minpos) pos = minpos;
            if (pos < maxpos) pos = maxpos;
            items.setAttribute("transform", "translate(" + pos + ",0)");
          }
        }
      }
    }
    resourceClick(event, data) {
    }
    drawMonths() {
      const parent = document.getElementById("scheduler-header");
      var dt = this.settings.date;
      if (dt && parent) {
        let lastmonth = -1;
        let increment = 60 * 1e3 * this.settings.timeUnitVal;
        for (let i = 0; i < this.settings.timeUnitsCount; i++) {
          var cdate = new Date(dt.getTime() + i * increment);
          let w = this.settings.timeWidth;
          let x = i * this.settings.timeWidth;
          let day = cdate.getUTCDate();
          let month = cdate.getUTCMonth();
          if (month != lastmonth) {
            var days = new Date(cdate.getUTCFullYear(), cdate.getUTCMonth() + 1, 1).getUTCDate();
            var mw = w * days;
            if (this.settings.timeUnitVal == 60) mw = w * 24;
            var my = 0;
            var mh = this.settings.monthBoxHeight;
            var mx = x;
            if (this.settings.timeUnitVal == 1440) {
              if (day != 1) mx = x - (day - 1) * w;
            } else {
              mx = x + this.settings.timeWidth;
            }
            var t = this.settings.months[cdate.getUTCMonth()];
            if (this.settings.viewYear == true) {
              t += " " + cdate.getUTCFullYear();
            }
            if (this.settings.timeUnitVal == 60) t = cdate.toLocaleDateString();
            const monthsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            monthsvg.setAttribute("x", mx.toString());
            monthsvg.setAttribute("y", my.toString());
            monthsvg.setAttribute("width", mw.toString());
            monthsvg.setAttribute("height", mh.toString());
            monthsvg.setAttribute("font-size", "100%");
            const monthBox = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            monthBox.setAttribute("x", "0");
            monthBox.setAttribute("y", "0");
            monthBox.setAttribute("width", "100%");
            monthBox.setAttribute("height", "100%");
            monthBox.setAttribute("data-date", cdate.toUTCString());
            monthBox.setAttribute("class", "monthbox");
            let that = this;
            monthBox.addEventListener("click", (event) => {
              that.switchViewMode(event, SchedulaView.Month);
            });
            const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
            title.innerHTML = t;
            monthBox.append(title);
            monthsvg.append(monthBox);
            let tx = 10;
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", tx.toString());
            text.setAttribute("y", "50%");
            text.setAttribute("font-size", "40%");
            text.setAttribute("dominant-baseline", "middle");
            text.setAttribute("class", "header-text");
            text.innerHTML = t;
            monthsvg.append(text);
            if (this.settings.viewStars == true) {
              const stars = document.createElementNS("http://www.w3.org/2000/svg", "use");
              stars.setAttribute("x", (mx - 31).toString());
              stars.setAttribute("y", (my + 8).toString());
              stars.setAttribute("href", "#stars");
              monthsvg.append(stars);
            }
            if (this.settings.viewMonthLogo == true) {
              const logo = document.createElementNS("http://www.w3.org/2000/svg", "image");
              logo.setAttribute("x", (mw - mh).toString());
              logo.setAttribute("y", (mh / 8).toString());
              logo.setAttribute("width", (mh / 4 * 3).toString());
              logo.setAttribute("height", (mh / 4 * 3).toString());
              logo.setAttribute("href", this.settings.logo);
              logo.setAttribute("class", "scheduler-month-logo");
              const title2 = document.createElementNS("http://www.w3.org/2000/svg", "title");
              title2.innerHTML = this.settings.logoTitle;
              logo.append(title2);
              monthsvg.append(logo);
            }
            parent.append(monthsvg);
            lastmonth = month;
          }
        }
      }
    }
    drawWeeks() {
      let parent = document.getElementById("scheduler-header");
      var dt = this.settings.date;
      if (dt && parent) {
        let increment = 60 * 1e3 * this.settings.timeUnitVal;
        for (let i = 0; i < this.settings.timeUnitsCount; i++) {
          let cdate = new Date(dt.getTime() + i * increment);
          let hilight = cdate.getDay() == 0;
          let h = this.settings.weekBoxHeight;
          let w = this.settings.timeWidth * 7;
          let y = this.settings.monthBoxHeight;
          let x = i * this.settings.timeWidth;
          if (this.settings.viewWeeks && (hilight || i == 0) && this.settings.timeUnitVal == 1440) {
            let weeksvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            weeksvg.setAttribute("x", x.toString());
            weeksvg.setAttribute("y", y.toString());
            weeksvg.setAttribute("width", w.toString());
            weeksvg.setAttribute("height", h.toString());
            let elem = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            elem.setAttribute("x", "0");
            elem.setAttribute("y", "0");
            elem.setAttribute("width", w.toString());
            elem.setAttribute("height", h.toString());
            elem.setAttribute("data-date", cdate.toUTCString());
            elem.classList.add("week-element");
            let that = this;
            elem.addEventListener("click", (event) => {
              that.switchViewMode(event, SchedulaView.Week);
            });
            let txt = this.getWeekOfYear(cdate).toString();
            const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
            title.innerHTML = txt;
            elem.append(title);
            weeksvg.append(elem);
            let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", "50%");
            text.setAttribute("y", "50%");
            text.setAttribute("font-size", "70%");
            text.setAttribute("dominant-baseline", "middle");
            text.setAttribute("fill", "gray");
            text.classList.add("week-element-text");
            text.setAttribute("text-anchor", "middle");
            text.innerHTML = txt;
            weeksvg.append(text);
            parent.append(weeksvg);
          }
        }
      }
    }
    drawTimeUnits() {
      let parent = document.getElementById("scheduler-header");
      let dt = this.settings.date;
      if (dt && parent) {
        let today = /* @__PURE__ */ new Date();
        let increment = 60 * 1e3 * this.settings.timeUnitVal;
        for (let i = 0; i < this.settings.timeUnitsCount; i++) {
          let cdate = new Date(dt.getTime() + i * increment);
          let longdate = cdate.toLocaleDateString("it-it", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
          let daynum = cdate.toLocaleDateString("it-it", { day: "numeric" });
          let daymonth = cdate.toLocaleDateString("it-it", { day: "numeric", month: "short" });
          let istoday = today.getDate() == cdate.getDate() && today.getMonth() == cdate.getMonth() && today.getFullYear() == cdate.getFullYear();
          let hilight = cdate.getUTCDay() == 0 && this.settings.hilightSunday;
          let h = this.settings.timeElementHeight;
          let w = this.settings.timeWidth;
          let y = this.headerHeight - this.settings.timeElementHeight;
          let x = i * this.settings.timeWidth;
          const elem = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          elem.setAttribute("x", x.toString());
          elem.setAttribute("y", y.toString());
          elem.setAttribute("width", w.toString());
          elem.setAttribute("height", h.toString());
          elem.classList.add("time-element");
          if (istoday) elem.classList.add("today");
          if (hilight) elem.classList.add("sunday");
          elem.setAttribute("data-date", cdate.toUTCString());
          elem.setAttribute("fill", "transparent");
          let that = this;
          elem.addEventListener("click", (event) => {
            that.switchViewMode(event, SchedulaView.Day);
          });
          parent.append(elem);
          var tx = x + this.settings.timeWidth / 2;
          if (this.settings.timeUnitVal == 60)
            tx = x;
          var ty = y + h - 4;
          const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
          text.setAttribute("x", tx.toString());
          text.setAttribute("y", ty.toString());
          text.classList.add("time-element-text");
          text.setAttribute("font-size", "75%");
          text.setAttribute("font-family", "Arial");
          text.setAttribute("stroke-width", "0.2");
          text.setAttribute("font-weight", "bold");
          text.setAttribute("text-anchor", "middle");
          if (istoday) text.classList.add("today");
          if (hilight) text.classList.add("sunday");
          if (this.settings.timeUnitsView > 7) {
            text.innerHTML = daynum;
          } else if (this.settings.timeUnitsView == 1) {
            text.innerHTML = longdate;
          } else {
            text.innerHTML = daymonth;
          }
          parent.append(text);
          const dummy = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          dummy.setAttribute("x", x.toString());
          dummy.setAttribute("y", y.toString());
          dummy.setAttribute("width", w.toString());
          dummy.setAttribute("height", h.toString());
          dummy.classList.add("time-unit");
          dummy.setAttribute("data-date", cdate.toUTCString());
          dummy.addEventListener("click", (event) => {
            that.switchViewMode(event, SchedulaView.Day);
            if (typeof timeMouseClick == "function") {
              timeMouseClick(event, cdate);
            }
          });
          const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
          title.innerHTML = longdate;
          dummy.append(title);
          parent.append(dummy);
        }
      }
    }
    getWeekOfYear(date) {
      var day = this.getDayOfYear(date);
      var week = Math.floor(day / 7);
      return week + 1;
    }
    getDayOfYear(date) {
      var start = new Date(date.getFullYear(), 0, 0);
      var diff = date.getTime() - start.getTime();
      var oneDay = 1e3 * 60 * 60 * 24;
      var day = Math.floor(diff / oneDay);
      return day;
    }
    getTemplate() {
    }
    drawHeader() {
      const parent = document.getElementById("scheduler-header");
      if (parent) {
        var h = this.headerHeight;
        var w = this.settings.timeUnitsCount * this.settings.timeWidth;
        var y = 0;
        var x = 0;
        const header = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        header.setAttribute("x", x.toString());
        header.setAttribute("y", y.toString());
        header.setAttribute("width", w.toString());
        header.setAttribute("height", h.toString());
        header.setAttribute("class", "header-bg");
        parent.appendChild(header);
      }
    }
  };

  // src/models/SchedulaSettings.ts
  var SchedulaSettings2 = class {
    constructor() {
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
      this.resourceHeight = 48;
      this.resourceWidth = 200;
      this.resourceImages = true;
      this.resourceChange = true;
      this.resCollapsedWidth = 1e3;
      this.splitBarinitPos = 300;
      this.infoElementSize = 15;
      this.resRoundRect = 2;
      this.resPadding = 2;
      this.roundRect = 5;
      this.progressBarPattern = true;
      this.resUnitsView = 0;
      this.timeUnitsView = 30;
      //number of time units shown in a screen
      this.timeUnitVal = 1440;
      //number of minutes in time unit
      this.gridStep = 1440;
      this.gridOffset = 0;
      //grid step in minutes
      this.timeUnitsCount = 90;
      //number of time units view
      this.timeWidth = 144;
      //graphic width of time unit
      this.timeElementHeight = 15;
      this.monthBoxHeight = 50;
      this.weekBoxHeight = 15;
      this.infoElementHeight = 15;
      this.viewMonthLogo = true;
      this.logoTitle = "";
      this.splitterWidth = 10;
      this.sidebarMaxWidth = 350;
      this.sidebarMinWidth = 40;
      this.date = /* @__PURE__ */ new Date("2023-09-21");
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
      this.itemTextSize = "30%";
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
      this.template = "";
      this.months = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre"
      ];
      /**
       * List of plugins to register with the core at init() time.
       * Each plugin must implement `ISchedulaPlugin`.
       * PRO plugins (DragDropPlugin, LinksPlugin, EventsPlugin) go here.
       *
       * @example
       * ```typescript
       * settings.plugins = [new DragDropPlugin(), new LinksPlugin()];
       * ```
       */
      this.plugins = [];
      /**
       * If true, enables popup functionality when clicking on an item.
       * The actual popup shown depends on the registered plugins or popupProvider.
       */
      this.enablePopup = true;
    }
  };

  // src/ui/SchedulaTemplate.ts
  var SchedulaTemplate2 = class {
    constructor() {
      this.svgString = ` 
    
    <svg 
    
            xmlns='http://www.w3.org/2000/svg' 
            id="main-svg" viewBox="0 0 1000 1000"
            version="1.1" 
           
          
            
         
            > 
            <pattern id="pattern-chevron" x="0" y="0" patternUnits="objectBoundingBox" width="100" height="180" viewBox="0 0 10 18"> 
         
           
            <g id="chevron">
            
              <path class="left" d="M0 0l5 3v5l-5 -3z"></path>
              <path class="right" d="M10 0l-5 3v5l5 -3"></path>
            </g>
           
           
            <use x="0" y="9" xlink:href="#chevron"></use>
          
          </pattern>
          <pattern id="progress-pattern" x="0" y="0" width="50" height="140" patternUnits="userSpaceOnUse" >    
          <rect x="0" y="0" width="25" height="140" fill="black" opacity="0.4"/>
          <rect x="25" y="0" width="25" height="140" fill="white" opacity="0.4"/>
          <animateTransform attributeName="patternTransform" type="rotate" from="30" to="30" dur="4s" repeatCount="indefinite"/> 
          <animateTransform attributeName="patternTransform" type="translate" from="0" to="100" dur="4s" repeatCount="indefinite"  additive="sum"/>  
        </pattern>
          <pattern
        id="p_circles"
        x=".125"
        y=".125"
        width=".25"
        height=".25"
        patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="10" />
      </pattern>
      <pattern id="obliqueLines"
      x="0" y="0" width="2" height="2"
      patternUnits="userSpaceOnUse" 
      patternTransform="rotate(45)">
    <rect x="0" y="0" width="1" height="0.2" style="stroke: 2; fill: #0000ff" />
    
    </pattern>
            <animate id="vanim" attributeName="viewBox" 
                to="" 
                from="" 
                dur="0.3s" 
                fill="freeze" 
                repeatCount="1" 
                begin="indefinite"/> 
    
            <defs id="defs" > 
                <marker id="circle-marker-end" markerWidth="8" markerHeight="8" refX="5" class="marker-end" refY="5" orient="auto">
                    <circle class="link-wire-marker-end" cx="5" cy="5" r="2"></circle>
                </marker>
    
                <linearGradient id="gradV1" x1="0%" y1="0%" x2="0%" y2="100%"> 
                    <stop class="grad-color1" offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0.8" /> 
                    <stop class="grad-color2" offset="100%" style="stop-color:rgb(123, 175, 196);stop-opacity:0.8" /> 
                
                </linearGradient> 
               <linearGradient id="gradH1" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop  class="grad-color1" offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0.8" />
                   <stop  class="grad-color2" offset="100%" style="stop-color:rgb(123, 175, 196);stop-opacity:0.8" />
    
                </linearGradient>
    
                
                <g id="stars" transform="scale(0.7)">
                    <path
                       transform="rotate(16.166027,247.23984,-34.317252)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,251.21746,-4.9164116)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-4"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,255.36117,24.260777)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-2"
                       style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,259.48588,53.211077)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-9"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,263.61059,82.161379)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-5"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                </g>
                <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
                            <path d="M-1,1 l2,-2
                                    M0,4 l4,-4
                                    M3,5 l2,-2" 
                                    style="stroke:#00ff00; stroke-width:0.7" fill="orange"/>
                </pattern>
            </defs>'
    
    
        <g id="wrapper" transform="translate(0,0)">
            <g  id="scheduler-items" left="0px" transform="translate(0,0)">
    
                <animateTransform  
                    xlink:href="#scheduler-items"
                    attributeName="transform" 
                    attributeType="XML"
                    type="translate"
                    from="0"
                    to="50"
                    dur="0.4s"
    
                    calcMode="spline"
                    keyTimes="0;1" 
                    keySplines=" .4 0 .6 1  " 
                    repeatCount="1"
                    begin="indefinite"
                    fill="freeze" />
    
    
                <g id="scheduler-header">
                
                </g>
                <g id="scheduler-background" transform="translate(0,0)">
                
                </g>
    
    
    
            </g>
            
        
        </g>
        <svg id="scheduler-sidebar" x="0" y="0" width="6000" height="100%" >
            <svg id="scheduler-resources" x="0" y="0" height="100%" width="calc(100% - 40px)">
            </svg>
            <svg id="scheduler-splitter" x="calc(100% - 80px)" y="0" width="80" height="100%" >
             
                <rect x="calc(100% - 45px)" y="0" width="10" height="100%" class="splitter" fill="white" style="cursor:ew-resize;"/>
               
          
            </svg>
        </svg>
      
    </svg>
    
    <svg id="shifter-dx" class="shifter svg-overlay right" style="visibility:hidden">
        <g transform="scale(4)">
            <circle  cx="8" cy="8" r="8" fill="white" ></circle>
            <path  d='M 3, 2 L 5,4 L 3, 6' stroke="#6699cc" fill="none" transform="scale(2)"/>
        </g>
    </svg>
    
    <svg id="shifter-sx" class="shifter svg-overlay left" style="visibility:hidden">
            
        <g transform="scale(4) rotate(180 8 8)">
            <circle  cx="8" cy="8" r="8" fill="white" ></circle>
            <path  d='M 3, 2 L 5,4 L 3, 6' stroke="#6699cc" fill="none" transform="scale(2)"/>
        </g>
    </svg>
    
    `;
    }
  };

  // src/plugins/DragDropPlugin.ts
  var DragDropPlugin = class {
    constructor() {
      this.name = "dragdrop";
      this._dragItem = null;
    }
    init(core) {
      this._core = core;
    }
    destroy() {
      this._core = null;
    }
    // ── Mouse move (delegates moving or sizing) ────────────────────────────
    onMouseMove(event) {
      const action = this._core.currentAction;
      if (action === "moving") this._move();
      else if (action === "sizing") this._resize();
    }
    _move() {
      var _a, _b, _c;
      const core = this._core;
      const element = core.currentElement;
      if (!element) return;
      const x = parseFloat((_a = element.getAttribute("data-x")) != null ? _a : "0");
      const y = parseFloat((_b = element.getAttribute("data-y")) != null ? _b : "0");
      const mpos = core.mousePosition;
      const memo = core.actionMemoPosition;
      const ratio = core.viewRatio;
      const variationx = Math.round((mpos.x - memo.x) * ratio * 100) / 100;
      const variationy = Math.round((mpos.y - memo.y) * ratio * 100) / 100;
      element.setAttribute("x", (x + variationx).toString());
      if (core.settings.resourceChange) {
        element.setAttribute("y", (y + variationy).toString());
      }
      (_c = core.schedulerItemsElement) == null ? void 0 : _c.append(element);
      this._liveRefreshPopup();
    }
    _resize() {
      var _a, _b;
      const core = this._core;
      const element = core.currentElement;
      if (!element) return;
      const mpos = core.mousePosition;
      const memo = core.actionMemoPosition;
      const ratio = core.viewRatio;
      const w = parseFloat((_a = element.getAttribute("data-w")) != null ? _a : "0");
      const variationx = Math.round((mpos.x - memo.x) * ratio * 100) / 100;
      element.setAttribute("width", (w + variationx).toString());
      (_b = core.schedulerItemsElement) == null ? void 0 : _b.append(element);
      this._liveRefreshPopup();
    }
    _liveRefreshPopup() {
      if (!this._dragItem) return;
      const core = this._core;
      if (!core.settings.enablePopup) return;
      const popupProvider = core.settings.popupProvider && core.settings.licenseKey ? core.settings.popupProvider : core.getPlugin("defaultpopup");
      if (popupProvider && typeof popupProvider.refreshItem === "function") {
        popupProvider.refreshItem(this._dragItem);
      }
    }
    // ── Mouse up (finalize action) ─────────────────────────────────────────
    onMouseUp(event) {
      var _a, _b;
      const core = this._core;
      const action = core.currentAction;
      if (action === "moving" || action === "sizing") {
        const element = core.currentElement;
        if (element) {
          const id = element.getAttribute("data-id");
          let itemData = null;
          (_a = core.data.Resources) == null ? void 0 : _a.forEach((r) => {
            var _a2;
            (_a2 = r.Items) == null ? void 0 : _a2.forEach((i) => {
              if (String(i.Id) === id) itemData = i;
            });
          });
          if (itemData) {
            this.processItemAction(element, itemData, event.ctrlKey);
            if (core.settings.enablePopup) {
              const popupProvider = core.settings.popupProvider || core.getPlugin("advancedpopup") || core.getPlugin("defaultpopup");
              if (popupProvider && typeof popupProvider.refreshItem === "function") {
                popupProvider.refreshItem(itemData);
              }
            }
          }
          this._dragItem = null;
        }
      }
      if (action) {
        (_b = core.schedulerItemsElement) == null ? void 0 : _b.querySelectorAll("rect.item").forEach(
          (el) => {
            el.classList.remove(action);
          }
        );
      }
      core.currentAction = "";
      if (typeof window.modified === "function") window.modified();
      if (core.settings.storeData) localStorage.setItem("data", JSON.stringify(core.data));
    }
    /**
     * Applies the result of a move/resize action to the data model.
     * Handles grid snapping and collision/interference logic.
     * (formerly named processItemAction2 — renamed for clarity)
     */
    processItemAction(element, data, ctrl) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const core = this._core;
      const settings = core.settings;
      let x = parseFloat((_a = element.getAttribute("x")) != null ? _a : "0");
      let y = parseFloat((_b = element.getAttribute("y")) != null ? _b : "0");
      let w = parseFloat((_c = element.getAttribute("width")) != null ? _c : "0");
      const dx = parseFloat((_d = element.getAttribute("data-x")) != null ? _d : "0");
      const dy = parseFloat((_e = element.getAttribute("data-y")) != null ? _e : "0");
      const dw = parseFloat((_f = element.getAttribute("data-w")) != null ? _f : "0");
      const axisXsteps = settings.gridStep / (settings.timeUnitVal / settings.timeWidth);
      const gridOffset = settings.gridOffset / (settings.timeUnitVal / settings.timeWidth);
      x = this._snap(x, axisXsteps, gridOffset);
      y = this._snap(y, settings.resourceHeight, core.headerHeight + settings.itemsPadding);
      w = this._snap(w, axisXsteps);
      const moved = Math.abs(dx - x) > axisXsteps / 2 || y !== dy;
      const resized = Math.abs(dw - w) > axisXsteps / 3;
      const si = new SchedulaItem(core, data, core.calendar);
      if (moved) {
        si.X = x;
        si.Y = y;
      } else {
        element.setAttribute("x", dx.toString());
        element.setAttribute("y", dy.toString());
        if (resized) {
          si.W = w;
        } else {
          element.setAttribute("width", dw.toString());
        }
      }
      if (settings.checkInterferences) {
        const ok = si.checkInterference();
        if (!ok) {
          if (!settings.shiftItems || !ctrl) {
            if (resized && !moved) {
              si.W = dw;
            } else {
              si.X = dx;
              si.Y = dy;
            }
          } else {
            const previous = (_i = (_h = (_g = core.data.Resources[si.Resource]) == null ? void 0 : _g.Items) == null ? void 0 : _h.filter((i) => i.Offset + i.Width > si.Offset && i.Offset < si.Offset)) == null ? void 0 : _i.sort((a, b) => a.Offset - b.Offset)[0];
            if (previous) {
              const siPrev = new SchedulaItem(core, previous, core.calendar);
              si.X = siPrev.X + siPrev.W;
            }
            let cursor = si.X + si.W;
            const following = (_m = (_l = (_k = (_j = core.data.Resources[si.Resource]) == null ? void 0 : _j.Items) == null ? void 0 : _k.filter((i) => i.Offset >= si.Offset && i.Id !== si.Id)) == null ? void 0 : _l.sort((a, b) => parseInt(a.Offset) - parseInt(b.Offset))) != null ? _m : [];
            for (const fi of following) {
              const siFi = new SchedulaItem(core, fi, core.calendar);
              if (cursor > siFi.X) siFi.X = cursor;
              cursor = siFi.X + siFi.W;
            }
          }
        }
      }
    }
    /** Snap a value to the nearest grid step */
    _snap(value, step, min) {
      const base = min != null ? min : 0;
      const modulo = (value - base) % step;
      const correction = modulo > step / 2 ? step - modulo : -modulo;
      const result = value + correction;
      return min != null && result < min ? min : result;
    }
    // ── Item mousedown ─────────────────────────────────────────────────────
    onItemMouseDown(event, data) {
      var _a, _b;
      const core = this._core;
      if (core.currentAction !== "") return;
      if (event.button === 0 && core.settings.canMoveItems && event.target.classList.contains("item")) {
        core.currentAction = "moving";
      } else if (event.button === 0 && core.settings.canResizeItems && event.target.classList.contains("resize")) {
        core.currentAction = "sizing";
      }
      if (core.currentAction !== "") {
        const el = event.target.parentElement;
        core.currentElement = el;
        if (event.target.classList.contains("item")) {
          event.target.classList.add(core.currentAction);
        }
        if (event.target.classList.contains("resize") && el) {
          const id = el.getAttribute("data-id");
          (_a = document.querySelector(`svg[data-id="${id}"]>rect.item`)) == null ? void 0 : _a.classList.add(core.currentAction);
        }
        el == null ? void 0 : el.setAttribute("data-x", data.element.getAttribute("x"));
        el == null ? void 0 : el.setAttribute("data-y", data.element.getAttribute("y"));
        el == null ? void 0 : el.setAttribute("data-w", data.element.getAttribute("width"));
        const memo = core.actionMemoPosition;
        memo.x = event.pageX;
        memo.y = event.pageY;
        this._dragItem = (_b = data.item) != null ? _b : null;
      }
      if (typeof window.itemMouseDown === "function") {
        window.itemMouseDown(event, data);
      }
    }
    // ── Item mouseup ───────────────────────────────────────────────────────
    onItemMouseUp(event, data) {
      this.onMouseUp(event);
    }
    // ── Item click ─────────────────────────────────────────────────────────
    onItemClick(event, element) {
    }
    // ── External drop ──────────────────────────────────────────────────────
    onDrop(event) {
      var _a, _b, _c, _d, _e, _f, _g;
      event.stopImmediatePropagation();
      const core = this._core;
      const settings = core.settings;
      if (!settings.dropEnable || !event.target.classList.contains("box-element")) return;
      const strdata = (_a = event.dataTransfer) == null ? void 0 : _a.getData("task");
      if (!strdata) return;
      const data = JSON.parse(strdata);
      const y = parseFloat((_b = event.target.getAttribute("y")) != null ? _b : "0");
      const res = (y - core.headerHeight) / settings.resourceHeight;
      const resource = core.data.Resources[res];
      if (!resource) return;
      const dd = new Date((_c = event.target.getAttribute("data-date")) != null ? _c : "");
      const sd = settings.date;
      let timespan = Math.trunc((dd.getTime() - sd.getTime()) / 1e3 / 60);
      (_d = resource.Items) == null ? void 0 : _d.forEach((item) => {
        if (timespan < item.Offset + item.Width && timespan >= item.Offset) {
          timespan = item.Offset + item.Width;
        }
      });
      if (settings.optimizeStart) {
        const cal = (_f = (_e = core.getCalendarForResource) == null ? void 0 : _e.call(core, resource.Id)) != null ? _f : core.calendar;
        if (cal) {
          const newFrom = cal.optimazeStart({ From: sd.getTime() / 1e3 / 60 + timespan });
          timespan = newFrom - sd.getTime() / 1e3 / 60;
        }
      }
      const ra = Math.floor(Math.random() * 1e7);
      const dropped = {
        Id: "_temp_id_" + ra,
        Text: data.text1,
        Description: data.text2,
        Offset: timespan,
        Width: parseInt(data.width),
        Effort: parseInt(data.width),
        IsNew: true,
        Modified: true,
        Color1: data.color1,
        Classes: data.classes,
        From: sd.getTime() / 1e3 / 60 + timespan,
        ForeignKey: data.key,
        Reference: data.ref,
        Pieces: data.pieces
      };
      dropped.To = dropped.From + dropped.Width;
      if (!resource.Items) resource.Items = [];
      resource.Items.push(dropped);
      if (typeof window.modified === "function") window.modified();
      if (data.elementId) (_g = document.getElementById(data.elementId)) == null ? void 0 : _g.remove();
      core.init();
    }
    // ── Hover ──────────────────────────────────────────────────────────────
    onItemOver(event, item) {
      if (typeof window.itemMouseEnter === "function") {
        window.itemMouseEnter(event, item);
      }
    }
    onItemOut(event, item) {
      if (typeof window.itemMouseExit === "function") {
        window.itemMouseExit(event, item);
      }
    }
    // ── Escape ─────────────────────────────────────────────────────────────
    onEscape() {
      var _a, _b, _c, _d, _e;
      const core = this._core;
      const el = core.currentElement;
      if (core.currentAction === "moving" && el) {
        el.setAttribute("x", (_a = el.getAttribute("data-x")) != null ? _a : "0");
        el.setAttribute("y", (_b = el.getAttribute("data-y")) != null ? _b : "0");
        (_c = el.querySelector("rect.item")) == null ? void 0 : _c.classList.remove("moving");
      } else if (core.currentAction === "sizing" && el) {
        el.setAttribute("width", (_d = el.getAttribute("data-w")) != null ? _d : "0");
        (_e = el.querySelector("rect.item")) == null ? void 0 : _e.classList.remove("sizing");
      }
      core.currentAction = "";
    }
  };

  // src/plugins/LinksPlugin.ts
  var LinksPlugin = class {
    constructor() {
      this.name = "links";
      // SVG elements for connection points and the in-progress link line
      this._cp1 = null;
      this._cp2 = null;
      this._cp3 = null;
      this._cp4 = null;
      this._line = null;
    }
    init(core) {
      this._core = core;
    }
    destroy() {
      this._core = null;
    }
    initLinks() {
      const core = this._core;
      const items = core.schedulerItemsElement;
      if (!items) return;
      const mkCircle = (cls) => {
        const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", "0");
        c.setAttribute("cy", "0");
        c.setAttribute("r", "5");
        c.setAttribute("fill", "white");
        c.setAttribute("stroke", "#00ff00");
        c.setAttribute("stroke-width", "1");
        c.setAttribute("class", `${cls} link-point`);
        return c;
      };
      this._cp1 = mkCircle("c1");
      this._cp2 = mkCircle("c2");
      this._cp3 = mkCircle("c3");
      this._cp4 = mkCircle("c4");
      this._line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      this._line.setAttribute("x1", "0");
      this._line.setAttribute("y1", "0");
      this._line.setAttribute("x2", "0");
      this._line.setAttribute("y2", "0");
      this._line.setAttribute("stroke-width", "1");
      this._line.setAttribute("id", "link-line");
      this._line.setAttribute("stroke", "#00ff00");
      items.append(this._line, this._cp1, this._cp2, this._cp3, this._cp4);
      core.connPointElements = { p1: this._cp1, p2: this._cp2, p3: this._cp3, p4: this._cp4, line: this._line };
      document.querySelectorAll(".link-point").forEach((el) => {
        el.addEventListener("click", (e) => this.onLinkPointClick(e));
      });
    }
    drawLinks() {
      var _a;
      this.clearLinks();
      const core = this._core;
      const settings = core.settings;
      if (!settings.drawLinks) return;
      (_a = core.data.Resources) == null ? void 0 : _a.forEach((resource, resindex) => {
        var _a2;
        (_a2 = resource.Items) == null ? void 0 : _a2.forEach((item1) => {
          var _a3;
          if (!item1.Link) return;
          (_a3 = core.data.Resources) == null ? void 0 : _a3.forEach((resource2, resindex2) => {
            var _a4;
            (_a4 = resource2.Items) == null ? void 0 : _a4.forEach((item2) => {
              var _a5, _b, _c, _d, _e;
              const samelink = item2.Link === item1.Link;
              const idlink = item1.Link === item2.Id;
              const notitself = item2.Id !== item1.Id;
              const singletime = samelink && (item1.Offset < item2.Offset || item1.Offset === item2.Offset && resindex > resindex2) || idlink;
              if (!(samelink || idlink) || !singletime || !notitself) return;
              const cond = resindex === resindex2;
              const tw = settings.timeWidth;
              const tv = settings.timeUnitVal;
              const rh = settings.resourceHeight;
              const hh = core.headerHeight;
              const ip = settings.itemsPadding;
              let x1 = tw * ((item1.Offset + item1.Width / 2) / tv);
              let x2 = tw * ((item2.Offset + item2.Width / 2) / tv);
              let y1 = resindex * rh + hh + ip;
              let y2 = (resindex2 - 1) * rh + hh - ip;
              let strpath = "";
              if (cond) {
                const i1 = item1.Offset > item2.Offset ? item2 : item1;
                const i2 = item1.Offset > item2.Offset ? item1 : item2;
                x1 = tw * ((i1.Offset + i1.Width) / tv);
                x2 = tw * (i2.Offset / tv);
                y1 = y2 = (resindex + 0.5) * rh + hh;
                strpath = `M${x1},${y1} L${x2},${y1}`;
              } else {
                const y3 = ((resindex + resindex2) / 2 + 0.5) * rh + hh;
                if (resindex < resindex2) {
                  y1 = (resindex + 1) * rh + hh - ip;
                  y2 = resindex2 * rh + hh + ip;
                } else {
                  y2 = (resindex2 + 1) * rh + hh - ip;
                }
                strpath = settings.linkSpline ? `M ${x1},${y1} C${x1} ${y3} ${x2},${y3} ${x2} ${y2}` : `M${x1},${y1} V ${y3} H${x2} V${y2}`;
              }
              const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
              const linkid = "link-" + Math.floor(Math.random() * 1e7);
              path.setAttribute("id", linkid);
              path.setAttribute("d", strpath);
              path.setAttribute("fill", "none");
              path.setAttribute("stroke-width", "4");
              path.setAttribute("class", "link link-wire");
              path.setAttribute("stroke-linecap", "round");
              path.setAttribute("data-link", item1.Link.toString());
              (_a5 = core.schedulerItemsElement) == null ? void 0 : _a5.append(path);
              (_c = document.getElementById((_b = item1.Id) == null ? void 0 : _b.toString())) == null ? void 0 : _c.setAttribute("data-link", linkid);
              (_e = document.getElementById((_d = item2.Id) == null ? void 0 : _d.toString())) == null ? void 0 : _e.setAttribute("data-link", linkid);
            });
          });
        });
      });
    }
    clearLinks() {
      document.querySelectorAll(".link").forEach((el) => el.remove());
    }
    onLinkPointClick(event) {
      var _a, _b, _c, _d;
      const core = this._core;
      const target = event.target;
      if (core.currentAction === "") {
        core.currentAction = "linking";
        const lp = core.linkPointPos;
        lp.x = parseFloat((_a = target.getAttribute("cx")) != null ? _a : "0");
        lp.y = parseFloat((_b = target.getAttribute("cy")) != null ? _b : "0");
        core.linkPointPos = lp;
        core.currentLinkId = (_c = target.getAttribute("target")) != null ? _c : "";
      } else if (core.currentAction === "linking" && core.currentLinkId !== target.getAttribute("target")) {
        const targetId = target.getAttribute("target");
        (_d = core.data.Resources) == null ? void 0 : _d.forEach((r) => {
          var _a2;
          (_a2 = r.Items) == null ? void 0 : _a2.forEach((item) => {
            if (item.Id === core.currentLinkId) {
              item.Link = targetId;
              if (core.settings.drawLinks) this.drawLinks();
            }
          });
        });
        this._resetLinkLine();
        core.currentAction = "";
      }
    }
    onLinkMouseMove(event) {
      const core = this._core;
      const lp = core.linkPointPos;
      const cp = core.calendarPosition;
      const line = document.getElementById("link-line");
      line == null ? void 0 : line.setAttribute("x1", lp.x.toString());
      line == null ? void 0 : line.setAttribute("y1", lp.y.toString());
      line == null ? void 0 : line.setAttribute("x2", cp.x.toString());
      line == null ? void 0 : line.setAttribute("y2", (cp.y - 3).toString());
    }
    _resetLinkLine() {
      const line = document.getElementById("link-line");
      line == null ? void 0 : line.setAttribute("x1", "0");
      line == null ? void 0 : line.setAttribute("y1", "0");
      line == null ? void 0 : line.setAttribute("x2", "0");
      line == null ? void 0 : line.setAttribute("y2", "0");
      const lp = this._core.linkPointPos;
      lp.x = 0;
      lp.y = 0;
      this._core.linkPointPos = lp;
      this._core.currentLinkId = "";
    }
  };

  // src/plugins/EventsPlugin.ts
  var EventsPlugin = class {
    constructor() {
      this.name = "events";
    }
    init(core) {
      this._core = core;
    }
    destroy() {
      this._core = null;
    }
    drawEvents() {
      const core = this._core;
      const settings = core.settings;
      if (!settings.viewEvents || !core.data.Events) return;
      const parent = document.getElementById("scheduler-events");
      if (!parent) return;
      core.data.Events.forEach((event) => {
        const sd = settings.date;
        const ed = new Date(event.Date);
        const offset = Math.trunc((ed.getTime() - sd.getTime()) / 1e3 / 60 / settings.timeUnitVal);
        const x = offset * settings.timeWidth;
        const y = settings.monthBoxHeight + settings.timeElementHeight;
        const h = settings.infoElementHeight;
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x.toString());
        rect.setAttribute("y", y.toString());
        rect.setAttribute("width", settings.timeWidth.toString());
        rect.setAttribute("height", h.toString());
        rect.setAttribute("class", "event-marker");
        if (event.Color) rect.setAttribute("fill", event.Color);
        if (event.Title) {
          rect.setAttribute("title", event.Title);
        }
        parent.append(rect);
        if (settings.viewEventExtended && event.Title) {
          const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
          text.setAttribute("x", (x + 2).toString());
          text.setAttribute("y", (y + h * 0.75).toString());
          text.setAttribute("font-size", (h * 0.8).toString());
          text.setAttribute("class", "event-label");
          text.textContent = event.Title;
          parent.append(text);
        }
      });
    }
    drawInfoUnits() {
      const core = this._core;
      const settings = core.settings;
      if (!settings.viewInfoElements) return;
      const parent = document.getElementById("scheduler-info");
      if (!parent) return;
      const tw = settings.timeWidth;
      const y = settings.monthBoxHeight + settings.timeElementHeight + (settings.viewWeeks ? settings.weekBoxHeight : 0);
      const h = settings.infoElementHeight;
      for (let c = 0; c < settings.timeUnitsCount; c++) {
        const sum = this._sumForColumn(c);
        if (sum <= 0) continue;
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", (c * tw).toString());
        rect.setAttribute("y", y.toString());
        rect.setAttribute("width", tw.toString());
        rect.setAttribute("height", h.toString());
        rect.setAttribute("class", "info-bar");
        rect.setAttribute("fill", `hsl(${Math.min(120, 120 - sum)}, 70%, 50%)`);
        parent.append(rect);
      }
    }
    getSum(box) {
      var _a;
      const core = this._core;
      const date = box.getAttribute("data-date");
      const resId = box.getAttribute("data-res");
      if (!date || !resId) return 0;
      const d = new Date(date);
      let sum = 0;
      (_a = core.data.Resources) == null ? void 0 : _a.forEach((r) => {
        var _a2;
        if (String(r.id) !== resId) return;
        (_a2 = r.Items) == null ? void 0 : _a2.forEach((item) => {
          const from = new Date(item.From * 6e4);
          const to = new Date(item.To * 6e4);
          if (from <= d && d < to) sum += item.Effort || item.Width || 0;
        });
      });
      return sum;
    }
    _sumForColumn(col) {
      var _a;
      const core = this._core;
      const settings = core.settings;
      const sd = settings.date;
      const colDate = new Date(sd.getTime() + col * settings.timeUnitVal * 60 * 1e3);
      const colEnd = new Date(colDate.getTime() + settings.timeUnitVal * 60 * 1e3);
      let total = 0;
      (_a = core.data.Resources) == null ? void 0 : _a.forEach((r) => {
        var _a2;
        (_a2 = r.Items) == null ? void 0 : _a2.forEach((item) => {
          const from = new Date(item.From * 6e4);
          const to = new Date(item.To * 6e4);
          if (from < colEnd && to > colDate) total += item.Effort || 0;
        });
      });
      return total;
    }
  };

  // src/license/LicenseValidator.ts
  var _S = [78, 167, 44, 245];
  var _PREFIX = "SCHED";
  function _hash(bytes) {
    let h = _S[0];
    for (const b of bytes) {
      h = (h << 4 ^ h >>> 4 ^ b ^ _S[h & 3]) & 255;
    }
    return h;
  }
  var _INVALID = {
    valid: false,
    customerId: 0,
    perpetual: false,
    expiresAt: null,
    expired: false,
    flags: 0
  };
  function validateLicense(key) {
    if (!key || typeof key !== "string") return __spreadValues({}, _INVALID);
    const parts = key.toUpperCase().trim().split("-");
    if (parts.length !== 4 || parts[0] !== _PREFIX) return __spreadValues({}, _INVALID);
    const [, g1, g2, g3] = parts;
    if (g1.length !== 5 || g2.length !== 5 || g3.length !== 5) return __spreadValues({}, _INVALID);
    const v1 = parseInt(g1, 36);
    const v2 = parseInt(g2, 36);
    const v3 = parseInt(g3, 36);
    if (isNaN(v1) || isNaN(v2) || isNaN(v3)) return __spreadValues({}, _INVALID);
    const r1 = v1 >> 16 & 255;
    const idHi = v1 >> 8 & 255;
    const idLo = v1 & 255;
    const r2 = v2 >> 16 & 255;
    const expiryOffset = v2 >> 8 & 255;
    const flags = v2 & 255;
    const r3 = v3 >> 16 & 255;
    const salt = v3 >> 8 & 255;
    const crc = v3 & 255;
    if (!(r1 & 128) || !(r2 & 128) || !(r3 & 128)) return __spreadValues({}, _INVALID);
    if (r1 !== (_hash([idHi, idLo, salt]) | 128)) return __spreadValues({}, _INVALID);
    if (r2 !== (_hash([expiryOffset, flags, salt]) | 128)) return __spreadValues({}, _INVALID);
    if (crc !== _hash([idHi, idLo, expiryOffset, flags, salt])) return __spreadValues({}, _INVALID);
    if (r3 !== (_hash([r1, r2, crc]) | 128)) return __spreadValues({}, _INVALID);
    const customerId = idHi << 8 | idLo;
    let expiresAt = null;
    let expired = false;
    if (expiryOffset > 0) {
      const expYear = 2025 + Math.floor((expiryOffset - 1) / 12);
      const expMonth = (expiryOffset - 1) % 12;
      expiresAt = new Date(expYear, expMonth, 1);
      const now = /* @__PURE__ */ new Date();
      const nowOffset = (now.getFullYear() - 2025) * 12 + now.getMonth();
      expired = nowOffset >= expiryOffset;
    }
    return { valid: true, customerId, perpetual: expiryOffset === 0, expiresAt, expired, flags };
  }
  function isPro(key) {
    const info = validateLicense(key);
    return info.valid && !info.expired;
  }

  // src/plugins/ContextMenuPlugin.ts
  var ContextMenuPlugin = class {
    constructor() {
      this.name = "contextmenu";
      this._core = null;
      this._menu = null;
      this._currentCtx = null;
      this._onCtxMenu = (e) => this._handleContextMenu(e);
      this._onHide = () => this._hideMenu();
      this._onKeydown = (e) => {
        if (e.key === "Escape") this._hideMenu();
      };
    }
    // ── Lifecycle ────────────────────────────────────────────────────────────
    init(core) {
      this._core = core;
      if (!isPro(core.settings.licenseKey)) {
        console.warn("[ContextMenuPlugin] A valid PRO licenseKey is required \u2014 plugin disabled.");
        return;
      }
      this._createMenuEl();
      const svg = core.schedulerSVGElement;
      if (svg) svg.addEventListener("contextmenu", this._onCtxMenu);
      document.addEventListener("click", this._onHide);
      document.addEventListener("keydown", this._onKeydown);
      window.addEventListener("resize", this._onHide);
      window.addEventListener("scroll", this._onHide, true);
    }
    destroy() {
      var _a, _b;
      const svg = (_a = this._core) == null ? void 0 : _a.schedulerSVGElement;
      if (svg) svg.removeEventListener("contextmenu", this._onCtxMenu);
      document.removeEventListener("click", this._onHide);
      document.removeEventListener("keydown", this._onKeydown);
      window.removeEventListener("resize", this._onHide);
      window.removeEventListener("scroll", this._onHide, true);
      (_b = this._menu) == null ? void 0 : _b.remove();
      this._menu = null;
      this._core = null;
    }
    // ── Menu DOM helpers ─────────────────────────────────────────────────────
    _createMenuEl() {
      const el = document.createElement("div");
      el.className = "dropdown-menu schedula-ctx-menu";
      el.addEventListener("contextmenu", (e) => e.preventDefault());
      document.body.appendChild(el);
      this._menu = el;
    }
    _showMenu(x, y) {
      const menu = this._menu;
      menu.style.display = "block";
      menu.style.left = "0px";
      menu.style.top = "0px";
      const { width, height } = menu.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      let px = x;
      let py = y;
      if (px + width > vw - 6) px = vw - width - 6;
      if (py + height > vh - 6) py = vh - height - 6;
      if (px < 6) px = 6;
      if (py < 6) py = 6;
      menu.style.left = `${px}px`;
      menu.style.top = `${py}px`;
    }
    _hideMenu() {
      if (!this._menu) return;
      this._menu.style.display = "none";
      this._menu.innerHTML = "";
      this._currentCtx = null;
    }
    _addItem(label, onClick, disabled = false) {
      const a = document.createElement("a");
      a.href = "#";
      a.className = "dropdown-item";
      a.textContent = label;
      if (disabled) {
        a.classList.add("disabled");
        a.setAttribute("aria-disabled", "true");
        a.tabIndex = -1;
      } else if (onClick) {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick();
          this._hideMenu();
        });
      }
      this._menu.appendChild(a);
    }
    _addDivider() {
      const hr = document.createElement("hr");
      hr.className = "dropdown-divider";
      this._menu.appendChild(hr);
    }
    // ── Context detection ────────────────────────────────────────────────────
    _getContext(e) {
      var _a;
      const target = e.target;
      const taskEl = target.closest("svg.svg-item");
      if (taskEl == null ? void 0 : taskEl.dataset.id) {
        return { type: "task", date: "", taskId: taskEl.dataset.id, taskRef: taskEl.dataset.ref, taskKey: taskEl.dataset.key };
      }
      const dayunit = target.closest("rect.time-unit");
      if (dayunit == null ? void 0 : dayunit.dataset.date) {
        return { type: "day", date: dayunit.dataset.date };
      }
      const cell = (_a = target.closest("rect.box-element")) != null ? _a : target.closest("rect.box-element-empty");
      if (cell == null ? void 0 : cell.dataset.date) {
        return { type: "cell", date: cell.dataset.date, resourceId: cell.dataset.res };
      }
      const dayCell = target.closest("rect.daybox-element");
      if (dayCell == null ? void 0 : dayCell.dataset.date) {
        const core = this._core;
        const resIndex = Math.floor((e.offsetY - core.headerHeight) / core.settings.resourceHeight);
        const resourceId = resIndex >= 0 && resIndex < core.data.Resources.length ? String(resIndex) : void 0;
        return { type: "cell", date: dayCell.dataset.date, resourceId };
      }
      return null;
    }
    // ── Action dispatch ──────────────────────────────────────────────────────
    _dispatch(ctx, actionName, description, capacity, classes) {
      var _a;
      const isDelete = actionName === "Elimina";
      const detail = ctx.type === "task" ? { action: actionName, TaskId: ctx.taskId, TaskRef: ctx.taskRef, TaskKey: ctx.taskKey } : { DateFrom: ctx.date, DateTo: ctx.date, Name: isDelete ? "" : actionName, Description: description, Capacity: capacity, Classes: classes, ResourceId: ctx.resourceId ? parseInt(ctx.resourceId, 10) : null, isDelete };
      const eventName = ctx.type === "task" ? "schedulatask:action" : "schedulacalendar:action";
      const svg = (_a = this._core) == null ? void 0 : _a.schedulerSVGElement;
      svg == null ? void 0 : svg.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail }));
    }
    // ── Context menu event handler ───────────────────────────────────────────
    _handleContextMenu(e) {
      const ctx = this._getContext(e);
      if (!ctx) return;
      e.preventDefault();
      this._currentCtx = ctx;
      this._buildMenu(ctx);
      if (this._menu.children.length > 0) {
        this._showMenu(e.clientX, e.clientY);
      } else {
        this._hideMenu();
      }
    }
    // ── Menu building ────────────────────────────────────────────────────────
    _findItem(taskId) {
      var _a, _b, _c, _d;
      for (const res of (_c = (_b = (_a = this._core) == null ? void 0 : _a.data) == null ? void 0 : _b.Resources) != null ? _c : []) {
        const item = (_d = res.Items) == null ? void 0 : _d.find((i) => i.Id == taskId);
        if (item) return item;
      }
      return null;
    }
    _getPopupProvider() {
      var _a, _b, _c, _d, _e;
      if ((_b = (_a = this._core) == null ? void 0 : _a.settings) == null ? void 0 : _b.popupProvider) return this._core.settings.popupProvider;
      for (const p of (_e = (_d = (_c = this._core) == null ? void 0 : _c.settings) == null ? void 0 : _d.plugins) != null ? _e : []) {
        if (typeof p.show === "function") return p;
      }
      return null;
    }
    _buildMenu(ctx) {
      var _a;
      this._menu.innerHTML = "";
      const ro = ((_a = this._core) == null ? void 0 : _a.settings.canMoveItems) === false;
      if (ctx.type === "task") {
        this._addItem("Modifica", () => {
          const item = this._findItem(ctx.taskId);
          const provider = this._getPopupProvider();
          if (!item || !provider) return;
          const existingPopup = document.querySelector(".scheduler-popup");
          const isVisible = existingPopup && existingPopup.style.display !== "none";
          if (isVisible && typeof provider.refreshItem === "function") {
            provider.refreshItem(item);
          } else {
            const rect = this._menu.getBoundingClientRect();
            const fakeEvent = new MouseEvent("click", { clientX: rect.left, clientY: rect.top, bubbles: true });
            provider.show(item, fakeEvent, this._core);
          }
        }, ro);
        this._addDivider();
        this._addItem("Elimina", () => {
          var _a2;
          if (!confirm("Confermi di voler eliminare questo task?")) return;
          const item = this._findItem(ctx.taskId);
          if (item) {
            item.Deleted = true;
            item.Modified = true;
          }
          (_a2 = document.querySelector(`svg[data-id="${ctx.taskId}"]`)) == null ? void 0 : _a2.remove();
          if (typeof window.modified === "function") window.modified();
        }, ro);
        return;
      }
      if (ctx.type === "day") {
        this._addItem("Festivo", () => this._withConfirm("Festivo", () => this._dispatch(ctx, "Festivo", "Chiusura festiva", 0, "timeoff")), ro);
        this._addItem("Chiuso", () => this._withConfirm("Chiuso", () => this._dispatch(ctx, "Chiuso", "Chiusura", 0, "closed")), ro);
        this._addItem("Manutenzione", () => this._withConfirm("Manutenzione", () => this._dispatch(ctx, "Manutenzione", "Manutenzione", 0, "maintenance")), ro);
        this._addDivider();
        this._addItem("8 ore", () => this._withConfirm("8 ore", () => this._dispatch(ctx, "8 ore", "Capacit\xE0 8 ore", 480, "cap8h")), ro);
        this._addItem("16 ore", () => this._withConfirm("16 ore", () => this._dispatch(ctx, "16 ore", "Capacit\xE0 16 ore", 960, "cap16h")), ro);
        this._addItem("24 ore", () => this._withConfirm("24 ore", () => this._dispatch(ctx, "24 ore", "Capacit\xE0 24 ore", 1440, "cap24h")), ro);
        this._addItem("Ore custom...", () => this._promptCustomHours(ctx), ro);
        this._addDivider();
        this._addItem("Elimina regola", () => {
          if (confirm("Confermi di voler ripristinare questo giorno?"))
            this._dispatch(ctx, "Elimina", "", 0, "");
        }, ro);
        return;
      }
      if (ctx.type === "cell") {
        this._addItem("Non disponibile", () => this._withConfirm("Non disponibile", () => this._dispatch(ctx, "Non disponibile", "Risorsa non disponibile", 0, "closed")), ro);
        this._addItem("Assenza", () => this._withConfirm("Assenza", () => this._dispatch(ctx, "Assenza", "Assenza risorsa", 0, "closed")), ro);
        this._addItem("Ferie", () => this._withConfirm("Ferie", () => this._dispatch(ctx, "Ferie", "Ferie risorsa", 0, "absent")), ro);
        this._addItem("Manutenzione", () => this._withConfirm("Manutenzione", () => this._dispatch(ctx, "Manutenzione", "Manutenzione", 0, "maintenance")), ro);
        this._addDivider();
        this._addItem("8 ore", () => this._withConfirm("8 ore", () => this._dispatch(ctx, "8 ore", "Capacit\xE0 8 ore", 480, "cap8h")), ro);
        this._addItem("16 ore", () => this._withConfirm("16 ore", () => this._dispatch(ctx, "16 ore", "Capacit\xE0 16 ore", 960, "cap16h")), ro);
        this._addItem("24 ore", () => this._withConfirm("24 ore", () => this._dispatch(ctx, "24 ore", "Capacit\xE0 24 ore", 1440, "cap24h")), ro);
        this._addItem("Ore custom...", () => this._promptCustomHours(ctx), ro);
        this._addDivider();
        this._addItem("Elimina regola", () => {
          if (confirm("Confermi di voler ripristinare questa risorsa per il giorno selezionato?"))
            this._dispatch(ctx, "Elimina", "", 0, "");
        }, ro);
      }
    }
    // ── Small UX helpers ─────────────────────────────────────────────────────
    _withConfirm(name, action) {
      if (confirm(`Confermi di voler impostare "${name}"?`)) action();
    }
    _promptCustomHours(ctx) {
      const raw = prompt("Ore di capacit\xE0 (es. 5 o 5.5):", "");
      if (raw === null) return;
      const hours = parseFloat(raw.replace(",", "."));
      if (isNaN(hours) || hours < 0 || hours > 24) {
        alert("Valore non valido. Inserisci un numero tra 0 e 24.");
        return;
      }
      const name = `${hours} ore`;
      if (confirm(`Confermi di voler impostare "${name}"?`)) {
        this._dispatch(ctx, name, "Capacit\xE0 custom", Math.round(hours * 60), "cap-custom");
      }
    }
  };

  // src/plugins/CalendarPlugin.ts
  var CalendarPlugin = class {
    constructor() {
      this.name = "calendar";
      this._resourceCalendars = /* @__PURE__ */ new Map();
    }
    init(core) {
      this._core = core;
      core.initCalendar();
    }
    /**
     * Builds the global SchedulaCalendar from Items without ResourceId,
     * then builds per-resource calendars from Items with ResourceId.
     * Called by core.initCalendar() whenever data changes.
     */
    applyData(calendarData) {
      var _a;
      const cal = this._buildCalendar(calendarData);
      this._core.calendar = cal;
      this._resourceCalendars.clear();
      const items = (_a = calendarData == null ? void 0 : calendarData.Items) != null ? _a : [];
      const resourceIds = [...new Set(
        items.filter((i) => i.ResourceId != null).map((i) => String(i.ResourceId))
      )];
      resourceIds.forEach((id) => {
        const rules = items.filter((i) => String(i.ResourceId) === id);
        this._resourceCalendars.set(id, this._buildResourceCalendar(rules, cal));
      });
    }
    /**
     * Returns the per-resource SchedulaCalendar for the given resource Id,
     * or null if no resource-specific rules are defined.
     */
    getResourceCalendar(resourceId) {
      var _a;
      return (_a = this._resourceCalendars.get(String(resourceId))) != null ? _a : null;
    }
    /**
     * Adds or replaces a calendar exception for a specific resource.
     * Writes to data.Calendar.Items with ResourceId — the single source of truth.
     * Call scheduler.refresh() afterwards.
     *
     * @param resourceId  The resource Id (string or number)
     * @param rule        { Day: 0-6, Capacity: minutes } for a weekly rule
     *                    or { Day, Capacity, DateFrom, DateTo } for a date range
     */
    addResourceException(resourceId, rule) {
      var _a;
      const id = String(resourceId);
      const calendarData = (_a = this._core.data) == null ? void 0 : _a.Calendar;
      if (!calendarData) return;
      if (!calendarData.Items) calendarData.Items = [];
      calendarData.Items = calendarData.Items.filter(
        (i) => String(i.ResourceId) !== id || i.Day !== rule.Day || i.DateFrom !== rule.DateFrom
      );
      calendarData.Items.push(__spreadProps(__spreadValues({}, rule), { ResourceId: id }));
      const rules = calendarData.Items.filter((i) => String(i.ResourceId) === id);
      this._resourceCalendars.set(id, this._buildResourceCalendar(rules, this._core.calendar));
    }
    destroy() {
      this._resourceCalendars.clear();
      this._core = null;
    }
    // ── Internals ────────────────────────────────────────────────────────────
    _buildCalendar(calendarData) {
      var _a, _b;
      const cal = new SchedulaCalendar();
      const r = cal.newItem();
      r.capacity = (_a = calendarData == null ? void 0 : calendarData.Reference) != null ? _a : cal.reference;
      r.day = -1;
      r.from = 0;
      r.duration = 999999999;
      r.type = "rule";
      (_b = calendarData == null ? void 0 : calendarData.Items) == null ? void 0 : _b.filter((item) => item.ResourceId == null).forEach((item) => this._addRuleItem(cal, item));
      return cal;
    }
    /**
     * Builds a per-resource SchedulaCalendar inheriting the global base capacity
     * and applying the given resource-specific rules on top.
     */
    _buildResourceCalendar(rules, globalCal) {
      const cal = new SchedulaCalendar();
      const base = cal.newItem();
      base.capacity = globalCal.reference;
      base.day = -1;
      base.from = 0;
      base.duration = 999999999;
      base.type = "rule";
      rules.forEach((rule) => this._addRuleItem(cal, rule));
      return cal;
    }
    _addRuleItem(cal, item) {
      var _a;
      const i = cal.newItem();
      i.capacity = item.Capacity;
      i.day = (_a = item.Day) != null ? _a : -1;
      i.from = item.DateFrom ? new Date(item.DateFrom).getTime() : 0;
      i.duration = item.DateFrom && item.DateTo ? (new Date(item.DateTo).getTime() - new Date(item.DateFrom).getTime()) / 6e4 : 999999999;
      i.type = "rule";
    }
  };

  // src/index-pro.ts
  window.SchedulaCore = SchedulaCore;
  window.SchedulaSettings = SchedulaSettings2;
  window.SchedulaTemplate = SchedulaTemplate2;
  window.DragDropPlugin = DragDropPlugin;
  window.LinksPlugin = LinksPlugin;
  window.EventsPlugin = EventsPlugin;
  window.DefaultPopupPlugin = DefaultPopupPlugin;
  window.ContextMenuPlugin = ContextMenuPlugin;
  window.CalendarPlugin = CalendarPlugin;
  window.validateLicense = validateLicense;
  window.isPro = isPro;
})();
//# sourceMappingURL=pro-test.js.map
