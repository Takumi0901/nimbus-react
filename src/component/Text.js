import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Text extends Component{
  render(){
    return(
      <span
        className={classNames(
          'c-text',
          this.props.color && `c-text--${this.props.color}`,
          this.props.classes
        )}
        style={this.props.style}
      >
        {this.props.children}
      </span>
    )
  }
}