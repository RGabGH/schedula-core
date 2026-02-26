import { SchedulaSettings } from './models/SchedulaSettings.js';
import { SchedulaTemplate } from './ui/SchedulaTemplate.js';
import { SchedulaCalendar, CalendarMousePos } from './models/SchedulaCalendar.js';
import { SchedulaItem } from './ui/SchedulaItem.js';
import { SchedulaView, mousePos } from './models/SchedulaView.js';
export class SchedulaCore {
    constructor(scheduler, jsonData, settings) {
        this.version = '5.0.0';
        this.scheduler_id = 'scheduler';
        this.headerHeight = 100;
        this.resourceFilteredCount = 0;
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
        this.schedulerSVG = null;
        this.schedulerItems = null;
        this.schedulerContainer = null;
        this.splitBar = null;
        this.template = '';
        this.calendar = null;
        this._clickStart = { x: 0, y: 0 };
        this.itemConnPoint1 = null;
        this.itemConnPoint2 = null;
        this.itemConnPoint3 = null;
        this.itemConnPoint4 = null;
        this.connLine = null;
        this.currentView = SchedulaView.Month;
        this.eventsSetup = false;
        this.scheduler_id = scheduler;
        this.data = jsonData;
        if (settings) {
            this.settings = settings;
        }
        else {
            this.settings = new SchedulaSettings();
        }
        ;
        this.initCalendar();
    }
    initCalendar() {
        var _a;
        this.calendar = null;
        if (this.data.Calendar) {
            this.calendar = new SchedulaCalendar();
            let r = this.calendar.newItem();
            r.capacity = this.data.Calendar.Reference;
            r.day = -1;
            r.from = 0;
            r.duration = 999999999;
            r.type = 'rule';
            (_a = this.data.Calendar.Items) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                let i = this.calendar.newItem();
                i.capacity = item.Capacity;
                i.day = item.Day;
                let dtfrom = new Date(item.DateFrom);
                let dtto = new Date(item.DateTo);
                let f = dtfrom.getTime();
                i.from = f;
                i.duration = (new Date(item.DateTo).getTime() / 60000) - (new Date(item.DateFrom).getTime() / 60000);
                i.type = 'rule';
            });
        }
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
        if (!group)
            return;
        if (groupId === 'scheduler-items') {
            const nodesToRemove = [];
            group.childNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const el = node;
                    if (el.id !== 'scheduler-header' && el.id !== 'scheduler-background' && el.tagName !== 'animateTransform') {
                        nodesToRemove.push(node);
                    }
                }
                else {
                    nodesToRemove.push(node);
                }
            });
            nodesToRemove.forEach(node => { var _a; return (_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(node); });
        }
        else {
            group.innerHTML = '';
        }
    }
    refresh() {
        if (this.schedulerSVG) {
            const groups = ['scheduler-background', 'scheduler-header', 'scheduler-resources', 'scheduler-events', 'scheduler-info', 'scheduler-items'];
            groups.forEach(id => {
                this.clearGroupSafe(id);
            });
            const items = document.getElementById('scheduler-items');
            if (items) {
                items.setAttribute('transform', 'translate(0,0)');
                const anims = items.getElementsByTagName('animateTransform');
                if (anims.length > 0) {
                    anims[0].setAttribute('from', '0');
                    anims[0].setAttribute('to', '0');
                }
            }
            this.draw();
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
            }
            else {
                this.template = new SchedulaTemplate().svgString;
            }
            this.schedulerContainer.innerHTML = this.template;
            document.body.style.overflow = 'auto';
            this.schedulerSVG = document.querySelector('#main-svg');
            let defs = this.schedulerSVG.getElementById('defs');
            const parser = new DOMParser();
            const wrapped = `<svg xmlns="http://www.w3.org/2000/svg">${this.settings.icons}</svg>`;
            const doc = parser.parseFromString(wrapped, "image/svg+xml");
            const icons = doc.documentElement.childNodes;
            icons.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const importedNode = this.schedulerSVG.ownerDocument.importNode(node, true);
                    defs.appendChild(node);
                }
            });
            this.schedulerItems = document.getElementById('scheduler-items');
            this.splitBar = document.getElementById('scheduler-splitter');
            this.restoreView();
            if (this.schedulerContainer != null) {
                if (this.schedulerSVG != null) {
                    this.draw();
                    this.restoreShiftPos();
                    this.processData();
                    this.storeData();
                    if (!this.eventsSetup) {
                        this.schedulerSVG.addEventListener('mousemove', (event) => {
                            this.handleMouseMove(event);
                        });
                        this.schedulerSVG.addEventListener('mouseup', (event) => {
                            this.svgMouseUp(event);
                        });
                        this.schedulerSVG.addEventListener('drop', (event) => {
                            this.dropEventManagement(event);
                        });
                        this.schedulerSVG.addEventListener('dragover', (event) => {
                            if (event.target.classList.contains('box-element')) {
                                event.preventDefault();
                            }
                        });
                        let scheduler = this;
                        document.addEventListener('keyup', (function (e) {
                            if (e.key === "Escape") {
                                scheduler.escapePressed();
                            }
                        }));
                        window.addEventListener('resize', (function (e) {
                            scheduler.resized();
                        }));
                        this.eventsSetup = true;
                    }
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
    }
    dropEventManagement(evt) {
        var _a, _b;
        evt.stopImmediatePropagation();
        if (this.settings.dropEnable && evt.target.classList.contains('box-element')) {
            let y = parseFloat(evt.target.getAttribute('y'));
            let res = (y - this.headerHeight) / this.settings.resourceHeight;
            console.log('res:' + res);
            const strdata = evt.dataTransfer.getData("task");
            if (strdata != undefined && strdata != '') {
                let data = JSON.parse(strdata);
                let dd = new Date(evt.target.getAttribute('data-date'));
                let sd = this.settings.date;
                let timespan = Math.trunc((dd.getTime() - sd.getTime()) / 1000 / 60);
                let resource = this.data.Resources[res];
                if (!resource.Items == null || resource.Items == undefined)
                    resource.Items = [];
                (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                    let start = item.Offset;
                    let stop = item.Offset + item.Width;
                    if (timespan < stop && timespan >= start)
                        timespan = stop;
                });
                let link = '';
                this.data.Resources.forEach(function (r, resource) {
                    var _a;
                    (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (i, item) {
                        let guid = 'link_' + Math.floor(Math.random() * 10000000);
                        if (item.Text == data.text1 && item.Reference == data.ref && data.ref != '' && data.ref != undefined && data.text1 != '') {
                            item.Link = guid;
                            item.Modified = true;
                            link = guid;
                        }
                    });
                });
                let ra = Math.floor(Math.random() * 10000000);
                let dropped = {};
                dropped.Id = '_temp_id_' + ra.toString();
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
                dropped.From = (sd.getTime() / 1000 / 60) + timespan;
                dropped.To = dropped.From + dropped.Width;
                dropped.ForeignKey = data.key;
                dropped.Reference = data.ref;
                dropped.Pieces = data.pieces;
                if (resource.Items == undefined) {
                    var items = [];
                    resource.Items = items;
                }
                resource.Items.push(dropped);
                this.drawItem(dropped, res);
                dropped.Effort = dropped.Width;
                let scitem = new SchedulaItem(this, dropped, this.calendar);
                scitem.Effort = dropped.Width;
                if (typeof modified === 'function')
                    modified();
                if (data.elementId)
                    (_b = document.getElementById(data.elementId)) === null || _b === void 0 ? void 0 : _b.remove();
            }
        }
    }
    resized() {
        if (this.schedulerSVG)
            this.ratio = this.schedulerSVG.viewBox.baseVal.width / this.schedulerSVG.clientWidth;
    }
    draw() {
        var _a, _b;
        if (!this.schedulerSVG)
            return;
        this.settings.timeWidth = this.schedulerSVG.clientWidth / this.settings.timeUnitsView;
        let w = (this.settings.timeUnitsView * this.settings.timeWidth);
        this.headerHeight = this.settings.timeElementHeight + this.settings.monthBoxHeight;
        if (this.settings.viewWeeks) {
            this.headerHeight += this.settings.weekBoxHeight;
        }
        if (this.settings.viewInfoElements || this.settings.viewEvents) {
            this.headerHeight += this.settings.infoElementHeight;
        }
        let h = (((_b = (_a = this.data.Resources) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) * this.settings.resourceHeight) + this.headerHeight + this.settings.footerHeight;
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
        this.drawEvents();
        this.drawInfoUnits();
        this.drawResBg();
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
            const cdx = document.getElementById("shifter-dx");
            let step = this.settings.shifterStep;
            let that = this;
            if (cdx != null) {
                cdx.style.visibility = 'visible';
                cdx.addEventListener('click', function () {
                    that.shift(-step);
                });
            }
            const csx = document.getElementById("shifter-sx");
            if (csx != null) {
                csx.style.visibility = 'visible';
                csx.addEventListener('click', function () {
                    that.shift(step);
                });
            }
        }
    }
    svgMouseUp(event) {
        this.clearAction();
    }
    removeItem(id) {
        var _a;
        let scheduler = this;
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
    }
    handleMouseMove(event) {
        var _a, _b;
        this.mpos.x = event.pageX;
        this.mpos.y = event.pageY;
        let offsets = (_b = (_a = document.getElementById(this.scheduler_id)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : {
            x: 0,
            y: 0
        };
        this.schedulerMousePos.x = (this.mpos.x - offsets.x) * this.ratio;
        this.schedulerMousePos.y = (this.mpos.y - offsets.y) * this.ratio;
        const items = document.getElementById('scheduler-items');
        let transform = this.getTranslateValues(items);
        let mydate = this.settings.date;
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
    }
    escapePressed() {
        var _a, _b, _c, _d, _e;
        if (this.settings.popupProvider) {
            this.settings.popupProvider.hide();
        }
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
    }
    getModulo(value, step, min) {
        const modulo = (value - (min !== null && min !== void 0 ? min : 0)) % step;
        const correction = modulo > step / 2 ? step - modulo : -modulo;
        let result = value + correction;
        result = min != null && result < min ? min : result;
        return result;
    }
    moveItem() {
        var _a, _b;
        var x = parseFloat((_a = this.element.getAttribute('data-x')) !== null && _a !== void 0 ? _a : '0');
        var y = parseFloat((_b = this.element.getAttribute('data-y')) !== null && _b !== void 0 ? _b : '0');
        let variationx = Math.round(((this.mpos.x - this.actionMemoPos.x) * this.ratio) * 100) / 100;
        let variationy = Math.round(((this.mpos.y - this.actionMemoPos.y) * this.ratio) * 100) / 100;
        let newx = x + (variationx);
        let newy = y + (variationy);
        this.schedulerItems.append(this.element);
        this.element.setAttribute('x', newx.toString());
        if (this.settings.resourceChange) {
            this.element.setAttribute('y', newy.toString());
        }
        let datalink = this.element.getAttribute('data-link');
        if (datalink != null) {
        }
    }
    linkItem() {
        const line = document.getElementById('link-line');
        line === null || line === void 0 ? void 0 : line.setAttribute('x1', this.linkPoint.x.toString());
        line === null || line === void 0 ? void 0 : line.setAttribute('y1', this.linkPoint.y.toString());
        line === null || line === void 0 ? void 0 : line.setAttribute('x2', this.calendarMousePos.x.toString());
        line === null || line === void 0 ? void 0 : line.setAttribute('y2', (this.calendarMousePos.y - 3).toString());
    }
    resizeItem() {
        var _a;
        let variationx = Math.round(((this.mpos.x - this.actionMemoPos.x) * this.ratio) * 100) / 100;
        let w = parseFloat((_a = this.element.getAttribute('data-w')) !== null && _a !== void 0 ? _a : '0');
        let neww = w + (variationx);
        this.schedulerItems.append(this.element);
        this.element.setAttribute('width', neww.toString());
        let datalink = this.element.getAttribute('data-link');
        if (datalink != null) {
        }
    }
    splitArea() {
        var _a;
        const sidebar = document.getElementById('scheduler-sidebar');
        let w = parseFloat((_a = sidebar.getAttribute('data-w')) !== null && _a !== void 0 ? _a : '0');
        let variationw = Math.round(((this.mpos.x - this.actionMemoPos.x) * this.ratio) * 100) / 100;
        let neww = w + (variationw);
        if (neww > this.settings.sidebarMinWidth && neww < this.settings.sidebarMaxWidth) {
            sidebar.setAttribute('width', neww.toString());
            localStorage.setItem('splitbarpos', neww.toString());
        }
    }
    getTranslateValues(element) {
        if (!element) {
            return { x: 0, y: 0, z: 0 };
        }
        const style = window.getComputedStyle(element);
        let transform = style.transform;
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
    }
    processData() {
        var _a;
        if (!this.data.Resources)
            return;
        let date = this.settings.date;
        let scheduler = this;
        (_a = this.data.Resources) === null || _a === void 0 ? void 0 : _a.forEach((resource, ri) => {
            if (resource.Items) {
                resource.Items.forEach(function (item, ii) {
                    let from = (date.getTime() / 60000) + (item.Offset);
                    let to = (date.getTime() / 60000) + parseInt(((item.Offset + item.Width)));
                    item.From = from;
                    item.To = to;
                    if (scheduler.calendar != null && scheduler.settings.calcEffort == true && item.Effort == undefined) {
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
            localStorage.setItem('data', JSON.stringify(this.data));
        }
    }
    drawBackGroud() {
        var parent = document.getElementById('scheduler-background');
        if (parent) {
            var h = (this.settings.resourceHeight * this.data.Resources.length);
            var w = (this.settings.timeUnitsCount * this.settings.timeWidth);
            var y = this.headerHeight;
            var x = 0;
            const background = document.createElementNS('http://www.w3.org/2000/svg', "rect");
            background.setAttribute('x', '0');
            background.setAttribute('y', y.toString());
            background.setAttribute('width', w.toString());
            background.setAttribute('height', h.toString());
            background.setAttribute('transform', 'translate(0,0)');
            background.setAttribute('fill', 'white');
            background.classList.add('bg');
            parent.append(background);
            if (this.data.Resources) {
                this.data.Resources.forEach((resource, ri) => {
                    var ly = (ri * this.settings.resourceHeight) + this.headerHeight;
                    const line = document.createElementNS('http://www.w3.org/2000/svg', "line");
                    line.setAttribute('x1', x.toString());
                    line.setAttribute('x2', w.toString());
                    line.setAttribute('y1', ly.toString());
                    line.setAttribute('y2', ly.toString());
                    line.setAttribute('class', "bg-hl");
                    parent === null || parent === void 0 ? void 0 : parent.append(line);
                });
                let rcount = this.data.Resources.length;
                var today = new Date();
                for (let c = 0; c < this.settings.timeUnitsCount; c++) {
                    let hilight = false;
                    let dt = this.settings.date;
                    if (dt) {
                        let cdate = new Date(dt.getTime() + (c * this.settings.timeUnitVal * 60 * 1000));
                        hilight = (cdate.getUTCDay() == 0) && this.settings.hilightSunday;
                        let saturday = (cdate.getUTCDay() == 6);
                        let ratio = 1;
                        if (this.calendar != null) {
                            if (this.calendar.reference > 0) {
                                ratio = this.calendar.getCapacity((cdate.getTime() / 60000) + 10, cdate.getUTCDay()) / this.calendar.reference;
                                if (ratio > 1)
                                    ratio = 1;
                                if (ratio < 0)
                                    ratio = 0;
                            }
                        }
                        let ry = this.headerHeight;
                        let rx = (c * this.settings.timeWidth);
                        let rw = this.settings.timeWidth;
                        let rh = this.settings.resourceHeight * rcount;
                        const line = document.createElementNS('http://www.w3.org/2000/svg', "line");
                        line.setAttribute('x1', rx.toString());
                        line.setAttribute('x2', rx.toString());
                        line.setAttribute('y1', ry.toString());
                        line.setAttribute('y2', (ry + rh).toString());
                        line.setAttribute('class', "bg-vl");
                        parent === null || parent === void 0 ? void 0 : parent.append(line);
                        const box = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                        box.setAttribute('x', rx.toString());
                        box.setAttribute('y', ry.toString());
                        box.setAttribute('width', rw.toString());
                        box.setAttribute('height', rh.toString());
                        box.setAttribute('data-date', cdate.toUTCString());
                        box.classList.add('daybox-element');
                        if (hilight == true)
                            box.classList.add('sunday');
                        if (saturday == true)
                            box.classList.add('saturday');
                        parent.append(line);
                        parent.append(box);
                        for (let rr = 0; rr < rcount; rr++) {
                            ry = this.headerHeight + (rr * this.settings.resourceHeight);
                            rx = (c * this.settings.timeWidth);
                            rw = this.settings.timeWidth * ratio;
                            if (isNaN(rw))
                                rw = 0;
                            const rect = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                            rect.setAttribute('x', rx.toString());
                            rect.setAttribute('y', ry.toString());
                            rect.setAttribute('width', rw.toString());
                            rect.setAttribute('height', this.settings.resourceHeight.toString());
                            rect.setAttribute('data-date', cdate.toUTCString());
                            rect.setAttribute('data-res', this.data.Resources[rr].id);
                            rect.setAttribute('class', 'box-element');
                            rect.addEventListener('click', function (ev) {
                                if (typeof gridMouseClick == 'function') {
                                    gridMouseClick(ev, cdate);
                                }
                            });
                            let that = this;
                            rect.addEventListener('mouseover', function (ev) {
                                if (typeof gridMouseOver == 'function') {
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
        const items = document.querySelectorAll('.svg-item');
        items.forEach((item) => {
            item.style.opacity = '1';
            item.classList.remove('selected');
            let filterlower = filter.toLowerCase();
            if (filterlower != '') {
                let data = item.querySelectorAll('text');
                let ref = item.getAttribute('data-ref');
                let key = item.getAttribute('data-key');
                let show = false;
                if (data != undefined) {
                    data.forEach((text) => {
                        show = show || text.innerHTML.toLowerCase().startsWith(filterlower);
                    });
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
    }
    drawResBg() {
        let parent = document.getElementById('scheduler-resources');
        const resources = this.data.Resources || [];
        let h = this.settings.resourceHeight * resources.length;
        let w = this.settings.resourceWidth;
        let y = this.headerHeight;
        let x = 0;
        let clip = document.getElementById('clip-res');
        if (clip == null) {
            let clip = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
            clip.setAttribute('id', 'clip-res');
            const box = document.createElementNS('http://www.w3.org/2000/svg', "rect");
            box.setAttribute('x', x.toString());
            box.setAttribute('y', y.toString());
            box.setAttribute('width', '100%');
            box.setAttribute('height', '100%');
            box.setAttribute('id', 'clip-res-rect');
            clip.append(box);
            parent === null || parent === void 0 ? void 0 : parent.append(clip);
        }
        const rect = document.createElementNS('http://www.w3.org/2000/svg', "rect");
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
        const svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
        svg.setAttribute('x', x.toString());
        svg.setAttribute('y', y.toString());
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', h.toString());
        svg.setAttribute('class', 'sb-hbg');
        const elem = document.createElementNS('http://www.w3.org/2000/svg', "rect");
        elem.setAttribute('x', x.toString());
        elem.setAttribute('y', y.toString());
        elem.setAttribute('width', '100%');
        elem.setAttribute('height', h.toString());
        elem.setAttribute('class', 'sb-hbg');
        const text = document.createElementNS('http://www.w3.org/2000/svg', "text");
        text.setAttribute('x', (x + 2).toString());
        text.setAttribute('y', (y - 2).toString());
        text.setAttribute('class', 'resource-header-text');
        text.innerHTML = this.settings.resHeaderText;
        elem.append(text);
        svg.append(elem);
        parent === null || parent === void 0 ? void 0 : parent.append(svg);
    }
    initSplitter() {
        let stored = localStorage.getItem('splitbarpos');
        let splitbarpos = stored ? parseFloat(stored) : this.settings.splitBarinitPos;
        if (isNaN(splitbarpos) || splitbarpos <= 0)
            splitbarpos = this.settings.splitBarinitPos;
        let sh = (this.settings.resourceHeight * this.data.Resources.length) + this.headerHeight;
        let sw = this.settings.splitterWidth;
        let sy = 0;
        let sx = splitbarpos;
        let wrapper = document.getElementById('wrapper');
        let splitter = document.getElementById('scheduler-splitter');
        if (splitter)
            this.splitBar = splitter;
        const sidebar = document.getElementById('scheduler-sidebar');
        sidebar.setAttribute('width', sx.toString());
    }
    drawResources() {
        var _a;
        const sidebar = document.getElementById('scheduler-sidebar');
        const resources = document.getElementById('scheduler-resources');
        let h = this.headerHeight;
        let w = (this.settings.timeUnitsCount * this.settings.timeWidth);
        let y = 0;
        let x = 0;
        let splitbarpos = parseFloat((_a = localStorage.getItem('splitbarpos')) !== null && _a !== void 0 ? _a : '0');
        if (!splitbarpos || splitbarpos < this.settings.sidebarMinWidth || splitbarpos > this.settings.sidebarMaxWidth) {
            splitbarpos = this.settings.splitBarinitPos;
        }
        sidebar === null || sidebar === void 0 ? void 0 : sidebar.setAttribute('width', splitbarpos.toString());
        var count = 0;
        if (this.data.Resources) {
            this.data.Resources.forEach((resource, ri) => {
                var _a, _b;
                let y = (count * this.settings.resourceHeight) + this.headerHeight;
                let ty = ((count + 1) * this.settings.resourceHeight) + this.headerHeight - 2;
                let x = 1;
                const rsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                rsvg.setAttribute('x', '0');
                rsvg.setAttribute('y', y.toString());
                rsvg.setAttribute('width', '100%');
                rsvg.setAttribute('height', this.settings.resourceHeight.toString());
                rsvg.setAttribute('font-size', this.settings.resourceHeight.toString());
                let clipid = 'clip-res-' + Math.floor(Math.random() * 10000000);
                const clip = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
                clip.setAttribute('x', '0');
                clip.setAttribute('y', '0');
                clip.setAttribute('width', '100%');
                clip.setAttribute('height', '100%');
                clip.setAttribute('id', clipid);
                const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                rect.setAttribute('x', '0');
                rect.setAttribute('y', '0');
                rect.setAttribute('width', '100%');
                rect.setAttribute('height', '100%');
                clip.append(rect);
                rsvg === null || rsvg === void 0 ? void 0 : rsvg.append(clip);
                const res = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                res.setAttribute('x', '0');
                res.setAttribute('y', this.settings.resPadding.toString());
                res.setAttribute('width', '100%');
                res.setAttribute('height', 'calc(100% - ' + (this.settings.resPadding * 2).toString() + 'px)');
                res.setAttribute('id', resource.Id.toString());
                res.setAttribute('class', 'resource');
                if (resource.Classes) {
                    resource.Classes.split(' ').forEach((c) => {
                        if (c != '')
                            res.classList.add(c);
                    });
                }
                res.setAttribute('clip-path', 'Url(#' + clipid + ')');
                if (this.settings.resRoundRect > 0)
                    res.setAttribute('rx', this.settings.resRoundRect.toString());
                res.addEventListener('click', (event) => {
                    this.resourceClick(event, { resource: resource });
                    if (typeof resourceClick === 'function') {
                        resourceClick(event, resource);
                    }
                });
                rsvg === null || rsvg === void 0 ? void 0 : rsvg.append(res);
                x = 2;
                if (resource.Image && this.settings.resourceImages) {
                    let imgdim = this.settings.resourceHeight * 0.8;
                    let imgspace = this.settings.resourceHeight * 0.1;
                    let clipid = 'clip-' + Math.floor(Math.random() * 10000000);
                    const imgsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    imgsvg.setAttribute('x', x.toString());
                    imgsvg.setAttribute('y', '10%');
                    imgsvg.setAttribute('height', imgdim.toString());
                    imgsvg.setAttribute('width', imgdim.toString());
                    imgsvg.setAttribute('class', 'resource-image');
                    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    circle.setAttribute('cx', (imgdim / 2).toString());
                    circle.setAttribute('cy', '50%');
                    circle.setAttribute('r', (imgdim / 2).toString());
                    const clip = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
                    clip.setAttribute('id', clipid);
                    clip.append(circle);
                    imgsvg.append(clip);
                    const rimage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                    rimage.setAttribute('x', '0');
                    rimage.setAttribute('y', '0');
                    rimage.setAttribute('width', '100%');
                    rimage.setAttribute('height', '100%');
                    rimage.setAttribute('href', (_a = resource.Image) !== null && _a !== void 0 ? _a : '');
                    rimage.setAttribute('clip-path', 'Url(#' + clipid + ')');
                    rimage.setAttribute('class', 'resource-image');
                    imgsvg === null || imgsvg === void 0 ? void 0 : imgsvg.append(rimage);
                    rsvg.append(imgsvg);
                    x += imgdim + imgspace;
                }
                const restext = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                restext.setAttribute('x', x.toString());
                restext.setAttribute('y', '55%');
                restext.setAttribute('class', "resource-text");
                restext.setAttribute('font-size', "35%");
                restext.setAttribute('dominant-baseline', 'middle');
                restext.setAttribute('clip-path', 'Url(#' + clipid + ')');
                restext.innerHTML = resource.Name;
                restext.addEventListener('click', (event) => {
                    this.resourceClick(event, { resource: resource });
                    if (typeof resourceClick === 'function') {
                        resourceClick(event, { resource: resource });
                    }
                });
                resources.append(rsvg);
                rsvg === null || rsvg === void 0 ? void 0 : rsvg.append(restext);
                x += restext.getBBox().width + 6;
                let icndim = this.settings.resourceHeight * 0.4;
                let halficn = icndim / 2;
                (_b = resource.Icons) === null || _b === void 0 ? void 0 : _b.forEach((icon, ii) => {
                    if (icon.Name) {
                        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
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
    }
    drawItems() {
        if (!this.data.Resources)
            return;
        let date = this.settings.date;
        let scheduler = this;
        this.data.Resources.forEach(function (resource, ri) {
            if (resource.Items) {
                resource.Items.forEach(function (item, ii) {
                    scheduler.drawItem(item, ri);
                });
            }
        });
    }
    clearItems() {
        this.clearGroupSafe('scheduler-items');
        if (this.settings.itemsLinks)
            this.initLinks();
    }
    drawItem(item, resindex, mask = true) {
        var _a, _b, _c;
        let x = 0;
        let y = 0;
        let w = 0;
        let h = this.settings.resourceHeight;
        let offset = item.Offset;
        let width = item.Width;
        w = (this.settings.timeWidth * (width / this.settings.timeUnitVal));
        if (width == 0)
            w = 0;
        x = (this.settings.timeWidth * (offset / this.settings.timeUnitVal));
        y = (resindex * this.settings.resourceHeight) + this.headerHeight + this.settings.itemsPadding;
        h = h - (this.settings.itemsPadding * 2);
        if (this.settings.viewWeeks == true) {
        }
        let itemData = new SchedulaItem(this, item, this.calendar);
        let drawItem = true;
        if (drawItem) {
            let ItemSVG = document.createElementNS('http://www.w3.org/2000/svg', "svg");
            ItemSVG.setAttribute("x", x.toString());
            ItemSVG.setAttribute("y", y.toString());
            ItemSVG.setAttribute('width', w.toString());
            ItemSVG.setAttribute('height', h.toString());
            ItemSVG.setAttribute("class", "svg-item");
            if (this.settings.canMoveItems)
                ItemSVG.classList.add("draggable");
            ItemSVG.setAttribute('data-id', item.Id);
            ItemSVG.setAttribute('data-ref', item.Reference);
            ItemSVG.setAttribute('data-key', item.ForeignKey);
            if (item.Link)
                ItemSVG.setAttribute('data-link', item.Link);
            let clipid = 'clip-' + item.Id;
            let maskid = 'mask-' + item.Id;
            let rx = this.settings.roundRect;
            if (this.settings.gStyle == 'round-rect' && rx == 0)
                rx = 5;
            if (this.settings.gStyle == 'rect')
                rx = 0;
            if (this.settings.gStyle == 'circle')
                rx = 0;
            const clip = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
            clip.setAttribute('id', clipid);
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', '0');
            rect.setAttribute('y', '0');
            rect.setAttribute('width', '100%');
            rect.setAttribute('height', '100%');
            if (rx > 0)
                rect.setAttribute('rx', rx.toString());
            clip.append(rect);
            ItemSVG.append(clip);
            const itemrect = document.createElementNS('http://www.w3.org/2000/svg', "rect");
            itemrect.setAttribute("x", '0');
            itemrect.setAttribute("y", '0');
            itemrect.setAttribute('width', '100%');
            itemrect.setAttribute('height', '100%');
            if (rx > 0)
                itemrect.setAttribute('rx', rx.toString());
            itemrect.setAttribute("fill", item.Color1);
            if (item.Classes) {
                let classes = item.Classes.split(' ');
                classes.forEach((c) => {
                    if (c != '')
                        itemrect.classList.add(c);
                });
            }
            itemrect.classList.add('item');
            itemrect.setAttribute('clip-path', 'url(#' + clipid + ')');
            let arrow = false;
            if (item.Type == "Arrow" || this.settings.gStyle == "arrow")
                arrow = true;
            let circle = false;
            if (item.Type == "Circle" || this.settings.gStyle == "circle")
                circle = true;
            let gantt = false;
            if (item.Type == "Gantt")
                gantt = true;
            if (circle) {
                itemrect.setAttribute('rx', (h / 2).toString());
                clip.querySelector('rect').setAttribute('rx', (h / 2).toString());
            }
            ItemSVG.append(itemrect);
            (_a = item.Pieces) === null || _a === void 0 ? void 0 : _a.forEach((piece) => {
                var completion = piece.Width;
                const pback = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                pback.setAttribute('x', piece.Start);
                pback.setAttribute('y', '0');
                pback.setAttribute('width', piece.Width);
                pback.setAttribute('height', '100%');
                pback.setAttribute('fill', piece.Color);
                pback.setAttribute('clip-path', 'url(#' + clipid + ')');
                ItemSVG.append(pback);
            });
            if (item.Completion != null) {
                const progressGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                let padding = 1;
                if (this.settings.progressBarPattern) {
                    const pback = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    pback.setAttribute('x', '0');
                    pback.setAttribute('y', '80%');
                    pback.setAttribute('width', '100%');
                    pback.setAttribute('height', 'calc(20% - ' + padding.toString() + 'px)');
                    pback.setAttribute('class', 'progress-bar-background');
                    pback.setAttribute('fill', 'white');
                    pback.setAttribute('opacity', '0.2');
                    pback.setAttribute('clip-path', 'url(#' + clipid + ')');
                    progressGroup.append(pback);
                    if ((item.Completion > 0) && (item.Completion <= 100)) {
                        var pbfill = 'black';
                        if (this.settings.progressBarAnimation == true && item.Completion < 100)
                            pbfill = 'url(#progress-pattern)';
                        const pbar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                        pbar.setAttribute('x', '0');
                        pbar.setAttribute('y', '80%');
                        pbar.setAttribute('width', 'calc(' + item.Completion + '%)');
                        pbar.setAttribute('height', 'calc(20% - ' + padding.toString() + 'px)');
                        pbar.setAttribute('class', 'progress-bar');
                        pbar.setAttribute('fill', pbfill);
                        pbar.setAttribute('opacity', '0.3');
                        pbar.setAttribute('clip-path', 'url(#' + clipid + ')');
                        progressGroup.append(pbar);
                    }
                    ItemSVG.append(progressGroup);
                }
            }
            if (this.settings.canResizeItems == true) {
                const resize = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                resize.setAttribute('x', 'calc(100% - 10px)');
                resize.setAttribute('y', '0');
                resize.setAttribute('width', '10');
                resize.setAttribute('height', '100%');
                resize.setAttribute('class', 'resize');
                resize.setAttribute('fill', 'transparent');
                resize.style.cursor = 'ew-resize';
                let l1y1 = '15%';
                let l2y1 = '15%';
                let l1y2 = '85%';
                let l2y2 = '85%';
                if (arrow) {
                    l1y1 = '45%';
                    l2y1 = '38%';
                    l1y2 = '55%';
                    l2y2 = '62%';
                }
                const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line1.setAttribute('x1', 'calc(100% - 4px)');
                line1.setAttribute('x2', 'calc(100% - 4px)');
                line1.setAttribute('y1', l1y1);
                line1.setAttribute('y2', l1y2);
                line1.setAttribute('class', 'resize-line');
                line1.setAttribute('stroke-width', '1');
                line1.setAttribute('stroke', 'white');
                const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line2.setAttribute('x1', 'calc(100% - 6px)');
                line2.setAttribute('x2', 'calc(100% - 6px)');
                line2.setAttribute('y1', l2y1);
                line2.setAttribute('y2', l2y2);
                line2.setAttribute('class', 'resize-line');
                line2.setAttribute('stroke-width', '1');
                line2.setAttribute('stroke', 'white');
                ItemSVG.append(line1);
                ItemSVG.append(line2);
                ItemSVG.append(resize);
            }
            if (item.ViewInfo == true) {
                let mysize = this.settings.infoElementSize;
                let info;
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
                ItemSVG.append(info);
            }
            if (this.settings.itemsText) {
                let lx = 4;
                if (arrow)
                    lx += (h / 2);
                const itemtext = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                itemtext.setAttribute('x', lx.toString());
                itemtext.setAttribute('y', '15%');
                let fontSize = 12;
                if (typeof this.settings.itemTextSize === 'string' && this.settings.itemTextSize.includes('%')) {
                    const pct = parseFloat(this.settings.itemTextSize) / 100;
                    fontSize = this.settings.resourceHeight * pct;
                }
                else if (typeof this.settings.itemTextSize === 'string' && this.settings.itemTextSize.includes('px')) {
                    fontSize = parseFloat(this.settings.itemTextSize);
                }
                itemtext.setAttribute('font-size', fontSize.toString());
                itemtext.setAttribute('dominant-baseline', 'hanging');
                itemtext.setAttribute('class', 'item-text');
                itemtext.setAttribute('clip-path', 'url(#' + clipid + ')');
                itemtext.innerHTML = (_b = item.Text) !== null && _b !== void 0 ? _b : '';
                ItemSVG.append(itemtext);
                const itemtext2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                itemtext2.setAttribute('x', lx.toString());
                itemtext2.setAttribute('y', '50%');
                let descSize = this.settings.resourceHeight * 0.25;
                itemtext2.setAttribute('font-size', descSize.toString());
                itemtext2.setAttribute('dominant-baseline', 'hanging');
                itemtext2.setAttribute('class', 'item-text2');
                itemtext2.setAttribute('clip-path', 'url(#' + clipid + ')');
                itemtext2.innerHTML = (_c = item.Description) !== null && _c !== void 0 ? _c : '';
                ItemSVG.append(itemtext2);
            }
            if (arrow) {
                const mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
                mask.setAttribute('id', maskid);
                const maskrect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                maskrect.setAttribute('x', '0');
                maskrect.setAttribute('y', '0');
                maskrect.setAttribute('width', 'calc(100% - ' + h / 2 + 'px)');
                maskrect.setAttribute('height', '100%');
                maskrect.setAttribute('fill', 'white');
                const square1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                square1.setAttribute('x', 'calc(100%)');
                square1.setAttribute('y', (h / 2).toString());
                square1.setAttribute('width', h.toString());
                square1.setAttribute('height', '100%');
                square1.setAttribute('fill', 'white');
                square1.setAttribute('transform', 'rotate(135)');
                square1.setAttribute('transform-origin', 'calc(100%) calc(50%)');
                const square2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                square2.setAttribute('x', (-h / 2).toString());
                square2.setAttribute('y', (h / 2).toString());
                square2.setAttribute('width', h.toString());
                square2.setAttribute('height', h.toString());
                square2.setAttribute('fill', 'black');
                square2.setAttribute('transform', 'rotate(45)');
                square2.setAttribute('transform-origin', h / 2 + ' ' + h / 2);
                mask.append(maskrect);
                mask.append(square1);
                mask.append(square2);
                itemrect.setAttribute('mask', 'url(#' + maskid + ')');
                ItemSVG.append(mask);
            }
            let that = this;
            ItemSVG.addEventListener('mousedown', function (event) {
                that.itemMouseDown(event, { item: item, element: this });
            });
            ItemSVG.addEventListener('mouseup', function (event) {
                that.itemMouseUp(event, { item: item, element: this });
            });
            ItemSVG.addEventListener('click', function (event) {
                that.itemClick(event, { item: item, element: this });
                if (typeof taskClick === 'function') {
                    taskClick(event, item);
                }
                ;
            });
            ItemSVG.addEventListener('mouseenter', function (event) {
                that.itemOver(event, { item: item });
            });
            ItemSVG.addEventListener('mouseleave', function (event) {
                that.itemOut(event, { item: item, element: this });
            });
            ItemSVG.addEventListener('drop', function (event) {
                that.dropOnElement(event, { item: item, element: this });
            });
            ItemSVG.addEventListener('dragover', function (event) {
                that.dragOverElement(event, { item: item, element: this });
            });
            this.schedulerItems.append(ItemSVG);
        }
    }
    initLinks() {
        var _a, _b, _c, _d, _e;
        if (this.settings.itemsLinks == true) {
            this.itemConnPoint1 = document.createElementNS('http://www.w3.org/2000/svg', "circle");
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
            document.querySelectorAll('.link-point').forEach((element) => {
                element.addEventListener('click', (event) => this.linkPointClick(event));
            });
        }
    }
    drawLinks() {
        var _a;
        this.clearLinks();
        if (this.settings.drawLinks == true) {
            (_a = this.data.Resources) === null || _a === void 0 ? void 0 : _a.forEach((resource, resindex) => {
                var _a;
                (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach((item1, index) => {
                    var _a;
                    if (typeof item1.Link !== "undefined") {
                        if (item1.Link !== "" && item1.Link !== null) {
                            (_a = this.data.Resources) === null || _a === void 0 ? void 0 : _a.forEach((resource2, resindex2) => {
                                var _a;
                                (_a = resource2.Items) === null || _a === void 0 ? void 0 : _a.forEach((item2, index2) => {
                                    var _a;
                                    let samelink = item2.Link == item1.Link;
                                    let idlink = item1.Link == item2.Id;
                                    let singletime = (samelink && ((item1.Offset < item2.Offset) || ((item1.Offset == item2.Offset) && (resindex > resindex2)))) || idlink;
                                    let notitself = item2.Id != item1.Id;
                                    let cond = resindex == resindex2;
                                    if ((samelink || idlink) && singletime && notitself) {
                                        var x1 = (this.settings.timeWidth * ((item1.Offset + (item1.Width / 2)) / this.settings.timeUnitVal));
                                        var x2 = (this.settings.timeWidth * ((item2.Offset + (item2.Width / 2)) / this.settings.timeUnitVal));
                                        var y1 = (resindex * this.settings.resourceHeight) + this.headerHeight + this.settings.itemsPadding;
                                        var y2 = ((resindex2 - 1) * this.settings.resourceHeight) + this.headerHeight - this.settings.itemsPadding;
                                        if (cond) {
                                            let i1 = item1.Offset > item2.Offset ? item2 : item1;
                                            let i2 = item1.Offset > item2.Offset ? item1 : item2;
                                            x1 = (this.settings.timeWidth * ((i1.Offset + i1.Width) / this.settings.timeUnitVal));
                                            x2 = (this.settings.timeWidth * ((i2.Offset) / this.settings.timeUnitVal));
                                            y1 = ((resindex + 0.5) * this.settings.resourceHeight) + this.headerHeight;
                                            y2 = y1;
                                        }
                                        if (!cond && resindex < resindex2) {
                                            y1 = ((resindex + 1) * this.settings.resourceHeight) + this.headerHeight - this.settings.itemsPadding;
                                            y2 = (resindex2 * this.settings.resourceHeight) + this.headerHeight + this.settings.itemsPadding;
                                        }
                                        var y3 = ((((resindex + resindex2) / 2) + 0.5) * this.settings.resourceHeight) + this.headerHeight;
                                        let strpath = '';
                                        strpath = ' M' + x1 + ',' + y1 + ' V ' + y3 + ' H' + x2 + ' V' + y2;
                                        if (this.settings.linkSpline == true) {
                                            strpath = ' M' + x1 + ',' + y1 + ' C' + x1 + ',' + y3 + ' ' + x2 + ',' + y3 + '  ' + x2 + ',' + y2;
                                        }
                                        if (cond) {
                                            strpath = ' M' + x1 + ',' + y1 + ' L' + x2 + ',' + y1;
                                        }
                                        else if (!cond && resindex > resindex2) {
                                            y2 = ((resindex2 + 1) * this.settings.resourceHeight) + this.headerHeight - this.settings.itemsPadding;
                                            strpath = ' M ' + x1 + ',' + y1 + ' V ' + y3 + ' H ' + x2 + ' V ' + y2;
                                            if (this.settings.linkSpline == true) {
                                                strpath = ' M ' + x1 + ',' + y1 + ' C' + x1 + ' ' + y3 + ' ' + x2 + ',' + y3 + ' ' + x2 + ' ' + y2;
                                            }
                                        }
                                        const linkline = document.createElementNS('http://www.w3.org/2000/svg', "path");
                                        let linkid = 'link-' + Math.floor(Math.random() * 10000000);
                                        linkline.setAttribute('id', linkid);
                                        linkline.setAttribute('d', strpath);
                                        linkline.setAttribute('fill', 'none');
                                        linkline.setAttribute('stroke-width', '4');
                                        linkline.setAttribute('class', 'link link-wire');
                                        linkline.setAttribute('stroke-linecap', 'round');
                                        linkline.setAttribute('data-link', item1.Link.toString());
                                        (_a = this.schedulerItems) === null || _a === void 0 ? void 0 : _a.append(linkline);
                                        const elem1 = document.getElementById(item1.Id.toString());
                                        if (elem1)
                                            elem1.setAttribute('data-link', linkid);
                                        const elem2 = document.getElementById(item2.Id.toString());
                                        if (elem2)
                                            elem2.setAttribute('data-link', linkid);
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
        document.querySelectorAll('.link').forEach((element) => {
            element.remove();
        });
    }
    hideLinkpoints() {
        document.querySelectorAll('.link-point').forEach((element) => {
            element.style.visibility = 'hidden';
        });
    }
    showLinkpoints() {
        document.querySelectorAll('.link-point').forEach((element) => {
            element.style.visibility = 'visible';
        });
    }
    splitterBarMouseDown(event) {
        if (this.action == '')
            this.action = 'splitter';
        const sidebar = document.getElementById('scheduler-sidebar');
        event.target.classList.add('sizing');
        this.element = event.target;
        this.actionMemoPos.x = event.pageX;
        this.actionMemoPos.y = event.pageY;
        sidebar.setAttribute('data-w', sidebar.getAttribute('width'));
    }
    shift(step) {
        var _a;
        const items = document.getElementById('scheduler-items');
        const anim = (_a = items === null || items === void 0 ? void 0 : items.getElementsByTagName("animateTransform")) !== null && _a !== void 0 ? _a : null;
        console.log(anim);
        if (anim && anim.length > 0) {
            let minpos = 0;
            let maxpos = -((this.settings.timeUnitsCount - this.settings.timeUnitsView - 1) * this.settings.timeWidth);
            let transform = this.getTranslateValues(items);
            var pos = transform.x + (step * this.settings.timeWidth);
            if (pos > minpos)
                pos = minpos;
            if (pos < maxpos)
                pos = maxpos;
            anim[0].setAttribute('from', transform === null || transform === void 0 ? void 0 : transform.x.toString());
            anim[0].setAttribute('to', pos.toString());
            anim[0].beginElement();
            localStorage.setItem('schedulaShiftPos', pos.toString());
        }
        else if (items) {
            let minpos = 0;
            let maxpos = -((this.settings.timeUnitsCount - this.settings.timeUnitsView - 1) * this.settings.timeWidth);
            let transform = this.getTranslateValues(items);
            var pos = transform.x + (step * this.settings.timeWidth);
            if (pos > minpos)
                pos = minpos;
            if (pos < maxpos)
                pos = maxpos;
            items.setAttribute('transform', 'translate(' + pos + ',0)');
            localStorage.setItem('schedulaShiftPos', pos.toString());
        }
    }
    itemMouseDown(event, data) {
        if (this.action == '') {
            if (event.button == 0 && this.settings.canMoveItems && event.target.classList.contains('items')) {
                this.action = 'moving';
            }
            if (event.button == 0 && this.settings.canMoveItems && event.target.classList.contains('item')) {
                this.action = 'moving';
            }
            else if (event.button == 0 && this.settings.canResizeItems && event.target.classList.contains('resize')) {
                this.action = 'sizing';
            }
        }
        if (this.action != '') {
            this.element = event.target.parentElement;
            if (event.target.classList.contains('item'))
                event.target.classList.add(this.action);
            if (event.target.classList.contains('resize')) {
                let id = event.target.parentElement.getAttribute('data-id');
                document.querySelector('svg[data-id="' + id + '"]>rect.item').classList.add(this.action);
            }
            this.element.setAttribute('data-x', data.element.getAttribute('x'));
            this.element.setAttribute('data-y', data.element.getAttribute('y'));
            this.element.setAttribute('data-w', data.element.getAttribute('width'));
            this.actionMemoPos.x = event.pageX;
            this.actionMemoPos.y = event.pageY;
        }
        this._clickStart = { x: event.pageX, y: event.pageY };
        if (typeof itemMouseDown == 'function') {
            itemMouseDown(event, data);
        }
    }
    itemMouseUp(event, data) {
        var _a;
        let itemClone = Object.assign({}, data.item);
        this.element = event.target.parentElement;
        this.processItemAction2(this.element, data.item, event.ctrlKey);
        this.setAction('');
        let datalink = (_a = this.element) === null || _a === void 0 ? void 0 : _a.getAttribute('data-link');
        if (datalink != null) {
            this.drawLinks();
        }
        if (typeof modified == 'function') {
            if ((itemClone.To != data.item.To) || (itemClone.From != data.item.From) || itemClone.Resource != data.item.Resource) {
                modified();
            }
        }
        this.storeData();
    }
    itemClick(event, element) {
        var _a;
        const dx = Math.abs(event.pageX - this._clickStart.x);
        const dy = Math.abs(event.pageY - this._clickStart.y);
        if (dx > 5 || dy > 5)
            return;
        const item = element.item;
        if (!item)
            return;
        if (this.settings.popupProvider) {
            this.settings.popupProvider.show(item, event, this);
            return;
        }
        const popup = this.ensurePopup();
        popup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        popup.querySelectorAll('.tabcontent').forEach(t => t.classList.remove('active'));
        popup.querySelector('.tab-btn[data-tab="info"]').classList.add('active');
        document.getElementById('scheduler-popup-tab-info').classList.add('active');
        document.getElementById('scheduler-popup-title').textContent = item.Text || 'Task';
        document.getElementById('popup-field-text').value = item.Text || '';
        document.getElementById('popup-field-desc').value = item.Description || '';
        const fmt = (mins) => mins != null ? new Date(mins * 60000).toLocaleString() : '';
        document.getElementById('popup-field-from').value = fmt(item.From);
        document.getElementById('popup-field-to').value = fmt(item.To);
        document.getElementById('popup-field-color').value = item.Color1 || '#000000';
        document.getElementById('popup-field-completion').value = (_a = item.Completion) !== null && _a !== void 0 ? _a : '';
        document.getElementById('popup-field-ref').value = item.Reference || '';
        document.getElementById('popup-field-json').value = JSON.stringify(item, null, 2);
        const saveBtn = document.getElementById('popup-btn-save');
        const newSave = saveBtn.cloneNode(true);
        saveBtn.parentNode.replaceChild(newSave, saveBtn);
        newSave.addEventListener('click', () => {
            item.Text = document.getElementById('popup-field-text').value;
            item.Description = document.getElementById('popup-field-desc').value;
            item.Color1 = document.getElementById('popup-field-color').value;
            const comp = parseInt(document.getElementById('popup-field-completion').value);
            item.Completion = isNaN(comp) ? undefined : comp;
            item.Reference = document.getElementById('popup-field-ref').value;
            popup.style.display = 'none';
            this.init();
        });
        const cancelBtn = document.getElementById('popup-btn-cancel');
        const newCancel = cancelBtn.cloneNode(true);
        cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);
        newCancel.addEventListener('click', () => { popup.style.display = 'none'; });
        const closeBtn = document.getElementById('scheduler-popup-close');
        const newClose = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newClose, closeBtn);
        newClose.addEventListener('click', () => { popup.style.display = 'none'; });
        popup.style.display = 'block';
    }
    ensurePopup() {
        let popup = document.getElementById('scheduler-popup');
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'scheduler-popup';
            popup.className = 'scheduler-popup';
            popup.style.display = 'none';
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
            popup.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    popup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    popup.querySelectorAll('.tabcontent').forEach(t => t.classList.remove('active'));
                    btn.classList.add('active');
                    const tab = btn.dataset.tab;
                    if (tab === 'info') {
                        document.getElementById('scheduler-popup-tab-info').classList.add('active');
                    }
                    else if (tab === 'json') {
                        document.getElementById('scheduler-popup-tab-json').classList.add('active');
                    }
                });
            });
            this.makePopupDraggable(popup);
        }
        return popup;
    }
    makePopupDraggable(popup) {
        const header = popup.querySelector('#scheduler-popup-header');
        if (!header)
            return;
        let isDragging = false;
        let startX = 0, startY = 0, startLeft = 0, startTop = 0;
        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            const rect = popup.getBoundingClientRect();
            startLeft = rect.left + window.scrollX;
            startTop = rect.top + window.scrollY;
            popup.style.left = startLeft + 'px';
            popup.style.top = startTop + 'px';
            popup.style.transform = 'none';
            e.preventDefault();
        });
        document.addEventListener('mousemove', (e) => {
            if (!isDragging)
                return;
            popup.style.left = (startLeft + e.clientX - startX) + 'px';
            popup.style.top = (startTop + e.clientY - startY) + 'px';
        });
        document.addEventListener('mouseup', () => { isDragging = false; });
    }
    itemOver(event, item) {
        var _a, _b, _c, _d;
        if (this.settings.itemsLinks == true) {
            const cx = parseFloat((_a = event.currentTarget.getAttribute('x')) !== null && _a !== void 0 ? _a : '0');
            const cy = parseFloat((_b = event.currentTarget.getAttribute('y')) !== null && _b !== void 0 ? _b : '0');
            const cw = parseFloat((_c = event.currentTarget.getAttribute('width')) !== null && _c !== void 0 ? _c : '0');
            const ch = parseFloat((_d = event.currentTarget.getAttribute('height')) !== null && _d !== void 0 ? _d : '0');
            const cx1 = cx;
            const cy1 = cy + ch / 2;
            const cx2 = cx + cw / 2;
            const cy2 = cy;
            const cx3 = cx + cw;
            const cy3 = cy + ch;
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
    }
    itemOut(event, item) {
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
    }
    dropOnElement(event, element) { }
    dragOverElement(event, element) { }
    linkPointClick(event) {
        var _a, _b, _c, _d;
        if (this.settings.itemsLinks == true && this.action == '') {
            this.action = 'linking';
            this.linkPoint.x = parseFloat((_a = event.target.getAttribute('cx')) !== null && _a !== void 0 ? _a : '0');
            this.linkPoint.y = parseFloat((_b = event.target.getAttribute('cy')) !== null && _b !== void 0 ? _b : '0');
            this.linkId = (_c = event.target.getAttribute('target')) !== null && _c !== void 0 ? _c : '-----';
        }
        else {
            if (this.action == 'linking' && this.linkId != event.target.getAttribute('target')) {
                (_d = this.data.Resources) === null || _d === void 0 ? void 0 : _d.forEach((resource) => {
                    var _a;
                    (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                        if (item.Id == this.linkId) {
                            item.Link = event.target.getAttribute('target');
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
        if (this.action == 'splitter')
            this.action = '';
        this.resetLinkLine();
        (_a = document.querySelector('.splitter')) === null || _a === void 0 ? void 0 : _a.classList.remove('sizing');
    }
    resetLinkLine() {
        const line = document.getElementById('link-line');
        line === null || line === void 0 ? void 0 : line.setAttribute('x1', '0');
        line === null || line === void 0 ? void 0 : line.setAttribute('x2', '0');
        line === null || line === void 0 ? void 0 : line.setAttribute('y1', '0');
        line === null || line === void 0 ? void 0 : line.setAttribute('y2', '0');
        this.linkId = '';
        this.linkPoint.x = 0;
        this.linkPoint.y = 0;
    }
    setAction(action) {
        var _a;
        if (action == '') {
            if (this.action != '') {
                (_a = this.schedulerItems) === null || _a === void 0 ? void 0 : _a.querySelectorAll('rect.item').forEach((element) => element.classList.remove(this.action));
            }
        }
        this.action = action;
    }
    processItemAction2(element, data, ctrl) {
        var _a, _b, _c, _d, _e, _f;
        let x = parseFloat((_a = element.getAttribute('x')) !== null && _a !== void 0 ? _a : '0');
        let y = parseFloat((_b = element.getAttribute('y')) !== null && _b !== void 0 ? _b : '0');
        let w = parseFloat((_c = element.getAttribute('width')) !== null && _c !== void 0 ? _c : '0');
        let dx = parseFloat((_d = element.getAttribute('data-x')) !== null && _d !== void 0 ? _d : '0');
        let dy = parseFloat((_e = element.getAttribute('data-y')) !== null && _e !== void 0 ? _e : '0');
        let dw = parseFloat((_f = element.getAttribute('data-w')) !== null && _f !== void 0 ? _f : '0');
        let axisXsteps = this.settings.gridStep / (this.settings.timeUnitVal / this.settings.timeWidth);
        let gridOffset = this.settings.gridOffset / (this.settings.timeUnitVal / this.settings.timeWidth);
        x = this.getModulo(x, axisXsteps, gridOffset);
        y = this.getModulo(y, this.settings.resourceHeight, this.headerHeight + this.settings.itemsPadding);
        w = this.getModulo(w, axisXsteps);
        let moved = Math.abs(dx - x) > (axisXsteps / 2) || y != dy;
        let resized = Math.abs(dw - w) > (axisXsteps / 3);
        let si = new SchedulaItem(this, data, this.calendar);
        if (moved) {
            si.X = x;
            si.Y = y;
        }
        else {
            element.setAttribute('x', dx.toString());
            element.setAttribute('y', dy.toString());
            if (resized) {
                si.W = w;
            }
            else
                element.setAttribute('width', dw.toString());
        }
        if (this.settings.checkInterferences) {
            let interference = si.checkInterference();
            if (!interference) {
                if (!this.settings.shiftItems || !ctrl) {
                    si.X = dx;
                    si.Y = dy;
                }
                else {
                    let item = this.data.Resources[si.Resource].Items.filter((i) => (i.Offset + i.Width) > si.Offset && i.Offset < si.Offset)
                        .sort((a, b) => { return a.Offset - b.Offset; })[0];
                    if (item) {
                        let si2 = new SchedulaItem(this, item, this.calendar);
                        si.X = si2.X + si2.W;
                    }
                    let xxx = si.X + si.W;
                    let items = this.data.Resources[si.Resource].Items.filter((i) => i.Offset >= si.Offset && i.Id != si.Id)
                        .sort((a, b) => { return parseInt(a.Offset) - parseInt(b.Offset); });
                    for (let i = 0; i < items.length; i++) {
                        let item = items[i];
                        let si2 = new SchedulaItem(this, item, this.calendar);
                        if (xxx > si2.X)
                            si2.X = xxx;
                        xxx = si2.X + si2.W;
                        interference = si2.checkInterference();
                    }
                }
            }
        }
    }
    drawEvents() {
        if (this.settings.viewEvents == true) {
            var parent = document.getElementById('scheduler-background');
            if (this.data.Events) {
                let ry = this.settings.monthBoxHeight;
                if (this.settings.viewWeeks)
                    ry += this.settings.weekBoxHeight;
                this.data.Events.forEach((event, ei) => {
                    let rx = (event.Offset * this.settings.timeWidth / this.settings.timeUnitVal);
                    let rw = this.settings.timeWidth * event.Width / this.settings.timeUnitVal;
                    let rhh = (this.data.Resources.length * this.settings.resourceHeight) + this.headerHeight;
                    let rh = this.settings.infoElementHeight;
                    const svgevent = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svgevent.setAttribute('x', rx.toString());
                    svgevent.setAttribute('y', ry.toString());
                    svgevent.setAttribute('width', rw.toString());
                    svgevent.setAttribute('height', rhh.toString());
                    svgevent.setAttribute('class', "svg-event draggable-x");
                    svgevent.setAttribute('cursor', 'pointer');
                    svgevent.setAttribute('data-id', event.Id);
                    const ev = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                    ev.setAttribute('x', '0');
                    ev.setAttribute('y', '0');
                    ev.setAttribute('width', rw.toString());
                    ev.setAttribute('height', rh.toString());
                    ev.setAttribute('class', 'event-header ' + event.Classes);
                    ev.setAttribute('fill', event.Color);
                    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                    title.innerHTML = event.Description;
                    ev.append(title);
                    if (this.settings.viewEventExtended == true) {
                        let p = document.getElementById('scheduler-items');
                        let y = this.headerHeight;
                        const extevent = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                        extevent.setAttribute('x', rx.toString());
                        extevent.setAttribute('y', y.toString());
                        extevent.setAttribute('width', rw.toString());
                        extevent.setAttribute('height', rhh.toString());
                        extevent.setAttribute('fill', event.Color);
                        extevent.setAttribute('class', 'event-extension ' + event.Classes);
                        p === null || p === void 0 ? void 0 : p.append(extevent);
                    }
                    svgevent.append(ev);
                    parent === null || parent === void 0 ? void 0 : parent.append(svgevent);
                });
            }
        }
    }
    drawInfoUnits() {
        if (this.settings.viewInfoElements) {
        }
    }
    getSum(box) {
        var _a;
        let dt = box.getAttribute('data-date');
        if (!dt)
            return {};
        let dt1 = this.settings.date;
        let dt2 = new Date(dt);
        let start = Math.trunc((dt2.getTime() - dt1.getTime()) / 1000 / 60);
        let stop = start + this.settings.timeUnitVal;
        let sum = 0;
        let y = parseFloat(box.getAttribute('y'));
        let resIndex = (y - (this.headerHeight)) / this.settings.resourceHeight;
        let resource = this.data.Resources[resIndex];
        let name = resource.Name;
        (_a = resource.Items) === null || _a === void 0 ? void 0 : _a.forEach(function (i, item) {
            let x = i.Offset;
            let w = i.Offset + i.Width;
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
            let hh = Math.trunc(sum / 60);
            let mm = sum - (hh * 60);
            let time = this.pad(hh) + ':' + this.pad(mm);
            info['info'] = time;
        }
        return info;
    }
    pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
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
        const clickedDateStr = (_a = event.target.getAttribute('data-date')) !== null && _a !== void 0 ? _a : '';
        if (clickedDateStr) {
            this.settings.date = new Date(clickedDateStr);
        }
        this.currentView = view;
        localStorage.setItem('schedulaView', view);
        localStorage.removeItem('schedulaShiftPos');
        const items = document.getElementById('scheduler-items');
        if (items)
            items.setAttribute('transform', 'translate(0,0)');
        this.refresh();
    }
    restoreView() {
        let savedView = localStorage.getItem('schedulaView');
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
        let savedPos = localStorage.getItem('schedulaShiftPos');
        if (savedPos) {
            let pos = parseFloat(savedPos);
            if (!isNaN(pos) && pos !== 0) {
                const items = document.getElementById('scheduler-items');
                if (items) {
                    let minpos = 0;
                    let maxpos = -((this.settings.timeUnitsCount - this.settings.timeUnitsView - 1) * this.settings.timeWidth);
                    if (pos > minpos)
                        pos = minpos;
                    if (pos < maxpos)
                        pos = maxpos;
                    items.setAttribute('transform', 'translate(' + pos + ',0)');
                }
            }
        }
    }
    resourceClick(event, data) {
    }
    drawMonths() {
        const parent = document.getElementById('scheduler-header');
        var dt = this.settings.date;
        if (dt && parent) {
            let lastmonth = -1;
            let increment = 60 * 1000 * this.settings.timeUnitVal;
            for (let i = 0; i < this.settings.timeUnitsCount; i++) {
                var cdate = new Date(dt.getTime() + (i * increment));
                let w = this.settings.timeWidth;
                let x = (i * this.settings.timeWidth);
                let day = cdate.getUTCDate();
                let month = cdate.getUTCMonth();
                if (month != lastmonth) {
                    var days = new Date(cdate.getUTCFullYear(), cdate.getUTCMonth() + 1, 1).getUTCDate();
                    var mw = w * days;
                    if (this.settings.timeUnitVal == 60)
                        mw = w * 24;
                    var my = 0;
                    var mh = this.settings.monthBoxHeight;
                    var mx = x;
                    if (this.settings.timeUnitVal == 1440) {
                        if (day != 1)
                            mx = x - ((day - 1) * w);
                    }
                    else {
                        mx = x + this.settings.timeWidth;
                    }
                    var t = this.settings.months[cdate.getUTCMonth()];
                    if (this.settings.viewYear == true) {
                        t += ' ' + cdate.getUTCFullYear();
                    }
                    if (this.settings.timeUnitVal == 60)
                        t = cdate.toLocaleDateString();
                    const monthsvg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
                    monthsvg.setAttribute("x", mx.toString());
                    monthsvg.setAttribute("y", my.toString());
                    monthsvg.setAttribute('width', mw.toString());
                    monthsvg.setAttribute('height', mh.toString());
                    monthsvg.setAttribute('font-size', '100%');
                    const monthBox = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                    monthBox.setAttribute("x", '0');
                    monthBox.setAttribute("y", '0');
                    monthBox.setAttribute('width', '100%');
                    monthBox.setAttribute('height', '100%');
                    monthBox.setAttribute('data-date', cdate.toUTCString());
                    monthBox.setAttribute('class', "monthbox");
                    let that = this;
                    monthBox.addEventListener('click', (event) => {
                        that.switchViewMode(event, SchedulaView.Month);
                    });
                    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                    title.innerHTML = t;
                    monthBox.append(title);
                    monthsvg.append(monthBox);
                    let tx = 10;
                    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    text.setAttribute("x", tx.toString());
                    text.setAttribute("y", '50%');
                    text.setAttribute('font-size', "40%");
                    text.setAttribute('dominant-baseline', 'middle');
                    text.setAttribute('class', "header-text");
                    text.innerHTML = t;
                    monthsvg.append(text);
                    if (this.settings.viewStars == true) {
                        const stars = document.createElementNS('http://www.w3.org/2000/svg', 'use');
                        stars.setAttribute('x', (mx - 31).toString());
                        stars.setAttribute('y', (my + 8).toString());
                        stars.setAttribute('href', '#stars');
                        monthsvg.append(stars);
                    }
                    if (this.settings.viewMonthLogo == true) {
                        const logo = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                        logo.setAttribute('x', (mw - mh).toString());
                        logo.setAttribute('y', (mh / 8).toString());
                        logo.setAttribute('width', (mh / 4 * 3).toString());
                        logo.setAttribute('height', (mh / 4 * 3).toString());
                        logo.setAttribute('href', this.settings.logo);
                        logo.setAttribute('class', 'scheduler-month-logo');
                        const title = document.createElementNS('http://www.w3.org/2000/svg', "title");
                        title.innerHTML = this.settings.logoTitle;
                        logo.append(title);
                        monthsvg.append(logo);
                    }
                    parent.append(monthsvg);
                    lastmonth = month;
                }
            }
        }
    }
    drawWeeks() {
        let parent = document.getElementById('scheduler-header');
        var dt = this.settings.date;
        if (dt && parent) {
            let increment = 60 * 1000 * this.settings.timeUnitVal;
            for (let i = 0; i < this.settings.timeUnitsCount; i++) {
                let cdate = new Date(dt.getTime() + (i * increment));
                let hilight = (cdate.getDay() == 0);
                let h = this.settings.weekBoxHeight;
                let w = this.settings.timeWidth * 7;
                let y = this.settings.monthBoxHeight;
                let x = (i * this.settings.timeWidth);
                if (this.settings.viewWeeks && (hilight || i == 0) && this.settings.timeUnitVal == 1440) {
                    let weeksvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    weeksvg.setAttribute('x', x.toString());
                    weeksvg.setAttribute('y', y.toString());
                    weeksvg.setAttribute('width', w.toString());
                    weeksvg.setAttribute('height', h.toString());
                    let elem = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    elem.setAttribute('x', '0');
                    elem.setAttribute('y', '0');
                    elem.setAttribute('width', w.toString());
                    elem.setAttribute('height', h.toString());
                    elem.setAttribute('data-date', cdate.toUTCString());
                    elem.classList.add('week-element');
                    let that = this;
                    elem.addEventListener('click', (event) => {
                        that.switchViewMode(event, SchedulaView.Week);
                    });
                    let txt = this.getWeekOfYear(cdate).toString();
                    const title = document.createElementNS('http://www.w3.org/2000/svg', "title");
                    title.innerHTML = txt;
                    elem.append(title);
                    weeksvg.append(elem);
                    let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
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
            }
        }
    }
    drawTimeUnits() {
        let parent = document.getElementById('scheduler-header');
        let dt = this.settings.date;
        if (dt && parent) {
            let today = new Date();
            let increment = 60 * 1000 * this.settings.timeUnitVal;
            for (let i = 0; i < this.settings.timeUnitsCount; i++) {
                let cdate = new Date(dt.getTime() + (i * increment));
                let longdate = cdate.toLocaleDateString('it-it', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                let daynum = cdate.toLocaleDateString('it-it', { day: "numeric" });
                let daymonth = cdate.toLocaleDateString('it-it', { day: "numeric", month: 'short' });
                let istoday = (today.getDate() == cdate.getDate()) && (today.getMonth() == cdate.getMonth()) && (today.getFullYear() == cdate.getFullYear());
                let hilight = (cdate.getUTCDay() == 0) && this.settings.hilightSunday;
                let h = this.settings.timeElementHeight;
                let w = this.settings.timeWidth;
                let y = this.headerHeight - this.settings.timeElementHeight;
                let x = (i * this.settings.timeWidth);
                const elem = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                elem.setAttribute("x", x.toString());
                elem.setAttribute("y", y.toString());
                elem.setAttribute('width', w.toString());
                elem.setAttribute('height', h.toString());
                elem.classList.add('time-element');
                if (istoday)
                    elem.classList.add('today');
                if (hilight)
                    elem.classList.add('sunday');
                elem.setAttribute('data-date', cdate.toUTCString());
                elem.setAttribute('fill', 'transparent');
                let that = this;
                elem.addEventListener('click', (event) => {
                    that.switchViewMode(event, SchedulaView.Day);
                });
                parent.append(elem);
                var tx = x + (this.settings.timeWidth / 2);
                if (this.settings.timeUnitVal == 60)
                    tx = x;
                var ty = y + h - 4;
                const text = document.createElementNS('http://www.w3.org/2000/svg', "text");
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
                if (this.settings.timeUnitsView > 7) {
                    text.innerHTML = daynum;
                }
                else if (this.settings.timeUnitsView == 1) {
                    text.innerHTML = longdate;
                }
                else {
                    text.innerHTML = daymonth;
                }
                parent.append(text);
                const dummy = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                dummy.setAttribute("x", x.toString());
                dummy.setAttribute("y", y.toString());
                dummy.setAttribute('width', w.toString());
                dummy.setAttribute('height', h.toString());
                dummy.classList.add('time-unit');
                dummy.setAttribute('data-date', cdate.toUTCString());
                dummy.addEventListener('click', (event) => {
                    that.switchViewMode(event, SchedulaView.Day);
                    if (typeof timeMouseClick == 'function') {
                        timeMouseClick(event, cdate);
                    }
                });
                const title = document.createElementNS('http://www.w3.org/2000/svg', "title");
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
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        return day;
    }
    getTemplate() {
    }
    drawHeader() {
        const parent = document.getElementById('scheduler-header');
        if (parent) {
            var h = this.headerHeight;
            var w = (this.settings.timeUnitsCount * this.settings.timeWidth);
            var y = 0;
            var x = 0;
            const header = document.createElementNS('http://www.w3.org/2000/svg', "rect");
            header.setAttribute("x", x.toString());
            header.setAttribute("y", y.toString());
            header.setAttribute('width', w.toString());
            header.setAttribute('height', h.toString());
            header.setAttribute('class', "header-bg");
            parent.appendChild(header);
        }
    }
}
