
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Card extends Component{
  render(){
    return(
      <div className={classNames("c-card", this.props.classes)} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}