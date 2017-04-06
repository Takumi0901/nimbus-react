import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

import {changeModal}  from '../../redux/modules/Modal'

// components
import {
  Container,
  Button,
  Modal,
  ModalBottom,
  ModalContent,
  ModalHeader
} from 'nimbus-react'

import JsPageWrap from '../../components/JsPageWrap'

class ModalPage extends Component {
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
    const {showModal} = this.props

    return (
      <JsPageWrap>
        <Container size={false}>
          <h1>Modal</h1>
          <Button onClickAction={() => {this.props.changeModal('sample')}} color={'primary'} size={false}>Modal Open</Button>

          <Modal name={'sample'} showModal={showModal} onClickAction={() => {this.props.changeModal(false)}}>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalContent>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </ModalContent>
            <ModalBottom>
              <Button onClickAction={() => {this.props.changeModal(false)}} color={false} size={false}>Close</Button>
            </ModalBottom>
          </Modal>

          <Container size={'full'}>
            <h2>Containers</h2>
            <SyntaxHighlighter style={monokai}>
              {`import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import {changeModal}  from '../../redux/modules/Modal'

// components
import {
  Container,
  Button,
  Modal,
  ModalBottom,
  ModalContent,
  ModalHeader
} from 'nimbus-react'

class ModalPage extends Component {
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
    const {showModal} = this.props

    return (
      <div>
        <h1>Modal</h1>
        <Button onClickAction={() => {this.props.changeModal('sample')}} color={'primary'} size={false}>Modal Open</Button>

        <Modal name={'sample'} showModal={showModal}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalContent>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          </ModalContent>
          <ModalBottom>
            <Button onClickAction={() => {this.props.changeModal(false)}} color={false} size={false}>Close</Button>
          </ModalBottom>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.modal.showModal
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {changeModal}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage)`}
            </SyntaxHighlighter>
          </Container>


          <Container size={'full'}>
            <h2>Redux</h2>
            <SyntaxHighlighter style={monokai}>
              {`// Action types
export const CHANGE_MODAL = 'CHANGE_MODAL'

// Action
export function changeModal(name) {
  return {
    type: CHANGE_MODAL,
    showModal: name
  }
}

// Reducer
export default function modalReducer(state = {showModal: false}, action) {
  const {type} = action
  switch (type) {
    case CHANGE_MODAL:
      return Object.assign({}, state, {showModal: action.showModal})
    default:
      return state
  }
}





import {combineReducers} from "redux"
import modalReducer from "./modules/Modal"

export default combineReducers({
  modal: modalReducer
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
    showModal: state.modal.showModal
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {changeModal}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage)