

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
        <MenuListItem><Link to="/tab">Tab</Link></MenuListItem>
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
    )
  }
}