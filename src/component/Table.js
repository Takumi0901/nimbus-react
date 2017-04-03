import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Table extends Component{
  render(){
    return(
      <table
        className={classNames(
          'c-table',
          this.props.type && `c-table--${this.props.type}`,
          this.props.classes
        )}>
        {this.props.children}
      </table>
    )
  }
}