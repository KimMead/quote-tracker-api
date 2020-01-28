40.times do
    Quote.create(body: Faker::Movies::StarWars.unique.quote)
end 