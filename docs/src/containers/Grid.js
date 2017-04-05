import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Grid,
  GridCol,
  Container,
  Table,
  TableBody
} from 'renimbus'

class GridPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container size={false}>
        <h1>Grid</h1>
        <Container size={'full'}>
          <h2>Standard</h2>
          <Grid gutters={true}>
            <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
          </Grid>

          <Grid gutters={true}>
            <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
          </Grid>

          <Grid gutters={true}>
            <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
          </Grid>

          <Grid gutters={true}>
            <GridCol size={4}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={4}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={4}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
          </Grid>

          <Grid gutters={true}>
            <GridCol size={5}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={5}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
          </Grid>

          <Grid gutters={true}>
            <GridCol size={6}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={6}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
          </Grid>
<SyntaxHighlighter style={monokai}>
{`render() {
    return (
      <Grid gutters={true}>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={1}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
      </Grid>

      <Grid gutters={true}>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
      </Grid>

      <Grid gutters={true}>
        <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={3}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
      </Grid>

      <Grid gutters={true}>
        <GridCol size={4}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={4}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={4}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
      </Grid>

      <Grid gutters={true}>
        <GridCol size={5}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={2}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={5}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
      </Grid>

      <Grid gutters={true}>
        <GridCol size={6}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={6}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
      </Grid>
    )
}`}
</SyntaxHighlighter>
        </Container>

        <Container size={'full'}>
          <h2>Responsive</h2>
          <Grid gutters={true} query={true}>
            <GridCol size={6}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
            <GridCol size={6}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
          </Grid>
<SyntaxHighlighter style={monokai}>
  {`render() {
    return (
      <Grid gutters={true} query={true}>
        <GridCol size={6}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
        <GridCol size={6}><div style={{background: '#ccc', padding: 10 + 'px'}}>Col</div></GridCol>
      </Grid>
    )
}`}
</SyntaxHighlighter>
        </Container>
        
        <h2>Modifier</h2>
        <Table type={'basic'}>
          <tbody>
          <tr>
            <th>vAlign</th>
            <td>top  ||  middle  ||  top  ||  stretch  ||  baseline</td>
          </tr>
          <tr>
            <th>align</th>
            <td>left  ||  center  ||  right  ||  between</td>
          </tr>
          <tr>
            <th>direction</th>
            <td>row  ||  reverse</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(GridPage)