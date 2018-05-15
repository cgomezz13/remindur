import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './task_form';
import { fetchList } from '../../actions/list_actions';
import { allTasks, createTask } from '../../actions/task_actions';


class ListTaskForm extends React.Component {
  componentWillMount () {
    this.props.action(this.props.match.params.listId);
  }

  render() {
    const { tasks, action, formType, match, createTask } = this.props;
    return (
      <TaskForm match={match} tasks={tasks} action={action} createTask={createTask} formType={formType}/>
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
    return ( state.tasks[id] );
  });

  return ({
    tasks: list_tasks,
    formType: 'list_task'
  })
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    action: (id) => dispatch(fetchList(id)),
    createTask: (task) => dispatch(createTask(task))
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(ListTaskForm);
