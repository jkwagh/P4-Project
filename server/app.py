#!/usr/bin/env python3

# Standard library imports

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
        response_body = [customer.to_dict(rules=('-password',)) for customer in Customer.query.all()]
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
        pass
    
    def patch(self, id):
        pass
    
    def delete(self, id):
        pass
    
api.add_resource(CustomerById, '/customers/<int:id>')

class AllRestaurants(Resource):
    def get(self):
        response_body = [restaurants.to_dict() for restaurants in Restaurant.query.all()]
        return make_response(response_body, 200)
    
api.add_resource(AllRestaurants, '/restaurants')

class AllFoods(Resource):
    def get(self):
        response_body = [food.to_dict(only =('id','name','type','img','restaurant_name','price')) for food in Food.query.all()]
        return make_response(response_body, 200)
    
api.add_resource(AllFoods, '/foods')

# class AllRestaurantFoods(Resource):
#     def get(self):
#         response_body = [restaurant_food.to_dict(rules = ['-restaurants.restaurant_food','-food.restaurant_food']) for restaurant_food in RestaurantFood.query.all()]
#         return make_response(response_body, 200)
    
# api.add_resource(AllRestaurantFoods, '/restaurant_foods')

class Login(Resource):
    
    def get(self):
        pass
    
    def post(self):
        user = Customer.query.filter(
            Customer.username == request.get_json()['username']
        ).first()
        
        session['customer_id'] = user.id
        return user.to_dict()
    
api.add_resource(Login, '/login')
    
class CheckSession(Resource):
    def get(self):
        user = Customer.query.filter(Customer.id == session.get('customer_id')).first()
        if user:
            return user.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401
        
api.add_resource(CheckSession, '/check_session')

# class AllOrders(Resource):
#     def get(self):
#         response_body = [order.to_dict() for order in Order.query.all()]
#         return make_response(response_body, 200)
    
#     def post(self):
#         try:
#             new_order = Order(customer_id=request.json['customer_id'], food_id=request.json['food_id'], quantity=request.json['quantity'])
#             db.session.add(new_order)
#             db.session.commit()
#             return make_response(new_order.to_dict(), 201)
#         except:
#             response_body = {
#                 "error" : "Order could not be created"
#             }
#             return make_response(response_body, 400)
    
# api.add_resource(AllOrders, '/orders')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

