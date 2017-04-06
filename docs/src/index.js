import 'nimbus-react/public/css/app.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, Link, BrowserHistory} from 'react-router'
import configureStore from './redux/ConfigureStore'
import Root from './containers/Root'

const store = configureStore()

render(
  <Root store={store}/>,
  document.getElementById("root")
)