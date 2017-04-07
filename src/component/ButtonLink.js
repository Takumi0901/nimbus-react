import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class ButtonLink extends Component{
  render(){
    return(
      <a
        href={this.props.href}
        onClick={this.props.onClickAction}
        style={this.props.style && this.props.style}
        className={classNames(
          'c-btn',
          this.props.size && `c-btn--${this.props.size}`,
          this.props.display && `c-btn--${this.props.display}`,
          this.props.classes
        )}>
        {this.props.children}
      </a>
    )
  }
}