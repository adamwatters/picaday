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
  resources :microposts,          only: [:create, :destroy]
  resources :sequences,          only: [:create, :show, :destroy]
  resources :pictures,            only: [:create, :update, :show, :destroy] do
    member do
      get :crop
    end
  end
  resources :relationships,       only: [:create, :destroy]
end
