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

    def __repr__(self, name, price):
        self.name = name
        self.price = price

class Restaurant(db.Model, SerializerMixin):
    __tablename__ = 'restaurants'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))

    def __repr__(self, name):
        self.name = name
