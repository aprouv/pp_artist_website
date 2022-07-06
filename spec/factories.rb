FactoryBot.define do
  factory :painting do
    name { Faker::Lorem.sentence }
    description { Faker::Lorem.paragraph }
    format { Faker::String.random(length: 7)}
    price {Faker::Number.number(digits: 3)}
    year {Faker::Number.number(digits: 3)}
  end
end
