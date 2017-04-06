import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Container,
} from 'nimbus-react'

import UtilityPageWrap from '../../components/UtilityPageWrap'

class PositionPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <UtilityPageWrap>
        <Container size={false}>
          <h1>Utility</h1>
          <h2>Position</h2>
          <SyntaxHighlighter style={monokai}>
            {`.u-pos-a {
  position: absolute !important;
}

.u-pos-r {
  position: relative !important;
}`}
          </SyntaxHighlighter>
        </Container>
      </UtilityPageWrap>
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

export default connect(mapStateToProps, mapDispatchToProps)(PositionPage)