import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Form extends Component{
  render(){
    return(
      <div
        className={classNames(
          'c-form',
          this.props.classes
        )}>
        {this.props.children}
      </div>
    )
  }
}