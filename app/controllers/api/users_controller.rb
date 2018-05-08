class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      errors = @user.errors.full_messages
      render json: errors
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email)
  end

end
