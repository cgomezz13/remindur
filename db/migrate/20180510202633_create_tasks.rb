class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.text :body, null: false
      t.date :due_date, null: true
      t.boolean :status, null: false
      t.text :note, null: true
      t.integer :list_id, null: true
      t.timestamps
    end
  end
end
