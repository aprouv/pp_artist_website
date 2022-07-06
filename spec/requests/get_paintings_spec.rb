require 'rails_helper'

RSpec.describe 'Paintings', type: :request do
  describe 'GET /index' do
    let(:paintings) { FactoryBot.create_list(:paintings, 10) }

    before do
      get '/api/v1/paintings'
    end

    it 'returns all paintings' do
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end
  end
end
