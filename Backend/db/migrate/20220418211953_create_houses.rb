class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :name
      t.string :address
      t.string :notes
      t.string :property_manager
      t.string :image
      t.integer :manager_id
    end
  end
end
