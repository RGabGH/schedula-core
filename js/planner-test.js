// ── Plugin status badge ────────────────────────────────────────
function renderPluginBadges(sched) {
    var pluginNames = ['dragdrop', 'links', 'events', 'contextmenu', 'calendar'];
    var labels = { dragdrop: 'DragDrop', links: 'Links', events: 'Events', contextmenu: 'ContextMenu', calendar: 'Calendar' };
    var el = document.getElementById('plugin-status');
    el.textContent = 'Plugins: ';
    pluginNames.forEach(function (name) {
        var plugin = sched.getPlugin(name);
        var ok = plugin !== null;
        var b = document.createElement('span');
        if (name === 'calendar' && ok) {
            var cal = sched.data && sched.data.Calendar;
            if (cal) {
                b.className = 'badge-ok';
                b.textContent = 'Calendar custom \u2713';
                b.title = 'Reference: ' + (cal.Reference ?? 'default');
            } else {
                b.className = 'badge-info';
                b.textContent = 'Calendar default';
                b.title = 'Nessun data.Calendar definito — capacità piena';
            }
        } else {
            b.className = ok ? 'badge-ok' : 'badge-off';
            b.textContent = labels[name] + (ok ? ' \u2713' : ' \u2717');
        }
        el.appendChild(b);
    });

    // PRO / Free license badge
    var licInfo = (typeof validateLicense === 'function')
        ? validateLicense(sched.settings && sched.settings.licenseKey)
        : { valid: false, expired: false, perpetual: false, expiresAt: null, customerId: 0 };
    var isProLic = licInfo.valid && !licInfo.expired;
    var lic = document.createElement('span');
    lic.className = isProLic ? 'badge-ok' : 'badge-off';
    lic.textContent = isProLic ? 'PRO \u2713' : 'Free \u2717';
    if (isProLic) {
        lic.title = licInfo.perpetual
            ? 'Licenza PRO perpetua — cliente #' + licInfo.customerId
            : 'Licenza PRO — scade ' + licInfo.expiresAt.toLocaleDateString('it-IT', { year: 'numeric', month: 'long' }) + ' — cliente #' + licInfo.customerId;
    } else if (licInfo.valid && licInfo.expired) {
        lic.title = 'Licenza PRO scaduta il ' + licInfo.expiresAt.toLocaleDateString('it-IT', { year: 'numeric', month: 'long' });
        lic.textContent = 'PRO scaduta \u26A0';
    } else {
        lic.title = 'Licenza Free — funzionalità PRO non disponibili';
    }
    el.appendChild(lic);
}

/**
 * ESEMPIO DI POPUP CUSTOM PER LA VERSIONE CORE (STANDALONE)
 * Questa classe mostra come l'utente può implementare la propria UI
 * senza dipendere dai plugin PRO.
 */
class MyUserPopup {
    constructor() {
        this.element = document.createElement('div');
        this.element.style.cssText = `
            position: fixed;
            background: #fff;
            border: 2px solid #334155;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            padding: 20px;
            z-index: 10000;
            display: none;
            border-radius: 8px;
            min-width: 250px;
            font-family: sans-serif;
        `;
        document.body.appendChild(this.element);
    }

    show(item, event, scheduler) {
        this.element.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom:1px solid #e2e8f0; padding-bottom:10px;">
                <h3 style="margin:0; font-size:16px; color:#1e293b;">Core Preview</h3>
                <button onclick="this.closest('div').parentElement.parentElement.style.display='none'" style="border:none; background:none; cursor:pointer; font-size:18px;">&times;</button>
            </div>
            <div style="font-size:14px; color:#475569; line-height:1.6;">
                <p><strong>Item:</strong> ${item.Text || 'Untitled'}</p>
                <p><strong>Resource:</strong> ${item.Resource}</p>
                <p style="margin-top:10px; font-style:italic; font-size:12px; color:#94a3b8;">Questo è un popup custom definito nell'HTML per la versione Core Open Source.</p>
            </div>
        `;
        this.element.style.left = event.clientX + 'px';
        this.element.style.top = event.clientY + 'px';
        this.element.style.display = 'block';
    }

    hide() {
        this.element.style.display = 'none';
    }
}

// ── Settings + Plugin registration ────────────────────────────
var settings = new SchedulaSettings();

// DECOMMENTA questa riga se vuoi testare un popup custom nel Core
// settings.popupProvider = new MyUserPopup();

// PRO plugins registered via settings.plugins — the Core receives them in init()
settings.plugins = [
    new CalendarPlugin(),
    new DragDropPlugin(),
    new LinksPlugin(),
    new EventsPlugin(),
    new DefaultPopupPlugin(),
    new ContextMenuPlugin()
  // ,  new AdvancedPopupPlugin()
];

settings.date = new Date();
settings.canMoveItems = true;
settings.canResizeItems = true;
settings.drawLinks = false;
settings.itemsLinks = false;
settings.gridStep = 60;

if (typeof iconssvg !== 'undefined') {
    settings.icons = iconssvg;
}

settings.licenseKey = 'SCHED-6TTDT-6TTDT-8Y8DL';

// ── Group filter state ─────────────────────────────────────────
var _allResources = null;
var _activeGroups = new Set();

// ── Init ───────────────────────────────────────────────────────
var scheduler = new SchedulaCore("scheduler", schedulerData, settings);
scheduler.init();

renderPluginBadges(scheduler);
buildGroupButtons();

// Esempio: sabato non lavorativo per la risorsa 1 (aggiunto dinamicamente a runtime)

scheduler.refresh();

window.scheduler = scheduler;

// ── UI helpers ─────────────────────────────────────────────────
window.filterItems = function (input) {
    scheduler.filterItems(input.value);
};

window.setTheme = function (theme) {
    var el = document.getElementById("scheduler");
    el.classList.remove('theme-dark', 'theme-blue', 'theme-soft');
    document.body.classList.remove('theme-dark', 'theme-blue', 'theme-soft');
    if (theme) {
        el.classList.add(theme);
        document.body.classList.add(theme);
    }
};
setTheme('theme-blue');

window.setView = function (num) {
    scheduler.setView(num);
};

window.setStyle = function (style) {
    scheduler.setStyle(style);
};

window.toggleLinks = function () {
    scheduler.settings.drawLinks = !scheduler.settings.drawLinks;
    scheduler.settings.itemsLinks = scheduler.settings.drawLinks;
    scheduler.refresh();
};

window.toggleCalendarView = function (btn) {
    var active = scheduler.toggleCalendarView();
    if (active === false) return;
    btn.classList.toggle('btn-outline-secondary', !active);
    btn.classList.toggle('btn-primary', active);
};

window.setData = function (dati) {
    _allResources = null;
    _activeGroups.clear();
    scheduler.setData(dati);
    buildGroupButtons();
};

// ── Group filter ────────────────────────────────────────────────
var _allResources = null;
var _activeGroups = new Set();

function buildGroupButtons() {
    if (!_allResources) _allResources = scheduler.data.Resources.slice();
    var groups = [...new Set(_allResources.map(function (r) { return r.Group; }).filter(function (g) { return g != null; }))].sort(function (a, b) { return a - b; });
    var container = document.getElementById('groupfilter');
    container.innerHTML = '<span class="me-2 fw-bold">Groups:</span>';

    var allBtn = document.createElement('button');
    allBtn.className = 'btn btn-sm btn-secondary m-1';
    allBtn.textContent = 'All';
    allBtn.onclick = function () {
        _activeGroups.clear();
        applyGroupFilter();
        updateGroupButtons();
    };
    container.appendChild(allBtn);

    groups.forEach(function (g) {
        var btn = document.createElement('button');
        btn.className = 'btn btn-sm btn-outline-primary m-1';
        btn.dataset.group = g;
        btn.textContent = 'Group ' + g;
        btn.onclick = function () {
            if (_activeGroups.has(g)) _activeGroups.delete(g);
            else _activeGroups.add(g);
            applyGroupFilter();
            updateGroupButtons();
        };
        container.appendChild(btn);
    });
    updateGroupButtons();
}

function updateGroupButtons() {
    document.querySelectorAll('#groupfilter [data-group]').forEach(function (btn) {
        var g = parseInt(btn.dataset.group);
        var active = _activeGroups.has(g);
        btn.classList.toggle('btn-primary', active);
        btn.classList.toggle('btn-outline-primary', !active);
    });
}

function applyGroupFilter() {
    if (!_allResources) _allResources = scheduler.data.Resources.slice();
    scheduler.data.Resources = _activeGroups.size === 0
        ? _allResources.slice()
        : _allResources.filter(function (r) { return _activeGroups.has(r.Group); });
    scheduler.init();
}

// ── Scheduler callbacks ────────────────────────────────────────
window.modified = function () {
    console.log('[modified] data changed');
};

window.resourceClick = function (event, resource) {
    alert('Resource: ' + (resource.resource && resource.resource.Name ? resource.resource.Name : '?') + ' clicked!');
};

window.itemMouseEnter = function (event, item) { };
window.itemMouseExit = function (event, item) { };
window.itemMouseDown = function (event, item) { };
window.timeMouseClick = function (event, item) { };
window.gridMouseClick = function (event, item) { };
window.gridMouseOver = function (event, item) { };

// ── External drag support ──────────────────────────────────────
window.startdrag = function (evt) {
    var data = {
        text1: evt.target.getAttribute('data-text1'),
        text2: evt.target.getAttribute('data-text2'),
        order: evt.target.getAttribute('data-order'),
        classes: evt.target.getAttribute('data-classes'),
        width: evt.target.getAttribute('data-w'),
        key: evt.target.getAttribute('data-key'),
        color1: evt.target.getAttribute('data-color'),
        ref: evt.target.getAttribute('data-ref'),
        pieces: evt.target.getAttribute('data-qt'),
        json: evt.target.getAttribute('data-json')
    };
    evt.dataTransfer.setData("task", JSON.stringify(data));
    evt.dataTransfer.effectAllowed = "move";
};
