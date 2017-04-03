import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Label extends Component{
  render(){
    return(
      <span
        className={classNames(
          'c-label',
          this.props.color && `c-label--${this.props.color}`,
          this.props.classes
        )}>
        {this.props.children}
      </span>
    )
  }
}