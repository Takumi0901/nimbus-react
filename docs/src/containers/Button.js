import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Button,
  ButtonLink,
  Container,
  Table,
} from 'renimbus'

class ButtonPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container size={false}>
        <h1>Bar</h1>
        <Container size={'full'}>
          <p>
            <Button onClickAction={() => {console.log('hgoehgoe')}} color={false} size={false}>Button</Button>&nbsp;
            <ButtonLink href={'/'} color={false} size={false}>Link</ButtonLink>
          </p>
<SyntaxHighlighter style={monokai}>
  {`render() {
    return (
      <Button onClickAction={() => {console.log('hgoehgoe')}} color={false} size={false}>Button</Button>
      <ButtonLink href={'/'} color={false} size={false}>Link</ButtonLink>
    )
}`}
          </SyntaxHighlighter>
        </Container>

        <Container size={'full'}>
          <p>
            <Button onClickAction={() => {console.log('hgoehgoe')}} color={false} size={false}>default</Button>&nbsp;
            <Button onClickAction={() => {console.log('hgoehgoe')}} color={'primary'} size={false}>primary</Button>&nbsp;
            <Button onClickAction={() => {console.log('hgoehgoe')}} color={'secondary'} size={false}>secondary</Button>&nbsp;
            <Button onClickAction={() => {console.log('hgoehgoe')}} color={'info'} size={false}>info</Button>&nbsp;
            <Button onClickAction={() => {console.log('hgoehgoe')}} color={'highlight'} size={false}>highlight</Button>
          </p>
<SyntaxHighlighter style={monokai}>
  {`render() {
    return (
      <Button onClickAction={() => {console.log('hgoehgoe')}} color={false} size={false}>default</Button>
      <Button onClickAction={() => {console.log('hgoehgoe')}} color={'primary'} size={false}>primary</Button>
      <Button onClickAction={() => {console.log('hgoehgoe')}} color={'secondary'} size={false}>secondary</Button>
      <Button onClickAction={() => {console.log('hgoehgoe')}} color={'info'} size={false}>info</Button>
      <Button onClickAction={() => {console.log('hgoehgoe')}} color={'highlight'} size={false}>highlight</Button>
    )
}`}
          </SyntaxHighlighter>
        </Container>

        <Container size={'full'}>
          <p>
            <Button onClickAction={() => {console.log('hgoehgoe')}} color={'primary'} size={'jumbo'}>jumbo</Button>&nbsp;
            <Button onClickAction={() => {console.log('hgoehgoe')}} color={'primary'} size={'large'}>large</Button>&nbsp;
            <Button onClickAction={() => {console.log('hgoehgoe')}} color={'primary'} size={false}>default</Button>&nbsp;
            <Button onClickAction={() => {console.log('hgoehgoe')}} color={'primary'} size={'small'}>small</Button>&nbsp;
            <Button onClickAction={() => {console.log('hgoehgoe')}} color={'primary'} size={'tiny'}>tiny</Button>
          </p>
<SyntaxHighlighter style={monokai}>
  {`render() {
    return (
      <Button onClickAction={() => {console.log('hgoehgoe')}} color={false} size={false}>default</Button>
      <Button onClickAction={() => {console.log('hgoehgoe')}} color={'primary'} size={false}>primary</Button>
      <Button onClickAction={() => {console.log('hgoehgoe')}} color={'secondary'} size={false}>secondary</Button>
      <Button onClickAction={() => {console.log('hgoehgoe')}} color={'info'} size={false}>info</Button>
      <Button onClickAction={() => {console.log('hgoehgoe')}} color={'highlight'} size={false}>highlight</Button>
    )
}`}
          </SyntaxHighlighter>
        </Container>

        <Container size={'full'}>
          <p>
            <Button
              onClickAction={() => {console.log('hgoehgoe')}}
              color={'primary'}
              size={false}
              display={'block'}>Button</Button>
          </p>
          <SyntaxHighlighter style={monokai}>
            {`render() {
    return (
      <Button
        onClickAction={() => {console.log('hgoehgoe')}}
        color={'primary'}
        size={false}
        display={'block'}>Button</Button>
    )
}`}
          </SyntaxHighlighter>
        </Container>

        <h2>Modifier</h2>
        <Table type={'basic'}>
          <tbody>
          <tr>
            <th>Color</th>
            <td>default  ||  primary  ||  secondary  ||  info  ||  highlight</td>
          </tr>
          <tr>
            <th>Size</th>
            <td>small  ||  medium  ||  default  ||  Large  ||  jumbo</td>
          </tr>
          <tr>
            <th>display</th>
            <td>block</td>
          </tr>
          </tbody>
        </Table>
      </Container>
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