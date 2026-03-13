/**
 * SchedulaCore PRO
 *
 * @file    public/src/models/ISchedulaPlugin.ts
 * @version 1.0.1
 * @author  RGab <gabriraf@gmail.com>
 */
/**
 * Base interface for all SchedulaCore plugins.
 * Implement this interface to create a plugin that integrates with the core.
 */
export interface ISchedulaPlugin {
    /** Unique identifier for the plugin (e.g. 'dragdrop', 'links') */
    readonly name: string;

    /**
     * Called by SchedulaCore during init() to attach the plugin to the core.
     * @param core The core instance (use ISchedulaCore public API or cast to SchedulaCore for advanced access)
     */
    init(core: any): void;

    /** Called when the core is destroyed or the plugin is removed. */
    destroy(): void;

    /** Called after each render cycle. Override to inject post-render behaviour. */
    onAfterRender?(): void;
}
