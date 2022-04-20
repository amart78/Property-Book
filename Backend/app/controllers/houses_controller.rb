class HousesController < ApplicationController

  get "/house" do
    Houses.all.to_json
          
  end

  post "/house" do
    newHouse = Houses.create(
      name: params[:name],
      address: params[:address],
      notes: params[:notes],
      image: params[:image]
    )

    newHouse.to_json
  end

end  
