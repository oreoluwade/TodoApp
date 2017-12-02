import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';


ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <AppContainer>
        <App />
      </AppContainer>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
