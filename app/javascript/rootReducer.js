import { combineReducers } from 'redux'

import currentUser from './sharedResources/reducers/currentUser'
import gameSearch from './sharedResources/reducers/gameSearch'
import eventShow from './subApps/eventShowPage/reducers/eventShow'
import gamesCollection from './subApps/userGamesCollection/reducers/gamesCollection'

export default combineReducers({
  currentUser,
  eventShow,
  gamesCollection,
  gameSearch
})