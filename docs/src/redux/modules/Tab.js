// Action types
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

