class DeleteMicroposts < ActiveRecord::Migration[5.0]
  def change
    drop_table :microposts
  end
end
