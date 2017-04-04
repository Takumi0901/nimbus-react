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
        <MenuListItem><Link to="/">Alert</Link></MenuListItem>
        <MenuListItem><Link to="/avatar">Avatar</Link></MenuListItem>
        <MenuListItem><Link to="/bar">Bar</Link></MenuListItem>
        <MenuListItem><Link to="/button">Button</Link></MenuListItem>
      </MenuList>
    )
  }
}