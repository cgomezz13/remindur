class CreateLists < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.string :list_title, null: false
      t.timestamps
    end
  end
end
