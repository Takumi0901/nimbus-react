import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ComponentPageWrap from '../../components/ComponentPageWrap'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Card,
  CardHeader,
  CardBottom,
  CardContent,
  Container,
  Table,
  TableBody
} from 'nimbus-react'

class CardPage extends Component {
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
          <h1>Card</h1>
          <Card>
            <CardHeader>
              <h3 className="u-mb-0">Title</h3>
            </CardHeader>
            <CardContent>
              <p className="u-mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
            </CardContent>
            <CardBottom>
              <p className="u-mb-0">Bottom</p>
            </CardBottom>
          </Card>
  <SyntaxHighlighter style={monokai}>
    {`render() {
      return (
        <Card>
          <CardHeader>
            <h3 className="u-mb-0">Title</h3>
          </CardHeader>
          <CardContent>
            <p className="u-mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
          </CardContent>
          <CardBottom>
            <p className="u-mb-0">Bottom</p>
          </CardBottom>
        </Card>
      )
  }`}
  </SyntaxHighlighter>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardPage)