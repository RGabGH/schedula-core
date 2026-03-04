import { IEventsPlugin } from '../models/IEventsPlugin.js';

/**
 * EventsPlugin — PRO feature.
 * Renders calendar event markers and info unit bars
 * in the scheduler header area.
 */
export class EventsPlugin implements IEventsPlugin {
    readonly name = 'events';
    private _core: any;

    init(core: any): void {
        this._core = core;
    }

    destroy(): void {
        this._core = null;
    }

    drawEvents(): void {
        const core = this._core;
        const settings = core.settings;
        if (!settings.viewEvents || !core.data.Events) return;

        const parent = document.getElementById('scheduler-events');
        if (!parent) return;

        core.data.Events.forEach((event: any) => {
            const sd = settings.date;
            const ed = new Date(event.Date);
            const offset = Math.trunc((ed.getTime() - sd.getTime()) / 1000 / 60 / settings.timeUnitVal);
            const x = offset * settings.timeWidth;
            const y = settings.monthBoxHeight + settings.timeElementHeight;
            const h = settings.infoElementHeight;

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', x.toString());
            rect.setAttribute('y', y.toString());
            rect.setAttribute('width', settings.timeWidth.toString());
            rect.setAttribute('height', h.toString());
            rect.setAttribute('class', 'event-marker');
            if (event.Color) rect.setAttribute('fill', event.Color);
            if (event.Title) {
                rect.setAttribute('title', event.Title);
            }
            parent.append(rect);

            if (settings.viewEventExtended && event.Title) {
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', (x + 2).toString());
                text.setAttribute('y', (y + h * 0.75).toString());
                text.setAttribute('font-size', (h * 0.8).toString());
                text.setAttribute('class', 'event-label');
                text.textContent = event.Title;
                parent.append(text);
            }
        });
    }

    drawInfoUnits(): void {
        const core = this._core;
        const settings = core.settings;
        if (!settings.viewInfoElements) return;

        const parent = document.getElementById('scheduler-info');
        if (!parent) return;

        const tw = settings.timeWidth;
        const y = settings.monthBoxHeight + settings.timeElementHeight + (settings.viewWeeks ? settings.weekBoxHeight : 0);
        const h = settings.infoElementHeight;

        for (let c = 0; c < settings.timeUnitsCount; c++) {
            const sum = this._sumForColumn(c);
            if (sum <= 0) continue;

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', (c * tw).toString());
            rect.setAttribute('y', y.toString());
            rect.setAttribute('width', tw.toString());
            rect.setAttribute('height', h.toString());
            rect.setAttribute('class', 'info-bar');
            rect.setAttribute('fill', `hsl(${Math.min(120, 120 - sum)}, 70%, 50%)`);
            parent.append(rect);
        }
    }

    getSum(box: SVGSVGElement): number {
        const core = this._core;
        const date = box.getAttribute('data-date');
        const resId = box.getAttribute('data-res');
        if (!date || !resId) return 0;

        const d = new Date(date);
        let sum = 0;

        core.data.Resources?.forEach((r: any) => {
            if (String(r.id) !== resId) return;
            r.Items?.forEach((item: any) => {
                const from = new Date(item.From * 60000);
                const to = new Date(item.To * 60000);
                if (from <= d && d < to) sum += item.Effort || item.Width || 0;
            });
        });

        return sum;
    }

    private _sumForColumn(col: number): number {
        const core = this._core;
        const settings = core.settings;
        const sd = settings.date;
        const colDate = new Date(sd.getTime() + col * settings.timeUnitVal * 60 * 1000);
        const colEnd = new Date(colDate.getTime() + settings.timeUnitVal * 60 * 1000);

        let total = 0;
        core.data.Resources?.forEach((r: any) => {
            r.Items?.forEach((item: any) => {
                const from = new Date(item.From * 60000);
                const to = new Date(item.To * 60000);
                if (from < colEnd && to > colDate) total += item.Effort || 0;
            });
        });
        return total;
    }
}
