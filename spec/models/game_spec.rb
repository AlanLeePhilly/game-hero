require 'rails_helper'

RSpec.describe Game, type: :model do
  it { should have_valid(:name).when('Jumangi') }
  it { should_not have_valid(:name).when(nil, '') }
  
  it { should have_valid(:min_players).when(0, 1) }
  it { should_not have_valid(:min_players).when('one', nil, '') }
  
  it { should have_valid(:max_players).when(4, 6) }
  it { should_not have_valid(:max_players).when('two', nil, '') }

  it { should have_valid(:playtime).when(90, 120) }
  it { should_not have_valid(:playtime).when('three', nil, '') }

  it { should validate_presence_of (:name) }
  it { should validate_presence_of (:min_players) }  
  it { should validate_presence_of (:max_players) }  
  
  it { should validate_numericality_of (:min_players) }
  it { should validate_numericality_of (:max_players) }
  it { should validate_numericality_of (:playtime) }
end