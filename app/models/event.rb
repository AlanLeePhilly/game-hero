class Event < ApplicationRecord
  belongs_to :host, class_name: "User"
  has_many :event_participants
  has_many :participants, 
    through: :event_participants, class_name: "User"
  
  has_many :available_games
  has_many :games,
    through: :available_games
    
  validates_presence_of :name, :datetime
end