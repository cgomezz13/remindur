import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import taskReducer from './tasks_reducer';
import { combineReducers } from 'redux';
import listReducer from './lists_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  tasks: taskReducer,
  lists: listReducer
});

export default rootReducer;
