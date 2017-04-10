import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class TabMenu extends Component{
  render(){
    return(
      <ul className={classNames('c-tab__menu', this.props.classes)} style={this.props.style}>
        {this.props.children}
      </ul>
    )
  }
}