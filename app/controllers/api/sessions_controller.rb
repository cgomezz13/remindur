class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render json: { id: @user.id, first_name: @user.first_name, last_name: @user.last_name, email: @user.email, username: @user.username,  }
    else
      render json: ["Invalid username & password combination"], status: 401
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
