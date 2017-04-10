import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

import {changeTab}  from '../../redux/modules/Tab'

// components
import {
  Container,
  Tab,
  TabMenu,
  TabBtn,
  TabBody
} from 'nimbus-react'

import JsPageWrap from '../../components/JsPageWrap'

class TabPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  onClickTabAction(id) {
    this.props.changeTab(id)
  }

  render() {
    const {tabId} = this.props
    
    return (
      <JsPageWrap>
        <Container size={false}>
          <h1>Tab</h1>
          <Tab>
            <TabMenu>
              <TabBtn onClickTabAction={this.onClickTabAction.bind(this, 1)} classes={tabId === 1 && 'is-active'}>Tab1</TabBtn>
              <TabBtn onClickTabAction={this.onClickTabAction.bind(this, 2)} classes={tabId === 2 && 'is-active'}>Tab2</TabBtn>
              <TabBtn onClickTabAction={this.onClickTabAction.bind(this, 3)} classes={tabId === 3 && 'is-active'}>Tab3</TabBtn>
              <TabBtn onClickTabAction={this.onClickTabAction.bind(this, 4)} classes={tabId === 4 && 'is-active'}>Tab4</TabBtn>
            </TabMenu>
            <TabBody classes={tabId === 1 && 'is-show'}>
              content 1 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </TabBody>
            <TabBody classes={tabId === 2 && 'is-show'}>
              content 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </TabBody>
            <TabBody classes={tabId === 3 && 'is-show'}>
              content 3 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </TabBody>
            <TabBody classes={tabId === 4 && 'is-show'}>
              content 4 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </TabBody>
          </Tab>

          <Container size={'full'}>
            <h2>Containers</h2>
            <SyntaxHighlighter style={monokai}>
              {`import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import {changeTab}  from '../../redux/modules/Tab'

class TabPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  onClickTabAction(id) {
    this.props.changeTab(id)
  }

  render() {
    const {tabId} = this.props

    return (
      <Tab style={{style}}>
  <TabMenu style={{style}}>
    <TabBtn style={{style}} onClickTabAction={this.onClickTabAction.bind(this, 1)} classes={tabId === 1 && 'is-active'}>Tab1</TabBtn>
    <TabBtn style={{style}} onClickTabAction={this.onClickTabAction.bind(this, 2)} classes={tabId === 2 && 'is-active'}>Tab2</TabBtn>
    <TabBtn style={{style}} onClickTabAction={this.onClickTabAction.bind(this, 3)} classes={tabId === 3 && 'is-active'}>Tab3</TabBtn>
    <TabBtn style={{style}} onClickTabAction={this.onClickTabAction.bind(this, 4)} classes={tabId === 4 && 'is-active'}>Tab4</TabBtn>
  </TabMenu>
  <TabBody classes={tabId === 1 && 'is-show'} style={{style}}>
    content 1 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
  </TabBody>
  <TabBody classes={tabId === 2 && 'is-show'} style={{style}}>
    content 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
  </TabBody>
  <TabBody classes={tabId === 3 && 'is-show'} style={{style}}>
    content 3 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
  </TabBody>
  <TabBody classes={tabId === 4 && 'is-show'} style={{style}}>
    content 4 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
  </TabBody>
</Tab>
    )
  }
}

function mapStateToProps(state) {
  return {
    tabId: state.tab.tabId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {changeTab}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabPage)`}
            </SyntaxHighlighter>
          </Container>


          <Container size={'full'}>
            <h2>Redux</h2>
            <SyntaxHighlighter style={monokai}>
              {`// Action types
export const CHANGE_TAB = 'CHANGE_TAB'

// Action
export function changeTab(id) {
  return {
    type: CHANGE_TAB,
    tabId: id
  }
}

// Reducer
export default function tabReducer(state = {tabId: 1}, action) {
  const {type} = action
  switch (type) {
    case CHANGE_TAB:
      return Object.assign({}, state, {tabId: action.tabId})
    default:
      return state
  }
}



import {combineReducers} from "redux"
import {routerReducer} from 'react-router-redux'

export default combineReducers({
  tab: tabReducer
})`}
            </SyntaxHighlighter>
          </Container>

        </Container>
      </JsPageWrap>
    )
  }
}

function mapStateToProps(state) {
  return {
    tabId: state.tab.tabId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {changeTab}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabPage)