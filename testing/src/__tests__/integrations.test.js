import { mount } from 'enzyme'
import moxios from 'moxios'

import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
	moxios.install()
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
	})
})

afterEach(() => {
	moxios.uninstall()
})

it('should fetch a list of comments and display them', (done) => {
	// Render entire app
	const wrapped = mount(
		<Root>
			<App />
		</Root>
	)

	// Find button to fetch comments and click it
	wrapped.find('.btn-info').simulate('click')

	moxios.wait(() => {
		wrapped.update()

		// Expect to find a list of comments
		expect(wrapped.find('li').length).toEqual(2)
		done()
        wrapped.unmount()
	})
})
