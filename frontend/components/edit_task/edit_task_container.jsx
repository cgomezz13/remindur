import { connect } from 'react-redux';
import EditTaskForm from './edit_task_form';
import { allTasks } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    task: state.tasks[ownProps.match.params.taskId]
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAllTasks: () => dispatch(allTasks())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskForm);
