class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      username: params[:user][:username],
      password: params[:user][:password]
    )
    if @user
      login(@user)
      render "api/tasks"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: {status: 404}
    end
  end

end
