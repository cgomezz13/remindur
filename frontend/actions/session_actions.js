import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => {
  return  {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  };
};

export const logoutCurrentUser = () => {
    return {type: LOGOUT_CURRENT_USER};
};

export const logout = () => {
  return (dispatch) => {
    return SessionAPIUtil.logOut().then(() => {
      return dispatch(logoutCurrentUser());
    });
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.logIn(user).then(
      user => {
        return dispatch(receiveCurrentUser(user));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const signUp = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.signUp(user).then(user => {
      return dispatch(receiveCurrentUser(user));
    },
    errors => {
      return dispatch(receiveErrors(errors.responseJSON));
    }
  );
  };
};
