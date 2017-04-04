import 'renimbus/public/css/app.css'

import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// components
import {
  Bar,
  Container,
  Grid,
  GridCol
} from 'renimbus'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu'

class App extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
      <Header/>
      <div className="l-wrapper">
        <Router>
          <Grid gutters={true}>
            <GridCol size={3}>
              <SideMenu/>
            </GridCol>
            <GridCol size={9}>
              {this.props.children}
            </GridCol>
          </Grid>
        </Router>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)