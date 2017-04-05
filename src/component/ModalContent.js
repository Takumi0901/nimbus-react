import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class ModalContent extends Component{
  render(){
    return(
      <div
        className={classNames(
          'c-modal__content',
          this.props.classes
        )}>
        <div className="c-modal__content__inner">
          {this.props.children}
        </div>
      </div>
    )
  }
}