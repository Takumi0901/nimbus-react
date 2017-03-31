import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class AlertStrongText extends Component{
  render(){
    return(
      <span className={classNames("c-alert__strong", this.props.classes)}>{this.props.children}</span>
    )
  }
}