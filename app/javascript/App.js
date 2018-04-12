import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Dashboard from './subApps/dashboard/containers/Dashboard'
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
        </Route>
      </Router>
    </Provider>
  )
}

export default App;
