DATABASE:

To run:
cd recipes/api/db/data
sudo mongod --dbpath ./

To connect and seed:
In a separate terminal:
cd recipes
npm run seed

To read the db:
In a separate terminal:
cd recipes
npm run read

API SERVER:

To run:
cd recipes
node api/server.js

Endpoints:
GET localhost:4000/all-recipes
POST localhost:4000/all-recipes
GET localhost:4000/1
DELETE localhost:4000/1

Example to use for the Post:
{
    "id": 2,
    "name": "Mushroom risotto",
    "ingredients": "mushrooms, risotto rice, parmesan"
}
