#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc
from models import Customer, Restaurant, Food, RestaurantFood

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db

with app.app_context():

    fake = Faker()
    
    customers = []
    
    for n in range(100):
        

        customer = Customer(
            username=fake.name(),
            email=fake.email(),
            phone=fake.phone_number(),
            address=fake.address(),
            password=fake.password(),
        )
        customers.append(customer)


    
    db.session.add_all(customers)

    
    
    
    # Restaurant.query.delete()

    # restaurants = []

    # restaurants.append(Restaurant( name="Hunger Games"))
    # restaurants.append(Restaurant( name="Chops"))
    # restaurants.append(Restaurant( name="The Last"))
    # restaurants.append(Restaurant( name="Cafe"))
    # restaurants.append(Restaurant( name="JWJ Bistro"))

    # db.session.add_all(restaurants)
    
    
    # Food.query.delete()

    # foods = []

    # foods.append(Food( name="Curry Chicken", price= 10.99, type="Jamaican"))
    # foods.append(Food( name="Jerk Chicken", price= 9.99, type="Jamaican"))
    # foods.append(Food( name="Oxtails", price= 13.99, type="Jamaican"))
    # foods.append(Food( name="Brown Stew Chicken", price= 10.99, type="Jamaican"))
    # foods.append(Food( name="Jerk Pork", price= 9.99, type="Jamaican"))
    # foods.append(Food( name="Kimchi Stew", price= 11.99, type="Korean"))
    # foods.append(Food( name="Soy Bean Paste Stew", price= 11.99, type="Korean"))
    # foods.append(Food( name="Spicy Pork Stir Fry", price= 13.99, type="Korean"))
    # foods.append(Food( name="Pork Belly", price= 13.99, type="Korean"))
    # foods.append(Food( name="Blood Sausage", price= 8.99, type="Korean"))
    # foods.append(Food( name="Chicken Parmesan", price= 15.99, type="Italian"))
    # foods.append(Food( name="Chicken Alfredo", price= 15.99, type="Italian"))
    # foods.append(Food( name="Gnochi", price= 12.99 , type="Italian"))
    # foods.append(Food( name="Risotto", price= 15.99, type="Italian"))
    # foods.append(Food( name="Ravioli", price= 14.99, type="Italian"))
    # foods.append(Food( name="BBQ Ribs", price=  16.99 , type="Soulfood"))
    # foods.append(Food( name="Fried Chicken", price= 13.99 , type="Soulfood"))
    # foods.append(Food( name="Pork Chops", price= 13.99, type="Soulfood"))
    # foods.append(Food( name="Fried Catfish", price= 13.99, type="Soulfood"))
    # foods.append(Food( name="Smoked Turkey Wings", price= 11.99, type="Soulfood"))
    # foods.append(Food( name="Pupusa", price= 10.99, type="Mexican"))
    # foods.append(Food( name="Quesadilla", price= 10.99, type="Mexican"))
    # foods.append(Food( name="Tacos", price= 10.99, type="Mexican"))
    # foods.append(Food( name="Enchiladas", price= 10.99, type="Mexican"))
    # foods.append(Food( name="Chimichanga", price= 10.99, type="Mexican"))


    # db.session.add_all(foods)

    Food.query.delete()
    Restaurant.query.delete()
    RestaurantFood.query.delete()

    jamaican = Restaurant(name= "Island Spice")
    korean = Restaurant(name= "Korean House")
    italian = Restaurant(name= "Italian Eatery")
    soulfood = Restaurant(name= "Soul Food")
    mexican = Restaurant(name= "Mexican Eatery")

    restaurants = [jamaican, korean, italian, soulfood, mexican]

    curryChicken = Food(name="Curry Chicken", type= "jamaican")
    jerkChicken = Food(name="Jerk Chicken", type= "jamaican")
    oxtails = Food(name="Oxtails", type= "jamaican")
    brownStewChicken = Food(name="Brown Stew Chicken", type= "jamaican")
    jerkPork = Food(name="Jerk Pork", type= "jamaican")
    kimchiStew = Food(name="Kimchi Stew", type= "korean")
    soyBeanPasteStew = Food(name="Soy Bean Paste Stew", type= "korean")
    spicyPorkStirFry = Food(name="Spicy Pork Stir Fry", type= "korean")
    porkBelly = Food(name="Pork Belly", type= "korean")
    bloodSausage = Food(name="Blood Sausage", type= "korean")
    chickenParmesan = Food(name="Chicken Parmesan", type= "italian")
    chickenAlfredo = Food(name="Chicken Alfredo", type= "italian")
    gnochi = Food(name="Gnochi", type= "italian")
    risotto = Food(name="Risotto", type= "italian")
    ravioli = Food(name="Ravioli", type= "italian")
    bbqRibs = Food(name="BBQ Ribs", type= "soulfood")
    friedChicken = Food(name="Fried Chicken", type= "soulfood")
    porkChops = Food(name="Pork Chops", type= "soulfood")
    friedCatfish = Food(name="Fried Catfish", type= "soulfood")
    smokedTurkeyWings = Food(name="Smoked Turkey Wings", type= "soulfood")
    pupusa = Food(name="Pupusa", type= "mexican")
    quesadilla = Food(name="Quesadilla", type= "mexican")
    tacos = Food(name="Tacos", type= "mexican")
    enchiladas = Food(name="Enchiladas", type= "mexican")
    chimichanga = Food(name="Chimichanga", type= "mexican")

    foods = [curryChicken, jerkChicken, oxtails, brownStewChicken, jerkPork, kimchiStew,
            soyBeanPasteStew, spicyPorkStirFry, porkBelly, bloodSausage, chickenParmesan,
            chickenAlfredo, gnochi, risotto, ravioli, bbqRibs, friedChicken, porkChops,
            friedCatfish, smokedTurkeyWings, pupusa, quesadilla, tacos, enchiladas,
            chimichanga]


    pr1 = RestaurantFood(restaurants=jamaican, food=curryChicken, price= 10.99)
    pr1 = RestaurantFood(restaurants=jamaican, food=jerkChicken, price= 10.99)

    restaurantFood = [pr1]

    db.session.add_all(restaurants)
    db.session.add_all(foods)
    db.session.add_all(restaurantFood)
    db.session.commit()