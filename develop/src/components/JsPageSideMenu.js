

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
        <MenuListItem><Link to="/renimbus/tab">Tab</Link></MenuListItem>
        <MenuListItem><Link to="/renimbus/modal">Modal</Link></MenuListItem>
      </MenuList>
    )
  }
}