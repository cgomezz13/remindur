import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    formType: ownProps.location.pathname.slice(1),
    errors: state.errors.sessionErrors,
    demo: {username: 'guest', password: 'password'}
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  if (ownProps.location.pathname.slice(1) === 'signup') {
    return({
      action: (user) => dispatch(signUp(user))
    });
  } else {
    return({
      action: (user) => dispatch(login(user))
    });
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
