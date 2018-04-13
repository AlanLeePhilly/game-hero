class CreateOwnedGames < ActiveRecord::Migration[5.1]
  def change
    create_table :owned_games do |t|
      t.belongs_to :user
      t.belongs_to :game
    end
  end
end
