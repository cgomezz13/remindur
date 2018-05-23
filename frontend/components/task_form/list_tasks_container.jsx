import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './task_form';
import { fetchList } from '../../actions/list_actions';
import { allTasks, createTask, deleteTask } from '../../actions/task_actions';


class ListTaskForm extends React.Component {
  render() {
    const { tasks, action, formType, match, createTask, history, deleteTask } = this.props;
    return (
      <TaskForm match={match} tasks={tasks} action={action} createTask={createTask} formType={formType} deleteTask={deleteTask} history={history}/>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  const listId = ownProps.match.params.listId;
  const list = state.lists[listId];
  if (list === undefined) {
    return {
      tasks: [],
      formType: 'list_task'
    }
  }
  const list_tasks = list.task_ids.map(id => {
    return ( state.tasks[id] || {} );
  });

  return ({
    tasks: list_tasks,
    formType: 'list_task'
  })
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    action: (id) => dispatch(fetchList(id)),
    createTask: (task) => dispatch(createTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id))
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(ListTaskForm);
