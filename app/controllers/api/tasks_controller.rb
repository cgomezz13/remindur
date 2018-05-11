class Api::TasksController < ApplicationController

  def index
    @tasks = Task.all
    render :index
  end

  def create
    @task = Task.new(task_params)
    @task.user_id = current_user.id
    if @task.save
      render :show
    else
      error = @task.errors.full_messages
      debugger
      render json: error, status: 401
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render :show
    else
      error = @task.errors.full_messages
      render json: error, status: 401
    end
  end

  def destroy
    debugger
    task = Task.find(params[:id])
    task.destroy
    render :index
  end

  private
  def task_params
    params.require(:task).permit(:body, :due_date, :status, :note, :list_id)
  end

end
