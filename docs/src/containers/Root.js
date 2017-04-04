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
          </App>
        </Router>
        {/*<App/>*/}
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