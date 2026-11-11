import type { Controller, Value, ViewProps } from '@tweakpane/core'
import { forceCast } from '@tweakpane/core'
import { TextAreaView } from './view'
/**
 * @ignore
 */
export type Config = {
	placeholder: string
	rows: number
	value: Value<string>
	viewProps: ViewProps
}

/**
 * @ignore
 */
export class TextAreaController implements Controller<TextAreaView> {
	public readonly placeholder: string
	public readonly rows: number
	public readonly value: Value<string>
	public readonly view: TextAreaView
	public readonly viewProps: ViewProps

	constructor(doc: Document, config: Config) {
		this.onInputChange_ = this.onInputChange_.bind(this)
		this.value = config.value
		this.viewProps = config.viewProps
		this.rows = config.rows
		this.placeholder = config.placeholder

		this.view = new TextAreaView(doc, {
			placeholder: this.placeholder,
			rows: this.rows,
			value: this.value,
			viewProps: this.viewProps,
		})
		this.view.inputElement.addEventListener('keyup', this.onInputChange_)
	}

	private onInputChange_(event: KeyboardEvent): void {
		const inputElement: HTMLInputElement = forceCast(event.currentTarget)
		const { value } = inputElement
		this.value.rawValue = value
		this.view.refresh()
	}
}
