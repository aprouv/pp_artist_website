class Painting < ApplicationRecord
  validates :name, :format, :year, :price, presence: true
end
