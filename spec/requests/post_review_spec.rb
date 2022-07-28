require 'rails_helper'

RSpec.describe 'Reviews', type: :request do
  describe 'POST /create' do

    before do
      FactoryBot.create_list(:review, 5)
      @review = Review.create(name: "Review name", content: "Review comment")
      get '/api/v1/reviews'
    end

    it 'should create a review' do
      expect(json.size).to eq(6)
      expect(@review).to be_valid
      expect(Review.find_by_name("Review name")).to eq(@review)
    end
  end
end
