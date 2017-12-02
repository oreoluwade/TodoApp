import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { store } from '../store';
import { NotFound } from './NotFound';
import { HomePage } from './HomePage';
import { NavBar } from './common';

const App = () => (
  <Provider store={store}>
    <Switch>
      <NavBar/>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="*" component={NotFound}></Route>
    </Switch>
  </Provider>
);

export default App;
