import {combineReducers} from "redux"
import {routerReducer} from 'react-router-redux'
import tabReducer from "./modules/Tab"

export default combineReducers({
  routing: routerReducer,
  tab: tabReducer
})