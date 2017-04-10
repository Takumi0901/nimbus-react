import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ComponentPageWrap from '../../components/ComponentPageWrap'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Hero,
  Container,
  Table,
  TableBody
} from 'nimbus-react'

class HeroPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    let basicStyle = {
      background: 'linear-gradient(270deg,#4bd5f2,#2dd885)',
      backgroundSize: '400% 400%'
    }

    let imgStyle = {
      backgroundImage: 'url(/nimbus-react/public/image/hero.jpg)',
    }
    return (
      <ComponentPageWrap>
        <Container size={false}>
          <h1>Hero</h1>

          <Container size={'full'}>
            <h2>Basic</h2>
            <Hero type={false} style={basicStyle}>
              <h2 className="c-text--white">Hero Title</h2>
              <p className="c-text--white u-mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              </p>
            </Hero>
  <SyntaxHighlighter style={monokai}>
    {`render() {
      let basicStyle = {
        background: 'linear-gradient(270deg,#4bd5f2,#2dd885)',
        backgroundSize: '400% 400%'
      }
      return (
        <Hero type={false} style={basicStyle}>
          <h2 className="c-text--white">Hero Title</h2>
          <p className="c-text--white u-mb-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          </p>
        </Hero>
      )
  }`}
  </SyntaxHighlighter>
          </Container>

          <Container size={'full'}>
            <h2>Image</h2>
            <Hero type={'image'} style={imgStyle}>
              <h2 className="c-text--white">Hero Title</h2>
              <p className="c-text--white u-mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              </p>
            </Hero>
  <SyntaxHighlighter style={monokai}>
    {`render() {
      let imgStyle = {
        backgroundImage: 'url(/nimbus-react/public/image/hero.jpg)',
      }
      return (
        <Hero type={'image'} style={imgStyle}>
          <h2 className="c-text--white">Hero Title</h2>
          <p className="c-text--white u-mb-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          </p>
        </Hero>
      )
  }`}
            </SyntaxHighlighter>
          </Container>

          <h2>Modifier</h2>
          <Table type={'basic'}>
            <tbody>
            <tr>
              <th>type</th>
              <td>false  ||  image</td>
            </tr>
            <tr>
              <th>mt (margin-top)</th>
              <td>large  ||  middle  ||  small</td>
            </tr>
            <tr>
              <th>style</th>
              <td>any</td>
            </tr>
            </tbody>
          </Table>

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

export default connect(mapStateToProps, mapDispatchToProps)(HeroPage)