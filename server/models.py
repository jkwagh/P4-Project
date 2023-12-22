from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates

from config import db

#Association Table
# food_orders = db.Table(
#     'foods_orders',
#     db.Column('food_id', db.Integer, db.ForeignKey('food.id'), primary_key=True),
#     db.Column('order_id', db.Integer, db.ForeignKey('orders.id'), primary_key=True)
# )

# Models go here!
class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))
    email = db.Column(db.String(80))
    phone = db.Column(db.String(80))
    address = db.Column(db.String(80))
    password = db.Column(db.String(80), nullable = False)

    orders = db.relationship('Order', back_populates='customer')


    @validates('phone')
    def validate_phone(self, attr, value):
        if len(value) < 10:
            raise ValueError('Invalid phone number')
        else:
            return value
    def __repr__(self):
        return f"<Customer {self.id}: {self.username}: {self.email}: {self.phone}: {self.address}>"



class Food(db.Model, SerializerMixin):
    __tablename__ = 'food'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    type = db.Column(db.String(80))
    img = db.Column(db.String(80))
    restaurant_name = db.Column(db.String(80))
    price = db.Column(db.Integer)

    orders = db.relationship('Order', back_populates='food')

    # restaurant_food = db.relationship('RestaurantFood', back_populates='food')

    def __repr__(self):
       return f"<Food {self.id}:{self.name}:{self.type}:{self.img}:{self.restaurant_name}:{self.price}>"
class Restaurant(db.Model, SerializerMixin):
    __tablename__ = 'restaurants'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))


    # restaurant_food = db.relationship('RestaurantFood', back_populates='restaurants')

    def __repr__(self):
        return f"<Restaurant {self.id}: {self.name}>"
class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))
    food_id = db.Column(db.Integer, db.ForeignKey('food.id'))
    quantity = db.Column(db.Integer)
    
    customer = db.relationship('Customer', back_populates='orders')
    food = db.relationship('Food', back_populates='orders')

    def __repr__(self):
        return f"<Order {self.id}: {self.customer_id}:{self.food_id}:{self.quantity}>"

# class RestaurantFood(db.Model, SerializerMixin):
#     __tablename__ = 'restaurant_food'
#     id = db.Column(db.Integer, primary_key=True)
#     price=db.Column(db.Integer, nullable = False)
#     restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'))
#     food_id = db.Column(db.Integer, db.ForeignKey('food.id'))
#     rating = db.Column(db.Integer, nullable = False)

#     restaurants=db.relationship('Restaurant', back_populates='restaurant_food')
#     food = db.relationship('Food', back_populates='restaurant_food')
   
   
#     def __repr__(self):
#         return f"<RestaurantFood {self.id}:{self.price}:{self.restaurant_id}:{self.food_id}:{self.rating}:{self.restaurants}:{self.food}>"