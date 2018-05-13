const createList = (list) => {
  return $.ajax ({
    method: 'PATCH',
    url: '/api/lists',
    data: { list: list }
  })
}

const fetchAllLists = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/lists'
  })
}

const updateList = (list) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/lists/${list.id}`,
    data: { list: list }
  })
}

const deleteList = (id) => {
  return $.ajax ({
    method: 'DELETE',
    url: `/api/lists/${id}`
  })
}

const fetchListsTask = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/lists/${id}`
  })
}
