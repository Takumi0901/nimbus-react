import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ComponentPageWrap from '../../components/ComponentPageWrap'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Button,
  ButtonLink,
  Container,
  Table,
} from 'nimbus-react'

class ButtonPage extends Component {
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
          <h1>Bar</h1>
          <Container size={'full'}>
            <p>
              <Button onClickAction={() => {console.log('hgoehgoe')}} color={false} size={false}>Button</Button>&nbsp;
              <ButtonLink href={'/'} size={false}>Link</ButtonLink>
            </p>
  <SyntaxHighlighter style={monokai}>
    {`render() {
      return (
        <Button onClickAction={() => {console.log('hgoehgoe')}} size={false} style={{style}}>Button</Button>
        <ButtonLink href={'/'} size={false} style={{style}}>Link</ButtonLink>
      )
  }`}
            </SyntaxHighlighter>
          </Container>

          <Container size={'full'}>
            <p>
              <Button onClickAction={() => {console.log('hgoehgoe')}} size={false}>default</Button>
            </p>
  <SyntaxHighlighter style={monokai}>
    {`render() {
      return (
        <Button onClickAction={() => {console.log('hgoehgoe')}} size={false} style={{style}}>default</Button>
      )
  }`}
            </SyntaxHighlighter>
          </Container>

          <Container size={'full'}>
            <p>
              <Button onClickAction={() => {console.log('hgoehgoe')}} size={'jumbo'}>jumbo</Button>&nbsp;
              <Button onClickAction={() => {console.log('hgoehgoe')}} size={'large'}>large</Button>&nbsp;
              <Button onClickAction={() => {console.log('hgoehgoe')}} size={false}>default</Button>&nbsp;
              <Button onClickAction={() => {console.log('hgoehgoe')}} size={'small'}>small</Button>&nbsp;
              <Button onClickAction={() => {console.log('hgoehgoe')}} size={'tiny'}>tiny</Button>
            </p>
  <SyntaxHighlighter style={monokai}>
    {`render() {
      return (
        <Button onClickAction={() => {console.log('hgoehgoe')}} size={'jumbo'} style={{style}}>jumbo</Button>&nbsp;
        <Button onClickAction={() => {console.log('hgoehgoe')}} size={'large'} style={{style}}>large</Button>&nbsp;
        <Button onClickAction={() => {console.log('hgoehgoe')}} size={false} style={{style}}>default</Button>&nbsp;
        <Button onClickAction={() => {console.log('hgoehgoe')}} size={'small'} style={{style}}>small</Button>&nbsp;
        <Button onClickAction={() => {console.log('hgoehgoe')}} size={'tiny'} style={{style}}>tiny</Button>
      )
  }`}
            </SyntaxHighlighter>
          </Container>

          <Container size={'full'}>
            <p>
              <Button
                onClickAction={() => {console.log('hgoehgoe')}}
                size={false}
                display={'block'}>Button</Button>
            </p>
            <SyntaxHighlighter style={monokai}>
              {`render() {
      return (
        <Button
          onClickAction={() => {console.log('hgoehgoe')}}
          size={false}
          display={'block'}
          style={{style}}>Button</Button>
      )
  }`}
            </SyntaxHighlighter>
          </Container>

          <h2>Modifier</h2>
          <Table type={'basic'}>
            <tbody>
            <tr>
              <th>size</th>
              <td>small  ||  medium  ||  default  ||  Large  ||  jumbo</td>
            </tr>
            <tr>
              <th>display</th>
              <td>block</td>
            </tr>
            <tr>
              <th>style</th>
              <td>any</td>
            </tr>
            </tbody>
          </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPage)