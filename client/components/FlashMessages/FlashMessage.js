import React, { PropTypes } from 'react'

class FlashMessage extends React.Component {
  render () {
    const { message } = this.props

    return (
      <div className="alert-success">
        {message.text}
      </div>
    )
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired
}

export default FlashMessage;
