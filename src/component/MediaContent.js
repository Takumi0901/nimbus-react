import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class MediaContent extends Component{
  render(){
    return(
      <div
        className={classNames(
          'c-media__content',
          this.props.classes
        )}>
        {this.props.children}
      </div>
    )
  }
}