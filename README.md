<!-- ABOUT THE PROJECT -->

## About Project 

This project is a hands-on practice application built using the **MERN stack** (MongoDB, Express.js, React, and Node.js). It's designed to help you practice basic **Create**, **Update**, and **Delete** (CRUD) operations on product data. You'll interact with a MongoDB database, build RESTful APIs with Express, and create a dynamic front-end with React, all while working with Node.js as your back-end server.

## Key Features:
- [x] **Create Products**: Add new product entries with details such as name, price, and description.
- [x] **Update Products**: Modify the details of existing products in the system.
- [x] **Delete Products**: Remove products from the system when they are no longer needed.
- [x] **RESTful API**: Back-end logic built using Express.js to handle CRUD operations for the products.
- [x] **MongoDB Database**: Store and manage product data in MongoDB, allowing easy retrieval, updates, and deletions.
- [ ] **React Front-End**: Interactive, dynamic user interface for seamless interaction with the back-end.

## Tech Stack:
- **MongoDB**: NoSQL database to store product data.
- **Express.js**: Web framework for Node.js, responsible for handling routes and back-end logic.
- **React (Vite)**: JavaScript library for building user interfaces, providing a dynamic front-end experience.
- **Node.js**: JavaScript runtime environment for building server-side applications.

## Getting Started

Follow these simple steps to get the project up and running on your local machine:

1. **Install Prerequisites**  
   Make sure you have the following software installed on your machine:
   - [Node.js](https://nodejs.org/) (LTS version recommended)
   - [npm](https://www.npmjs.com/) (Usually installed automatically with Node.js)
   - [MongoDB](https://www.mongodb.com/) (Either installed locally or use MongoDB Atlas for cloud storage)

2. **Clone the Repository**  
   Clone the repository to your local machine. Open your terminal/command prompt and run the following command:
   
   ```bash
   git clone https://github.com/kael-coding/product-crud-app.git
   cd product-crud-app
   
4. **Install Backend Dependencies**
   Navigate to the back-end folder (usually backend or server), and install the required Node.js dependencies for the server:
   
    ```bash
    cd backend
    npm install
    
6. **Install Frontend Dependencies**
      Navigate to the front-end folder (usually client or frontend), and install the React (Vite) dependencies:
   
   ```bash
   cd frontend
    npm install
   
8. **Set Up MongoDB**
  You need a MongoDB database to store product data. You can either set it up locally or use MongoDB Atlas for cloud-based storage.

-  Local MongoDB Setup:
    1. Install MongoDB on your machine if you don't already have it. You can follow the instructions on the official MongoDB installation guide.
    2. Start the MongoDB service on your machine.
       
-  MongoDB Atlas Setup (if using cloud):
    1. Create an account on MongoDB Atlas.
    2. Set up a new cluster.
    3. Get your MongoDB URI connection string from Atlas. It will look like this:

   ```bash
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/productdb
   
6. **Configure MongoDB URI**
   Create a .env file in the back-end folder and add the MongoDB connection string: For local MongoDB setup:  

   ```bash
   MONGO_URI=mongodb://localhost:27017/productdb \
   
 - For MongoDB Atlas setup:

   ```bash
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/productdb

8. **Start the Back-End Server**
   Now, go back to the back-end folder and run the following command to start the server:
   
     ```bash
     npm start
     
10. **Access the Application**
    Open your web browser and navigate to:
    
    ```bash
    http://localhost:3000


Now it should all be there as you requested. Let me know if anything needs tweaking!

