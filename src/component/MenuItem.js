import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class MenuItem extends Component{
  render(){
    return(
      <li
        className={classNames(
          'c-menu__item',
          this.props.classes
        )}>
        {this.props.children}
      </li>
    )
  }
}