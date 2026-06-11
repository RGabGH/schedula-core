import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type CSSProperties,
  type ForwardedRef,
} from 'react';
import { SchedulaCore, SchedulaSettings } from 'schedula-core';
import type {
  SchedulaData,
  SchedulaSettingsLike,
  SchedulaShape,
} from './types';

export interface SchedulaGanttProps {
  /** Scheduler data: `{ Resources: [{ Id, Name, Items: [...] }] }`. */
  data: SchedulaData | any;
  /**
   * A `SchedulaSettings` instance or a plain object of overrides. Changing the
   * identity of this prop re-initializes the scheduler.
   */
  settings?: SchedulaSettings | SchedulaSettingsLike;
  /** Visible time units in days. Mapped to `setView()`. */
  view?: number;
  /** Item shape. Mapped to `setStyle()`. */
  gStyle?: SchedulaShape;
  /** Theme class: `''`, `'theme-dark'`, `'theme-blue'`, `'theme-soft'`. Re-initializes on change. */
  theme?: string;
  /** BCP-47 locale (e.g. `'en-US'`). Re-initializes on change. */
  locale?: string;
  /** Free-text filter. Mapped to `filterItems()`. */
  filter?: string;
  /** Enable drag/resize edit mode (actual moving requires the PRO DragDropPlugin). */
  editMode?: boolean;
  className?: string;
  style?: CSSProperties;
  /** Fired once the underlying instance has been created and `init()`-ed. */
  onReady?: (core: any) => void;
  /** Requires a `NotificationPlugin` in `settings.plugins`. */
  onItemChanged?: (item: any, element?: Element) => void;
  /** Requires a `NotificationPlugin` in `settings.plugins`. */
  onItemAdded?: (item: any) => void;
  /** Requires a `NotificationPlugin` in `settings.plugins`. */
  onItemDeleted?: (item: any) => void;
}

export interface SchedulaGanttHandle {
  /** The underlying `SchedulaCore` instance (or `null` before mount / after unmount). */
  getInstance: () => any | null;
}

let _uid = 0;

/** Build a SchedulaSettings instance from the declarative props. */
function buildSettings(props: SchedulaGanttProps): any {
  const base =
    props.settings instanceof SchedulaSettings
      ? props.settings
      : Object.assign(new SchedulaSettings(), props.settings || {});
  if (!base.date) base.date = new Date();
  if (props.view != null) base.timeUnitsView = props.view;
  if (props.gStyle != null) base.gStyle = props.gStyle;
  if (props.theme != null) base.theme = props.theme;
  if (props.locale != null) base.locale = props.locale;
  return base;
}

/**
 * Runs `fn` only when a dependency actually changes by reference — never on the
 * first render, and never on React StrictMode's dev-only double mount (where the
 * effect re-runs with identical deps).
 */
function useDidUpdate(fn: () => void, deps: unknown[]): void {
  const first = useRef(true);
  const prev = useRef(deps);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      prev.current = deps;
      return;
    }
    const changed = deps.some((d, i) => !Object.is(d, prev.current[i]));
    prev.current = deps;
    if (changed) fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

function SchedulaGanttInner(
  props: SchedulaGanttProps,
  ref: ForwardedRef<SchedulaGanttHandle>,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const idRef = useRef<string>(`schedula-gantt-${++_uid}`);
  const coreRef = useRef<any>(null);

  // Keep the latest props (event callbacks) reachable from the notification
  // plugin without forcing a re-init.
  const propsRef = useRef(props);
  propsRef.current = props;

  useImperativeHandle(
    ref,
    () => ({ getInstance: () => coreRef.current }),
    [],
  );

  // Structural init: (re)create the instance. Re-runs on settings/theme/locale change.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const s = buildSettings(propsRef.current);
    // Typed loosely on purpose: we reach into getPlugin()/destroy() which are
    // open-ended on the core's published surface.
    const core: any = new SchedulaCore(idRef.current, propsRef.current.data, s);

    coreRef.current = core;
    core.init();

    // Wire events onto a NotificationPlugin instance if the user supplied one.
    const notif = typeof core.getPlugin === 'function' ? core.getPlugin('notification') : null;
    if (notif) {
      notif.onItemChanged = (item: any, el?: Element) =>
        propsRef.current.onItemChanged?.(item, el);
      notif.onItemAdded = (item: any) => propsRef.current.onItemAdded?.(item);
      notif.onItemDeleted = (item: any) => propsRef.current.onItemDeleted?.(item);
    }

    // Apply settings the core has no constructor slot for.
    if (propsRef.current.filter) core.filterItems(propsRef.current.filter);
    if (propsRef.current.editMode) core.enableEditMode();

    propsRef.current.onReady?.(core);

    return () => {
      if (typeof core.destroy === 'function') {
        try {
          core.destroy();
        } catch {
          /* core has no destroy in the Free edition — fall through to DOM cleanup */
        }
      }
      if (containerRef.current) containerRef.current.innerHTML = '';
      coreRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.settings, props.theme, props.locale]);

  // Incremental updates — skip the first render (init already covered it).
  useDidUpdate(() => coreRef.current?.setData(props.data), [props.data]);
  useDidUpdate(() => props.view != null && coreRef.current?.setView(props.view), [props.view]);
  useDidUpdate(() => props.gStyle != null && coreRef.current?.setStyle(props.gStyle), [props.gStyle]);
  useDidUpdate(() => coreRef.current?.filterItems(props.filter ?? ''), [props.filter]);
  useDidUpdate(() => {
    if (!coreRef.current) return;
    if (props.editMode) coreRef.current.enableEditMode();
    else coreRef.current.disableEditMode();
  }, [props.editMode]);

  return (
    <div
      id={idRef.current}
      ref={containerRef}
      className={props.className}
      style={props.style}
    />
  );
}

/**
 * Official React wrapper for SchedulaCore.
 *
 * @example
 * ```tsx
 * import { SchedulaGantt } from 'schedula-core-react';
 * import 'schedula-core/css';
 * import 'schedula-core/css/popup';
 *
 * <SchedulaGantt data={data} theme="theme-dark" view={30} editMode />
 * ```
 */
export const SchedulaGantt = forwardRef<SchedulaGanttHandle, SchedulaGanttProps>(
  SchedulaGanttInner,
);
SchedulaGantt.displayName = 'SchedulaGantt';
