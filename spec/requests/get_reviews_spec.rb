require 'rails_helper'

RSpec.describe 'Reviews', type: :request do
  describe 'GET /index' do

    before do
      FactoryBot.create_list(:review, 15)
      get '/api/v1/reviews'
    end

    it 'returns all reviews' do
      expect(json.size).to eq(15)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end
  end
end
