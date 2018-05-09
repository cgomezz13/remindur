class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render json: { id: @user.id, first_name: @user.first_name, last_name: @user.last_name, email: @user.email, username: @user.username,  }
    else
      errors = @user.errors.full_messages
      render json: errors
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :username, :password)
  end

end
