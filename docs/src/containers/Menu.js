import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


// components
import {
  MenuList,
  MenuListItem,
  Container
} from 'renimbus'

class MenuPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Container classes="u-mt-32">
          <MenuList>
            <MenuListItem><Link to="/start">Getting Start</Link></MenuListItem>
          </MenuList>
        </Container>
        <Container>
          <h1>Base</h1>
          <MenuList>
            <MenuListItem><Link to="/heading">Heading</Link></MenuListItem>
            <MenuListItem><Link to="/paragraph">Paragraph</Link></MenuListItem>
            <MenuListItem><Link to="/address">Address</Link></MenuListItem>
            <MenuListItem><Link to="/list">List</Link></MenuListItem>
            <MenuListItem><Link to="/dl">dl, dt, dd</Link></MenuListItem>
            <MenuListItem><Link to="/anchor">Anchor</Link></MenuListItem>
          </MenuList>
        </Container>

        <Container>
          <h1>Component</h1>
          <MenuList>
            <MenuListItem><Link to="/alert">Alert</Link></MenuListItem>
            <MenuListItem><Link to="/avatar">Avatar</Link></MenuListItem>
            <MenuListItem><Link to="/bar">Bar</Link></MenuListItem>
            <MenuListItem><Link to="/button">Button</Link></MenuListItem>
            <MenuListItem><Link to="/card">Card</Link></MenuListItem>
            <MenuListItem><Link to="/clamp">Clamp</Link></MenuListItem>
            <MenuListItem><Link to="/container">Container</Link></MenuListItem>
            <MenuListItem><Link to="/form">Form</Link></MenuListItem>
            <MenuListItem><Link to="/grid">Grid</Link></MenuListItem>
            <MenuListItem><Link to="/hero">Hero</Link></MenuListItem>
            <MenuListItem><Link to="/label">Label</Link></MenuListItem>
            <MenuListItem><Link to="/media">Media</Link></MenuListItem>
            <MenuListItem><Link to="/menu">Menu</Link></MenuListItem>
            <MenuListItem><Link to="/nav">Nav</Link></MenuListItem>
            <MenuListItem><Link to="/table">Table</Link></MenuListItem>
            <MenuListItem><Link to="/text">Text</Link></MenuListItem>
          </MenuList>
        </Container>

        <Container>
          <h1>JavaScript</h1>
          <MenuList>
            <MenuListItem><Link to="/tab">Tab</Link></MenuListItem>
            <MenuListItem><Link to="/modal">Modal</Link></MenuListItem>
          </MenuList>
        </Container>

        <Container>
          <h1>Utility</h1>
          <MenuList>
            <MenuListItem><Link to="/border">Border</Link></MenuListItem>
            <MenuListItem><Link to="/cf">Clearfix</Link></MenuListItem>
            <MenuListItem><Link to="/display">Display</Link></MenuListItem>
            <MenuListItem><Link to="/fs">Font-size</Link></MenuListItem>
            <MenuListItem><Link to="/margin">Margin</Link></MenuListItem>
            <MenuListItem><Link to="/misc">Misc</Link></MenuListItem>
            <MenuListItem><Link to="/padding">Padding</Link></MenuListItem>
            <MenuListItem><Link to="/position">Position</Link></MenuListItem>
            <MenuListItem><Link to="/ta">Text-Align</Link></MenuListItem>
            <MenuListItem><Link to="/td">Text-Decoration</Link></MenuListItem>
            <MenuListItem><Link to="/tt">Text-Truncate</Link></MenuListItem>
            <MenuListItem><Link to="/va">Vertical-Align</Link></MenuListItem>
            <MenuListItem><Link to="/ws">White-Space</Link></MenuListItem>
            <MenuListItem><Link to="/width">Width</Link></MenuListItem>
          </MenuList>
        </Container>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage)