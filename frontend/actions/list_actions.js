import React from 'react';
import * as ListAPIUtil from '../util/list_api_util';

export const FETCH_ALL_LISTS = 'FETCH_ALL_LISTS';
export const CREATE_NEW_LIST = 'CREATE_NEW_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';


export const GetAllLists = (lists) => {
  return {
    type: FETCH_ALL_LISTS,
    lists
  }
}

export const createList = (list) => {
  return ({
    type: CREATE_NEW_LIST,
    list
  })
}


export const updateAList = (list) => {
  return({
    type: UPDATE_LIST,
    list
  })
}

export const fetchAllLists = () => {
  return dispatch => {
    return ListAPIUtil.fetchAllLists().then(lists => {
      return (dispatch(GetAllLists(lists)));
    })
  }
}

export const createNewList = (list) => {
  return dispatch => {
    return ListAPIUtil.createList(list).then(list => {
      return dispatch(createList(list));
    })
  }
}

export const updateList = (list) => {
  return dispatch => {
    return ListAPIUtil.updateList(list).then(list=>{
      return dispatch(updateAList(list));
    });
  };
};

export const deleteList = (id) => {
  return dispatch => {
    return ListAPIUtil.deleteList(id).then(lists => {
      return dispatch(GetAllLists(lists))
    });
  };
};
