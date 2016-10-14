import React from 'react'
import { Component } from 'react'

import NavigationBar from './NavigationBar.js'
import FlashMessageList from './FlashMessages/FlashMessageList.js'

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <NavigationBar />
        <FlashMessageList />
        {this.props.children}
      </div>
    )
  }
}

export default App
