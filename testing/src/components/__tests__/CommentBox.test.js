import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox'
import Root from 'Root'

let wrapped

beforeEach(() => {
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>
	)
})

afterEach(() => {
	wrapped.unmount()
})

it('should render a textarea and a primary button', () => {
	expect(wrapped.find('textarea').length).toEqual(1)
	expect(wrapped.find('button.btn-primary').length).toEqual(1)
})

describe('should change and submit form', () => {
	let textarea
	beforeEach(() => {
		// Input text
		textarea = wrapped.find('textarea')
		textarea.simulate('change', {
			target: { value: 'new comment' }
		})
		wrapped.update()
	})

	it('should enter text in textarea and submit it', () => {
		// Assert that the textarea has changed
		// with a brand new reference to taht element (NOT USING THE LAST ONE)
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
	})

	it('should empty textarea whenever input is submitted', () => {
		// Empty input after submit
		const form = wrapped.find('form')
		form.simulate('submit')

		wrapped.update()
		expect(wrapped.find('textarea').prop('value')).toEqual('')
	})
})
