
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Card extends Component{
  render(){
    return(
      <div className={classNames("c-card", this.props.classes)}>
        {this.props.children}
      </div>
    )
  }
}