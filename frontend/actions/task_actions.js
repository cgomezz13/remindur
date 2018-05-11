import * as TaskAPIUtil from '../util/task_api_util';

export const FETCH_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
// export const DELETE_TASK = 'DELETE_TASK'; delete task should return all tasks now?

export const receiveTask = (task) => {
  return {
    type: RECEIVE_TASK,
    task
  };
};

// export const deleteATask = () => {
//   return {
//     type: DELETE_TASK
//   };
// };

export const fetchAllTasks = (tasks) => {
  return {
    type: FETCH_ALL_TASKS,
    tasks
  };
};

export const createTask = (task) => {
  return (dispatch) => {
    return TaskAPIUtil.createTask(task).then(task => {
      return dispatch(receiveTask(task));
    });
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    return TaskAPIUtil.deleteTask(id).then(tasks => {
      return dispatch(fetchAllTasks(tasks));
    });
  };
};

export const allTasks = () => {
  return (dispatch) => {
    return TaskAPIUtil.allTasks().then(task => {
      debugger
      return dispatch(fetchAllTasks(task));
    });
  }
};

export const updateTask = (task) => {
  return (dispatch) => {
    return TaskAPIUtil.updateTask(task).then(task => {
      return dispatch(receiveTask(task));
    });
  };
};
