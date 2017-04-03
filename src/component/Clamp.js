import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Clamp extends Component{
  render(){
    return(
      <div
        className={classNames(
          'c-clamp',
          this.props.size && `c-clamp--size-${this.props.size}`,
          this.props.classes
        )}>
        {this.props.children}
      </div>
    )
  }
}