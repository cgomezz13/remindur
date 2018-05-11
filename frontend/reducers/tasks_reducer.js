import { RECEIVE_TASK, FETCH_ALL_TASKS } from '../actions/task_actions';
import { merge } from 'lodash';

const taskReducer = (state={} , action) => {
  switch (action.type) {
    case RECEIVE_TASK:
      return merge({}, state, {[action.task.id]: action.task})
    case FETCH_ALL_TASKS:
      return action.tasks
    default:
      return state;
  }
};

export default taskReducer;
