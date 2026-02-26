import { SchedulaCore } from './SchedulaCore';
import { SchedulaSettings } from './models/SchedulaSettings';
import { SchedulaTemplate } from './ui/SchedulaTemplate';
import type { ITaskPopup } from './models/ITaskPopup';

// Expose classes to the global window object
(window as any).SchedulaCore = SchedulaCore;
(window as any).SchedulaSettings = SchedulaSettings;
(window as any).SchedulaTemplate = SchedulaTemplate;

// Expose ITaskPopup type for integrators (type-only, no runtime value needed)
export type { ITaskPopup };
