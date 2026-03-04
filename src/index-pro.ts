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
import { DragDropPlugin } from './plugins/DragDropPlugin';
import { LinksPlugin } from './plugins/LinksPlugin';
import { EventsPlugin } from './plugins/EventsPlugin';

// Expose all classes globally (IIFE bundle — window.XXX access)
(window as any).SchedulaCore = SchedulaCore;
(window as any).SchedulaSettings = SchedulaSettings;
(window as any).SchedulaTemplate = SchedulaTemplate;
(window as any).DragDropPlugin = DragDropPlugin;
(window as any).LinksPlugin = LinksPlugin;
(window as any).EventsPlugin = EventsPlugin;

// Named exports for ESM consumers
export { SchedulaCore, SchedulaSettings, SchedulaTemplate };
export { DragDropPlugin, LinksPlugin, EventsPlugin };

// Type exports
export type { ITaskPopup } from './models/ITaskPopup';
export type { ISchedulaPlugin } from './models/ISchedulaPlugin';
export type { IDragDropPlugin } from './models/IDragDropPlugin';
export type { ILinksPlugin } from './models/ILinksPlugin';
export type { IEventsPlugin } from './models/IEventsPlugin';
