import React from'react'
import {PropTypes} from 'react'
import {Link} from 'react-router-dom'

// components
import {
  MenuList,
  MenuListItem
} from 'renimbus'

export default class SideMenu extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MenuList>
        <MenuListItem><Link to="/renimbus/alert">Alert</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//avatar">Avatar</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//bar">Bar</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//button">Button</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//card">Card</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//clamp">Clamp</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//container">Container</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//form">Form</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//grid">Grid</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//hero">Hero</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//label">Label</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//media">Media</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//menu">Menu</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//nav">Nav</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//table">Table</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus//text">Text</Link></MenuListItem>
      </MenuList>
    )
  }
}