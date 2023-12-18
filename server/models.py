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

    def __repr__(self):
        return f"<Customer {self.id}: {self.username}: {self.email}: {self.phone}: {self.address}>"



class Food(db.Model, SerializerMixin):
    __tablename__ = 'food'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    price = db.Column(db.Integer)
    type = db.Column(db.String(80))

    restaurant_food = db.relationship('RestaurantFood', back_populates='food')

    def __repr__(self, name, price, type):
       return f"<Food {self.id}: {self.name}: {self.price}: {self.type}>"
class Restaurant(db.Model, SerializerMixin):
    __tablename__ = 'restaurants'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))

    restaurant_food = db.relationship('RestaurantFood', back_populates='restaurants')

    def __repr__(self, name):
        return f"<Restaurant {self.id}: {self.name}>"
class RestaurantFood(db.Model, SerializerMixin):
    __tablename__ = 'restaurant_food'
    id = db.Column(db.Integer, primary_key=True)
    price=db.Column(db.Integer, nullable = False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'))
    food_id = db.Column(db.Integer, db.ForeignKey('food.id'))

    restaurants=db.relationship('Restaurant', back_populates='restaurant_food')
    food = db.relationship('Food', back_populates='restaurant_food')
   
   
    def __repr__(self, restaurant_id, food_id):
        return f"<RestaurantFood {self.id}: {self.price}: {self.restaurant_id}: {self.food_id}>"