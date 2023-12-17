#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc
from models import Customer, Restaurant

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

    
    
    
    Restaurant.query.delete()

    restaurants = []

    restaurants.append(Restaurant( name="Hunger Games"))
    restaurants.append(Restaurant( name="Chops"))
    restaurants.append(Restaurant( name="The Last"))
    restaurants.append(Restaurant( name="Cafe"))
    restaurants.append(Restaurant( name="JWJ Bistro"))

    db.session.add_all(restaurants)
    
    
    db.session.commit()