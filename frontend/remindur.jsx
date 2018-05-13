import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { logout } from './actions/session_actions';

import { createTask, deleteTask, updateTask } from './actions/task_actions';
import { fetchAllLists, createNewList, updateList, deleteList } from './actions/list_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser){
    const preloadedState = {
      session: {user: window.currentUser}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.logout = logout;
  window.createTask = createTask;
  window.deleteTask = deleteTask;
  window.updateTask = updateTask;
  window.fetchAllLists = fetchAllLists;
  window.createNewList = createNewList;
  window.updateList = updateList;
  window.deleteList = deleteList;


  ReactDOM.render(<Root store={store}/>, document.getElementById("root"))
})
