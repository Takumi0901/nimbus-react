import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ComponentPageWrap from '../../components/ComponentPageWrap'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Label,
  Container,
  Table,
  TableBody
} from 'nimbus-react'

class LabelPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ComponentPageWrap>
        <Container size={false}>
          <h1>Label</h1>
          <Label color={false}>Default</Label>
          <Label color={'highlight'}>Highlight</Label>
          <SyntaxHighlighter style={monokai}>
            {`render() {
      return (
        <Label color={false}>Default</Label>
        <Label color={'highlight'}>Highlight</Label>
      )
  }`}
          </SyntaxHighlighter>
        </Container>
      </ComponentPageWrap>
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

export default connect(mapStateToProps, mapDispatchToProps)(LabelPage)