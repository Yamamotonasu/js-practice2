Rails.application.routes.draw do
  root 'reacts#index'
  get 'reacts/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
