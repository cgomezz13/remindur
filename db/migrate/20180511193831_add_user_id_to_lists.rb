class AddUserIdToLists < ActiveRecord::Migration[5.1]
  def change
    add_column :lists, :user_id, :integer, null: false
  end
end
