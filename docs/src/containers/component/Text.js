import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ComponentPageWrap from '../../components/ComponentPageWrap'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Text,
  Container,
  Table
} from 'nimbus-react'

class TextPage extends Component {
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
          <h1>Text</h1>
          <p><Text color={false}>Default</Text></p>
          <p><Text color={'primary'}>Primary</Text></p>
          <p><Text color={'secondary'}>Secondary</Text></p>
          <p><Text color={'highlight'}>Highlight</Text></p>
          <SyntaxHighlighter style={monokai}>
            {`render() {
      return (
        <Text color={false} style={{style}}>Default</Text>
        <Text color={'primary'} style={{style}}>Primary</Text>
        <Text color={'secondary'} style={{style}}>Secondary</Text>
        <Text color={'highlight'} style={{style}}>Highlight</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(TextPage)