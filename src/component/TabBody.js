import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class TabBody extends Component{
  render(){
    return(
      <div className={classNames('c-tab__body', this.props.classes)} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}