import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Button extends Component{
  render(){
    return(
      <button
        onClick={this.props.onClickAction}
        className={classNames(
        'c-btn',
        this.props.color && `c-btn--${this.props.color}`,
        this.props.size && `c-btn--${this.props.size}`,
        this.props.display && `c-btn--${this.props.display}`,
        this.props.classes
      )}>
          {this.props.children}
      </button>
    )
  }
}