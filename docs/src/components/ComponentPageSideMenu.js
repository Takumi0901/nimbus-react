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
    )
  }
}