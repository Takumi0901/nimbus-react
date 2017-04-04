import React from 'react'
import {Route, IndexRoute} from 'react-router'
import AlertPage from './containers/Alert'
import AvatarPage from './containers/Avatar'

export default (
  <div>
    <Route path="alert" component={AlertPage}/>
    <Route path="avatar" component={AvatarPage}/>
  </div>
)