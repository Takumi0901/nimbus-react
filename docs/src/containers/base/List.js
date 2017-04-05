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

class ListPage extends Component {
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
          <h1>List</h1>
          <ul>
            <li>List</li>
            <li>List</li>
            <li>List</li>
          </ul>
          <ol>
            <li>List</li>
            <li>List</li>
            <li>List</li>
          </ol>
          <SyntaxHighlighter style={monokai}>
            {`<ul>
  <li>List</li>
  <li>List</li>
  <li>List</li>
</ul>
<ol>
  <li>List</li>
  <li>List</li>
  <li>List</li>
</ol>`}
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)