json.list do
  json.partial! 'api/lists/list', list: @list
  json.task_ids @list.tasks.pluck(:id)
end


json.tasks do
  @list.tasks.each do |task|
    json.set! task.id do
      json.partial! 'api/tasks/task', task: task
    end
  end
end
