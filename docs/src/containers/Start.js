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
  Container
} from 'nimbus-react'

class StartPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="l-wrapper">
        <Grid gutters={true} query={true} align={'center'}>
          <GridCol size={9}>
            <Container>
              <h1>npm install</h1>
              <SyntaxHighlighter style={monokai}>
                {`npm install nimbus-react`}
              </SyntaxHighlighter>
            </Container>
            <Container>
              <h1>CSS import</h1>
              <SyntaxHighlighter style={monokai}>
                {`import 'nimbus-react/public/css/app.css'`}
              </SyntaxHighlighter>

              <p>By the layer by which index.js is the top most, CSS, import.</p>
              <SyntaxHighlighter style={monokai}>
                {`import 'nimbus-react/public/css/app.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, Link, BrowserHistory} from 'react-router'
import configureStore from './redux/ConfigureStore'
import Root from './containers/Root'

const store = configureStore()

render(
  <Root store={store}/>,
  document.getElementById("root")
)`}
              </SyntaxHighlighter>
            </Container>

            <Container>
              <h1>Component import</h1>
              <h2>components/Content.js</h2>
              <SyntaxHighlighter style={monokai}>
                {`import React from 'react';

import {Button} from 'nimbus-react'


export default class App extends React.Component {
    render() {
        return (
            // ボタンを追加する
            <Button onClickAction={() => {console.log('hgoehgoe')}} color={false} size={false}>Button</Button>
        );
    }
}`}
              </SyntaxHighlighter>
              
            </Container>
          </GridCol>
        </Grid>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(StartPage)