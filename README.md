# 🗓️ Basic Activity Booking App API

A simple REST API built using **Node.js**, **Express**, and **MongoDB** that allows users to register, log in, view available activities, book them, and view their own bookings.

---

## 🚀 Features

- ✅ User Registration and Login (with JWT Auth)
- 🔒 Secure Password Hashing using bcrypt
- 🎯 View Available Activities (Public)
- 🎟️ Book Activities (Authenticated Users)
- 📋 View My Bookings (Authenticated Users)
- ✅ Input Validation using express-validator
- 🧱 Clean MVC folder structure

---

## 🛠️ Tech Stack

- **Backend**: Node.js + Express
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Token)
- **Validation**: express-validator
- **Password Hashing**: bcryptjs
- **API Testing**: Postman

---

## 📁 Folder Structure

activity-booking-app/
│
├── controllers/ # Business logic
│ ├── authController.js
│ ├── activityController.js
│ └── bookingController.js
│
├── models/ # Mongoose models
│ ├── User.js
│ ├── Activity.js
│ └── Booking.js
│
├── routes/ # API route definitions
│ ├── auth.js
│ ├── activities.js
│ └── bookings.js
│
├── middleware/ # Auth middleware
│ └── authMiddleware.js
│
├── .env # Environment variables
├── .gitignore
├── app.js # Entry point
├── package.json
└── README.md


---

## 📦 Installation & Running

### 🔧 Prerequisites

- Node.js & npm
- MongoDB Atlas account or local MongoDB

### 📥 Clone & Install

```bash
git clone https://github.com/your-username/activity-booking-app.git
cd activity-booking-app
npm install


⚙️ Configure Environment Variables
Create a .env file in the root:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

▶️ Run the App
bash
Copy
Edit
npm run dev    # For development (uses nodemon)
# or
npm start      # For production

 API Testing (via Postman)
Import the included Postman Collection (ActivityBookingApp.postman_collection.json) and test these routes:

Endpoint	Method	Auth Required	Description
/api/auth/register	POST	❌	Register new user
/api/auth/login	POST	❌	Login, returns JWT token
/api/activities	GET	❌	List all available activities
/api/bookings/:id	POST	✅	Book an activity
/api/bookings/my	GET	✅	View user’s bookings

