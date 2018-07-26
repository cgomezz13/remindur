import { RECEIVE_LIST_ERRORS, UPDATE_LIST } from "../actions/list_actions";

const listErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIST_ERRORS:
      return action.errors;
    case UPDATE_LIST:
      return action.errors;
    default:
      return state;
  }
};

export default listErrorsReducer;
