class CreatePictures < ActiveRecord::Migration[5.0]
  def change
    create_table :pictures do |t|
      t.references :sequence, foreign_key: true
      t.string :image

      t.timestamps
    end
    add_index :pictures, [:sequence_id, :created_at]
  end
end
