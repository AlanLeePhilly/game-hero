class Api::V1::UsersController < ApplicationController
  def currentUser
    
    @user ||= current_user
    render json: @user
  end
end