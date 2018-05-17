import React from 'react';
import * as ListAPIUtil from '../util/list_api_util';

export const FETCH_ALL_LISTS = 'FETCH_ALL_LISTS';
export const CREATE_NEW_LIST = 'CREATE_NEW_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const FETCH_A_LIST = 'FETCH_A_LIST';
export const DELETE_LIST = 'DELETE_LIST';


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

const fetchAList = ({ list, tasks }) => {
  return ({
    type: FETCH_A_LIST,
    list,
    tasks
  })
}

const removelist = ({listId, taskIds}) => {
  return ({
    type: DELETE_LIST,
    listId,
    taskIds
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
    return ListAPIUtil.deleteList(id).then(({task_ids: taskIds}) => {
      return dispatch(removelist({taskIds, listId: id}))
    });
  };
};

export const fetchList = (id) => {
  return dispatch => {
    return ListAPIUtil.fetchListsTask(id).then(list => {
      return dispatch(fetchAList(list))
    });
  };
};
