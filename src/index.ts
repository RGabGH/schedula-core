import { SchedulaCore } from './SchedulaCore';
import { SchedulaSettings } from './models/SchedulaSettings';
import { SchedulaTemplate } from './ui/SchedulaTemplate';
import type { ITaskPopup } from './models/ITaskPopup';
import type { ISchedulaPlugin } from './models/ISchedulaPlugin';
import type { IDragDropPlugin } from './models/IDragDropPlugin';
import type { ILinksPlugin } from './models/ILinksPlugin';
import type { IEventsPlugin } from './models/IEventsPlugin';

// Expose classes to the global window object (IIFE bundle usage)
(window as any).SchedulaCore = SchedulaCore;
(window as any).SchedulaSettings = SchedulaSettings;
(window as any).SchedulaTemplate = SchedulaTemplate;

// Type-only exports for TypeScript integrators
export type { ITaskPopup, ISchedulaPlugin, IDragDropPlugin, ILinksPlugin, IEventsPlugin };
export { SchedulaCore, SchedulaSettings, SchedulaTemplate };
