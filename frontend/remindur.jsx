import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser){
    const preloadedState = {
      session: {[window.currentUser.id]: window.currentUser}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.logout = logout;

  ReactDOM.render(<Root store={store}/>, document.getElementById("root"))
})
