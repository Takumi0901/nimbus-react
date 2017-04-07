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
  Hero,
  ButtonLink
} from 'nimbus-react'

class Home extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    let imgStyle = {
      backgroundImage: 'url(/nimbus-react/public/image/hero.jpg)',
    }
    return (
      <div>
        <Hero type={'image'} style={imgStyle} classes="u-ta-c">
          <h2><img src="/nimbus-react/public/image/logo-white.png" alt="" width="300"/></h2>
          <p className="c-text--white u-fz-18 u-mb-0">
            A design system made for React.js
          </p>
          <p className="c-text--white u-fz-18 u-mb-0">
            component which can be used in a project of React + Redux.
          </p>
        </Hero>
        <div className="l-wrapper">
          <Grid gutters={true} query={true} align={'center'}>
            <GridCol size={9}>
              <Container>
                <ButtonLink href={'https://github.com/Takumi0901/nimbus-react'} size={'large'} style={{backgroundColor: '#333', color: '#fff'}}>View on GitHub</ButtonLink>
              </Container>
              <Container>
                <h2>The feature of Nimbus</h2>
                <p>component which can be used in a project of React + Redux in general-purpose way mainly was made.</p>
                <h3>About State management</h3>
                <p>I wanted to make sure that it can correspond flexibly according to the project, so State isn't being managed at Nimbus-react library. The policy State manages respectively in Redux in the project.</p>
                <h3>PostCSS</h3>
                <p>CSS is being changed using PostCSS in Nimbus.CSS holds a used plug-in at a minimum to avoid the one of being too to will be in the original specification.</p>
                <h4>Plugin</h4>
                <ul>
                  <li>postcss-cssnext</li>
                  <li>postcss-import</li>
                  <li>cssnano</li>
                </ul>

                <h3>Responsive & Mobile first</h3>
                <p>The grid system is flexbox based. So it's simple and excellent than the float layout! Same height box, Reverse grid, Equal spacing layout and more.</p>

                <h3>Component which is often used was collected.</h3>
                <p>component which is often used by a corporate site was collected. It's possible to button up the favorite color and size by changing the color and the size which become a basis.</p>
              </Container>
              <Container>
                <h2>CSS Architecture</h2>
                <p>The architecture of CSS in Nimbus is based on FLOCSS. There is variables.css which manages a variable of CSS by a core directory. It's made compilation now using Gulp.</p>
<SyntaxHighlighter style={monokai}>
{`├ core/
├ foundation/
├ layout/
└ object/
  ├ component/
  ├ project/
  └ utility/`}
</SyntaxHighlighter>
              </Container>
              <Container>
                <h2>License</h2>
                <p>Nimbus licensed under MIT. Nimbus is absolutely free for personal or commercial use.</p>
              </Container>
            </GridCol>
          </Grid>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)