import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Tab extends Component{
  render(){
    return(
      <li className={classNames('c-tab__menu__item', this.props.classes)} style={this.props.style}>
        <span className="c-tab__btn" onClick={this.props.onClickTabAction}>{this.props.children}</span>
      </li>
    )
  }
}