import { connect } from 'react-redux';
import EditTaskForm from './edit_task_form';
import { allTasks, updateTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  const task = state.tasks[ownProps.match.params.taskId] || {};
  const list = state.lists[task.list_id] || {};
  return ({
    task: task,
    list: list
  })
}


const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAllTasks: () => dispatch(allTasks()),
    update: (task) => dispatch(updateTask(task))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskForm);
