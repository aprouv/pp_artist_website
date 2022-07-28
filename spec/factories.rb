FactoryBot.define do

  factory :review do
    name { Faker::Lorem.sentence }
    content { Faker::Lorem.paragraph }
  end


  factory :painting do
    name { Faker::Lorem.sentence }
    description { Faker::Lorem.paragraph }
    format { Faker::Lorem.word }
    price { Faker::Number.number(digits: 3) }
    year { Faker::Number.number(digits: 3) }
  end

end
