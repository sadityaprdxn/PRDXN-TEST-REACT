import React from 'react';
import '../scss/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { createStore,  applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { userReducer } from '../redux/reducers/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import Userslist from './Userslist';
import Error from './Error';

const store = createStore( userReducer, composeWithDevTools(applyMiddleware( thunk )));

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' render={() => (<Redirect to='/listing/1'/>)}/>
          <Route exact path='/listing/:pageNumber'>
            <Userslist />
          </Route>
          <Route exact path='/error'>
            <Error />
          </Route>
          <Route path='*' render={() => (<Redirect to='/error'/>)}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
