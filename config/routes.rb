Rails.application.routes.draw do
  resources :users, :notes, :notebooks, :tags, :taggings
  resource :session
end
