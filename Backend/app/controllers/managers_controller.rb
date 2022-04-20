class ManagersController < ApplicationController
    
    get "/manager" do
        Manager.all.to_json
              
    end
    
end