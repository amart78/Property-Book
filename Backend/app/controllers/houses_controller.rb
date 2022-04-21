class HousesController < ApplicationController

  get "/house" do
    Houses.all.to_json
          
  end

  post "/house" do
    newHouse = Houses.create(
      name: params[:name],
      address: params[:address],
      notes: params[:notes],
      image: params[:image],
      manager: params[:manager]
    )

    newHouse.to_json
  end

  patch "/house/:id" do 
    property_to_edit = Houses.find_by_id( params[:id] )
 
    property_to_edit.name = params[:name]
    property_to_edit.address = params[:address]
    property_to_edit.notes = params[:notes]
    property_to_edit.image = params[:image]
    property_to_edit.property_manager = params[:property_manager]
    property_to_edit.manager_id = params[:manager_id]
    puts params
    property_to_edit.save
    property_to_edit.to_json
  end

  # delete "/users/:id" do
  #   user_to_delete = User.find_by_id( params[:id] )  
  #    
  #   user_to_delete.destroy
  #   { message: "User Account Deleted" }.to_json
  # end

end  
