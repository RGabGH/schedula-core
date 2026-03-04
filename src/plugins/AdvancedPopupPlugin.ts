import { ISchedulaPlugin } from '../models/ISchedulaPlugin.js';
import { ITaskPopup } from '../models/ITaskPopup.js';

/**
 * AdvancedPopupPlugin — PRO-only branded popup example.
 *
 * This plugin demonstrates two main PRO customization points:
 *
 * 1. **Branding**: The popup header, colors and styles can be customized
 *    by the integrator to reflect their product identity.
 *
 * 2. **Custom data fields**: Items may carry a `data` property (object)
 *    populated from server-side JSON (e.g. custom metadata, business fields).
 *    This plugin reads those fields and exposes them in extra form rows.
 *
 * @example
 * // Server-side item example:
 * { Id: "123", Text: "My Task", data: { orderId: "ORD-99", priority: "High" } }
 *
 * // Register via settings:
 * settings.plugins = [ new AdvancedPopupPlugin() ];
 *
 * When registered, it takes priority and completely replaces DefaultPopupPlugin.
 */
export class AdvancedPopupPlugin implements ISchedulaPlugin, ITaskPopup {
    readonly name = 'advancedpopup';
    private _core: any;

    /**
     * Custom brand color used in the popup header. Override as needed.
     */
    brandColor: string = '#1e293b';

    init(core: any): void {
        this._core = core;
    }

    destroy(): void {
        const popup = document.getElementById('scheduler-advanced-popup');
        if (popup) popup.remove();
        this._core = null;
    }

    onItemClick(event: MouseEvent, element: any): void {
        const item = element?.item;
        if (!item) return;
        const popup = this._ensurePopup();
        this._populatePopup(popup, item);
        popup.style.display = 'block';
    }

    show(item: any, event: MouseEvent, scheduler: any): void {
        const popup = this._ensurePopup();
        this._populatePopup(popup, item);
        popup.style.display = 'block';
    }

    hide(): void {
        const popup = document.getElementById('scheduler-advanced-popup');
        if (popup) popup.style.display = 'none';
    }

    private _ensurePopup(): HTMLElement {
        let popup = document.getElementById('scheduler-advanced-popup');
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'scheduler-advanced-popup';
            popup.className = 'scheduler-popup';
            popup.style.cssText = 'display:none;position:fixed;z-index:9999;';
            popup.innerHTML = `
                <div class="popup-container">
                    <div class="popup-header" id="scheduler-advanced-popup-header" style="background:${this.brandColor};">
                        <button class="close-button" id="scheduler-advanced-popup-close" style="color:#fff;">&#x2715;</button>
                        <span id="scheduler-advanced-popup-title" style="color:#fff;">Task</span>
                    </div>
                    <div class="popup-content">
                        <div class="tab">
                            <button class="tab-btn active" data-tab="info">Info</button>
                            <button class="tab-btn" data-tab="custom">Custom</button>
                            <button class="tab-btn" data-tab="json">JSON</button>
                        </div>
                        <div class="tabcontent active" id="scheduler-advanced-popup-tab-info">
                            <div class="formgroup"><label>Text</label><input class="taskinput" id="adv-popup-field-text" type="text"></div>
                            <div class="formgroup"><label>Description</label><input class="taskinput" id="adv-popup-field-desc" type="text"></div>
                            <div class="formgroup"><label>From</label><input class="taskinput" id="adv-popup-field-from" type="text" readonly></div>
                            <div class="formgroup"><label>To</label><input class="taskinput" id="adv-popup-field-to" type="text" readonly></div>
                            <div class="formgroup"><label>Color</label><input class="taskinput" id="adv-popup-field-color" type="color"></div>
                            <div class="formgroup"><label>Completion %</label><input class="taskinput" id="adv-popup-field-completion" type="number" min="0" max="100"></div>
                            <div class="formgroup"><label>Reference</label><input class="taskinput" id="adv-popup-field-ref" type="text"></div>
                        </div>
                        <div class="tabcontent" id="scheduler-advanced-popup-tab-custom">
                            <!-- Custom fields from item.data are injected here at runtime -->
                            <div id="adv-popup-custom-fields" style="padding:8px;font-size:13px;color:#475569;"></div>
                        </div>
                        <div class="tabcontent" id="scheduler-advanced-popup-tab-json">
                            <textarea id="adv-popup-field-json"></textarea>
                        </div>
                    </div>
                    <div class="popup-footer">
                        <button class="scheduler-popup-btn" id="adv-popup-btn-cancel">Cancel</button>
                        <button class="scheduler-popup-btn" id="adv-popup-btn-save">Save</button>
                    </div>
                </div>`;
            document.body.appendChild(popup);
            popup.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    popup!.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    popup!.querySelectorAll('.tabcontent').forEach(t => t.classList.remove('active'));
                    btn.classList.add('active');
                    const tab = (btn as HTMLElement).dataset.tab;
                    document.getElementById(`scheduler-advanced-popup-tab-${tab}`)?.classList.add('active');
                });
            });
            this._makePopupDraggable(popup);
        }
        return popup;
    }

    private _populatePopup(popup: HTMLElement, item: any): void {
        const core = this._core;
        const fmt = (mins: number) => mins != null ? new Date(mins * 60000).toLocaleString() : '';

        (popup.querySelector('#scheduler-advanced-popup-title') as HTMLElement).textContent = item.Text || 'Task';
        (popup.querySelector('#adv-popup-field-text') as HTMLInputElement).value = item.Text || '';
        (popup.querySelector('#adv-popup-field-desc') as HTMLInputElement).value = item.Description || '';
        (popup.querySelector('#adv-popup-field-from') as HTMLInputElement).value = fmt(item.From);
        (popup.querySelector('#adv-popup-field-to') as HTMLInputElement).value = fmt(item.To);
        (popup.querySelector('#adv-popup-field-color') as HTMLInputElement).value = item.Color1 || '#000000';
        (popup.querySelector('#adv-popup-field-completion') as HTMLInputElement).value = item.Completion ?? '';
        (popup.querySelector('#adv-popup-field-ref') as HTMLInputElement).value = item.Reference || '';
        (popup.querySelector('#adv-popup-field-json') as HTMLTextAreaElement).value = JSON.stringify(item, null, 2);

        // ── Custom data fields from item.data ──────────────────────────────
        // item.data can be any object from the server with custom properties.
        // We render each key/value pair as a read-only row for the integrator
        // to display, or they can replace this block with editable inputs.
        const customContainer = popup.querySelector('#adv-popup-custom-fields') as HTMLElement;
        customContainer.innerHTML = '';
        if (item.data && typeof item.data === 'object') {
            Object.entries(item.data).forEach(([key, value]) => {
                const row = document.createElement('div');
                row.className = 'formgroup';
                row.innerHTML = `<label>${key}</label><input class="taskinput" type="text" value="${value ?? ''}" readonly data-custom-key="${key}">`;
                customContainer.appendChild(row);
            });
        } else {
            customContainer.innerHTML = '<p style="color:#94a3b8;font-style:italic;">No custom data (item.data) available.</p>';
        }

        // ── Save button ────────────────────────────────────────────────────
        const saveBtn = popup.querySelector('#adv-popup-btn-save')!;
        const newSave = saveBtn.cloneNode(true) as HTMLElement;
        saveBtn.parentNode!.replaceChild(newSave, saveBtn);
        newSave.addEventListener('click', () => {
            item.Text = (popup.querySelector('#adv-popup-field-text') as HTMLInputElement).value;
            item.Description = (popup.querySelector('#adv-popup-field-desc') as HTMLInputElement).value;
            item.Color1 = (popup.querySelector('#adv-popup-field-color') as HTMLInputElement).value;
            const comp = parseInt((popup.querySelector('#adv-popup-field-completion') as HTMLInputElement).value);
            item.Completion = isNaN(comp) ? undefined : comp;
            item.Reference = (popup.querySelector('#adv-popup-field-ref') as HTMLInputElement).value;
            popup.style.display = 'none';
            core.refreshItem(item);
            if (typeof (window as any).modified === 'function') (window as any).modified();
        });

        const cancelBtn = popup.querySelector('#adv-popup-btn-cancel')!;
        const newCancel = cancelBtn.cloneNode(true) as HTMLElement;
        cancelBtn.parentNode!.replaceChild(newCancel, cancelBtn);
        newCancel.addEventListener('click', () => { popup.style.display = 'none'; });

        const closeBtn = popup.querySelector('#scheduler-advanced-popup-close')!;
        const newClose = closeBtn.cloneNode(true) as HTMLElement;
        closeBtn.parentNode!.replaceChild(newClose, closeBtn);
        newClose.addEventListener('click', () => { popup.style.display = 'none'; });

        popup.style.left = '50%';
        popup.style.top = '50%';
        popup.style.transform = 'translate(-50%,-50%)';
    }

    private _makePopupDraggable(popup: HTMLElement): void {
        const header = popup.querySelector('#scheduler-advanced-popup-header') as HTMLElement;
        if (!header) return;
        let isDragging = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;
        header.addEventListener('mousedown', (e: MouseEvent) => {
            isDragging = true;
            startX = e.clientX; startY = e.clientY;
            const rect = popup.getBoundingClientRect();
            startLeft = rect.left + window.scrollX;
            startTop = rect.top + window.scrollY;
            popup.style.left = startLeft + 'px';
            popup.style.top = startTop + 'px';
            popup.style.transform = 'none';
            e.preventDefault();
        });
        document.addEventListener('mousemove', (e: MouseEvent) => {
            if (!isDragging) return;
            popup.style.left = (startLeft + e.clientX - startX) + 'px';
            popup.style.top = (startTop + e.clientY - startY) + 'px';
        });
        document.addEventListener('mouseup', () => { isDragging = false; });
    }
}
