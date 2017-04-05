import React from'react'
import {PropTypes} from 'react'
import {Link} from 'react-router-dom'

// components
import {
  Grid,
  GridCol,
  Container
} from 'renimbus'

import SideMenu from './JsPageSideMenu'

export default class JsPageWrap extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid gutters={true}>
        <GridCol size={9}>
          <Container fixed={true}>
            {this.props.children}
          </Container>
        </GridCol>
        <GridCol size={3}>
          <Container fixed={true}>
            <SideMenu/>
          </Container>
        </GridCol>
      </Grid>
    )
  }
}