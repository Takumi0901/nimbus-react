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
import StartPage from './Start'
import AlertPage from './component/Alert'
import AvatarPage from './component/Avatar'
import BarPage from './component/Bar'
import ButtonPage from './component/Button'
import CardPage from './component/Card'
import ClampPage from './component/Clamp'
import ContainerPage from './component/Container'
import FormPage from './component/Form'
import GridPage from './component/Grid'
import HeroPage from './component/Hero'
import LabelPage from './component/Label'
import MediaPage from './component/Media'
import MenuListPage from './component/MenuList'
import NavPage from './component/Nav'
import TablePage from './component/Table'
import TextPage from './component/Text'
import HeadingPage from './base/Heading'
import ParagraphPage from './base/Paragraph'
import AddressPage from './base/Address'
import ListPage from './base/List'
import DlPage from './base/Dl'
import AnchorPage from './base/Anchor'
import BorderPage from './utility/Border'
import ClearFixPage from './utility/Cf'
import DisplayPage from './utility/Display'
import FsPage from './utility/Fs'
import MarginPage from './utility/Margin'
import MiscPage from './utility/Misc'
import PaddingPage from './utility/Padding'
import PositionPage from './utility/Position'
import TaPage from './utility/Ta'
import TdPage from './utility/Td'
import TtPage from './utility/Tt'
import VaPage from './utility/Va'
import WsPage from './utility/Ws'
import WidthPage from './utility/Width'


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
            <Route exact path="/alert" component={AlertPage}/>
            <Route exact path="/start" component={StartPage}/>
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
            <Route exact path="/heading" component={HeadingPage}/>
            <Route exact path="/paragraph" component={ParagraphPage}/>
            <Route exact path="/address" component={AddressPage}/>
            <Route exact path="/list" component={ListPage}/>
            <Route exact path="/dl" component={DlPage}/>
            <Route exact path="/anchor" component={AnchorPage}/>
            <Route exact path="/border" component={BorderPage}/>
            <Route exact path="/cf" component={ClearFixPage}/>
            <Route exact path="/display" component={DisplayPage}/>
            <Route exact path="/fs" component={FsPage}/>
            <Route exact path="/margin" component={MarginPage}/>
            <Route exact path="/misc" component={MiscPage}/>
            <Route exact path="/padding" component={PaddingPage}/>
            <Route exact path="/position" component={PositionPage}/>
            <Route exact path="/ta" component={TaPage}/>
            <Route exact path="/td" component={TdPage}/>
            <Route exact path="/tt" component={TtPage}/>
            <Route exact path="/va" component={VaPage}/>
            <Route exact path="/ws" component={WsPage}/>
            <Route exact path="/width" component={WidthPage}/>
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