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

class VaPage extends Component {
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
          <h2>Vertical-Align</h2>
          <SyntaxHighlighter style={monokai}>
            {`.u-va-t {
  vertical-align: top !important;
}

.u-va-m {
  vertical-align: middle !important;
}

.u-va-b {
  vertical-align: bottom !important;
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

export default connect(mapStateToProps, mapDispatchToProps)(VaPage)