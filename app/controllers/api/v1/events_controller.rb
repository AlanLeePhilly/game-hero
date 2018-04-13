class Api::V1::EventsController < ApplicationController
  def index
    render json: Event.all
  end

  def show
    @event = Event.find(params[:id])
    render json: EventSerializer.new(@event)
  end

  def create
    @event = Event.create(event_params)
    if @event.save
      render json: @event
    else
      render json: @event.errors
    end
  end

  private
  
  def event_params
    params.require(:event).permit(:name, :min_players, :max_players, :playtime)
  end
end