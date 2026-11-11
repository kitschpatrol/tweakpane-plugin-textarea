import type { BaseInputParams, BindingTarget, InputBindingPlugin } from '@tweakpane/core'
import { createPlugin, parseRecord } from '@tweakpane/core'
import { TextAreaController } from './controller'

export type TextareaPluginInputParams = BaseInputParams & {
	placeholder?: string
	rows?: number
	view: 'textarea'
}

function readText(exValue: unknown): string {
	return typeof exValue === 'string' ? exValue : ''
}

function writeText(target: BindingTarget, inValue: string): void {
	target.write(inValue)
}

// NOTE: You can see JSDoc comments of `InputBindingPlugin` for details about each property
//
// `InputBindingPlugin<In, Ex, P>` means...
// - The plugin receives the bound value as `Ex`,
// - converts `Ex` into `In` and holds it
// - P is the type of the parsed parameters
//
export const TweakpaneTextareaPlugin: InputBindingPlugin<
	string,
	string,
	TextareaPluginInputParams
> = createPlugin({
	accept(exValue: unknown, params: Record<string, unknown>) {
		if (typeof exValue !== 'string') {
			// Return null to deny the user input
			return null
		}

		// Parse parameters object
		const result = parseRecord<TextareaPluginInputParams>(params, (p) => ({
			placeholder: p.optional.string,
			rows: p.optional.number,
			// `view` option may be useful to provide a custom control for primitive values
			view: p.required.constant('textarea'),
		}))
		if (!result) {
			return null
		}

		// Return a typed value and params to accept the user input
		return {
			initialValue: exValue,
			params: result,
		}
	},
	binding: {
		reader(_args) {
			return readText
		},
		writer(_args) {
			return writeText
		},
	},
	controller(args) {
		// Create a controller for the plugin
		return new TextAreaController(args.document, {
			placeholder: args.params.placeholder ?? 'Enter text here',
			rows: args.params.rows ?? 3,
			value: args.value,
			viewProps: args.viewProps,
		})
	},
	id: 'input-template',
	type: 'input',
})
