import { RECEIVE_CURRENT_USER , LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return ({[action.user.id]: action.user});
    case LOGOUT_CURRENT_USER:
      return merge({}, {id: null});
    default:
      return state;
  }
}

export default sessionReducer;
