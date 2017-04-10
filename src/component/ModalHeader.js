import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class ModalHeader extends Component{
  render(){
    return(
      <div className={classNames('c-modal__header', this.props.classes)} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}