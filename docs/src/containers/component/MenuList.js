import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import ComponentPageWrap from '../../components/ComponentPageWrap'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  MenuList,
  MenuListItem,
  Container
} from 'nimbus-react'

class MenuListPage extends Component {
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
          <h1>Menu</h1>
          <MenuList>
            <MenuListItem><Link to="#">Menu1</Link></MenuListItem>
            <MenuListItem><Link to="#">Menu2</Link></MenuListItem>
            <MenuListItem><Link to="#">Menu3</Link></MenuListItem>
          </MenuList>

          <SyntaxHighlighter style={monokai}>
            {`render() {
      return (
        <MenuList>
          <MenuListItem><Link to="#">Menu1</Link></MenuListItem>
          <MenuListItem><Link to="#">Menu2</Link></MenuListItem>
          <MenuListItem><Link to="#">Menu3</Link></MenuListItem>
        </MenuList>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuListPage)