# Express-server
GET,POST,PUT,DELETE with local json file and server as well

# This problem was given to NEM111 C1 Evaluation 
### Problem1 
Make an API which accepts a website name and returns it's IP address.

Endpoint - /getmeip Make a post request to the above API end point, sending website name in JSON format with key as "website_name" the API should return the website's IP address

Hint : Checkout DNS module of node to get IP address of site.

Example : Request : POST request to http://localhost:7000/getmeip with payload as { "website_name" : "masaischool.com" }

Response : 3.7.190.202 (Your response IP address can be different for same site name, don't worry about it)

### Problem2 

Make an API using Express to perform CRUD Operation

Create - POST - /products/create - Should be able to create/add products, store them in a json file called products.json, in key "products"

Read - GET - /products - Should be able get all the products present;

Update - PUT/PATCH - /products/:productId - modify the product of the given product ID

Delete - DELETE - /products/:productId - delete the product of the given product ID

Hint : Checkout "File system" module of node to store/read data from a file.

## Installation 
```
intall/set package file 
npm init -y
install express package
npm i express
```

