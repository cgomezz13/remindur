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

list = List.create!({list_title: 'Groceries', user_id: demo.id})

Task.create!([
  {body:'Watch Movie', status:'true', user_id: demo.id},
  {body:'Exercise', status:'false', user_id: demo.id},
  {body:'Haircut', status:'false', user_id: demo.id},
  {body:'Complete Full Stack Project', note:'', status:'false', user_id: demo.id},
  {body:'Get a job!', note:'', status:'false', user_id: demo.id},




  {body:'Bread', note:'', status:'true', user_id: demo.id, list_id: list.id},
  {body:'Rice', note:'', status:'false', user_id: demo.id, list_id: list.id},
  {body:'tortilla chips', note:'get avocados to make guac', status:'true', user_id: demo.id, list_id: list.id},
  {body:'Coffee', note:'', status:'false', user_id: demo.id, list_id: list.id},
  {body:'potatoes', note:'get avocados to make guac', status:'true', user_id: demo.id, list_id: list.id},
  {body:'Bananas', note:'', status:'false', user_id: demo.id, list_id: list.id},
  {body:'Peanut Butter', note:'', status:'false', user_id: demo.id, list_id: list.id},
  {body:'and Jelly', note:'', status:'false', user_id: demo.id, list_id: list.id},
  {body:'get ramen noodles, be sure to get the spicy ones', note:'must get cucumbers too', status:'true', user_id: demo.id, list_id: list.id},
  {body:'make sure to go to trader Joe\'s some say its \'The Best Grocery Store that ever was\' (buzzfeed article)', note:'Buzzfeed article mentioned $3 wine and many chocolate covered items', status:'false', user_id: demo.id, list_id: list.id},
])
