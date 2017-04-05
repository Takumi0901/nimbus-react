
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
        <MenuListItem><Link to="/renimbus/border">Border</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/cf">Clearfix</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/display">Display</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/fs">Font-size</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/margin">Margin</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/misc">Misc</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/padding">Padding</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/position">Position</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/ta">Text-Align</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/td">Text-Decoration</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/tt">Text-Truncate</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/va">Vertical-Align</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/ws">White-Space</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/width">Width</Link></MenuListItem>
      </MenuList>
    )
  }
}