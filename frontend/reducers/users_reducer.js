import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER , LOGOUT_CURRENT_USER } from '../actions/session_actions';

// NOT USING YET

const usersReducer = (state={}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user})
    default:

  }
}
