import React from 'react'
import { connect } from 'react-redux'
class CommentList extends React.Component {
    renderComments() {
        return this.props.comments.reverse().map(comment => {
            return <li key={comment} className='list-group-item'>{comment}</li>
        })
    }

    render() {
        return (
            <div>
                <ul className='list-group'>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ comments }) => {
    return {
        comments
    }
}

export default connect(mapStateToProps)(CommentList)