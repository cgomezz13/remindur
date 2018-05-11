import React from 'react';
import { connect } from 'react-redux';
import { createTask, deleteTask, allTasks, updateTask } from '../../actions/task_actions';
import taskForm from './task_form';

const mapStateToProps = (state) => {
  return ({
    tasks: state.task
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createTask: (task) => dispatch(createTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id)),
    updateTask: (task) => dispatch(updateTask(task))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(taskForm);
