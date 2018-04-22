# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# AvailableGame.delete_all
# Event.delete_all
# EventParticipant.delete_all
# EventParticipantRule.delete_all
Game.delete_all
# # 
# g1 = Game.create({
#   name: 'Munchkin',
#   min_players: 3,
#   max_players: 6,
#   playtime: 120,
#   thumbnail_url: 'https://cf.geekdo-images.com/thumb/img/saJlX2v5E2boJNNAU-QPq12DHXs=/fit-in/200x150/pic1871016.jpg',
#   image_url: 'https://cf.geekdo-images.com/original/img/vp7LtUmBZgIRMwa8qwRpVkHIFnU=/0x0/pic1871016.jpg'
#   })
# 
# g2 = Game.create({
#   name: 'Pandemic',
#   min_players: 2,
#   max_players: 4,
#   playtime: 45,
#   thumbnail_url: 'https://cf.geekdo-images.com/thumb/img/HEKrtpTC1y1amXh5cKnVvowyE5Y=/fit-in/200x150/pic1534148.jpg',
#   image_url: 'https://cf.geekdo-images.com/original/img/j-pfXZ_0GmOowohzD_T6NDAWGSA=/0x0/pic1534148.jpg'
#   })
# 
# g3 = Game.create({
#   name: 'Power Grid',
#   min_players: 2,
#   max_players: 6,
#   playtime: 120,
#   thumbnail_url: 'https://cf.geekdo-images.com/thumb/img/N8G4kI6LcDLc5-NtVlXWpZDh6xA=/fit-in/200x150/pic173153.jpg',
#   image_url: 'https://cf.geekdo-images.com/original/img/_3ewTndfCEMACKeTMPnREyvyX60=/0x0/pic173153.jpg'
#   })
# 
# g4 = Game.create({
#   name: 'Exploding Kittens',
#   min_players: 2,
#   max_players: 5,
#   playtime: 15,
#   thumbnail_url: 'https://cf.geekdo-images.com/thumb/img/qW31_tueq5049lRyZ--sPI-rlBU=/fit-in/200x150/pic2691976.png',
#   image_url: 'https://cf.geekdo-images.com/original/img/XW9wAqKOy8kvH6TqxtuwAdFuAoo=/0x0/pic2691976.png'
#   })
# 
# u1 = User.find_or_create_by({
#   email: 'email@one.com',
#   name: 'onesie'
#   })
# u1.password = 'password'
# u1.save
# 
# u2 = User.find_or_create_by({
#   email: 'email@two.com',
#   name: 'twovile'
#   })
# u2.password = 'password'
# u2.save
# 
# e1 = Event.create(
#   name: 'our game night!',
#   host: User.first,
#   datetime: DateTime.now
# )
# 
# ep1 = EventParticipant.create({ participant: u1, event: e1 })
# ep2 = EventParticipant.create({ participant: u2, event: e1 })
# 
# ag1 = AvailableGame.create({ game: g1, event: e1 })
# ag2 = AvailableGame.create({ game: g2, event: e1 })
# ag3 = AvailableGame.create({ game: g3, event: e1 })
# 
# og1 = OwnedGame.create({ game: g1, user: User.first })
# og2 = OwnedGame.create({ game: g2, user: User.first })
# og3 = OwnedGame.create({ game: g3, user: User.first })
# 
# epr1 = EventParticipantRule.create({
#   event_participant: ep1,
#   target_type: 'game',
#   target_id: ag1.id,
#   target_preference: 1
#   })
# 
# epr2 = EventParticipantRule.create({
#   event_participant: ep1,
#   target_type: 'game',
#   target_id: ag2.id,
#   target_preference: 9
#   })
# 
# epr3 = EventParticipantRule.create({
#   event_participant: ep1,
#   target_type: 'participant',
#   target_id: ep2.id,
#   target_preference: 5
#   })
# 
# epr4 = EventParticipantRule.create({
#   event_participant: ep2,
#   target_type: 'game',
#   target_id: ag3.id,
#   target_preference: 8
#   })


pks = []
File.foreach('db/new.json').with_index do |line, line_num|
  json = ActiveSupport::JSON.decode(line)
  if (json['primary-name'] && json ['minimum-players'] && json['maximum-players'] && !pks.include?(json['bgg-id']))
    pks << json['bgg-id']
    if json['thumbnail']
      Game.create(
        id: json['bgg-id'],
        name: json['primary-name'],
        min_players: json['minimum-players'],
        max_players: json['maximum-players'],
        playtime: json['playing-time'],
        thumbnail_url: json['thumbnail'][0],
        image_url: json['image'][0]  
      )
    else
      Game.create(
        id: json['bgg-id'],
        name: json['primary-name'],
        min_players: json['minimum-players'],
        max_players: json['maximum-players'],
        playtime: json['playing-time']
      )
    end
  end
end
  







