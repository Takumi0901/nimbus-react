// Action types
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

