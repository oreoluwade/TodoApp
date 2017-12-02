import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import styled from 'styled-components';
import { store } from '../store';
import { NotFound } from './NotFound';
import { HomePage } from './HomePage';
import { NavBar } from './common';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`;

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Wrapper>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Wrapper>
    </MuiThemeProvider>
  </Provider>
);

export default App;
