resourceClick(event, MouseEvent, data, any);
{
}
drawMonths();
{
    const parent = document.getElementById('scheduler-header');
    var dt = this.settings.date;
    if (dt && parent) {
        let lastmonth = -1;
        let increment = 60 * 1000 * this.settings.timeUnitVal; //one day = 864000000
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
                    that.setView(event, SchedulerView.Month);
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
drawWeeks();
{
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
                    that.setView(event, SchedulerView.Week);
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
drawTimeUnits();
{
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
            elem.setAttribute('fill', 'transparent');
            let that = this;
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
                that.setView(event, SchedulerView.Day);
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
getWeekOfYear(date, Date);
{
    var day = this.getDayOfYear(date);
    var week = Math.floor(day / 7);
    return week + 1;
}
getDayOfYear(date, Date);
{
    var start = new Date(date.getFullYear(), 0, 0);
    var diff = date.getTime() - start.getTime();
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
}
getTemplate();
{
    // Original code fetched from Azure, let's keep it or replace logic if needed
    // For now, minimal implementation as per scheduler.ts, just console log
    // fetch(...)
}
//# sourceMappingURL=SchedulaCore.part5.js.map