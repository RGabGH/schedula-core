

import { ISchedulaCore } from "../models/ISchedulaCore.js";
import { SchedulaSettings } from "../models/SchedulaSettings.js";
import { SchedulaCalendar } from "../models/SchedulaCalendar.js";


export class SchedulaItemData {
    public From: number = 0;
    public Effort: number = 0;
    public Duration: number = 0;
    public ControlBit = false;
}

export class SchedulaItem {
    public Duration: number = 0;
    public ControlBit = false;
    private _element: SVGSVGElement | null = null;
    private _settings: SchedulaSettings;
    private _resource: number = 0;
    private _scheduler: ISchedulaCore;
    private _width: number = 0;
    private _height: number = 0;
    private _from: number = 0;
    private _to: number = 0;
    private _offset: number = 0;
    private _effort: number = 2880;
    private _data: any;
    private _x: number = 0;
    private _y: number = 0;
    private _w: number = 0;
    private _calendar: SchedulaCalendar | null = null;
    private _id: string = "";

    constructor(scheduler: ISchedulaCore, itemData: any, calendar?: SchedulaCalendar) {
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
        if (calendar != null) this._calendar = calendar;

        this._offset = itemData.Offset;
        this._width = itemData.Width;
        this._from = this.calcFrom();
        if (this._calendar != null) {
            this._effort = this._calendar.calcEffort(this);
            this._data.Effort = this._effort;
        }
    }

    get Id(): string {
        return this._id;
    }

    get Resource(): number {
        if (this._resource < 0) {
            this._scheduler.data.Resources?.forEach((resource: any, ri: number) => {
                resource.Items?.forEach((item: any) => {
                    if (item.Id == this._data.Id) {
                        this._resource = ri;
                    }
                });
            });
        }
        return this._resource;
    }

    set Resource(value: number) {
        if (value >= 0) {
            let resourceIndex = Math.trunc(value);
            let y = (this._settings.resourceHeight * resourceIndex) + this._scheduler.headerHeight + this._settings.itemsPadding;
            let x = parseFloat(this._element?.getAttribute('x') || '0');
            if (resourceIndex != this._resource) {
                this._scheduler.data.Resources[this.Resource].Items?.splice(this._scheduler.data.Resources[this.Resource].Items?.indexOf(this._data), 1);
                if (!this._scheduler.data.Resources[resourceIndex].Items) this._scheduler.data.Resources[resourceIndex].Items = [];
                this._data.Modified = true;
                this._scheduler.data.Resources[resourceIndex].Items?.push(this._data);
                this._resource = resourceIndex;
                this._data.Resource = this._resource;

                this.moveTo(x, y);
            }
            else this.moveTo(x, y);
        }
    }

    get From(): number {
        return this._from;
    }
    set From(value: number) {
        if (value >= 0) {
            this._from = value;
            this.Offset = this.calcOffset();
        }
    }

    get Offset(): number {
        return this._offset;
    }
    set Offset(value: number) {
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

    get To(): number {
        return this._from + this._width;
    }

    get Width(): number {
        return this._width;
    }
    set Width(value: number) {
        if (value >= this._settings.gridStep) {
            this._width = this.getModulo(value, this._settings.gridStep, this._settings.gridStep);
            this._w = this._width / this._settings.timeUnitVal * this._settings.timeWidth;
            this.setWidth(this._w);
            if (this._calendar) {
                this._effort = this._calendar.calcEffort(this);
            }
            else this._effort = this._width;

            this._data.Width = this._width;
            this._data.Effort = this.Effort;
            this._data.To = this._from + this._width;
            this._data.Modified = true;
        }
    }

    get W(): number {
        return parseFloat(this._element?.getAttribute('width') ?? '0');
    }
    set W(value: number) {
        if (value > 0) {
            let val = value * this._settings.timeUnitVal / this._settings.timeWidth;
            this.Width = val;
        }
    }

    get X(): number {
        return parseFloat(this._element?.getAttribute('x') ?? '0');
    }
    set X(value: number) {
        if (value > 0) {
            let offset = this.convertXToOffset(value);
            this.Offset = this.getModulo(offset, this._settings.gridStep, this._settings.gridStep);
            this._x = this.convertOffsetToX();
            this._data.Offset = this._offset;
            this._data.Modified = true;
        }
    }

    get Y(): number {
        return parseFloat(this._element?.getAttribute('y') ?? '0');
    }
    set Y(value: number) {
        let min = 0;
        let max = this._scheduler.data.Resources?.length ?? 0;
        let r = Math.trunc((value - this._scheduler.headerHeight - this._settings.itemsPadding) / this._settings.resourceHeight);
        if (r < min) r = min;
        if (r > max) r = max;
        this.Resource = r;
    }

    get Effort(): number {
        return this._effort;
    }
    set Effort(value: number) {
        if (value >= this._settings.gridStep) {
            this._effort = this.getModulo(value, this._settings.gridStep, this._settings.gridStep);
            if (this._calendar) {
                this._width = this._calendar.calcDuration(this);
            }
            else this._width = this._effort;

            this._w = this._width / this._settings.timeUnitVal * this._settings.timeWidth;
            this.setWidth(this._w);

            this._data.Width = this._width;
            this._data.Effort = this._effort;
            this._data.Modified = true;
        }
    }

    private moveTo(x: number, y: number) {
        if (!this._element) return;
        if (this._settings.animation ?? false) {
            this.moveAnimatedTo(x, y);
        }
        this._element.setAttribute('x', x.toString());
        this._element.setAttribute('y', y.toString());
    }

    private moveAnimatedTo(x: number, y: number) {
        if (!this._element) return;
        let cx = parseFloat(this._element.getAttribute('x') ?? '0');
        let cy = parseFloat(this._element.getAttribute('y') ?? '0');

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

    private setWidth(width: number) {
        if (this._settings.animation == true) {
            this.setAnimatedWidth(width);
        }
        this._element?.setAttribute('width', width.toString());
    }

    private setAnimatedWidth(width: number) {
        if (!this._element) return;
        let w = parseFloat(this._element.getAttribute('width') ?? '0');
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

    private getModulo(value: number, step: number, min?: number): number {
        const modulo = (value - (min ?? 0)) % step;
        const correction = modulo > step / 2 ? step - modulo : -modulo;
        let result = value + correction;
        result = min != null && result < min ? min : result;
        return result;
    }

    private calcFrom(): number {
        let date = this._settings.date;
        let ticks = this._offset;
        if (date) {
            ticks += (date.getTime() / 60000);
        }
        return ticks;
    }

    private calcOffset(): number {
        let date = this._settings.date;
        let ticks = this._from;
        if (date) {
            ticks -= (date.getTime() / 60000);
        }
        return ticks;
    }

    private convertOffsetToX(): number {
        let x = this._offset / this._settings.timeUnitVal * this._settings.timeWidth;
        return x;
    }

    private convertXToOffset(x: number): number {
        let offset = x * this._settings.timeUnitVal / this._settings.timeWidth;
        return offset;
    }

    private convertWToTicks(w: number): number {
        let ticks = w / this._settings.timeWidth * this._settings.timeUnitVal;
        return ticks;
    }

    public checkInterference(): boolean {
        let result = true;
        let x1 = this.Offset;
        let x2 = this.Offset + this.Width;

        if (this.Resource >= 0 && this.Resource < (this._scheduler.data.Resources?.length ?? 0)) {
            this._scheduler.data.Resources[this.Resource].Items?.forEach((item: any) => {
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
