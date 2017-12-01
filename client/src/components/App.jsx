import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { store } from '../store';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

export default App;
