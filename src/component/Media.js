import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Media extends Component{
  render(){
    return(
      <div
        className={classNames(
          'c-media',
          this.props.classes
        )}>
        {this.props.children}
      </div>
    )
  }
}