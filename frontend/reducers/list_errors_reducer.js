import {
  RECEIVE_LIST_ERRORS,
  CREATE_NEW_LIST,
  CLEAR_LIST_ERRORS
} from "../actions/list_actions";

const listErrorsReducer = (state = [], action) => {
  const noErrors = [];
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIST_ERRORS:
      return action.errors;
    case CREATE_NEW_LIST:
      return noErrors;
    case CLEAR_LIST_ERRORS:
      return noErrors;
    default:
      return state;
  }
};

export default listErrorsReducer;
