class CreateEventParticipants < ActiveRecord::Migration[5.1]
  def change
    create_table :event_participants do |t|
      t.belongs_to :participant
      t.belongs_to :event
    end
  end
end
