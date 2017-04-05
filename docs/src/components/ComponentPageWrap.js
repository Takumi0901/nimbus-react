import React from'react'
import {PropTypes} from 'react'
import {Link} from 'react-router-dom'

// components
import {
  Grid,
  GridCol,
  Container
} from 'renimbus'

import SideMenu from './ComponentPageSideMenu'

export default class ComponentPageWrap extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid gutters={true}>
        <GridCol size={9}>
          <Container>
            {this.props.children}
          </Container>
        </GridCol>
        <GridCol size={3}>
          <Container>
            <SideMenu/>
          </Container>
        </GridCol>
      </Grid>
    )
  }
}