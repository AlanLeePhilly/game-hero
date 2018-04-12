class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name
      t.belongs_to :host
      t.datetime :datetime
    end
  end
end
