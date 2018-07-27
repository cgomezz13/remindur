import { RECEIVE_LIST_ERRORS, CREATE_NEW_LIST } from "../actions/list_actions";

const listErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIST_ERRORS:
      return action.errors;
    case CREATE_NEW_LIST:
      const newState = [];
      return newState;
    default:
      return state;
  }
};

export default listErrorsReducer;
