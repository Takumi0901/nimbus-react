import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class MenuList extends Component{
  render(){
    return(
      <ul
        className={classNames('c-menu', this.props.classes)} style={this.props.style}>
        {this.props.children}
      </ul>
    )
  }
}