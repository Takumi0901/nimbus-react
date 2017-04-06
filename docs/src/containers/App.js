import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import {
  BrowserRouter as Router
} from 'react-router-dom'


import Header from '../components/Header'

class App extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
    <Router>
      <div>
        <Header/>
        {this.props.children}
        <div className="l-footer js-footer">
          <p>© 2015 - 2017 イチマルニデザイン</p>
        </div>
      </div>
    </Router>
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