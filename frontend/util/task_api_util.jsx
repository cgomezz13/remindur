export const createTask = (task) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/tasks',
    data: { task: task }
  });
};

export const deleteTask = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/tasks/${id}`
  })
}

export const updateTask = (task) => {
  return $.ajax ({
    method: 'PATCH',
    url: `/api/tasks/${id}`,
    data: { task: task }
  });
};

export const allTasks = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/tasks'
  })
}
