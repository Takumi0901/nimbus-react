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
        <MenuListItem><Link to="/renimbus/heading">Heading</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/paragraph">Paragraph</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/address">Address</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/list">List</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/dl">dl, dt, dd</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/anchor">Anchor</Link></MenuListItem>
      </MenuList>
    )
  }
}