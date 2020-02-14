Rails.application.routes.draw do

  get 'ajax/index'
  resources :quotes 

  get '/test', to: 'application#test'
end 
  

