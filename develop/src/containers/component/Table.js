import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ComponentPageWrap from '../../components/ComponentPageWrap'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Nav,
  NavItem,
  Container,
  Table
} from 'renimbus'

class TablePage extends Component {
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
          <h1>Table</h1>
          <Container size={'full'}>
            <h2>basic</h2>
            <Table type={'basic'}>
              <tbody>
              <tr>
                <th>title</th>
                <td>description</td>
              </tr>
              <tr>
                <th>title</th>
                <td>description</td>
              </tr>
              <tr>
                <th>title</th>
                <td>description</td>
              </tr>
              <tr>
                <th>title</th>
                <td>description</td>
              </tr>
              </tbody>
            </Table>

            <SyntaxHighlighter style={monokai}>
              {`render() {
        return (
          <Table type={'basic'}>
              <tbody>
              <tr>
                <th>title</th>
                <td>description</td>
              </tr>
              <tr>
                <th>title</th>
                <td>description</td>
              </tr>
              <tr>
                <th>title</th>
                <td>description</td>
              </tr>
              <tr>
                <th>title</th>
                <td>description</td>
              </tr>
              </tbody>
            </Table>
        )
    }`}
            </SyntaxHighlighter>
          </Container>

          <Container size={'full'}>
            <h2>separate</h2>
            <Table type={'separate'}>
              <thead>
              <tr>
                <th>Title1</th>
                <th>Title2</th>
                <th>Title3</th>
                <th>Title4</th>
                <th>Title5</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td data-label="Title1">description1</td>
                <td data-label="Title2">description2</td>
                <td data-label="Title3">description3</td>
                <td data-label="Title4">description4</td>
                <td data-label="Title5">description5</td>
              </tr>
              <tr>
                <td data-label="Title1">description1</td>
                <td data-label="Title2">description2</td>
                <td data-label="Title3">description3</td>
                <td data-label="Title4">description4</td>
                <td data-label="Title5">description5</td>
              </tr>
              </tbody>
            </Table>

            <SyntaxHighlighter style={monokai}>
              {`render() {
        return (
          <Table type={'separate'}>
          <thead>
          <tr>
            <th>Title1</th>
            <th>Title2</th>
            <th>Title3</th>
            <th>Title4</th>
            <th>Title5</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td data-label="Title1">description1</td>
            <td data-label="Title2">description2</td>
            <td data-label="Title3">description3</td>
            <td data-label="Title4">description4</td>
            <td data-label="Title5">description5</td>
          </tr>
          <tr>
            <td data-label="Title1">description1</td>
            <td data-label="Title2">description2</td>
            <td data-label="Title3">description3</td>
            <td data-label="Title4">description4</td>
            <td data-label="Title5">description5</td>
          </tr>
          </tbody>
        </Table>
        )
    }`}
            </SyntaxHighlighter>
          </Container>


          <Container size={'full'}>
            <h2>overflow</h2>
            <Table type={'overflow'}>
              <thead>
              <tr>
                <th>Type</th>
                <th>Color</th>
                <th>Price</th>
                <th>Area</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Apple</td>
                <td>Red</td>
                <td>200</td>
                <td>Aomori</td>
              </tr>
              <tr>
                <td>Orange</td>
                <td>Orange</td>
                <td>350</td>
                <td>Ehime</td>
              </tr>
              <tr>
                <td>Grape</td>
                <td>Purple</td>
                <td>400</td>
                <td>Yamanasi</td>
              </tr>
              <tr>
                <td>Melon</td>
                <td>Yellow green</td>
                <td>800</td>
                <td>hokkaido</td>
              </tr>
              </tbody>
            </Table>

            <SyntaxHighlighter style={monokai}>
              {`render() {
        return (
          <Table type={'overflow'}>
          <thead>
          <tr>
            <th>Type</th>
            <th>Color</th>
            <th>Price</th>
            <th>Area</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Apple</td>
            <td>Red</td>
            <td>200</td>
            <td>Aomori</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>Orange</td>
            <td>350</td>
            <td>Ehime</td>
          </tr>
          <tr>
            <td>Grape</td>
            <td>Purple</td>
            <td>400</td>
            <td>Yamanasi</td>
          </tr>
          <tr>
            <td>Melon</td>
            <td>Yellow green</td>
            <td>800</td>
            <td>hokkaido</td>
          </tr>
          </tbody>
        </Table>
        )
    }`}
            </SyntaxHighlighter>
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

export default connect(mapStateToProps, mapDispatchToProps)(TablePage)