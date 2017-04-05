import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ComponentPageWrap from '../../components/ComponentPageWrap'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Avatar,
  Container,
  Table,
  TableBody
} from 'renimbus'

class AvatarPage extends Component {
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
          <h1>Avatar</h1>
          <Avatar size={'medium'}>
            <img src="image/thumb.jpg" alt=""/>
          </Avatar>
  <SyntaxHighlighter style={monokai}>
  {`render() {
      return (
        <Avatar size={'medium'}>
          <img src="image/thumb.jpg" alt=""/>
        </Avatar>
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
                <td>small  ||  medium</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(AvatarPage)