import React from 'react';
import { FETCH_ALL_LISTS, CREATE_NEW_LIST, UPDATE_LIST, FETCH_A_LIST, DELETE_LIST } from '../actions/list_actions';
import { RECEIVE_TASK } from '../actions/task_actions';
import { merge } from 'lodash';

const listReducer = (state={}, action) => {
  switch (action.type) {
    case FETCH_ALL_LISTS:
      return action.lists;
    case CREATE_NEW_LIST:
      return merge({}, state, {[action.list.list.id]: action.list.list})
    case UPDATE_LIST:
      return merge({}, state, {[action.list.list.id]: action.list.list})
    case FETCH_A_LIST:
      return merge({}, state, {[action.list.id]: action.list})
    case RECEIVE_TASK:
      if (action.task.list_id) {
        const newState = merge({}, state);
        const list = newState[action.task.list_id];
        if (list.task_ids.includes(action.task.id)) {
          return state;
        }
        list.task_ids.push(action.task.id);
        return newState;
      } else {
        return state;
      }
    case DELETE_LIST:
      const newState = merge({},state);
      delete newState[action.listId];
      return newState;
    default:
      return state;
  }
}

export default listReducer;
