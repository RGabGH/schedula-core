/**
 * Shared types for the SchedulaCore framework wrappers.
 *
 * The core library is intentionally loosely typed (`data: any`), so we keep the
 * wrapper surface pragmatic: structural helpers where they add value, `any` where
 * the core itself is open-ended.
 */

export type SchedulaShape = 'rect' | 'round-rect' | 'arrow' | 'circle';

/** A single task/bar inside a resource row. */
export interface SchedulaItem {
  Id: string;
  /** Start in minutes from `settings.date`. */
  Offset: number;
  /** Duration in minutes (1440 = one day). */
  Width: number;
  Text?: string;
  Description?: string;
  Color1?: string;
  Completion?: number;
  [key: string]: unknown;
}

/** A resource row (person, machine, room, …). */
export interface SchedulaResource {
  Id: string;
  Name?: string;
  Group?: number | string;
  Items?: SchedulaItem[];
  [key: string]: unknown;
}

/** The dataset consumed by SchedulaCore. */
export interface SchedulaData {
  Resources: SchedulaResource[];
  [key: string]: unknown;
}

/**
 * The subset of SchedulaSettings most integrations touch. Any other setting can
 * still be passed through — extra keys are forwarded verbatim to the core.
 */
export interface SchedulaSettingsLike {
  date?: Date;
  timeUnitsView?: number;
  timeUnitVal?: number;
  gridStep?: number;
  gStyle?: SchedulaShape | string;
  resourceHeight?: number;
  resourceWidth?: number;
  theme?: string;
  locale?: string;
  hilightSunday?: boolean;
  animation?: boolean;
  canMoveItems?: boolean;
  canResizeItems?: boolean;
  drawLinks?: boolean;
  enablePopup?: boolean;
  licenseKey?: string;
  /** PRO plugin instances (DragDropPlugin, LinksPlugin, NotificationPlugin, …). */
  plugins?: any[];
  [key: string]: unknown;
}
