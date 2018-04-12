class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :name, null: false
      t.integer :min_players, null: false
      t.integer :max_players, null: false
      t.integer :playtime
      t.string :thumbnail_url
      t.string :image_url
    end
  end
end
