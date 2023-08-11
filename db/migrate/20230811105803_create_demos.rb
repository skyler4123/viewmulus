class CreateDemos < ActiveRecord::Migration[7.1]
  def change
    create_table :demos do |t|
      t.string :content

      t.timestamps
    end
  end
end
