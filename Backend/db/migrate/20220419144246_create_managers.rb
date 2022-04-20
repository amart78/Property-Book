class CreateManagers < ActiveRecord::Migration[6.1]
  def change
      create_table :managers do |t|
        t.string :name
        t.string :properties_managing
        t.string :bio
        t.string :image
    end
   end
  end
