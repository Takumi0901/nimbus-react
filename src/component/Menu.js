import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Menu extends Component{
  render(){
    return(
      <ul
        className={classNames(
          'c-menu',
          this.props.classes
        )}>
        {this.props.children}
      </ul>
    )
  }
}