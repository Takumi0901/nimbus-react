import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Container extends Component{
  render(){
    return(
      <div
        className={classNames(
          'c-container',
          this.props.size && `c-container--${this.props.size}`,
          this.props.fixed && `c-container--fixed`,
          this.props.classes
        )}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    )
  }
}