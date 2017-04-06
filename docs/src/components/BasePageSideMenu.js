import React from'react'
import {PropTypes} from 'react'
import {Link} from 'react-router-dom'

// components
import {
  MenuList,
  MenuListItem
} from 'nimbus-react'

export default class SideMenu extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MenuList>
        <MenuListItem><Link to="/heading">Heading</Link></MenuListItem>
        <MenuListItem><Link to="/paragraph">Paragraph</Link></MenuListItem>
        <MenuListItem><Link to="/address">Address</Link></MenuListItem>
        <MenuListItem><Link to="/list">List</Link></MenuListItem>
        <MenuListItem><Link to="/dl">dl, dt, dd</Link></MenuListItem>
        <MenuListItem><Link to="/anchor">Anchor</Link></MenuListItem>
      </MenuList>
    )
  }
}