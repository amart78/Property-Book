class HousesController < ApplicationController

    get "/house" do
        Houses.all.to_json
        
      end

end  