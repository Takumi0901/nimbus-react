import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class FormInputBox extends Component{
  render(){
    return(
      <div
        className={classNames(
          'c-form__input-box',
          this.props.error && `is-error`,
          this.props.classes)}
        style={this.props.style}
      >
        {this.props.children}
        {this.props.error &&
        <span className={'c-form__input-box__alert'}>{this.props.error}</span>
        }
      </div>
    )
  }
}