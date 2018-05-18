import { connect } from 'react-redux';
import Homepage from './homepage';
import { logout } from '../../actions/session_actions';
import { allTasks } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  // written to search through tasks, not functioning properly
  let tasks, taskIds;
  // if (ownProps.location.pathname === '/tasks') {
    if (jQuery.isEmptyObject(state.tasks)) {
      tasks = [];
    } else {
      tasks = Object.values(state.tasks);
    // }
  // } else {
  //   const listUrl = ownProps.location.pathname.split('/');
  //   const listId = +listUrl[2];
  //   if (jQuery.isEmptyObject(state.lists)) {
  //     taskIds = []
  //   } else {
  //     taskIds = state.lists[listId].task_ids;
  //   }
  //   tasks = taskIds.map(id => {
  //     return (state.tasks[id] || {} )
  //   })
  }

  debugger
  return ({
    current_user: state.session.user.username,
    tasks: tasks
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    fetchAllTasks: () => dispatch(allTasks())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
