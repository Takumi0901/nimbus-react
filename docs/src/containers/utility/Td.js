import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Container,
} from 'renimbus'

import UtilityPageWrap from '../../components/UtilityPageWrap'

class TdPage extends Component {
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
          <h2>Text-Decoration</h2>
          <SyntaxHighlighter style={monokai}>
            {`.u-fw-n {
  font-weight: normal !important;
}

.u-fw-b {
  font-weight: bold !important;
}

.u-td-u {
  text-decoration: underline !important;
}

.u-td-none {
  text-decoration: none !important;
}

.u-td-lh {
  text-decoration: line-through !important;
  opacity: .6;
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

export default connect(mapStateToProps, mapDispatchToProps)(TdPage)