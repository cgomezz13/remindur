import { RECEIVE_CURRENT_USER , LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state={user: null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return ({user: action.user});
    case LOGOUT_CURRENT_USER:
      return {user: null};
    default:
      return state;
  }
}

export default sessionReducer;
