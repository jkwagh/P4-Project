#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc
from models import Customer, Restaurant, Food

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
    # RestaurantFood.query.delete()

    jamaican = Restaurant(name= "Island Spice")
    korean = Restaurant(name= "Korean House")
    italian = Restaurant(name= "Italian Eatery")
    soulfood = Restaurant(name= "Soul Sisters")
    mexican = Restaurant(name= "Mexican Eatery")

    restaurants = [jamaican, korean, italian, soulfood, mexican]

    curryChicken = Food(name="Curry Chicken", type= "jamaican", img="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-09-jamaican-curry-chicken%2Fjamaican-curry-chicken-172", restaurant_name= "Island Spice", price= 10.99)
    jerkChicken = Food(name="Jerk Chicken", type= "jamaican", img= "https://www.sweetandsorrel.com/wp-content/uploads/2020/03/BakedJerkChicken-4-500x375.jpg" , restaurant_name= "Island Spice", price= 9.99)
    oxtails = Food(name="Oxtails", type= "jamaican", img= "https://i0.wp.com/thatnursecooks.com/wp-content/uploads/2023/03/8514AFAD-9C78-4706-BCB3-6F1C7C03695E.jpeg?resize=843%2C1024&ssl=1" , restaurant_name= "Island Spice", price= 13.99)
    brownStewChicken = Food(name="Brown Stew Chicken", type= "jamaican", img= "https://mission-food.com/wp-content/uploads/2021/05/Jamaican-Brown-Stew-Chicken-Featured.jpg" , restaurant_name= "Island Spice", price= 10.99)
    jerkPork = Food(name="Jerk Pork", type= "jamaican", img= "https://i0.wp.com/chinese-jamaicangirl.com/wp-content/uploads/2018/05/image-2.jpeg?fit=3055%2C2168&ssl=1" , restaurant_name= "Island Spice", price= 9.99)
    kimchiStew = Food(name="Kimchi Stew", type= "korean", img= "https://www.maangchi.com/wp-content/uploads/2007/11/kimchijjigae.jpg" , restaurant_name= "Korean House", price= 11.99)
    soyBeanPasteStew = Food(name="Soy Bean Paste Stew", type= "korean", img= "https://www.koreanbapsang.com/wp-content/uploads/2018/06/DSC_0672.jpg" , restaurant_name= "Korean House", price= 11.99)
    spicyPorkStirFry = Food(name="Spicy Pork Stir Fry", type= "korean", img= "https://i.ytimg.com/vi/3oFCGKmzQX8/maxresdefault.jpg" , restaurant_name= "Korean House", price= 11.99)
    porkBelly = Food(name="Pork Belly", type= "korean", img= "data:image/jpeg;base64,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" , restaurant_name= "Korean House", price= 11.99)
    bloodSausage = Food(name="Blood Sausage", type= "korean", img= "https://upload.wikimedia.org/wikipedia/commons/f/fd/Sundae.jpg" , restaurant_name= "Korean House", price= 8.99)
    chickenParmesan = Food(name="Chicken Parmesan", type= "italian", img= "https://tastesbetterfromscratch.com/wp-content/uploads/2023/03/Chicken-Parmesan-1.jpg" , restaurant_name= "Italian Eatery", price= 12.99)
    chickenAlfredo = Food(name="Chicken Alfredo", type= "italian", img= "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg" , restaurant_name= "Italian Eatery", price= 12.99)
    gnocchi = Food(name="Gnocchi", type= "italian",   img= "https://www.acouplecooks.com/wp-content/uploads/2019/10/Gnocchi-Sauce-007.jpg" , restaurant_name= "Italian Eatery", price= 12.99)
    risotto = Food(name="Risotto", type= "italian",   img= "https://www.mealsbymolly.com/wp-content/uploads/2020/05/Risotto2.jpg" , restaurant_name= "Italian Eatery", price= 12.99)
    ravioli = Food(name="Ravioli", type= "italian",   img= "https://cdn11.bigcommerce.com/s-cjh14ahqln/product_images/uploaded_images/cheese-ravioli-2-web.jpg" , restaurant_name= "Italian Eatery", price= 12.99)
    bbqRibs = Food(name="BBQ Ribs", type= "soulfood",   img= "https://www.foodnetwork.com/content/dam/images/food/fullset/2015/7/21/3/FNM_090115-Best-Barbecue-Ribs-Ever-Recipe_s4x3.jpg" , restaurant_name= "Soul Sisters", price= 14.99)
    friedChicken = Food(name="Fried Chicken", type= "soulfood",   img= "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1568222255998.jpeg" , restaurant_name= "Soul Sisters", price= 14.99)
    porkChops = Food(name="Pork Chops", type= "soulfood",   img= "https://fitfoodiefinds.com/wp-content/uploads/2021/07/grilled-pork-chops-5-scaled.jpg" , restaurant_name= "Soul Sisters", price= 14.99)
    friedCatfish = Food(name="Fried Catfish", type= "soulfood",   img= "https://www.smartypantskitchen.com/wp-content/uploads/2020/05/Fried-catfish-with-tartar-sauceh.jpg" , restaurant_name= "Soul Sisters", price= 14.99)
    smokedTurkeyWings = Food(name="Smoked Turkey Wings", type= "soulfood",   img= "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/06/30/QK704-kardea-brown-smoked-turkey-wings_4x3.jpg.rend.hgtvcom.616.462.suffix/1656603929660.jpeg" , restaurant_name= "Soul Sisters", price= 14.99)
    pupusa = Food(name="Pupusa", type= "mexican",   img= "https://static01.nyt.com/images/2023/09/29/multimedia/HE-pupusa-zphv/HE-pupusa-zphv-superJumbo.jpg" , restaurant_name= "Mexican Eatery", price= 10.99)
    quesadilla = Food(name="Quesadilla", type= "mexican",   img= "https://midwestfoodieblog.com/wp-content/uploads/2023/04/FINAL-chicken-quesadilla-1-2.jpg" , restaurant_name= "Mexican Eatery", price= 10.99)
    tacos = Food(name="Tacos", type= "mexican",   img= "https://i0.wp.com/www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg?resize=760%2C570&ssl=1" , restaurant_name= "Mexican Eatery", price= 10.99)
    enchiladas = Food(name="Enchiladas", type= "mexican",   img= "https://www.sargento.com/assets/Uploads/Recipe/Image/enchilada.jpg" , restaurant_name= "Mexican Eatery", price= 10.99)
    chimichanga = Food(name="Chimichanga", type= "mexican",   img= "https://www.allrecipes.com/thmb/63liLu5ZpOac4PRcHzjrtKnfChs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/214572-chicken-chimichangas-with-sour-cream-sauce-DDMFS-4x3-a8e533ce663b48dc818049272eec5a66.jpg" , restaurant_name= "Mexican Eatery", price= 10.99)

    foods = [curryChicken, jerkChicken, oxtails, brownStewChicken, jerkPork, kimchiStew,
            soyBeanPasteStew, spicyPorkStirFry, porkBelly, bloodSausage, chickenParmesan,
            chickenAlfredo, gnocchi, risotto, ravioli, bbqRibs, friedChicken, porkChops,
            friedCatfish, smokedTurkeyWings, pupusa, quesadilla, tacos, enchiladas,
            chimichanga]


    # pr1 = RestaurantFood(restaurants=jamaican, food=curryChicken, price= 10.99)
    # pr2 = RestaurantFood(restaurants=jamaican, food=jerkChicken, price= 10.99)
    # pr3 = RestaurantFood(restaurants=jamaican, food=oxtails, price= 10.99)
    # pr4 = RestaurantFood(restaurants=jamaican, food=brownStewChicken, price= 10.99)
    # pr5 = RestaurantFood(restaurants=jamaican, food=jerkPork, price= 10.99)
    # pr6 = RestaurantFood(restaurants=korean, food=kimchiStew, price= 10.99)
    # pr7 = RestaurantFood(restaurants=korean, food=soyBeanPasteStew, price= 10.99)
    # pr8 = RestaurantFood(restaurants=korean, food=spicyPorkStirFry, price= 10.99)
    # pr9 = RestaurantFood(restaurants=korean, food=porkBelly, price= 10.99)
    # pr10 = RestaurantFood(restaurants=korean, food=bloodSausage, price= 10.99)
    # pr11 = RestaurantFood(restaurants=italian, food=chickenParmesan, price= 10.99)
    # pr12 = RestaurantFood(restaurants=italian, food=chickenAlfredo, price= 10.99)
    # pr13 = RestaurantFood(restaurants=italian, food=gnochi, price= 10.99)
    # pr14 = RestaurantFood(restaurants=italian, food=risotto, price= 10.99)
    # pr15 = RestaurantFood(restaurants=italian, food=ravioli, price= 10.99)
    # pr16 = RestaurantFood(restaurants=soulfood, food=bbqRibs, price= 10.99)
    # pr17 = RestaurantFood(restaurants=soulfood, food=friedChicken, price= 10.99)
    # pr18 = RestaurantFood(restaurants=soulfood, food=porkChops, price= 10.99)
    # pr19 = RestaurantFood(restaurants=soulfood, food=friedCatfish, price= 10.99)
    # pr20 = RestaurantFood(restaurants=soulfood, food=smokedTurkeyWings, price= 10.99)
    # pr21 = RestaurantFood(restaurants=mexican, food=pupusa, price= 10.99)
    # pr22 = RestaurantFood(restaurants=mexican, food=quesadilla, price= 10.99)
    # pr23 = RestaurantFood(restaurants=mexican, food=tacos, price= 10.99)
    # pr24 = RestaurantFood(restaurants=mexican, food=enchiladas, price= 10.99)
    # pr25 = RestaurantFood(restaurants=mexican, food=chimichanga, price= 10.99)

    # restaurantFood = [pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10, pr11, pr12, pr13, pr14, pr15, pr16, pr17, pr18, pr19, pr20, pr21, pr22, pr23, pr24, pr25]

    db.session.add_all(restaurants)
    db.session.add_all(foods)
    # db.session.add_all(restaurantFood)
    db.session.commit()