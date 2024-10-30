#Frosted Dreams
Frosted Dreams is an eCommerce web application designed for ordering baked goods. Built with Angular, Express, and Node.js, it provides users with a smooth shopping experience, from browsing a variety of baked items to making secure payments.

Table of Contents
Project Overview
Features
Tech Stack
Project Architecture
Installation and Setup
Usage Guidelines
Folder Structure
API Documentation
Contributing
License
#Project Overview
Frosted Dreams allows users to:

Explore and browse a catalog of baked goods.
Register and log in to save orders.
Add items to a cart and proceed to secure checkout.
Review past orders.
It’s ideal for businesses that want to list baked goods and for customers looking for a seamless shopping experience specific to bakery items.

#Features
User authentication (registration and login).
Product catalog with item details.
Shopping cart with add/remove items.
Checkout with payment integration.
Tech Stack
Frontend: Angular
Backend: Node.js and Express
Database: MongoDB
Languages: JavaScript, HTML, CSS
#Project Architecture
The application uses an MVC (Model-View-Controller) pattern with a RESTful API to manage backend data. Here’s a high-level overview:

Frontend (Angular): Manages the user interface, including components for product listings, the shopping cart, and the checkout flow.
Backend (Express): Contains the API endpoints and business logic for managing products, users, orders, and sessions.
Database (MongoDB): Stores data for products, users, and orders.
Installation and Setup
Clone the Repository

bash
Copy code
git clone https://github.com/Mufidat-Ahmed/Frosted-Dreams.git
cd frosted-dreams
#Backend Setup

#Navigate to the backend folder:
bash
Copy code
cd backend
Install dependencies:
bash
Copy code
npm install
Set up a .env file for environment variables:
plaintext
Copy code
DB_URI=<Your MongoDB Connection URI>
JWT_SECRET=<Your JWT Secret Key>
Start the backend server:
bash
Copy code
npm start
Frontend Setup

#Navigate to the frontend folder:
bash
Copy code
cd frontend
Install dependencies:
bash
Copy code
npm install
Run the Angular development server:
bash
Copy code
ng serve
Access the Application

Open your browser and go to http://localhost:4200.
#Usage Guidelines
User Registration: Create an account to place orders.
Browse Products: Use the search and filter options to explore products.
Add to Cart: Add selected items to your cart for easy checkout.
Checkout: Review cart items, enter shipping details, and proceed to payment.
Order History: View past orders from your account dashboard.
Folder Structure
plaintext
Copy code
frosted-dreams/
├── backend/
│   ├── controllers/      # Business logic
│   ├── models/           # Database schemas
│   ├── routes/           # API routes
│   └── server.js         # Server entry point
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── components/   # UI components
    │   │   ├── services/     # API calls and state management
    │   │   ├── views/        # Page views
    │   └── main.ts           # Application entry point
API Documentation
Endpoint	Method	Description
/api/products	GET	Retrieve all available products
/api/users/signup	POST	Register a new user
/api/users/login	POST	Log in an existing user
/api/orders	POST	Place a new order
/api/orders/:userId	GET	Retrieve order history for a user
For a full list of API endpoints, refer to the /backend/routes folder.

Contributing
Contributions are always welcome! Please fork the repository and submit a pull request, or open an issue for any bugs or feature requests.

