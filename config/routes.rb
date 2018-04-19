Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  
  
  
  namespace :api do
    namespace :v1 do
      get '/users/getCurrentUser', to: 'users#currentUser'
      resources :games, only: [:index, :show, :create]
    
      resources :users, only: [:show] do  
        resources :events, only: [:index, :show, :create, :update] 
      end
      
      resources :events, only: [:show] do
        resources :event_participants, only: [:index, :show, :create]
      end
      
      resources :event_participants, only: [:show] do
        resources :event_participant_rules, only: [:index, :show, :create]
      end  
    end
  end
  
  get '*path', to: 'homes#index'
end
