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

ActiveRecord::Schema.define(version: 20170421225055) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "notebooks", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "author_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_notebooks_on_author_id", using: :btree
    t.index ["title"], name: "index_notebooks_on_title", unique: true, using: :btree
  end

  create_table "notes", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "body"
    t.integer  "author_id",   null: false
    t.integer  "notebook_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["author_id"], name: "index_notes_on_author_id", using: :btree
    t.index ["notebook_id"], name: "index_notes_on_notebook_id", using: :btree
    t.index ["title"], name: "index_notes_on_title", using: :btree
  end

  create_table "shortcuts", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "route",      null: false
    t.integer  "author_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_shortcuts_on_author_id", using: :btree
    t.index ["name"], name: "index_shortcuts_on_name", unique: true, using: :btree
    t.index ["route"], name: "index_shortcuts_on_route", unique: true, using: :btree
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id",     null: false
    t.integer  "note_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["note_id"], name: "index_taggings_on_note_id", using: :btree
    t.index ["tag_id"], name: "index_taggings_on_tag_id", using: :btree
  end

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "author_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_tags_on_author_id", using: :btree
    t.index ["name"], name: "index_tags_on_name", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
