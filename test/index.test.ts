import { Pane } from 'tweakpane'
import { afterEach, describe, expect, it } from 'vitest'
import * as plugin from '../src/index'
import { TweakpaneTextareaPlugin } from '../src/plugin'

describe('textarea plugin', () => {
	let pane: Pane | undefined

	afterEach(() => {
		pane?.dispose()
	})

	function setup(options: Record<string, unknown> = {}) {
		pane = new Pane()
		pane.registerPlugin(plugin)
		const params = { text: 'First line\nSecond line' }
		const binding = pane.addBinding(params, 'text', { view: 'textarea', ...options })
		const textarea = binding.element.querySelector('textarea')
		if (!textarea) {
			throw new Error('The textarea was not created')
		}

		const changes: Array<{ last: boolean; value: string }> = []
		binding.on('change', (event) => {
			changes.push({ last: event.last, value: event.value })
		})

		const type = (value: string) => {
			textarea.value = value
			textarea.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: 'a' }))
		}

		return { binding, changes, pane, params, textarea, type }
	}

	it('accepts only strings with the requested view and valid options', () => {
		expect(TweakpaneTextareaPlugin.accept('Text', { view: 'textarea' })?.initialValue).toBe('Text')
		expect(
			TweakpaneTextareaPlugin.accept('', { placeholder: 'Notes', rows: 6, view: 'textarea' })
				?.params,
		).toMatchObject({ placeholder: 'Notes', rows: 6 })
		expect(TweakpaneTextareaPlugin.accept(42, { view: 'textarea' })).toBeNull()
		expect(TweakpaneTextareaPlugin.accept(undefined, { view: 'textarea' })).toBeNull()
		expect(TweakpaneTextareaPlugin.accept('Text', {})).toBeNull()
		expect(TweakpaneTextareaPlugin.accept('Text', { view: 'text' })).toBeNull()
		expect(TweakpaneTextareaPlugin.accept('Text', { rows: '6', view: 'textarea' })).toBeNull()
		expect(TweakpaneTextareaPlugin.accept('Text', { placeholder: 1, view: 'textarea' })).toBeNull()
	})

	it('registers the bundle and installs its compiled styles', () => {
		const { textarea } = setup()
		expect(textarea.value).toBe('First line\nSecond line')
		expect(plugin.css).toContain('.tp-txtrv')
		expect(plugin.css).not.toContain('@use')
		expect(document.head.textContent).toContain('.tp-txtrv')
	})

	it('applies the rows and placeholder params', () => {
		const { textarea } = setup({ placeholder: 'Type here...', rows: 6 })
		expect(textarea.getAttribute('rows')).toBe('6')
		expect(textarea.placeholder).toBe('Type here...')
	})

	it('uses default rows and placeholder', () => {
		const { textarea } = setup()
		expect(textarea.getAttribute('rows')).toBe('3')
		expect(textarea.placeholder).toBe('Enter text here')
	})

	it('writes typed text and emits a change for each edit', () => {
		const { changes, params, type } = setup()
		type('Updated')
		type('Updated\nAgain')
		expect(params.text).toBe('Updated\nAgain')
		expect(changes).toEqual([
			{ last: true, value: 'Updated' },
			{ last: true, value: 'Updated\nAgain' },
		])
	})

	it('does not emit a change for keys that leave the text unchanged', () => {
		const { changes, params, type } = setup()
		type('First line\nSecond line')
		expect(params.text).toBe('First line\nSecond line')
		expect(changes).toEqual([])
	})

	it('refreshes when the bound value changes externally', () => {
		const { binding, params, textarea } = setup()
		params.text = 'External\nupdate'
		binding.refresh()
		expect(textarea.value).toBe('External\nupdate')
	})

	it('reads non-string values as empty text on refresh', () => {
		const { binding, params, textarea } = setup()
		Object.assign(params, { text: 42 })
		binding.refresh()
		expect(textarea.value).toBe('')
	})

	it('inherits the pane disabled state and supports hiding the binding', () => {
		const { binding, pane: currentPane, textarea } = setup()
		currentPane.disabled = true
		expect(textarea.disabled).toBe(true)
		expect(binding.element.querySelector('.tp-txtrv')?.classList.contains('tp-v-disabled')).toBe(
			true,
		)
		currentPane.disabled = false
		expect(textarea.disabled).toBe(false)
		binding.hidden = true
		expect(binding.element.classList.contains('tp-v-hidden')).toBe(true)
	})

	it('removes listeners when the binding is disposed', () => {
		const { binding, changes, params, textarea, type } = setup()
		binding.dispose()
		type('Ignored')
		expect(params.text).toBe('First line\nSecond line')
		expect(changes).toEqual([])
		expect(textarea.isConnected).toBe(false)
	})
})
