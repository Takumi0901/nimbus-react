import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Alert,
  AlertStrongText,
  Container,
  Table
} from 'nimbus-react'

import ComponentPageWrap from '../../components/ComponentPageWrap'

class AlertPage extends Component {
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
          <h1>Alert</h1>
          <Alert>
            <AlertStrongText>Sed ut perspiciatis</AlertStrongText> unde omnis iste natus error sit voluptatem
          </Alert>
  <SyntaxHighlighter style={monokai}>
  {`render() {
    return (
      <Alert style={{style}}>
        <AlertStrongText>Sed ut perspiciatis</AlertStrongText> unde omnis iste natus error sit voluptatem
      </Alert>
    )
  }`}
  </SyntaxHighlighter>
          <h2>Modifier</h2>
          <Table type={'basic'}>
            <tbody>
            <tr>
              <th>style</th>
              <td>any</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(AlertPage)