import * as TaskAPIUtil from '../util/task_api_util';

export const FETCH_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const receiveTask = (task) => {
  return {
    type: RECEIVE_TASK,
    task
  };
};

export const deleteATask = () => {
  return {
    type: DELETE_TASK
  };
};

export const fetchAllTasks = (tasks) => {
  return {
    type: FETCH_ALL_TASKS,
    tasks
  };
};

export const createTask = (task) => {
  return (dispatch) => {
    return TaskAPIUtil.createTask(task).then(task => {
      return (dispatch(receiveTask(task)));
    });
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    return TaskAPIUtil.deleteTask(id).then(() => {
      return dispatch(deleteTask());
    });
  };
};

export const allTasks = () => {
  return TaskAPIUtil.allTasks().then(task => {
    return dispatch(fetchAllTasks(task));
  });
};
