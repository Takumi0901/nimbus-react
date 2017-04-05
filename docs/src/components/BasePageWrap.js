import React from'react'
import {PropTypes} from 'react'
import {Link} from 'react-router-dom'

// components
import {
  Grid,
  GridCol,
  Container
} from 'renimbus'

import SideMenu from './BasePageSideMenu'

export default class BasePageWrap extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="l-wrapper">
        <Grid gutters={true} query={true}>
          <GridCol size={9}>
            <Container>
              {this.props.children}
            </Container>
          </GridCol>
          <GridCol size={3}>
            <Container classes="u-d-pc">
              <SideMenu/>
            </Container>
          </GridCol>
        </Grid>
      </div>
    )
  }
}