Rails.application.routes.draw do
  root 'static_pages#home'
  get  '/signup', to: 'users#new'
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :users do
    member do
      get :following, :followers
    end
  end
  resources :account_activations, only: [:edit]
  resources :sequences,          only: [:create, :show, :destroy]
  resources :pictures,            only: [:new, :create, :edit, :update, :show, :destroy]
  resources :relationships,       only: [:create, :destroy]
end
