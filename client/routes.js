import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import SignupPage from './components/Signup/SignupPage.js'
import Greeting from './components/Greeting.js'


export default (
  <Route path='/' component={App} >
    <IndexRoute component={Greeting} />
    <Route path='/signup' component={SignupPage} />
  </Route>
)
