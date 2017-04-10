import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Modal extends Component{
  render(){
    return(
      <div
        className={classNames(
          'c-modal',
          this.props.name === this.props.showModal && `is-fadein`,
          this.props.classes)}
        style={this.props.style}
      >
        <div className="c-modal__panel">
          {this.props.children}
        </div>
        <div onClick={this.props.onClickAction} className="c-modal__overlay"></div>
      </div>
    )
  }
}