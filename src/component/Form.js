import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Form extends Component{
  render(){
    return(
      <div
        className={classNames('c-form', this.props.classes)} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}