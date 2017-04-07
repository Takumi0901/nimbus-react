import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ComponentPageWrap from '../../components/ComponentPageWrap'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Bar,
  Container,
  Table,
  TableBody
} from 'nimbus-react'

class BarPage extends Component {
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
          <h1>Bar</h1>
          <Bar shadow={'bottom'} size={'large'} fixed={false}>
            Sed ut perspiciatis
          </Bar>
  <SyntaxHighlighter style={monokai}>
  {`render() {
      return (
        <Bar shadow={'bottom'} size={'large'} fixed={false}>
          Sed ut perspiciatis
        </Bar>
      )
  }`}
          </SyntaxHighlighter>

          <h2>Modifier</h2>
          <Table type={'basic'}>
            <tbody>
              <tr>
                <th>shadow</th>
                <td>top  ||  bottom</td>
              </tr>
              <tr>
                <th>size</th>
                <td>small  ||  medium  ||  Large</td>
              </tr>
              <tr>
                <th>fixed</th>
                <td>top  ||  bottom</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(BarPage)