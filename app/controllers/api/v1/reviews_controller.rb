class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @reviews = Review.all
    render json: @reviews
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review
    else
      render json: {error: "le message n'a pas été sauvegardé"}
    end

  end

  private

  def review_params
    params.require(:review).permit(:name, :content)
  end

end
