class Api::V1::GamesController < ApplicationController
  def index
    render json: Game.all
  end

  def show
    @game = Game.find(params['id'])
    render json: @game
  end

  def create
    @game = Game.create(game_params)
    if @game.save
      render json: @game
    else
      render json: @game.errors
    end
  end

  private
  
  def game_params
    params.require(:game).permit(:name, :min_players, :max_players, :playtime)
  end
end