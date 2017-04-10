
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class CardBottom extends Component{
  render(){
    return(
      <div className={classNames("c-card__bottom", this.props.classes)} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}