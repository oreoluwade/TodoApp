import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <Router>
    <AppContainer>
      <App />
    </AppContainer>
  </Router>,
  document.getElementById('root'),
);
