import React, {Component, PropTypes} from 'react'

export default class AlertStrongText extends Component{
  render(){
    return(
      <span className="c-alert__strong">{this.props.children}</span>
    )
  }
}