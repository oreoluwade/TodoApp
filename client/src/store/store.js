import {
  combineReducers,
  compose,
  createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

const store = createStore(
  combineReducers({
    form: formReducer,
  }),
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f),
);

export default store;
