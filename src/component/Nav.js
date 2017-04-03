import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Nav extends Component{
  render(){
    return(
      <ul
        className={classNames(
          'c-nav',
          this.props.size && `c-nav--${this.props.size}`,
          this.props.itemLength && `u-cf c-nav--len${this.props.itemLength}`,
          this.props.classes
        )}>
        {this.props.children}
      </ul>
    )
  }
}