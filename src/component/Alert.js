import React, {Component, PropTypes} from 'react'

export default class Alert extends Component{
  render(){
    return(
      <div className="c-alert">
        {this.props.children}
      </div>
    )
  }
}