import { ISchedulaPlugin } from '../models/ISchedulaPlugin.js';
import { ITaskPopup } from '../models/ITaskPopup.js';

/**
 * DefaultPopupPlugin — the single built-in popup for both Core and PRO.
 *
 * Features:
 * - Branded header (customise via `brandColor`)
 * - General tab: Text, Description, From/To (read-only), Color picker, Completion %, Reference
 * - Data tab: custom key/value pairs from `item.data` (read-only rows)
 * - Draggable popup
 * - Live refresh during drag/resize (via `refreshItem`)
 *
 * PRO customers who need a fully custom popup can implement `ITaskPopup` and
 * assign it to `settings.popupProvider` together with a valid `settings.licenseKey`.
 */
export class DefaultPopupPlugin implements ISchedulaPlugin, ITaskPopup {
    readonly name = 'defaultpopup';
    private _core: any;
    private _currentItem: any = null;

    /**
     * Custom brand color used in the popup header. Override as needed.
     */
    brandColor: string = '#1e293b';

    init(core: any): void {
        this._core = core;
        // Auto-register as popupProvider only if none is already set
        if (!core.settings.popupProvider) {
            core.settings.popupProvider = this;
        }
    }

    destroy(): void {
        const popup = document.getElementById('scheduler-default-popup');
        if (popup) popup.remove();
        this._core = null;
    }

    onItemClick(event: MouseEvent, element: any): void {
        const item = element?.item;
        if (!item) return;
        this._currentItem = item;
        const popup = this._ensurePopup();
        this._populatePopup(popup, item);
        popup.style.display = 'block';
    }

    show(item: any, event: MouseEvent, scheduler: any): void {
        this._currentItem = item;
        const popup = this._ensurePopup();
        this._populatePopup(popup, item);
        popup.style.display = 'block';
    }

    refreshItem(item: any): void {
        const popup = document.getElementById('scheduler-default-popup');
        if (!popup || popup.style.display === 'none') return;
        this._currentItem = item;
        const fmt = (mins: number) => mins != null ? new Date(Math.trunc(mins) * 60000).toLocaleString(undefined, {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        }) : '';
        const fmtMins = (mins: number) => mins != null ? `${Math.floor(mins / 60)}h ${String(Math.trunc(mins) % 60).padStart(2, '0')}m` : '';
        (popup.querySelector('#scheduler-default-popup-title') as HTMLElement).textContent = item.Text || 'Task';
        (popup.querySelector('#default-popup-field-text') as HTMLInputElement).value = item.Text || '';
        (popup.querySelector('#default-popup-field-desc') as HTMLInputElement).value = item.Description || '';
        (popup.querySelector('#default-popup-field-from') as HTMLInputElement).value = fmt(item.From);
        (popup.querySelector('#default-popup-field-to') as HTMLInputElement).value = fmt(item.To);
        (popup.querySelector('#default-popup-field-duration') as HTMLInputElement).value = fmtMins(item.Width);
        (popup.querySelector('#default-popup-field-effort') as HTMLInputElement).value = fmtMins(item.Effort);
        this._applyColor(popup, item.Color1);
        (popup.querySelector('#default-popup-field-completion') as HTMLInputElement).value = item.Completion ?? '';
        (popup.querySelector('#default-popup-field-ref') as HTMLInputElement).value = item.Reference || '';
    }

    hide(): void {
        const popup = document.getElementById('scheduler-default-popup');
        if (popup) popup.style.display = 'none';
    }

    private _ensurePopup(): HTMLElement {
        let popup = document.getElementById('scheduler-default-popup');
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'scheduler-default-popup';
            popup.className = 'scheduler-popup';
            popup.style.cssText = 'display:none;position:fixed;z-index:9999;';
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
            const colorSwatch = popup.querySelector('#default-popup-color-swatch') as HTMLElement;
            const colorInput = popup.querySelector('#default-popup-field-color') as HTMLInputElement;
            const colorLabel = popup.querySelector('#default-popup-color-label') as HTMLElement;
            const colorClear = popup.querySelector('#default-popup-color-clear') as HTMLElement;
            colorSwatch.addEventListener('click', () => colorInput.click());
            colorInput.addEventListener('input', () => {
                colorSwatch.style.background = colorInput.value;
                colorSwatch.dataset.color = colorInput.value;
                colorSwatch.classList.add('has-color');
                colorLabel.textContent = colorInput.value;
                colorClear.style.display = '';
            });
            colorClear.addEventListener('click', () => {
                colorSwatch.style.background = '';
                colorSwatch.dataset.color = '';
                colorSwatch.classList.remove('has-color');
                colorLabel.textContent = 'Non assegnato';
                colorClear.style.display = 'none';
            });
            popup.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    popup!.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    popup!.querySelectorAll('.tabcontent').forEach(t => t.classList.remove('active'));
                    btn.classList.add('active');
                    const tab = (btn as HTMLElement).dataset.tab;
                    document.getElementById(`scheduler-default-popup-tab-${tab}`)?.classList.add('active');
                });
            });
            this._makePopupDraggable(popup);
        }
        return popup;
    }

    private _populatePopup(popup: HTMLElement, item: any): void {
        const core = this._core;
        const fmt = (mins: number) => mins != null ? new Date(Math.trunc(mins) * 60000).toLocaleString(undefined, {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        }) : '';
        const fmtMins = (mins: number) => mins != null ? `${Math.floor(mins / 60)}h ${String(Math.trunc(mins) % 60).padStart(2, '0')}m` : '';

        (popup.querySelector('#scheduler-default-popup-title') as HTMLElement).textContent = item.Text || 'Task';
        (popup.querySelector('#default-popup-field-text') as HTMLInputElement).value = item.Text || '';
        (popup.querySelector('#default-popup-field-desc') as HTMLInputElement).value = item.Description || '';
        (popup.querySelector('#default-popup-field-from') as HTMLInputElement).value = fmt(item.From);
        (popup.querySelector('#default-popup-field-to') as HTMLInputElement).value = fmt(item.To);
        (popup.querySelector('#default-popup-field-duration') as HTMLInputElement).value = fmtMins(item.Width);
        (popup.querySelector('#default-popup-field-effort') as HTMLInputElement).value = fmtMins(item.Effort);
        this._applyColor(popup, item.Color1);
        (popup.querySelector('#default-popup-field-completion') as HTMLInputElement).value = item.Completion ?? '';
        (popup.querySelector('#default-popup-field-ref') as HTMLInputElement).value = item.Reference || '';

        // ── Custom data fields from item.data ──────────────────────────────
        const customContainer = popup.querySelector('#default-popup-custom-fields') as HTMLElement;
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
        const saveBtn = popup.querySelector('#default-popup-btn-save')!;
        const newSave = saveBtn.cloneNode(true) as HTMLElement;
        saveBtn.parentNode!.replaceChild(newSave, saveBtn);
        newSave.addEventListener('click', () => {
            item.Text = (popup.querySelector('#default-popup-field-text') as HTMLInputElement).value;
            item.Description = (popup.querySelector('#default-popup-field-desc') as HTMLInputElement).value;
            const swatchEl = popup.querySelector('#default-popup-color-swatch') as HTMLElement;
            item.Color1 = swatchEl.dataset.color || undefined;
            const comp = parseInt((popup.querySelector('#default-popup-field-completion') as HTMLInputElement).value);
            item.Completion = isNaN(comp) ? undefined : comp;
            item.Reference = (popup.querySelector('#default-popup-field-ref') as HTMLInputElement).value;
            popup.style.display = 'none';
            core.refreshItem(item);
            if (typeof (window as any).modified === 'function') (window as any).modified();
        });

        const cancelBtn = popup.querySelector('#default-popup-btn-cancel')!;
        const newCancel = cancelBtn.cloneNode(true) as HTMLElement;
        cancelBtn.parentNode!.replaceChild(newCancel, cancelBtn);
        newCancel.addEventListener('click', () => { popup.style.display = 'none'; });

        const closeBtn = popup.querySelector('#scheduler-default-popup-close')!;
        const newClose = closeBtn.cloneNode(true) as HTMLElement;
        closeBtn.parentNode!.replaceChild(newClose, closeBtn);
        newClose.addEventListener('click', () => { popup.style.display = 'none'; });

        // Only center on first open — preserve position if popup was already visible
        if (popup.style.display === 'none' || popup.style.display === '') {
            popup.style.left = '50%';
            popup.style.top = '50%';
            popup.style.transform = 'translate(-50%,-50%)';
        }
    }

    private _applyColor(popup: HTMLElement, color: string | null | undefined): void {
        const swatch = popup.querySelector('#default-popup-color-swatch') as HTMLElement;
        const label = popup.querySelector('#default-popup-color-label') as HTMLElement;
        const clearBtn = popup.querySelector('#default-popup-color-clear') as HTMLElement;
        const input = popup.querySelector('#default-popup-field-color') as HTMLInputElement;
        if (color) {
            swatch.style.background = color;
            swatch.dataset.color = color;
            swatch.classList.add('has-color');
            label.textContent = color;
            input.value = color;
            clearBtn.style.display = '';
        } else {
            swatch.style.background = '';
            swatch.dataset.color = '';
            swatch.classList.remove('has-color');
            label.textContent = 'Non assegnato';
            input.value = '#5762ca';
            clearBtn.style.display = 'none';
        }
    }

    private _makePopupDraggable(popup: HTMLElement): void {
        const header = popup.querySelector('#scheduler-default-popup-header') as HTMLElement;
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
