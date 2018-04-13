class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :datetime
    
    belongs_to :host
    has_many :games
    has_many :event_participants
    
    class EventParticipantSerializer < ActiveModel::Serializer
        attribute :participant
        belongs_to :user
        class UserSerializer < ActiveModel::Serializer
            attributes :id, :name
        end
    end
end
