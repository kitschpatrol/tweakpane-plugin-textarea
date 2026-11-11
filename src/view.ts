import type { Value, View, ViewProps } from '@tweakpane/core'
import { ClassName } from '@tweakpane/core'

type Config = {
	placeholder: string
	rows: number
	value: Value<string>
	viewProps: ViewProps
}

const className = ClassName('txtr')

export class TextAreaView implements View {
	public readonly element: HTMLElement
	public readonly inputElement: HTMLTextAreaElement
	private readonly value_: Value<string>

	constructor(doc: Document, config: Config) {
		this.onChange_ = this.onChange_.bind(this)

		this.element = doc.createElement('div')
		this.element.classList.add(className())
		config.viewProps.bindClassModifiers(this.element)

		const inputElement = doc.createElement('textarea')
		inputElement.rows = config.rows
		inputElement.cols = 22
		inputElement.placeholder = config.placeholder
		inputElement.classList.add(className('i'))

		config.viewProps.bindDisabled(inputElement)
		this.element.append(inputElement)
		this.inputElement = inputElement

		config.value.emitter.on('change', this.onChange_)
		this.value_ = config.value

		this.refresh()
	}

	public refresh(): void {
		this.inputElement.value = this.value_.rawValue
	}

	private onChange_(): void {
		this.refresh()
	}
}
