# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Task.destroy_all
List.destroy_all

demo = User.create!({first_name:'Guest', last_name:'User', username:'guest', email:'guest@user.com', password:'password'})

Task.create!([
  {body:'the first task', status:'false', user_id: demo.id},
  {body:'number two', status:'true', user_id: demo.id},
  {body:'hope this works', status:'true', user_id: demo.id},
  {body:'hey guest', note:'surprise! a note', status:'true', user_id: demo.id}
])
