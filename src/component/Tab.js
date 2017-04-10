import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Tab extends Component{
  render(){
    return(
      <div className={classNames('c-tab', this.props.classes)} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}