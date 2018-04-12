class Api::V1::EventParticipantRulesController < ApplicationController
  def index
    render json: EventParticipantRule.all
  end

  def show
    @eventParticipantRule = EventParticipantRule.find(params['id'])
    render json: @eventParticipantRule
  end

  def create
    @eventParticipantRule = EventParticipantRule.create(event_participant_rule_params)
    if @eventParticipantRule.save
      render json: @eventParticipantRule
    else
      render json: @eventParticipantRule.errors
    end
  end

  private
  
  def event_participant_rule_params
    params.require(:event).permit(:name, :min_players, :max_players, :playtime)
  end
end