import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.store = store
  // tesing
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

});
