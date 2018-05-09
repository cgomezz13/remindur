import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    formType: ownProps.location.pathname.slice(1),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let todo;

  if (ownProps.formType ==='Sign Up') {
    return({
      action: (user) => (signUp(user))
    });
  } else {
    return({
      action: (user) => (login(user))
    });
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
