class AddDescriptionToSequence < ActiveRecord::Migration[5.0]
  def change
    add_column :sequences, :description, :text
  end
end
