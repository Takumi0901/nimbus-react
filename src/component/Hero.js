import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Hero extends Component{
  render(){
    return(
      <div
        className={classNames(
          'c-hero',
          this.props.type && `c-hero--${this.props.type}`,
          this.props.anim && `c-hero--anim`,
          this.props.mt && `c-hero--${this.props.mt}`,
          this.props.classes
        )}
        style={this.props.style}
      >
        <div className="c-hero__inner">
          {this.props.children}
        </div>
      </div>
    )
  }
}