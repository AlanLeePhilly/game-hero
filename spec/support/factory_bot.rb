require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    sequence(:name) {|n| "Johnny #{n}" }
    password 'password'
    password_confirmation 'password'
  end

end
