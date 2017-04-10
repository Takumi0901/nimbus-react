import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import ComponentPageWrap from '../../components/ComponentPageWrap'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Nav,
  NavItem,
  Container,
  Table
} from 'nimbus-react'

class NavPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ComponentPageWrap>
        <Container size={false}>
          <h1>Nav</h1>
          <Container size={'full'}>
            <h2>Default</h2>
            <Nav size={'medium'}>
              <NavItem><Link to="#">Nav1</Link></NavItem>
              <NavItem><Link to="#">Nav2</Link></NavItem>
              <NavItem><Link to="#">Nav3</Link></NavItem>
              <NavItem><Link to="#">Nav4</Link></NavItem>
            </Nav>

            <SyntaxHighlighter style={monokai}>
              {`render() {
        return (
          <Nav size={'medium'} style={{style}}>
            <NavItem style={{style}}><Link to="#">Nav1</Link></NavItem>
            <NavItem style={{style}}><Link to="#">Nav2</Link></NavItem>
            <NavItem style={{style}}><Link to="#">Nav3</Link></NavItem>
            <NavItem style={{style}}><Link to="#">Nav4</Link></NavItem>
          </Nav>
        )
    }`}
            </SyntaxHighlighter>
          </Container>

          <Container size={'full'} >
            <h2>Full</h2>
            <Nav size={'medium'} itemLength={4}>
              <NavItem><Link to="#">Nav1</Link></NavItem>
              <NavItem><Link to="#">Nav2</Link></NavItem>
              <NavItem><Link to="#">Nav3</Link></NavItem>
              <NavItem><Link to="#">Nav4</Link></NavItem>
            </Nav>

            <SyntaxHighlighter style={monokai}>
              {`render() {
        return (
          <Nav size={'medium'} itemLength={4} style={{style}}>
            <NavItem style={{style}}><Link to="#">Nav1</Link></NavItem>
            <NavItem style={{style}}><Link to="#">Nav2</Link></NavItem>
            <NavItem style={{style}}><Link to="#">Nav3</Link></NavItem>
            <NavItem style={{style}}><Link to="#">Nav4</Link></NavItem>
          </Nav>
        )
    }`}
            </SyntaxHighlighter>
          </Container>

          <Container size={'full'} >
            <h2>Modifier</h2>
            <Table type={'basic'}>
              <tbody>
              <tr>
                <th>size</th>
                <td>small  ||  medium  ||  large</td>
              </tr>
              <tr>
                <th>itemLength</th>
                <td>3  ||  4  ||  5</td>
              </tr>
              <tr>
                <th>style</th>
                <td>any</td>
              </tr>
              </tbody>
            </Table>
          </Container>

        </Container>
      </ComponentPageWrap>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavPage)