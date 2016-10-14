import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import SignupForm from './SignupForm.js'
import { userSignupRequest } from '../../actions/signupActions.js'
import { addFlashMessage } from '../../actions/flashMessages.js'

class SignupPage extends React.Component {
  render () {
    const { userSignupRequest, addFlashMessage } = this.props;
    return (
      <div>
        <SignupForm
          userSignupRequest={userSignupRequest}
          addFlashMessage={addFlashMessage}
        />
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
}


export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage)
