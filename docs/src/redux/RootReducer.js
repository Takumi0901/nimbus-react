import {combineReducers} from "redux"
import {routerReducer} from 'react-router-redux'
import tabReducer from "./modules/Tab"
import modalReducer from "./modules/Modal"

export default combineReducers({
  routing: routerReducer,
  tab: tabReducer,
  modal: modalReducer
})