

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
        <MenuListItem><Link to="/modal">Modal</Link></MenuListItem>
      </MenuList>
    )
  }
}