import React from 'react';
import { FETCH_ALL_LISTS, CREATE_NEW_LIST, UPDATE_LIST } from '../actions/list_actions';
import { merge } from 'lodash';

const listReducer = (state={}, action) => {
  switch (action.type) {
    case FETCH_ALL_LISTS:
      return action.lists;
    case CREATE_NEW_LIST:
      return merge({}, state, {[action.list.id]: action.list})
    case UPDATE_LIST:
      return merge({}, state, {[action.list.id]: action.list})
    default:
      return state;
  }
}

export default listReducer;
