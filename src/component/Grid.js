import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Grid extends Component{
  render(){
    return(
      <div
        className={classNames(
          'c-grid',
          this.props.vAlign && `c-grid--${this.props.vAlign}`,
          this.props.align && `c-grid--${this.props.align}`,
          this.props.direction && `c-grid--${this.props.direction}`,
          this.props.gutters && `c-grid--gutters`,
          this.props.query && `c-grid--query`,
          this.props.classes
        )}>
        {this.props.children}
      </div>
    )
  }
}