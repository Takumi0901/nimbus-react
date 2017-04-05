import {bindActionCreators} from 'redux'
import React, {Component, PropTypes} from 'react'
import {Provider} from 'react-redux'
import {connect} from 'react-redux'
import {syncHistoryWithStore, routeActions} from 'react-router-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './App'
import AlertPage from './Alert'
import AvatarPage from './Avatar'
import BarPage from './Bar'
import ButtonPage from './Button'
import CardPage from './Card'
import ClampPage from './Clamp'
import ContainerPage from './Container'
import FormPage from './Form'
import GridPage from './Grid'
import HeroPage from './Hero'
import LabelPage from './Label'
import MediaPage from './Media'
import MenuListPage from './MenuList'
import NavPage from './Nav'
import TablePage from './Table'
import TextPage from './Text'

class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }


  render() {
    const {store} = this.props

    // const history = syncHistoryWithStore(browserHistory, store)
    // history.listen(location => {
    //   setTimeout(() => {
    //     /** ブラウザバックならreturn **/
    //     if (location.action === 'POP') {
    //       return
    //     }
    //     /** それ以外はページトップへ移動 **/
    //     window.scrollTo(0, 0)
    //   })
    // })

    return (
      <Provider store={store}>
        <Router>
          <App>
            <Route exact path="/" component={AlertPage}/>
            <Route exact path="/avatar" component={AvatarPage}/>
            <Route exact path="/bar" component={BarPage}/>
            <Route exact path="/button" component={ButtonPage}/>
            <Route exact path="/card" component={CardPage}/>
            <Route exact path="/clamp" component={ClampPage}/>
            <Route exact path="/container" component={ContainerPage}/>
            <Route exact path="/form" component={FormPage}/>
            <Route exact path="/grid" component={GridPage}/>
            <Route exact path="/hero" component={HeroPage}/>
            <Route exact path="/label" component={LabelPage}/>
            <Route exact path="/media" component={MediaPage}/>
            <Route exact path="/menu" component={MenuListPage}/>
            <Route exact path="/nav" component={NavPage}/>
            <Route exact path="/table" component={TablePage}/>
            <Route exact path="/text" component={TextPage}/>
          </App>
        </Router>
      </Provider>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, routeActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)