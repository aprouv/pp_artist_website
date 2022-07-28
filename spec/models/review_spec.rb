require 'rails_helper'

RSpec.describe Review, type: :model do

  describe 'model is valid' do
    let(:review) { FactoryBot.create(:review) }

    it 'is valid with valid attributes' do
      expect(review).to be_valid
    end

    it 'is not valid without a name' do
      review.name = nil
      expect(review).not_to be_valid
    end

    it 'is not valid without content' do
      review.content = nil
      expect(review).not_to be_valid
    end
  end
end
