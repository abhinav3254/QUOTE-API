# Express API with MongoDB Integration

This repository contains a simple Express.js API that interacts with a MongoDB database using Mongoose. The API provides endpoints for retrieving product data and inserting new products.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- MongoDB

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/abhinav3254/QUOTE-API
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the MongoDB connection:

   Update the `db-config.js` file with your MongoDB connection details.

4. Run the application:

   ```bash
   node index.js
   ```

   The server will start running on the specified port (default: 4500).

## API Endpoints

### 1. Retrieve All Products

- **Endpoint:** `GET /`
- **Description:** Fetches all product data from the database.
- **Response:** JSON array containing product information.

### 2. Insert New Product

- **Endpoint:** `POST /insert`
- **Description:** Inserts a new product into the database.
- **Request Body:** JSON object representing the product to be inserted.
- **Response:** JSON object containing the result of the insertion.

## Example Usage

### Retrieve All Products

```bash
curl http://localhost:4500
```

### Insert New Product

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "New Product", "price": 29.99, "category": "Electronics"}' http://localhost:4500/insert
```

## Dependencies

- Express.js: Web application framework
- Mongoose: MongoDB object modeling for Node.js

## Contributing

Feel free to contribute to the project by submitting issues or pull requests. Your feedback and contributions are highly appreciated.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.   

# About The Project

<img src="./images/Quote-API JSON-Insert.png" alt="express">
<img src="./images/Quote-API JSON.png" alt="express">


Hello Everyone,
This is an Basic API right now but we are trying to improve it day by day and I try to work on this API everyday,so that I can improve it.

<h2>Operations that we can peform Right now using this API</h2>

1. Get request
2. Post request

# Built with
<img src="./svg/love.svg" alt="express" width="100" height="100">


<img src="./svg/express.svg" alt="express" width="200" height="">

<img src="./svg/node.svg" alt="node" width="200" height="">

<img src="./svg/nodemon.svg" alt="nodemon" width="200" height="">


<img src="./svg/mongodb.svg" alt="nodemon" width="200" height="">


<h2>Getting Started</h2>

Must have node.js in the system installed

install the pacakges

npm i express
<br>
npm i nodemon

# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/2. AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
