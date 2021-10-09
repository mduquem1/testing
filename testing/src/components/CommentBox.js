import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends React.Component {
	state = {
		comment: ''
	}

	handleChange = (event) => {
		this.setState({
			comment: event.target.value
		})
	}

	submitCommentHandler = (event) => {
		event.preventDefault()

		this.props.saveComment(this.state.comment)

		this.setState({
			comment: ''
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.submitCommentHandler}>
					<h4>Add a Comment</h4>
					<div className='form-group'>
						<textarea
							className='form-control'
							onChange={this.handleChange}
							value={this.state.comment}
						/>

						<button className='btn btn-primary btn-circle' type='submit'>
							Submit Comment
						</button>
					</div>
				</form>
				<button className='btn btn-info' onClick={this.props.fetchComments}>Fetch Comments</button>
			</div>
		)
	}
}

export default connect(null, actions)(CommentBox)
