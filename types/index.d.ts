/**
 * SchedulaCore PRO
 *
 * @file    src/index.ts
 * @version 1.0.1
 * @author  RGab <gabriraf@gmail.com>
 */
import { SchedulaCore } from './SchedulaCore';
import { SchedulaSettings } from './models/SchedulaSettings';
import { SchedulaTemplate } from './ui/SchedulaTemplate';
import type { ITaskPopup } from './models/ITaskPopup';
import type { ISchedulaPlugin } from './models/ISchedulaPlugin';
import type { IDragDropPlugin } from './models/IDragDropPlugin';
import type { ILinksPlugin } from './models/ILinksPlugin';
import type { IEventsPlugin } from './models/IEventsPlugin';
import { DefaultPopupPlugin } from './plugins/DefaultPopupPlugin.js';
export type { ITaskPopup, ISchedulaPlugin, IDragDropPlugin, ILinksPlugin, IEventsPlugin };
export { SchedulaCore, SchedulaSettings, SchedulaTemplate, DefaultPopupPlugin };
