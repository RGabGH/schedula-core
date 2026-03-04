import { ISchedulaPlugin } from '../models/ISchedulaPlugin.js';
import { ITaskPopup } from '../models/ITaskPopup.js';

/**
 * DefaultPopupPlugin — Core popup included in the open-source bundle.
 * Shows a full-featured form (text, description, color, completion, reference, JSON tab)
 * and allows editing and saving any task item.
 *
 * PRO customers can replace this with AdvancedPopupPlugin or any custom implementation
 * registered via settings.plugins or settings.popupProvider.
 */
export class DefaultPopupPlugin implements ISchedulaPlugin, ITaskPopup {
    readonly name = 'defaultpopup';
    private _core: any;

    init(core: any): void {
        this._core = core;
    }

    destroy(): void {
        const popup = document.getElementById('scheduler-default-popup');
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
                    <div class="popup-header" id="scheduler-default-popup-header">
                        <button class="close-button" id="scheduler-default-popup-close">&#x2715;</button>
                        <span id="scheduler-default-popup-title">Task</span>
                    </div>
                    <div class="popup-content">
                        <div class="tab">
                            <button class="tab-btn active" data-tab="info">Info</button>
                            <button class="tab-btn" data-tab="json">JSON</button>
                        </div>
                        <div class="tabcontent active" id="scheduler-default-popup-tab-info">
                            <div class="formgroup"><label>Text</label><input class="taskinput" id="default-popup-field-text" type="text"></div>
                            <div class="formgroup"><label>Description</label><input class="taskinput" id="default-popup-field-desc" type="text"></div>
                            <div class="formgroup"><label>From</label><input class="taskinput" id="default-popup-field-from" type="text" readonly></div>
                            <div class="formgroup"><label>To</label><input class="taskinput" id="default-popup-field-to" type="text" readonly></div>
                            <div class="formgroup"><label>Color</label><input class="taskinput" id="default-popup-field-color" type="color"></div>
                            <div class="formgroup"><label>Completion %</label><input class="taskinput" id="default-popup-field-completion" type="number" min="0" max="100"></div>
                            <div class="formgroup"><label>Reference</label><input class="taskinput" id="default-popup-field-ref" type="text"></div>
                        </div>
                        <div class="tabcontent" id="scheduler-default-popup-tab-json">
                            <textarea id="default-popup-field-json"></textarea>
                        </div>
                    </div>
                    <div class="popup-footer">
                        <button class="scheduler-popup-btn" id="default-popup-btn-cancel">Cancel</button>
                        <button class="scheduler-popup-btn" id="default-popup-btn-save">Save</button>
                    </div>
                </div>`;
            document.body.appendChild(popup);
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
        const fmt = (mins: number) => mins != null ? new Date(mins * 60000).toLocaleString() : '';
        (popup.querySelector('#scheduler-default-popup-title') as HTMLElement).textContent = item.Text || 'Task';
        (popup.querySelector('#default-popup-field-text') as HTMLInputElement).value = item.Text || '';
        (popup.querySelector('#default-popup-field-desc') as HTMLInputElement).value = item.Description || '';
        (popup.querySelector('#default-popup-field-from') as HTMLInputElement).value = fmt(item.From);
        (popup.querySelector('#default-popup-field-to') as HTMLInputElement).value = fmt(item.To);
        (popup.querySelector('#default-popup-field-color') as HTMLInputElement).value = item.Color1 || '#000000';
        (popup.querySelector('#default-popup-field-completion') as HTMLInputElement).value = item.Completion ?? '';
        (popup.querySelector('#default-popup-field-ref') as HTMLInputElement).value = item.Reference || '';
        (popup.querySelector('#default-popup-field-json') as HTMLTextAreaElement).value = JSON.stringify(item, null, 2);

        const saveBtn = popup.querySelector('#default-popup-btn-save')!;
        const newSave = saveBtn.cloneNode(true) as HTMLElement;
        saveBtn.parentNode!.replaceChild(newSave, saveBtn);
        newSave.addEventListener('click', () => {
            item.Text = (popup.querySelector('#default-popup-field-text') as HTMLInputElement).value;
            item.Description = (popup.querySelector('#default-popup-field-desc') as HTMLInputElement).value;
            item.Color1 = (popup.querySelector('#default-popup-field-color') as HTMLInputElement).value;
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

        popup.style.left = '50%';
        popup.style.top = '50%';
        popup.style.transform = 'translate(-50%,-50%)';
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
