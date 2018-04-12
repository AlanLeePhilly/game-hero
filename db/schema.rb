# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180410153418) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "available_games", force: :cascade do |t|
    t.bigint "game_id"
    t.bigint "event_id"
    t.index ["event_id"], name: "index_available_games_on_event_id"
    t.index ["game_id"], name: "index_available_games_on_game_id"
  end

  create_table "event_participant_rules", force: :cascade do |t|
    t.bigint "event_participant_id"
    t.string "target_type"
    t.integer "target_id"
    t.integer "target_preference"
    t.index ["event_participant_id"], name: "index_event_participant_rules_on_event_participant_id"
  end

  create_table "event_participants", force: :cascade do |t|
    t.bigint "participant_id"
    t.bigint "event_id"
    t.index ["event_id"], name: "index_event_participants_on_event_id"
    t.index ["participant_id"], name: "index_event_participants_on_participant_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.bigint "host_id"
    t.datetime "datetime"
    t.index ["host_id"], name: "index_events_on_host_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "name", null: false
    t.integer "min_players", null: false
    t.integer "max_players", null: false
    t.integer "playtime"
    t.string "thumbnail_url"
    t.string "image_url"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
