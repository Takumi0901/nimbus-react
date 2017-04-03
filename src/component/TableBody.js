import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class TableBody extends Component{
  render(){
    return(
      <tbody>
        {this.props.children}
      </tbody>
    )
  }
}