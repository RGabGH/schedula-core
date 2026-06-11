/**
 * Shared types for the SchedulaCore Vue wrapper. Mirrors the React wrapper's
 * surface so the two stay consistent.
 */

export type SchedulaShape = 'rect' | 'round-rect' | 'arrow' | 'circle';

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

export interface SchedulaResource {
  Id: string;
  Name?: string;
  Group?: number | string;
  Items?: SchedulaItem[];
  [key: string]: unknown;
}

export interface SchedulaData {
  Resources: SchedulaResource[];
  [key: string]: unknown;
}

export interface SchedulaSettingsLike {
  date?: Date;
  timeUnitsView?: number;
  gStyle?: SchedulaShape | string;
  theme?: string;
  locale?: string;
  enablePopup?: boolean;
  licenseKey?: string;
  plugins?: any[];
  [key: string]: unknown;
}
