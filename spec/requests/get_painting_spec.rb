require 'rails_helper'

RSpec.describe 'Painting', type: :request do

  describe 'GET /show' do
    let(:painting) { FactoryBot.create(:painting, name: 'Bleuets', format: '15 x 20', price: 360) }

    before do
      get "/api/v1/paintings/#{painting.id}"
    end

    it 'returns the painting name' do
      expect(JSON.parse(response.body)['name']).to eq('Bleuets')
    end

    it 'returns the painting price' do
      expect(JSON.parse(response.body)['price']).to eq(360)
    end

    it 'returns the painting format' do
      expect(JSON.parse(response.body)['price']).to eq(360)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end
  end

end
