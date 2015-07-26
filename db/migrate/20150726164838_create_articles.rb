class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :link
      t.string :language
      t.timestamp :published_at
      t.text :description
      t.string :author_name
      t.string :tags

      t.timestamps null: false
    end
  end
end
