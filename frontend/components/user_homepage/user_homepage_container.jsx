import { connect } from 'react-redux';
import Homepage from './homepage';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
    current_user: state.session.user.username
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
