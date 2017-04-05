import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Form,
  FormTitle,
  FormInputBox,
  Container,
  Table
} from 'renimbus'

class FormPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container size={false}>
        <h1>Form</h1>
        <Form>
          <FormTitle required={'必須'}>Input Title</FormTitle>
          <FormInputBox error={'必須項目'}>
            <input type="text" placeholder={'Input'}/>
          </FormInputBox>
        </Form>
<SyntaxHighlighter style={monokai}>
{`render() {
    return (
      <Form>
        <FormTitle required={'必須'}>Input Title</FormTitle>
        <FormInputBox error={'必須項目'}>
          <input type="text" placeholder={'Input'}/>
        </FormInputBox>
      </Form>
    )
}`}
</SyntaxHighlighter>

        <Container size={'full'}>
          <h2>Modifier</h2>
          <Table type={'basic'}>
            <tbody>
            <tr>
              <th>required</th>
              <td>string</td>
            </tr>
            <tr>
              <th>error</th>
              <td>string</td>
            </tr>
            <tr>
              <th>position</th>
              <td>right</td>
            </tr>
            </tbody>
          </Table>
        </Container>

        <Form>
          <Container size={'full'}>
            <FormTitle>Input Title</FormTitle>
            <FormInputBox>
              <input type="text" placeholder={'Input'}/>
            </FormInputBox>

<SyntaxHighlighter style={monokai}>
{`render() {
    return (
      <Form>
        <FormInputBox>
          <input type="text" placeholder={'Input'}/>
        </FormInputBox>
      </Form>
    )
}`}
</SyntaxHighlighter>

          </Container>

          <Container size={'full'}>
            <FormTitle>Textarea</FormTitle>
            <FormInputBox>
              <textarea cols="30" rows="10"></textarea>
            </FormInputBox>
<SyntaxHighlighter style={monokai}>
  {`render() {
    return (
      <Form>
        <FormInputBox>
          <textarea cols="30" rows="10"></textarea>
        </FormInputBox>
      </Form>
    )
}`}
</SyntaxHighlighter>
          </Container>

          <Container size={'full'}>
            <FormTitle>Select</FormTitle>
            <FormInputBox classes={'c-form__select'}>
              <label><select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select></label>
            </FormInputBox>

<SyntaxHighlighter style={monokai}>
  {`render() {
    return (
      <Form>
        <FormInputBox classes={'c-form__select'}>
          <label><select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select></label>
        </FormInputBox>
      </Form>
    )
}`}
</SyntaxHighlighter>

          </Container>

          <Container size={'full'}>
            <FormTitle>Checkbox</FormTitle>
            <FormInputBox>
              <input type="checkbox" name="checkbox" id="c1"/><label htmlFor="c1">checkbox1</label>
              <input type="checkbox" name="checkbox" id="c2"/><label htmlFor="c2">checkbox2</label>
            </FormInputBox>

<SyntaxHighlighter style={monokai}>
  {`render() {
    return (
      <Form>
        <FormInputBox>
          <input type="checkbox" name="checkbox" id="c1"/><label htmlFor="c1">checkbox1</label>
          <input type="checkbox" name="checkbox" id="c2"/><label htmlFor="c2">checkbox2</label>
        </FormInputBox>
      </Form>
    )
}`}
</SyntaxHighlighter>

          </Container>

          <Container size={'full'}>
            <FormTitle>Radio</FormTitle>
            <FormInputBox>
              <input type="radio" name="radio" id="r1"/><label htmlFor="r1">radio1</label>
              <input type="radio" name="radio" id="r2"/><label htmlFor="r2">radio2</label>
            </FormInputBox>

<SyntaxHighlighter style={monokai}>
  {`render() {
    return (
      <Form>
        <FormInputBox>
          <input type="radio" name="radio" id="r1"/><label htmlFor="r1">radio1</label>
          <input type="radio" name="radio" id="r2"/><label htmlFor="r2">radio2</label>
        </FormInputBox>
      </Form>
    )
}`}
            </SyntaxHighlighter>
          </Container>

        </Form>

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

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)