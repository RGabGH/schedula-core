import {
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  watch,
  type PropType,
} from 'vue';
import { SchedulaCore, SchedulaSettings } from 'schedula-core';
import type { SchedulaData, SchedulaSettingsLike, SchedulaShape } from './types';

let _uid = 0;

/** Build a SchedulaSettings instance from the declarative props. */
function buildSettings(props: Record<string, any>): any {
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
 * Official Vue 3 wrapper for SchedulaCore.
 *
 * @example
 * ```vue
 * <SchedulaGantt :data="data" theme="theme-dark" :view="30" />
 * ```
 */
export const SchedulaGantt = defineComponent({
  name: 'SchedulaGantt',
  props: {
    /** Scheduler data: `{ Resources: [{ Id, Name, Items: [...] }] }`. */
    data: { type: Object as PropType<SchedulaData | any>, required: true },
    /** A `SchedulaSettings` instance or a plain object of overrides. Re-inits on change. */
    settings: { type: Object as PropType<SchedulaSettings | SchedulaSettingsLike>, default: null },
    /** Visible time units in days. Mapped to `setView()`. */
    view: { type: Number, default: undefined },
    /** Item shape. Mapped to `setStyle()`. */
    gStyle: { type: String as PropType<SchedulaShape>, default: undefined },
    /** Theme class. Re-inits on change. */
    theme: { type: String, default: undefined },
    /** BCP-47 locale. Re-inits on change. */
    locale: { type: String, default: undefined },
    /** Free-text filter. Mapped to `filterItems()`. */
    filter: { type: String, default: undefined },
    /** Enable drag/resize edit mode (actual moving requires the PRO DragDropPlugin). */
    editMode: { type: Boolean, default: false },
  },
  emits: {
    ready: (_core: any) => true,
    'item-changed': (_item: any, _element?: Element) => true,
    'item-added': (_item: any) => true,
    'item-deleted': (_item: any) => true,
  },
  setup(props, { emit, expose }) {
    const elId = `schedula-gantt-${++_uid}`;
    let core: any = null;

    function build(): void {
      const s = buildSettings(props);
      core = new SchedulaCore(elId, props.data, s);
      core.init();

      const notif = typeof core.getPlugin === 'function' ? core.getPlugin('notification') : null;
      if (notif) {
        notif.onItemChanged = (item: any, el?: Element) => emit('item-changed', item, el);
        notif.onItemAdded = (item: any) => emit('item-added', item);
        notif.onItemDeleted = (item: any) => emit('item-deleted', item);
      }

      if (props.filter) core.filterItems(props.filter);
      if (props.editMode) core.enableEditMode();

      emit('ready', core);
    }

    function destroy(): void {
      if (core && typeof core.destroy === 'function') {
        try {
          core.destroy();
        } catch {
          /* Free edition has no destroy — DOM cleanup below handles it */
        }
      }
      const el = document.getElementById(elId);
      if (el) el.innerHTML = '';
      core = null;
    }

    onMounted(build);
    onBeforeUnmount(destroy);

    // Structural changes → full re-init.
    watch(
      () => [props.theme, props.locale, props.settings],
      () => {
        destroy();
        build();
      },
    );

    // Incremental updates.
    watch(() => props.data, (d) => core?.setData(d), { deep: true });
    watch(() => props.view, (v) => v != null && core?.setView(v));
    watch(() => props.gStyle, (g) => g != null && core?.setStyle(g));
    watch(() => props.filter, (f) => core?.filterItems(f ?? ''));
    watch(
      () => props.editMode,
      (e) => (e ? core?.enableEditMode() : core?.disableEditMode()),
    );

    expose({ getInstance: () => core });

    return () => h('div', { id: elId });
  },
});

export default SchedulaGantt;
