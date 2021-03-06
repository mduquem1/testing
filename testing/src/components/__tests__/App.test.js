import { shallow } from 'enzyme'
// import ReactDOM from 'react-dom'

import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped

beforeEach(() => {
    wrapped = shallow(<App />)
})

it('should show <CommentBox />', () => {
    /// NOT NEEDED, MANUAL WAY OF EVERYTHING W/O ENZYME OR REACT TESTING LIBRARY
    // const div = document.createElement('div')
    // ReactDOM.render(<App />, div)
    // // Looks inside the div
    // // and checks to see if CommentBox is in there
    // expect(div.innerHTML).toContain('Comment Box')
    // ReactDOM.unmountComponentAtNode(div)
    expect(wrapped.find(CommentBox).length).toEqual(1)

})

it('should show <CommentList />', () => {
    expect(wrapped.find(CommentList).length).toEqual(1)
})