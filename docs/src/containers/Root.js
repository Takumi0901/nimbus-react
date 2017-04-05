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
import MenuPage from './Menu'
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
            <Route path="/renimbus/" component={HomePage}/>
            <Route path="/globalmenu" component={MenuPage}/>
            <Route path="/start" component={StartPage}/>
            <Route path="/alert" component={AlertPage}/>
            <Route path="/avatar" component={AvatarPage}/>
            <Route path="/bar" component={BarPage}/>
            <Route path="/button" component={ButtonPage}/>
            <Route path="/card" component={CardPage}/>
            <Route path="/clamp" component={ClampPage}/>
            <Route path="/container" component={ContainerPage}/>
            <Route path="/form" component={FormPage}/>
            <Route path="/grid" component={GridPage}/>
            <Route path="/hero" component={HeroPage}/>
            <Route path="/label" component={LabelPage}/>
            <Route path="/media" component={MediaPage}/>
            <Route path="/menu" component={MenuListPage}/>
            <Route path="/nav" component={NavPage}/>
            <Route path="/table" component={TablePage}/>
            <Route path="/text" component={TextPage}/>
            <Route path="/heading" component={HeadingPage}/>
            <Route path="/paragraph" component={ParagraphPage}/>
            <Route path="/address" component={AddressPage}/>
            <Route path="/list" component={ListPage}/>
            <Route path="/dl" component={DlPage}/>
            <Route path="/anchor" component={AnchorPage}/>
            <Route path="/border" component={BorderPage}/>
            <Route path="/cf" component={ClearFixPage}/>
            <Route path="/display" component={DisplayPage}/>
            <Route path="/fs" component={FsPage}/>
            <Route path="/margin" component={MarginPage}/>
            <Route path="/misc" component={MiscPage}/>
            <Route path="/padding" component={PaddingPage}/>
            <Route path="/position" component={PositionPage}/>
            <Route path="/ta" component={TaPage}/>
            <Route path="/td" component={TdPage}/>
            <Route path="/tt" component={TtPage}/>
            <Route path="/va" component={VaPage}/>
            <Route path="/ws" component={WsPage}/>
            <Route path="/width" component={WidthPage}/>
            <Route path="/tab" component={TabPage}/>
            <Route path="/modal" component={ModalPage}/>
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