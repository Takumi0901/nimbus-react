import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Bar extends Component{
  render(){
    return(
      <div className={classNames(
        'c-bar',
        this.props.shadow && `c-bar--shadow-${this.props.shadow}`,
        this.props.size && `c-bar--${this.props.size}`,
        this.props.color && `c-bar--${this.props.color}`,
        this.props.fixed && `c-bar--fixed-${this.props.fixed}`,
        this.props.classes
      )}>
        <div className="c-bar__inner">
          {this.props.children}
        </div>
      </div>
    )
  }
}