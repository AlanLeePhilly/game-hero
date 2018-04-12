class CreateEventParticipantRules < ActiveRecord::Migration[5.1]
  def change
    create_table :event_participant_rules do |t|
      t.belongs_to :event_participant
      t.string :target_type
      t.integer :target_id
      t.integer :target_preference
    end
  end
end
