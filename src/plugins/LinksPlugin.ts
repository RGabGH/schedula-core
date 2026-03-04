import { ILinksPlugin } from '../models/ILinksPlugin.js';

/**
 * LinksPlugin — PRO feature.
 * Handles SVG dependency links between task items:
 * creation of connection points, rendering of link paths,
 * and interactive linking via click.
 */
export class LinksPlugin implements ILinksPlugin {
    readonly name = 'links';
    private _core: any;

    // SVG elements for connection points and the in-progress link line
    private _cp1: SVGCircleElement | null = null;
    private _cp2: SVGCircleElement | null = null;
    private _cp3: SVGCircleElement | null = null;
    private _cp4: SVGCircleElement | null = null;
    private _line: SVGLineElement | null = null;

    init(core: any): void {
        this._core = core;
    }

    destroy(): void {
        this._core = null;
    }

    initLinks(): void {
        const core = this._core;
        const items = core.schedulerItemsElement;
        if (!items) return;

        const mkCircle = (cls: string): SVGCircleElement => {
            const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            c.setAttribute('cx', '0'); c.setAttribute('cy', '0'); c.setAttribute('r', '5');
            c.setAttribute('fill', 'white'); c.setAttribute('stroke', '#00ff00');
            c.setAttribute('stroke-width', '1');
            c.setAttribute('class', `${cls} link-point`);
            return c;
        };

        this._cp1 = mkCircle('c1');
        this._cp2 = mkCircle('c2');
        this._cp3 = mkCircle('c3');
        this._cp4 = mkCircle('c4');

        this._line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        this._line.setAttribute('x1', '0'); this._line.setAttribute('y1', '0');
        this._line.setAttribute('x2', '0'); this._line.setAttribute('y2', '0');
        this._line.setAttribute('stroke-width', '1');
        this._line.setAttribute('id', 'link-line');
        this._line.setAttribute('stroke', '#00ff00');

        items.append(this._line, this._cp1, this._cp2, this._cp3, this._cp4);

        // Expose to core for hover access
        core.connPointElements = { p1: this._cp1, p2: this._cp2, p3: this._cp3, p4: this._cp4, line: this._line };

        document.querySelectorAll('.link-point').forEach(el => {
            el.addEventListener('click', (e) => this.onLinkPointClick(e as MouseEvent));
        });
    }

    drawLinks(): void {
        this.clearLinks();
        const core = this._core;
        const settings = core.settings;
        if (!settings.drawLinks) return;

        core.data.Resources?.forEach((resource: any, resindex: number) => {
            resource.Items?.forEach((item1: any) => {
                if (!item1.Link) return;
                core.data.Resources?.forEach((resource2: any, resindex2: number) => {
                    resource2.Items?.forEach((item2: any) => {
                        const samelink = item2.Link === item1.Link;
                        const idlink = item1.Link === item2.Id;
                        const notitself = item2.Id !== item1.Id;
                        const singletime = (samelink && ((item1.Offset < item2.Offset) || (item1.Offset === item2.Offset && resindex > resindex2))) || idlink;
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

                        let strpath = '';
                        if (cond) {
                            const i1 = item1.Offset > item2.Offset ? item2 : item1;
                            const i2 = item1.Offset > item2.Offset ? item1 : item2;
                            x1 = tw * ((i1.Offset + i1.Width) / tv);
                            x2 = tw * (i2.Offset / tv);
                            y1 = y2 = (resindex + 0.5) * rh + hh;
                            strpath = `M${x1},${y1} L${x2},${y1}`;
                        } else {
                            const y3 = (((resindex + resindex2) / 2) + 0.5) * rh + hh;
                            if (resindex < resindex2) {
                                y1 = (resindex + 1) * rh + hh - ip;
                                y2 = resindex2 * rh + hh + ip;
                            } else {
                                y2 = (resindex2 + 1) * rh + hh - ip;
                            }
                            strpath = settings.linkSpline
                                ? `M ${x1},${y1} C${x1} ${y3} ${x2},${y3} ${x2} ${y2}`
                                : `M${x1},${y1} V ${y3} H${x2} V${y2}`;
                        }

                        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        const linkid = 'link-' + Math.floor(Math.random() * 10000000);
                        path.setAttribute('id', linkid);
                        path.setAttribute('d', strpath);
                        path.setAttribute('fill', 'none');
                        path.setAttribute('stroke-width', '4');
                        path.setAttribute('class', 'link link-wire');
                        path.setAttribute('stroke-linecap', 'round');
                        path.setAttribute('data-link', item1.Link.toString());
                        core.schedulerItemsElement?.append(path);
                        document.getElementById(item1.Id?.toString())?.setAttribute('data-link', linkid);
                        document.getElementById(item2.Id?.toString())?.setAttribute('data-link', linkid);
                    });
                });
            });
        });
    }

    clearLinks(): void {
        document.querySelectorAll('.link').forEach(el => el.remove());
    }

    onLinkPointClick(event: MouseEvent): void {
        const core = this._core;
        const target = event.target as SVGCircleElement;

        if (core.currentAction === '') {
            core.currentAction = 'linking';
            const lp = core.linkPointPos;
            lp.x = parseFloat(target.getAttribute('cx') ?? '0');
            lp.y = parseFloat(target.getAttribute('cy') ?? '0');
            core.linkPointPos = lp;
            core.currentLinkId = target.getAttribute('target') ?? '';
        } else if (core.currentAction === 'linking' && core.currentLinkId !== target.getAttribute('target')) {
            const targetId = target.getAttribute('target');
            core.data.Resources?.forEach((r: any) => {
                r.Items?.forEach((item: any) => {
                    if (item.Id === core.currentLinkId) {
                        item.Link = targetId;
                        if (core.settings.drawLinks) this.drawLinks();
                    }
                });
            });
            this._resetLinkLine();
            core.currentAction = '';
        }
    }

    onLinkMouseMove(event: MouseEvent): void {
        const core = this._core;
        const lp = core.linkPointPos;
        const cp = core.calendarPosition;
        const line = document.getElementById('link-line');
        line?.setAttribute('x1', lp.x.toString());
        line?.setAttribute('y1', lp.y.toString());
        line?.setAttribute('x2', cp.x.toString());
        line?.setAttribute('y2', (cp.y - 3).toString());
    }

    private _resetLinkLine(): void {
        const line = document.getElementById('link-line');
        line?.setAttribute('x1', '0'); line?.setAttribute('y1', '0');
        line?.setAttribute('x2', '0'); line?.setAttribute('y2', '0');
        const lp = this._core.linkPointPos;
        lp.x = 0; lp.y = 0;
        this._core.linkPointPos = lp;
        this._core.currentLinkId = '';
    }
}
