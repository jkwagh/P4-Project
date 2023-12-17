from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy import MetaData

from config import db


# Models go here!
class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))
    email = db.Column(db.String(80))
    phone = db.Column(db.String(80))
    address = db.Column(db.String(80))
    password = db.Column(db.String(80), nullable = False)

    def __repr__(self, name, email, phone, address, password):
        self.name = name
        self.email = email
        self.phone = phone
        self.address = address
        self.password = password

class Food(db.Model, SerializerMixin):
    __tablename__ = 'food'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    price = db.Column(db.Integer)
    type = db.Column(db.String(80))

    restaurant_food = db.relationship('RestaurantFood', back_populates='food')

    def __repr__(self, name, price, type):
        self.name = name
        self.price = price
        self.type = type
class Restaurant(db.Model, SerializerMixin):
    __tablename__ = 'restaurants'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))

    restaurant_food = db.relationship('RestaurantFood', back_populates='restaurants')

    def __repr__(self, name):
        self.name = name
class RestaurantFood(db.Model, SerializerMixin):
    __tablename__ = 'restaurant_food'
    id = db.Column(db.Integer, primary_key=True)
    price=db.Column(db.Integer, nullable = False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'))
    food_id = db.Column(db.Integer, db.ForeignKey('food.id'))

    restaurants=db.relationship('Restaurant', back_populates='restaurant_food')
    food = db.relationship('Food', back_populates='restaurant_food')
   
   
    def __repr__(self, restaurant_id, food_id):
        self.restaurant_id = restaurant_id
        self.food_id = food_id