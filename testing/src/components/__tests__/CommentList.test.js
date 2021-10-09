import { mount } from 'enzyme'

import Root from 'Root'
import CommentList from 'components/CommentList'

let wrapped
let initialState

beforeEach(() => {
    initialState = {
        comments: ['Comment 1', 'Comment 2']
    }
	wrapped = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	)
})

afterEach(() => {
	wrapped.unmount()
})

it('creates one li element per comment', () => {
	expect(wrapped.find('li').length).toEqual(initialState.comments.length)
})

it('shows the text for each comment', () => {
	expect(wrapped.render().text()).toContain('Comment 1')
	expect(wrapped.render().text()).toContain('Comment 2')
})

