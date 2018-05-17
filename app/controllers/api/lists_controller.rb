class Api::ListsController < ApplicationController

  def index
    # @lists = current_user.lists
    @lists = List.where(user_id: current_user.id).includes(:tasks)
    render :index
  end

  def create
    @list = List.new(list_params)
    @list.user_id = current_user.id
    if @list.save
      render :show
    else
      errors = @list.errors.full_messages
      render json: error, status: 401
    end
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render :show
    else
      errors = list.errors.full_messages
      render json: error, status: 401
    end
  end

  def show
    @list = List.find(params[:id])
    render :show
  end

  def destroy
    list = List.find(params[:id])
    @task_ids = list.tasks.pluck(:id)
    list.destroy
    render :delete
  end

  private
  def list_params
    params.require(:list).permit(:list_title)
  end

end
