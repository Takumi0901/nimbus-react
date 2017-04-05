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
import HomePage from './Home'
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
import TabPage from './js/Tab'
import ModalPage from './js/Modal'


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
            <Route path="/renimbus/renimbus/" component={HomePage}/>
            <Route path="/renimbus/start" component={StartPage}/>
            <Route path="/renimbus/alert" component={AlertPage}/>
            <Route path="/renimbus/avatar" component={AvatarPage}/>
            <Route path="/renimbus/bar" component={BarPage}/>
            <Route path="/renimbus/button" component={ButtonPage}/>
            <Route path="/renimbus/card" component={CardPage}/>
            <Route path="/renimbus/clamp" component={ClampPage}/>
            <Route path="/renimbus/container" component={ContainerPage}/>
            <Route path="/renimbus/form" component={FormPage}/>
            <Route path="/renimbus/grid" component={GridPage}/>
            <Route path="/renimbus/hero" component={HeroPage}/>
            <Route path="/renimbus/label" component={LabelPage}/>
            <Route path="/renimbus/media" component={MediaPage}/>
            <Route path="/renimbus/menu" component={MenuListPage}/>
            <Route path="/renimbus/nav" component={NavPage}/>
            <Route path="/renimbus/table" component={TablePage}/>
            <Route path="/renimbus/text" component={TextPage}/>
            <Route path="/renimbus/heading" component={HeadingPage}/>
            <Route path="/renimbus/paragraph" component={ParagraphPage}/>
            <Route path="/renimbus/address" component={AddressPage}/>
            <Route path="/renimbus/list" component={ListPage}/>
            <Route path="/renimbus/dl" component={DlPage}/>
            <Route path="/renimbus/anchor" component={AnchorPage}/>
            <Route path="/renimbus/border" component={BorderPage}/>
            <Route path="/renimbus/cf" component={ClearFixPage}/>
            <Route path="/renimbus/display" component={DisplayPage}/>
            <Route path="/renimbus/fs" component={FsPage}/>
            <Route path="/renimbus/margin" component={MarginPage}/>
            <Route path="/renimbus/misc" component={MiscPage}/>
            <Route path="/renimbus/padding" component={PaddingPage}/>
            <Route path="/renimbus/position" component={PositionPage}/>
            <Route path="/renimbus/ta" component={TaPage}/>
            <Route path="/renimbus/td" component={TdPage}/>
            <Route path="/renimbus/tt" component={TtPage}/>
            <Route path="/renimbus/va" component={VaPage}/>
            <Route path="/renimbus/ws" component={WsPage}/>
            <Route path="/renimbus/width" component={WidthPage}/>
            <Route path="/renimbus/tab" component={TabPage}/>
            <Route path="/renimbus/modal" component={ModalPage}/>
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