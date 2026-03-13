/**
 * custom-popup-example.js — SchedulaCore PRO custom popup template.
 *
 * Copy and adapt this file to replace the built-in DefaultPopupPlugin
 * with your own popup UI.
 *
 * Requirements:
 *   - A valid PRO licenseKey must be set in SchedulaSettings.
 *   - Assign an instance of your popup class to settings.popupProvider.
 *
 * Usage:
 *   const settings = new SchedulaSettings();
 *   settings.licenseKey = 'YOUR-LICENSE-KEY';
 *   settings.popupProvider = new MyCustomPopup();
 */

class MyCustomPopup {

    /**
     * Called when the user clicks a task bar.
     * Show your popup UI here and populate it with item data.
     *
     * @param {object}      item       The task data object.
     * @param {MouseEvent}  event      The click event that triggered the popup.
     * @param {object}      scheduler  The SchedulaCore instance.
     */
    show(item, event, scheduler) {
        this._item = item;
        this._scheduler = scheduler;

        // Example: populate and show a modal
        // document.getElementById('my-popup-title').textContent = item.Text;
        // document.getElementById('my-popup').style.display = 'block';

        console.log('[MyCustomPopup] show', item);
    }

    /**
     * Called when the popup should close (e.g. Escape key, external trigger).
     * Hide your popup UI here.
     */
    hide() {
        // document.getElementById('my-popup').style.display = 'none';
        console.log('[MyCustomPopup] hide');
    }

    /**
     * Optional. Called while the task is being dragged or resized so the
     * popup can update its displayed values in real time.
     *
     * @param {object} item  The updated task data object.
     */
    refreshItem(item) {
        this._item = item;
        // Example: update live fields
        // document.getElementById('my-popup-from').textContent = item.From;
        // document.getElementById('my-popup-to').textContent = item.To;
    }

    /**
     * Example save helper — call this from your Save button handler.
     * Updates the item and triggers a core refresh.
     */
    _save(newText) {
        if (!this._item || !this._scheduler) return;
        this._item.Text = newText;
        this._item.Modified = true;
        this._scheduler.refreshItem(this._item);
        this.hide();
    }
}
