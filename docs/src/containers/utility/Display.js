import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Container,
} from 'nimbus-react'

import UtilityPageWrap from '../../components/UtilityPageWrap'

class DisplayPage extends Component {
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
          <h2>Display</h2>
          <SyntaxHighlighter style={monokai}>
            {`.u-d-tb {
  display: table !important;
}

.u-d-tbc {
  display: table-cell !important;
}

.u-d-b {
  display: block !important;
}

.u-d-ib {
  display: inline-block !important;
}

.u-d-n{
  display: none !important;
}

.u-d-pc {
  display: none !important;
}

.u-d-sp {
  display: block !important;
}

@media (--viewportPc) {
  .u-d-pc {
    display: block !important;
  }

  .u-d-sp {
    display: none !important;
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPage)