import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class ButtonLink extends Component{
  render(){
    return(
      <a
        href={this.props.href}
        onClick={this.props.onClickAction}
        className={classNames(
          'c-btn',
          this.props.color && `c-btn--${this.props.color}`,
          this.props.size && `c-btn--${this.props.size}`,
          this.props.display && `c-btn--${this.props.display}`,
          this.props.classes
        )}>
        {this.props.children}
      </a>
    )
  }
}