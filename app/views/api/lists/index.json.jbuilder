@lists.each do |list|
  json.set! list.id do
    json.partial! 'api/lists/list', list: list
    json.task_ids list.tasks.pluck(:id)
  end
end
