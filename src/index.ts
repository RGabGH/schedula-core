import { SchedulaCore } from './SchedulaCore';
import { SchedulaSettings } from './models/SchedulaSettings';
import { SchedulaTemplate } from './ui/SchedulaTemplate';

// Expose classes to the global window object
(window as any).SchedulaCore = SchedulaCore;
(window as any).SchedulaSettings = SchedulaSettings;
(window as any).SchedulaTemplate = SchedulaTemplate;
