class EventParticipantRule < ApplicationRecord
  belongs_to :event_participant
  
  validates :target_type, inclusion: { in: %w(game participant) }
  validates :target_preference, inclusion: { in: (0...11) }
  validates_numericality_of :target_id
end