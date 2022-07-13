require 'rails_helper'

RSpec.describe Painting, type: :model do

  describe 'model is valid' do
    let(:painting) { FactoryBot.create(:painting) }

    it 'is valid with valid attributes' do
      expect(painting).to be_valid
    end

    it 'is not valid without a name' do
      painting.name = nil
      expect(painting).not_to be_valid
    end

    it 'is not valid without a format' do
      painting.format = nil
      expect(painting).not_to be_valid
    end

    it 'is not valid without a price' do
      painting.price = nil
      expect(painting).not_to be_valid
    end

    it 'is not valid without a year' do
      painting.year = nil
      expect(painting).not_to be_valid
    end
  end
end
