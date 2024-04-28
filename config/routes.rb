Rails.application.routes.draw do
  get 'demo/index'
  get 'demo/new'
  post 'images/upload_by_file'
  post 'images/upload_by_url'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  # get "/up", to: Proc.new { [200, {}, ["OK"]] }
  # Defines the root path route ("/")
  root "demo#index"
end
