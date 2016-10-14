import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import FlashMessage from './FlashMessage.js'

const FlashMessageList = (props) => {
  const messages = props.messages.map(m => {
    return (
      <FlashMessage key={m.id} message={m}></FlashMessage>
    )
  })
  return (
    <div>{messages}</div>
  )
}

FlashMessageList.propTypes = {
  messages: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return {
    messages: state.flashMessages
  }
}

export default connect(mapStateToProps, null)(FlashMessageList)
