Rails.application.routes.draw do
  root 'static_pages#index'
  namespace :api do
    namespace :v1 do
      resources :paintings, only: [:index, :show]
    end
  end

  get '*path', to: 'static_pages#index', via: :all
end
