import { RECEIVE_TASK, DELETE_TASK, FETCH_ALL_TASKS } from '../actions/task_actions';
import { merge } from 'lodash';

const taskReducer = (state={} , action) => {
  switch (action.type) {
    case RECEIVE_TASK:
      return merge({}, state, {[action.task.id]: action.task})
    case DELETE_TASK:
      const newState = merge({}, state);
        //need to delete here?
    default:
      return state;
  }
};

export default taskReducer;
