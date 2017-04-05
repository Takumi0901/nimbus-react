import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Container,
} from 'renimbus'

import UtilityPageWrap from '../../components/UtilityPageWrap'

class FsPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <UtilityPageWrap>
        <Container size={false}>
          <h1>Utility</h1>
          <h2>Font-size</h2>
          <SyntaxHighlighter style={monokai}>
            {`.u-fz-8 {
  font-size: 0.8rem;
}

.u-fz-10 {
  font-size: 1rem;
}

.u-fz-12 {
  font-size: 1.2rem;
}

.u-fz-14 {
  font-size: 1.4rem;
}

.u-fz-16 {
  font-size: 1.6rem;
}

.u-fz-18 {
  font-size: 1.8rem;
}

.u-fz-20 {
  font-size: 2rem;
}

.u-fz-22 {
  font-size: 2.2rem;
}

.u-fz-24 {
  font-size: 2.4rem;
}

.u-fz-26 {
  font-size: 2.6rem;
}

.u-fz-28 {
  font-size: 2.8rem;
}

.u-fz-30 {
  font-size: 3rem;
}

.u-fz-32 {
  font-size: 3.2rem;
}

.u-fz-34 {
  font-size: 3.4rem;
}`}
          </SyntaxHighlighter>
        </Container>
      </UtilityPageWrap>
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

export default connect(mapStateToProps, mapDispatchToProps)(FsPage)