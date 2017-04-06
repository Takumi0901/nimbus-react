import React from'react'
import {PropTypes} from 'react'
import {Link} from 'react-router-dom'

// components
import {
  Bar,
  Nav,
  NavItem,
  Grid,
  GridCol
} from 'nimbus-react'

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
              <h1><Link to="/nimbus-react"><img src="/nimbus-react/public/image/logo.png" alt="" width="140"/></Link></h1>
            </GridCol>
            <GridCol>
              <Nav size={'medium'} classes="u-d-sp">
                <NavItem><Link to="/globalmenu">Menu</Link></NavItem>
              </Nav>
              <Nav size={'medium'} classes="u-d-pc">
                <NavItem><Link to="/renimbus">Home</Link></NavItem>
                <NavItem><Link to="/start">Getting start</Link></NavItem>
                <NavItem><Link to="/heading">Base</Link></NavItem>
                <NavItem><Link to="/alert">Component</Link></NavItem>
                <NavItem><Link to="/tab">JavaScript</Link></NavItem>
                <NavItem><Link to="/border">Utility</Link></NavItem>
              </Nav>
            </GridCol>
          </Grid>
        </Bar>
      </header>
    )
  }
}