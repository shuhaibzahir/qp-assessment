# Grocery App

This application is a sample project for managing groceries and adding them to a cart.

## Default User Credentials

You can use the following default user credentials to access the application:

1. **Username:** admin  
   **Password:** 1234

2. **Username:** user1  
   **Password:** 1234

## API Endpoints

### 1. User Authentication

To obtain an authentication token, send a POST request to:

```
yourhost/user/login
```

with the following payload:

```json
{
    "username": "admin",
    "password": "1234"
}
```

### 2. Create Grocery Item

To create a grocery item, send a POST request to:

```
/endpoint/grocery
```

with the following fields:

- `name` (string): Name of the grocery item.
- `price` (number): Price of the grocery item.
- `description` (string): Description of the grocery item.
- `quantity` (number): Quantity of the grocery item.

Example payload:

```json
{
    "name": "Apple",
    "price": 2.5,
    "description": "Fresh red apple",
    "quantity": 10
}
```

### 3. Add Grocery to Cart

To add a grocery item to the cart, send a POST request to:

```
/endpoint/cart
```

with the following payload:

```json
{
    "items": [
        { "id": "groceryid1", "qty": 2 },
        { "id": "groceryid2", "qty": 1 }
    ]
}
```

Replace `"groceryid1"`, `"groceryid2"`, etc. with the actual IDs of the grocery items.

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Set up your environment variables by creating a `.env` file and specifying the necessary configurations.
4. Run the application using `npm start`.
5. Explore the API endpoints using your preferred API client (e.g., Postman).

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
