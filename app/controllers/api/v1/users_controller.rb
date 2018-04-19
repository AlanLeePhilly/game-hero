class Api::V1::UsersController < ApplicationController
  def currentUser
    
    @user ||= current_user
    
    unless @user
      @user = {
        name: "Guest",
        id: 0
      }
    end
    render json: @user
  end
end