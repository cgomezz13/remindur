import { connect } from 'react-redux';
import Homepage from './homepage';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let tasks, taskIds;
  if (ownProps.location.pathname === '/tasks') {
    if (jQuery.isEmptyObject(state.tasks)) {
      tasks = [];
    } else {
      tasks = Object.values(state.tasks);
    }
  } else {
    const listUrl = ownProps.location.pathname.split('/');
    const listId = +listUrl[2];
    if (jQuery.isEmptyObject(state.lists)) {
      taskIds = []
    } else {
      taskIds = state.lists[listId].task_ids;
    }
    tasks = taskIds.map(id => {
      return (state.tasks[id] || {} )
    })
  }

  return ({
    current_user: state.session.user.username,
    tasks: tasks
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
