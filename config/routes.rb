Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :tasks, only: [:edit, :destroy, :index, :create, :update, :show ]
    resources :lists, only: [:edit, :destroy, :index, :create, :update, :show ]
  end

end
