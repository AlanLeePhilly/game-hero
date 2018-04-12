class CreateAvailableGames < ActiveRecord::Migration[5.1]
  def change
    create_table :available_games do |t|
      t.belongs_to :game
      t.belongs_to :event
    end
  end
end
