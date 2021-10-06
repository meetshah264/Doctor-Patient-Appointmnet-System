class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.belongs_to :role, null: false, foreign_key: true

      t.timestamps
    end
  end
end
