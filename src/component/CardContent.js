
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class CardContent extends Component{
  render(){
    return(
      <div className={classNames("c-card__content", this.props.classes)} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}