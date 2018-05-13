export const createList = (list) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/lists',
    data: { list: list }
  })
}

export const fetchAllLists = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/lists'
  })
}

export const updateList = (list) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/lists/${list.id}`,
    data: { list: list }
  })
}

export const deleteList = (id) => {
  return $.ajax ({
    method: 'DELETE',
    url: `/api/lists/${id}`
  })
}

export const fetchListsTask = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/lists/${id}`
  })
}
