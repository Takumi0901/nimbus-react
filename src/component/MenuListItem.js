import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class MenuListItem extends Component{
  render(){
    return(
      <li
        className={classNames('c-menu__item', this.props.classes)} style={this.props.style}>
        {this.props.children}
      </li>
    )
  }
}