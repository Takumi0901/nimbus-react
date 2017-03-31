import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Avatar extends Component{
  render(){
    return(
      <div className={classNames(
        'c-avatar',
        this.props.size && `c-avatar--${this.props.size}`,
        this.props.classes
      )}>
        {this.props.children}
      </div>
    )
  }
}