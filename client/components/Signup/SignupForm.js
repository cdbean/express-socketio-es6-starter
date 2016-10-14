import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import axios from 'axios'

class SignupForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.userSignupRequest(this.state).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You have signed up successfully!'
        })
        browserHistory.push('/')
      },
      data => { this.setState({errors: data, isLoading: false})}
    )
  }

  handleInputChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="control-label">Email address:</label>
          <input type="email" className="form-control" id="email"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="control-label">Password:</label>
          <input type="password" className="form-control" id="pwd"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

export default SignupForm
