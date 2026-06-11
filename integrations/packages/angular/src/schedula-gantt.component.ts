import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SchedulaCore, SchedulaSettings } from 'schedula-core';

export type SchedulaShape = 'rect' | 'round-rect' | 'arrow' | 'circle';

let _uid = 0;

/**
 * Official Angular wrapper for SchedulaCore.
 *
 * @example
 * ```html
 * <schedula-gantt [data]="data" theme="theme-dark" [view]="30"></schedula-gantt>
 * ```
 */
@Component({
  selector: 'schedula-gantt',
  standalone: true,
  template: '<div [id]="elementId"></div>',
})
export class SchedulaGanttComponent
  implements AfterViewInit, OnChanges, OnDestroy
{
  /** Scheduler data: `{ Resources: [{ Id, Name, Items: [...] }] }`. */
  @Input() data: any;
  /** A `SchedulaSettings` instance or a plain object of overrides. Re-inits on change. */
  @Input() settings: any = null;
  /** Visible time units in days. Mapped to `setView()`. */
  @Input() view?: number;
  /** Item shape. Mapped to `setStyle()`. */
  @Input() gStyle?: SchedulaShape;
  /** Theme class. Re-inits on change. */
  @Input() theme?: string;
  /** BCP-47 locale. Re-inits on change. */
  @Input() locale?: string;
  /** Free-text filter. Mapped to `filterItems()`. */
  @Input() filter?: string;
  /** Enable drag/resize edit mode (actual moving requires the PRO DragDropPlugin). */
  @Input() editMode = false;

  /** Fired after the instance is created and `init()`-ed. */
  @Output() ready = new EventEmitter<any>();
  /** Requires a `NotificationPlugin` in `settings.plugins`. */
  @Output() itemChanged = new EventEmitter<{ item: any; element?: Element }>();
  /** Requires a `NotificationPlugin` in `settings.plugins`. */
  @Output() itemAdded = new EventEmitter<any>();
  /** Requires a `NotificationPlugin` in `settings.plugins`. */
  @Output() itemDeleted = new EventEmitter<any>();

  elementId = `schedula-gantt-${++_uid}`;
  private core: any = null;
  private viewReady = false;

  ngAfterViewInit(): void {
    this.viewReady = true;
    this.build();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Initial change set is handled by ngAfterViewInit (the host div isn't in the DOM yet).
    if (!this.viewReady || !this.core) return;

    if (changes['theme'] || changes['locale'] || changes['settings']) {
      this.destroyCore();
      this.build();
      return;
    }
    if (changes['data']) this.core.setData(this.data);
    if (changes['view'] && this.view != null) this.core.setView(this.view);
    if (changes['gStyle'] && this.gStyle != null) this.core.setStyle(this.gStyle);
    if (changes['filter']) this.core.filterItems(this.filter ?? '');
    if (changes['editMode']) {
      this.editMode ? this.core.enableEditMode() : this.core.disableEditMode();
    }
  }

  ngOnDestroy(): void {
    this.destroyCore();
  }

  /** The underlying `SchedulaCore` instance (or `null`). */
  getInstance(): any {
    return this.core;
  }

  private build(): void {
    const s = this.buildSettings();
    this.core = new SchedulaCore(this.elementId, this.data, s);
    this.core.init();

    const notif =
      typeof this.core.getPlugin === 'function'
        ? this.core.getPlugin('notification')
        : null;
    if (notif) {
      notif.onItemChanged = (item: any, element?: Element) =>
        this.itemChanged.emit({ item, element });
      notif.onItemAdded = (item: any) => this.itemAdded.emit(item);
      notif.onItemDeleted = (item: any) => this.itemDeleted.emit(item);
    }

    if (this.filter) this.core.filterItems(this.filter);
    if (this.editMode) this.core.enableEditMode();

    this.ready.emit(this.core);
  }

  private buildSettings(): any {
    const base =
      this.settings instanceof SchedulaSettings
        ? this.settings
        : Object.assign(new SchedulaSettings(), this.settings || {});
    if (!base.date) base.date = new Date();
    if (this.view != null) base.timeUnitsView = this.view;
    if (this.gStyle != null) base.gStyle = this.gStyle;
    if (this.theme != null) base.theme = this.theme;
    if (this.locale != null) base.locale = this.locale;
    return base;
  }

  private destroyCore(): void {
    if (this.core && typeof this.core.destroy === 'function') {
      try {
        this.core.destroy();
      } catch {
        /* Free edition has no destroy — DOM cleanup below handles it */
      }
    }
    const el = document.getElementById(this.elementId);
    if (el) el.innerHTML = '';
    this.core = null;
  }
}
