import { RECEIVE_TASK, FETCH_ALL_TASKS } from '../actions/task_actions';
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
    case DELETE_LIST:
      const newState = merge({}, state);
      action.taskIds.forEach(id => {
        delete newState[id]
      })
      return newState;
    default:
      return state;
  }
};

export default taskReducer;
