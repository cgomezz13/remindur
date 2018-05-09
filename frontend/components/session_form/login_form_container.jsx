import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return ({
    info: {'Username': '', 'Password': ''},
    formType: 'Log In'
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    action: (user) => (dispatch(login(user)))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
