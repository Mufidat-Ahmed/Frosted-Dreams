# Frosted Dreams

**Frosted Dreams** is a web-based eCommerce application built for ordering baked goods. The platform provides users with a seamless experience to explore, order, and pay for products, focusing on a user-friendly interface and efficient backend management.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Architecture](#project-architecture)
5. [Setup Instructions](#setup-instructions)
6. [Usage Guidelines](#usage-guidelines)
7. [Folder Structure](#folder-structure)
8. [API Reference](#api-reference)
9. [Contributing](#contributing)
10. [License](#license)

---

### Project Overview
**Frosted Dreams** enables users to:
- Register and log in to their accounts
- Browse a catalog of baked goods with options to filter and search
- Add items to their cart, update quantities, and remove items
- Proceed to checkout and complete payments securely

The application is designed for a smooth eCommerce experience tailored to small baking businesses, allowing them to list, manage, and sell their products online.

---

### Features
- User Authentication (Registration, Login, Logout)
- Product Catalog and Search
- Shopping Cart with dynamic item management
- Checkout and Payment Integration

---

### Tech Stack
- **Frontend**: Angular, HTML, CSS, TypeScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (or your preferred NoSQL database)
- **Payment Integration**: (Specify the payment gateway, e.g., Stripe or PayPal if implemented)

---

### Project Architecture

Frosted Dreams is built using an MVC (Model-View-Controller) architecture:

- **Frontend (Angular)**: Handles the user interface, built with Angular components for pages like product browsing, the shopping cart, and checkout.
- **Backend (Express)**: Provides the API endpoints to handle requests for user authentication, product information, order processing, and payment.
- **Database (MongoDB)**: Stores all data, including users, products, orders, and session details.

Diagram (optional):  
User Interface (Angular) -> API Requests -> Backend (Node.js/Express) -> Database (MongoDB)


---

### Setup Instructions

1. **Clone the Repository**

   git clone https://github.com/Mufidat-Ahmed/Frosted-Dreams.git
   cd frosted-dreams
Backend Setup

Move to the backend directory:
cd backend
Install backend dependencies:
npm install
Set up environment variables by creating a .env file:
DB_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your Secret Key>
Start the backend server:
npm start
Frontend Setup

Navigate to the frontend directory:
cd frontend
Install frontend dependencies:
npm install
Start the Angular development server:
ng serve
Accessing the Application

Open your browser and go to http://localhost:4200 to start using Frosted Dreams.
Usage Guidelines
Sign Up / Log In: Register or log in to access your account.
Browse Products: Explore available baked goods by category or search functionality.
Add to Cart: Add items to the cart, adjust quantities, or remove items as needed.
Checkout: Review your cart, provide payment information, and place your order.
Folder Structure
The project is organized as follows:


frosted-dreams/
├── backend/
│   ├── controllers/     # Business logic for handling requests
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   ├── server.js        # Main server setup
│   └── .env             # Environment variables
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/  # Angular components
│   │   │   ├── services/    # Data services
│   │   │   ├── views/       # Application views (pages)
│   │   └── main.ts          # Angular entry file
└── README.md
API Reference
Here are some of the main API endpoints:

Endpoint	Method	Description
/api/data	GET	Retrieve all products
/api/users/register	POST	Register a new user
/api/users/login	POST	Log in an existing user
/api/orders	POST	Place an order
/api/orders/:userId	GET	Get order history for a user
More endpoints and detailed documentation can be expanded based on project needs.

Contributing
Contributions are welcome! If you have ideas or find any bugs, please open an issue or submit a pull request.