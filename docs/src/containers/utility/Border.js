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

class BorderPage extends Component {
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
          <h2>Border</h2>
          <SyntaxHighlighter style={monokai}>
            {`.u-br-0 {
  border: none !important;
}
 
.u-br-t-0 {
  border-top: none !important;
}
 
.u-br-r-0 {
  border-right: none !important;
}
 
.u-br-b-0 {
  border-bottom: none !important;
}
 
.u-br-l-0 {
  border-left: none !important;
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

export default connect(mapStateToProps, mapDispatchToProps)(BorderPage)