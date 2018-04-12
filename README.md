# README

Game-Hero is an app for organizing a group board-game night.
Users can create an event and invite other participants via email or invite code.
Participants can join (with an account or as a guest), choose which games they're bringing, and state their preferences for which games and other participants they wish to play with (or not!).
Game-Hero will generate possible combinations of players and games based on player preferences and the constraints of the game (min/max players)

Dependencies

    Ruby 2.3.3
    React 15.6.2
    Redux 3.7.2

Deployment instructions

    rake db:create && rake db:migrate && rake db:seed
    npm install && npm start
    bundle install && bundle exec rails s
    http://localhost:3000/ 

Current Progress:
  The app is currently in development. This section will be updated with continued progress goals once an initial functional build is completed.