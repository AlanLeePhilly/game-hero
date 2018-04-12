class EventParticipantRule < ApplicationRecord
  belongs_to :event_participant, class_name: "User"
  
  validates :target_type, inclusion: { in: %w(game participant) }
  validates :target_preference, inclusion: { in: (0...10) }
  validates_numericality_of :target_id
end