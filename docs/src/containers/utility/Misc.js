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

class MiscPage extends Component {
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
          <h2>Misc</h2>
          <SyntaxHighlighter style={monokai}>
            {`.u-ws-nowrap {
  white-space: nowrap;
}

.u-mx-img {
  max-width: 100%;
}

.u-tx-inside {
  text-indent: -1em;
  margin-left: 1em;
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

export default connect(mapStateToProps, mapDispatchToProps)(MiscPage)