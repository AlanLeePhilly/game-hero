class Game < ApplicationRecord
  validates_presence_of :name, :min_players, :max_players
  
  validates_numericality_of :min_players, :max_players, :playtime, only_integer: true
end