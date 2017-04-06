import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ComponentPageWrap from '../../components/ComponentPageWrap'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Media,
  MediaContent,
  Container
} from 'nimbus-react'

class MediaPage extends Component {
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
          <h1>Media</h1>
          <Media>
            <MediaContent>
              <img src="/nimbus-react/public/image/thumb.jpg" alt="" width="150" height="150"/>
            </MediaContent>
            <MediaContent>
              <p className="u-mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              </p>
            </MediaContent>
          </Media>

          <SyntaxHighlighter style={monokai}>
            {`render() {
      return (
        <Media>
          <MediaContent>
            <img src="image/thumb.jpg" alt="" width="150" height="150"/>
          </MediaContent>
          <MediaContent>
            <p className="u-mb-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </p>
          </MediaContent>
        </Media>
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

export default connect(mapStateToProps, mapDispatchToProps)(MediaPage)