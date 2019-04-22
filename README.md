# express-with-mssql
CRUD api in express with mssql

# Instruction to run
1. npm i
2. node index.js
# API End points
1. localhost:8000/api/customers (GET)
2. localhost:8000/api/customers/1 (GET)
3. localhost:8000/api/customers (POST)
4. localhost:8000/api/customers/1 (DELETE)
5. localhost:8000/api/customers (POST)
* Request Body:
```
{
    "name": "customer 20",
    "email": "customer20@email.com",
    "phone": "01677813190",
    "address": "Dhaka, Bangladesh"
}
```
