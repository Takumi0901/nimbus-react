import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Alert from './containers/Alert'

export default (
  <Router>
    <Route exact path="/" component={Alert}/>
  </Router>
)