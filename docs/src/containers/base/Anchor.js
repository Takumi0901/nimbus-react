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

import BasePageWrap from '../../components/BasePageWrap'

class AnchorPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BasePageWrap>
        <Container size={false}>
          <h1>Anchor</h1>
          <p><a href="#">Anchor</a></p>
          <SyntaxHighlighter style={monokai}>
            {`<a href="#">Anchor</a>`}
          </SyntaxHighlighter>
        </Container>
      </BasePageWrap>
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

export default connect(mapStateToProps, mapDispatchToProps)(AnchorPage)