import {
  combineReducers,
  compose,
  createStore } from 'redux';

const store = createStore(
  combineReducers(),
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f),
);

export default store;
