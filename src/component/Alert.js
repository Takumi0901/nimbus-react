import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Alert extends Component{
  render(){
    return(
      <div className={classNames("c-alert", this.props.classes)} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}