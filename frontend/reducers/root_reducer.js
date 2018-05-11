import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import taskReducer from './tasks_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  tasks: taskReducer
});

export default rootReducer;
