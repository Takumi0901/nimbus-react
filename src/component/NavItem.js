import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class NavItem extends Component{
  render(){
    return(
      <li
        className={classNames(
          'c-nav__item',
          this.props.classes
        )}>
        {this.props.children}
      </li>
    )
  }
}