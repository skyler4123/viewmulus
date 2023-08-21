# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
ActiveRecord::Base.transaction do
  5.times do
    User.create!(email: Faker::Internet.email, password: "password", password_confirmation: "password")
  end
  10.times do
    User.all.sample.posts.create!(content: Faker::Quote.famous_last_words)
  end
  5.times do
    User.all.sample.singer.create!(name: Fker::Name.name)
  end
  5.times do
    User.all.sample.shop.create!(name: Fker::Name.name)
  end
  5.times do
    Event.create!(name: Faker::Name.name)
  end
  5.times do
    Song.create!(name: Faker::Name.name)
  end
  5.times do
    User.all.sample.playlists.create
  end
  5.times do
    User.all.sample.your_musics.create()
  end
  5.times do
    Singer.all.sample.albums.create!(name: Faker::Name.name)
  end
end