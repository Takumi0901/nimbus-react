import React from'react'
import {PropTypes} from 'react'
import {Link} from 'react-router'

// components
import {
  Bar,
  Grid,
  GridCol
} from 'renimbus'

export default class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <Bar shadow={'bottom'} size={'medium'} color={false} fixed={true}>
          <Grid gutters={true} align={'between'}>
            <GridCol>
              <h1><img src="image/logo.png" alt="" width="140"/></h1>
            </GridCol>
          </Grid>
        </Bar>
      </header>
    )
  }
}