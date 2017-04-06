import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Grid,
  GridCol,
  Container
} from 'nimbus-react'

class StartPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="l-wrapper">
        <Grid gutters={true} query={true} align={'center'}>
          <GridCol size={9}>
            <Container>
              <h1>npm install</h1>
              <p>Coming Soon</p>
            </Container>
          </GridCol>
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(StartPage)