import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import io from 'socket.io-client'

import routes from './routes.js'
import rootReducer from './rootReducer.js'


let socket = io(`http://localhost:3000`)

socket.on('message', data => {
  console.log('socket received: ', data)
})

socket.on('users', data=> {
  console.log(data.message)
})

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>,
  document.getElementById('app')
)
