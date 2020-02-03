Rails.application.routes.draw do

  resources :quotes 

  get '/test', to: 'application#test'
end 
  

