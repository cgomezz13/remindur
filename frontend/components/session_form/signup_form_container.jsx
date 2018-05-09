import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return ({
    info: {'First Name': '', 'Last Name': '', 'Email': '', 'Username': '', 'Password': ''},
    formType: 'Sign Up'
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    action: (user) => (dispatch(signUp(user)))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
