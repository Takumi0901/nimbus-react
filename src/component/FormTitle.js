import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class FormTitle extends Component{
  render(){
    return(
      <h3
        className={classNames('c-form__title', this.props.classes)} style={this.props.style}>
        {this.props.children}
        {this.props.required &&
          <span className={classNames(
            'c-form__icon c-label c-label--highlight',
            this.props.position && `c-form__icon--${this.props.position}`
          )}>{this.props.required}</span>
        }
      </h3>
    )
  }
}