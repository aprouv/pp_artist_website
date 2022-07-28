class Review < ApplicationRecord
  validates :name, :content, presence: true
  default_scope { order(created_at: :desc) }
end
