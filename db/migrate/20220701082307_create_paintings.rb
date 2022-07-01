class CreatePaintings < ActiveRecord::Migration[6.1]
  def change
    create_table :paintings do |t|
      t.string :name
      t.text :description
      t.string :format
      t.integer :price
      t.integer :year

      t.timestamps
    end
  end
end
