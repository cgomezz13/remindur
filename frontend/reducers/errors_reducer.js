import sessionErrorsReducer from "./session_errors_reducer";
import listErrorsReducer from "./list_errors_reducer";
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  listErrors: listErrorsReducer
});

export default errorsReducer;
