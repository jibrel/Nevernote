# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = {
  username: "DemoUser",
  password: "password123"
}

claire = {
  username: "Claire",
  password: "asdfjkl;"
}

programming = {
  title: "Programming",
  author_id: 2
}

javascript = {
  title: "JavaScript",
  body: "—> Node = JS on backend —> node script.js
—> MDN = Mozilla Developer Network (docs)
—> almost the same as JScript (ECMAScript standardizes both)
—> vanilla = w/out any external libraries
—> ‘use strict’ = ensures no global variables
—> MEAN stack = MongoDB, Express, Angular, Node",
  author_id: 2,
  notebook_id: 1
}

User.create!(demo_user);
User.create!(claire);

Notebook.create!(programming);

Note.create!(javascript);
