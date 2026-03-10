/**
 * SmartScheduler PRO — Entry point
 * Includes the public Core + all PRO plugins.
 * This bundle is compiled separately and distributed as the commercial product.
 *
 * License: Commercial (see LICENSE-PRO)
 */

import { SchedulaCore } from './SchedulaCore';
import { SchedulaSettings } from './models/SchedulaSettings';
import { SchedulaTemplate } from './ui/SchedulaTemplate';

// PRO plugins
import { DragDropPlugin } from './plugins/DragDropPlugin.js';
import { LinksPlugin } from './plugins/LinksPlugin.js';
import { EventsPlugin } from './plugins/EventsPlugin.js';
import { DefaultPopupPlugin } from './plugins/DefaultPopupPlugin.js';
import { ContextMenuPlugin } from './plugins/ContextMenuPlugin.js';
import { CalendarPlugin } from './plugins/CalendarPlugin.js';
import { NotificationPlugin } from './plugins/NotificationPlugin.js';
import { validateLicense, isPro } from './license/LicenseValidator.js';

// Expose all classes globally (IIFE bundle — window.XXX access)
(window as any).SchedulaCore = SchedulaCore;
(window as any).SchedulaSettings = SchedulaSettings;
(window as any).SchedulaTemplate = SchedulaTemplate;
(window as any).DragDropPlugin = DragDropPlugin;
(window as any).LinksPlugin = LinksPlugin;
(window as any).EventsPlugin = EventsPlugin;
(window as any).DefaultPopupPlugin = DefaultPopupPlugin;
(window as any).ContextMenuPlugin = ContextMenuPlugin;
(window as any).CalendarPlugin = CalendarPlugin;
(window as any).NotificationPlugin = NotificationPlugin;
(window as any).validateLicense = validateLicense;
(window as any).isPro = isPro;

// Named exports for ESM consumers
export { SchedulaCore, SchedulaSettings, SchedulaTemplate };
export { DragDropPlugin, LinksPlugin, EventsPlugin, DefaultPopupPlugin, ContextMenuPlugin, CalendarPlugin, NotificationPlugin };
export { validateLicense, isPro };
export { defaultTaskMenuItems, defaultDayMenuItems, defaultCellMenuItems } from './plugins/ContextMenuConfig.js';
export type { IMenuItemDef } from './plugins/ContextMenuConfig.js';

// Type exports
export type { ITaskPopup } from './models/ITaskPopup';
export type { ISchedulaPlugin } from './models/ISchedulaPlugin';
export type { IDragDropPlugin } from './models/IDragDropPlugin';
export type { ILinksPlugin } from './models/ILinksPlugin';
export type { IEventsPlugin } from './models/IEventsPlugin';
