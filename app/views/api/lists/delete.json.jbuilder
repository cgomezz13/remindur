# debugger
#
# json.list do
#   json.partial! 'api/lists/list', list: @list
#   json.task_ids @tasks.pluck(:id)
# end
#
# debugger
#
# json.tasks do
#   @tasks.each do |task|
#     json.set! task.id do
#       json.partial! 'api/tasks/task', task: task
#     end
#   end
# end
#
# debugger

json.task_ids @task_ids
