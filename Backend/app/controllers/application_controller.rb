class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # get "/house" do
  #   house = House.all
  #   house.to_json
  # end
  
  # post "/houses" do
  #   house = House.create
  #   house.to_json
  # end
  
  # patch "/houses/:id" do
  #   house = House.find(params[:])
  #   house.update(body: params[:])
  #   house.to_json
  # end
  
  # delete "/houses/:id" do
  #   house = House.find(params[:])
  #   house.destroy
  #   house.to_json
  # end
  

end
