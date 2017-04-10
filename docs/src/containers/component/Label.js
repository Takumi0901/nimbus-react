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
  Table
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
        <Label color={false} style={{style}}>Default</Label>
        <Label color={'highlight'} style={{style}}>Highlight</Label>
      )
  }`}
          </SyntaxHighlighter>
          <h2>Modifier</h2>
          <Table type={'basic'}>
            <tbody>
            <tr>
              <th>style</th>
              <tr>
                <th>style</th>
                <td>any</td>
              </tr>
            </tr>
            </tbody>
          </Table>
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