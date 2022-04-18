class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :name
      t.string :address
      t.string :notes
      t.string :image
    end
  end
end
