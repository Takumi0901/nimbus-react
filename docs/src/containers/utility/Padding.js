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

class PaddingPage extends Component {
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
          <h2>Padding</h2>
          <SyntaxHighlighter style={monokai}>
            {`.u-pt-0 {
  padding-top: 0;
}

.u-pt-8 {
  padding-top: var(--baseMargin);
}

.u-pt-16 {
  padding-top: calc(var(--baseMargin) * 2);
}

.u-pt-24 {
  padding-top: calc(var(--baseMargin) * 3);
}

.u-pt-32 {
  padding-top: calc(var(--baseMargin) * 4);
}

.u-pt-40 {
  padding-top: calc(var(--baseMargin) * 5);
}

.u-pt-48 {
  padding-top: calc(var(--baseMargin) * 6);
}

.u-pr-0 {
  padding-right: 0;
}

.u-pr-8 {
  padding-right: var(--baseMargin);
}

.u-pr-16 {
  padding-right: calc(var(--baseMargin) * 2);
}

.u-pr-24 {
  padding-right: calc(var(--baseMargin) * 3);
}

.u-pr-32 {
  padding-right: calc(var(--baseMargin) * 4);
}

.u-pr-40 {
  padding-right: calc(var(--baseMargin) * 5);
}

.u-pr-48 {
  padding-right: calc(var(--baseMargin) * 6);
}

.u-pb-0 {
  padding-bottom: 0;
}

.u-pb-8 {
  padding-bottom: var(--baseMargin);
}

.u-pb-16 {
  padding-bottom: calc(var(--baseMargin) * 2);
}

.u-pb-24 {
  padding-bottom: calc(var(--baseMargin) * 3);
}

.u-pb-32 {
  padding-bottom: calc(var(--baseMargin) * 4);
}

.u-pb-40 {
  padding-bottom: calc(var(--baseMargin) * 5);
}

.u-pb-48 {
  padding-bottom: calc(var(--baseMargin) * 6);
}

.u-pl-0 {
  padding-left: 0;
}

.u-pl-8 {
  padding-left: var(--baseMargin);
}

.u-pl-16 {
  padding-left: calc(var(--baseMargin) * 2);
}

.u-pl-24 {
  padding-left: calc(var(--baseMargin) * 3);
}

.u-pl-32 {
  padding-left: calc(var(--baseMargin) * 4);
}

.u-pl-40 {
  padding-left: calc(var(--baseMargin) * 5);
}

.u-pl-48 {
  padding-left: calc(var(--baseMargin) * 6);
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

export default connect(mapStateToProps, mapDispatchToProps)(PaddingPage)