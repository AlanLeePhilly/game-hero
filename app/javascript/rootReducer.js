import { combineReducers } from 'redux'

import currentUser from './sharedResources/reducers/currentUser'
import eventShow from './subApps/eventShowPage/reducers/eventShow'

export default combineReducers({
  currentUser,
  eventShow
})