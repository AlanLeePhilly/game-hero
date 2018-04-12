FactoryBot.define do
  factory :event do
    name 'myName'
    association :host, factory: :user
    datetime Time.current
  end
end