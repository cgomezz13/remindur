import { RECEIVE_TASK, FETCH_ALL_TASKS, DELETE_TASK } from '../actions/task_actions';
import { FETCH_A_LIST, DELETE_LIST } from '../actions/list_actions';
import { merge } from 'lodash';

const taskReducer = (state={} , action) => {
  switch (action.type) {
    case RECEIVE_TASK:
      return merge({}, state, {[action.task.id]: action.task})
    case FETCH_ALL_TASKS:
      return action.tasks
    case FETCH_A_LIST:
      return merge({}, state, action.tasks)
    case DELETE_TASK:
      const newState = merge({}, state)
      delete newState[action.task.id]
      return newState;
    case DELETE_LIST:
      const newerState = merge({}, state);
      action.taskIds.forEach(id => {
        delete newerState[id]
      })
      return newerState;
    default:
      return state;
  }
};

export default taskReducer;
