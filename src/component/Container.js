import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Container extends Component{
  render(){
    return(
      <div
        className={classNames(
          'c-container',
          this.props.size && `c-container--${this.props.size}`,
          this.props.classes
        )}>
        {this.props.children}
      </div>
    )
  }
}