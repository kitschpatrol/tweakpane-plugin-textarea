import type { TpPlugin } from 'tweakpane'
import { TweakpaneTextareaPlugin } from './plugin'
import pluginCss from './styles/plugin.scss?inline'

export const id = 'textarea'

export const css: string = pluginCss

// Export your plugin(s) as constant `plugins`
export const plugins: TpPlugin[] = [TweakpaneTextareaPlugin]

export type { TextareaPluginInputParams } from './plugin'
