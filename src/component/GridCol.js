import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class GridCol extends Component{
  render(){
    return(
      <div
        className={classNames(
          'c-grid__col',
          this.props.size && `c-grid__col--${this.props.size}of12`,
          this.props.classes
        )}>
        {this.props.children}
      </div>
    )
  }
}