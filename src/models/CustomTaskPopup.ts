import { ITaskPopup } from './ITaskPopup';

export class CustomTaskPopup implements ITaskPopup {
    private element: HTMLElement;

    constructor() {
        // Creiamo l'elemento contenitore una sola volta
        this.element = document.createElement('div');
        
        // Stili di base per il popup (puoi spostarli in un file CSS)
        this.element.style.position = 'fixed';
        this.element.style.backgroundColor = '#ffffff';
        this.element.style.border = '1px solid #ccc';
        this.element.style.borderRadius = '8px';
        this.element.style.padding = '15px';
        this.element.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        this.element.style.zIndex = '10000'; // Assicuriamoci che sia sopra tutto
        this.element.style.display = 'none'; // Nascosto di default
        this.element.style.minWidth = '250px';
        
        document.body.appendChild(this.element);
    }

    show(item: any, event: MouseEvent, scheduler: any): void {
        // 1. Popola il contenuto con i dati del task
        this.element.innerHTML = `
            <h3 style="margin: 0 0 10px 0; font-size: 16px;">${item.label || 'Dettaglio Task'}</h3>
            <div style="font-size: 14px; color: #555; margin-bottom: 15px;">
                <p style="margin: 5px 0;"><strong>Inizio:</strong> ${new Date(item.dateStart).toLocaleTimeString()}</p>
                <p style="margin: 5px 0;"><strong>Fine:</strong> ${new Date(item.dateEnd).toLocaleTimeString()}</p>
            </div>
            <button id="btn-custom-close" style="padding: 5px 10px; cursor: pointer;">Chiudi</button>
        `;

        // 2. Posiziona il popup vicino al cursore del mouse
        this.element.style.left = `${event.clientX + 15}px`;
        this.element.style.top = `${event.clientY + 15}px`;
        
        // 3. Mostra il popup
        this.element.style.display = 'block';

        // Gestione chiusura tramite il bottone interno
        const btn = this.element.querySelector('#btn-custom-close');
        if (btn) btn.addEventListener('click', () => this.hide());
    }

    hide(): void {
        this.element.style.display = 'none';
    }
}