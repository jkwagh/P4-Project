#!/usr/bin/env python3

# Standard library imports
import ipdb
# Remote library imports
from flask import request, make_response, session, Flask
from flask_restful import Api, Resource

# Local imports
from config import app, db, api, migrate
# Add your model imports
from models import Customer, Food, Restaurant, Order

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


api = Api(app)

class AllCustomers(Resource):
    def get(self):
        response_body = [customer.to_dict(only=('username', 'password', 'address', 'email', 'phone', 'id')) for customer in Customer.query.all()]
        return make_response(response_body, 200)
    
    def post(self):
        try:
            new_customer = Customer(username=request.json.get('username'), email=request.json.get('email'), phone=request.json.get('phone'), address=request.json.get('address'), password=request.json.get('password'))
            db.session.add(new_customer)
            db.session.commit()
            response_body = [new_customer.to_dict(only=('username', 'password', 'address', 'email', 'phone'))]
            return make_response(response_body, 201)
        except:
            response_body = {
                "error" : "Customer could not be created"
            }
            return make_response(response_body, 400)
    
api.add_resource(AllCustomers, '/customers')

class CustomerById(Resource):
    
    def get(self, id):
        customer = Customer.query.filter(Customer.id == id).first()
        
        if customer:
            response_body = customer.to_dict(only=('username', 'password', 'address', 'email', 'phone', 'id'))
            return make_response(response_body, 200)
        else:
            response_body = {
                'error': 'Customer not found'
            }
            return make_response(response_body, 404)
    
    def patch(self, id):
        customer = Customer.query.filter(Customer.id == id).first()
        if customer: 
            for attr in request.json:
                setattr(customer, attr, request.json.get(attr))
            
            db.session.commit()
            
            response_body = customer.to_dict(only=('username', 'password', 'address', 'email', 'phone', 'id'))
            return make_response(response_body, 200)
        else:
            response_body = {
                'error': 'Customer not found'
            }
            return make_response(response_body, 404)

    def delete(self, id):
        customer = Customer.query.filter(Customer.id == id).first()
        
        if customer:
            db.session.delete(customer)
            db.session.commit()
            response_body = {}
            return make_response(response_body, 204)
        else:
            response_body = {
                'error': 'Customer not found'
            }
            return make_response(response_body, 404)

api.add_resource(CustomerById, '/customers/<int:id>')

class AllRestaurants(Resource):
    def get(self):
        response_body = [restaurants.to_dict() for restaurants in Restaurant.query.all()]
        return make_response(response_body, 200)
    
    def post(self):
        try:
            new_restaurant = Restaurant(name=request.json.get('name'))
            db.session.add(new_restaurant)
            db.session.commit()
            response_body = [new_restaurant.to_dict(only=('name',))]
            return make_response(response_body, 201)
        except:
            response_body = {
                "error" : "Restaurant could not be created"
            }
            return make_response(response_body, 400)
    
api.add_resource(AllRestaurants, '/restaurants')

class AllFoods(Resource):
    def get(self):
        response_body = [food.to_dict(only =('id','name','type','img','restaurant_name','price')) for food in Food.query.all()]
        return make_response(response_body, 200)
    
    def post(self):
        try:
            new_food = Food(name=request.json.get('name'), type=request.json.get('type'), img=request.json.get('img'), price=request.json.get('price'), restaurant_name=request.get('restuarant_name'))
            db.session.add(new_food)
            db.session.commit()
            response_body = [new_food.to_dict(only=('name',))]
            return make_response(response_body, 201)
        except:
            response_body = {
                "error" : "Food could not be created"
            }
            return make_response(response_body, 400)
    
api.add_resource(AllFoods, '/foods')

# class AllRestaurantFoods(Resource):
#     def get(self):
#         response_body = [restaurant_food.to_dict(rules = ['-restaurants.restaurant_food','-food.restaurant_food']) for restaurant_food in RestaurantFood.query.all()]
#         return make_response(response_body, 200)
    
#     def post(self):
#         try:
#             new_restaurant_food = RestaurantFood(restaurants=request.json.get('restaurants'), food=request.json.get('food'), price=request.json.get('price'), rating=request.json.get('rating'))
#             db.session.add(new_restaurant_food)
#             db.session.commit()
#             response_body = [new_restaurant_food.to_dict(rules = ['-restaurants.restaurant_food','-food.restaurant_food'])]
#             return make_response(response_body, 201)
#         except:
#             response_body = {
#                 "error" : "Restaurant food could not be created"
#             }
#             return make_response(response_body, 400)
    
# api.add_resource(AllRestaurantFoods, '/restaurant_foods')

class Login(Resource):
    
    def post(self):
        customer = Customer.query.filter_by(username=request.json.get('username')).first()
        
        if customer:
            session['customer_id'] = customer.id
            response_body = customer.to_dict(only=('username', 'password', 'address', 'email', 'phone', 'id'))
            return make_response(response_body, 201)
        else:
            response_body = {
                "error": "Invalid username!"
            }
            return make_response(response_body, 401)
    
api.add_resource(Login, '/login')
    
class CheckSession(Resource):
    def get(self):
        customer = Customer.query.filter(Customer.id == session.get('customer_id')).first()
        if customer:
            response_body = customer.to_dict(only=('username', 'password', 'address', 'email', 'phone'))
            return make_response(response_body, 200)
        else:
            return {'message': '401: Not Authorized'}, 401
        
api.add_resource(CheckSession, '/check_session')

class AllOrders(Resource):
    def get(self):
        response_body = [order.to_dict(only=('customer_id', 'food_id', 'quantity')) for order in Order.query.all()]
        return make_response(response_body, 200)
    
    def post(self):
        try:
            new_order = Order(customer_id=request.json['customer_id'], food_id=request.json['food_id'], quantity=request.json['quantity'])
            db.session.add(new_order)
            db.session.commit()
            return make_response(new_order.to_dict(), 201)
        except:
            response_body = {
                "error" : "Order could not be created"
            }
            return make_response(response_body, 400)
    
api.add_resource(AllOrders, '/orders')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

