class CreateSequences < ActiveRecord::Migration[5.0]
  def change
    create_table :sequences do |t|
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :sequences, [:user_id, :created_at]
  end
end
