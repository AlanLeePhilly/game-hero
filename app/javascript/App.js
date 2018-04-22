import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import Dashboard from './subApps/dashboard/containers/Dashboard'
import EventShowContainer from './subApps/eventShowPage/containers/EventShowContainer'
import GamesCollectionContainer from './subApps/userGamesCollection/containers/GamesCollectionContainer'

import reducer from './rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  ));


const App = props => {
  return(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={Dashboard} />
          <Route path='events/:id' component={EventShowContainer} />
          <Route path='users/:id/collection' component={GamesCollectionContainer} />
        </Route>
      </Router>
    </Provider>
  )
}

export default App;
