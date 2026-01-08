# Event Registration System

## Technologies & Libraries

### Languages & Runtime

- **JavaScript (ES Modules)**
- **Node.js**

### Frameworks & Libraries

- **Express.js** (backend framework)
- **MongoDB** (database)
- **Mongoose** (ODM)
- **dotenv** (environment variable management)

### Development Tools

- **nodemon** (auto-reload during development)
- **Postman** (API testing)

---

## Project Overview

This project is a backend-driven Event Registration System that allows users to:

- Create events
- Register for events
- View their own registration history
- Cancel event registrations

The system is built using Node.js, Express, and MongoDB, following RESTful API design principles. A basic frontend UI is included to demonstrate complete end-to-end functionality.

This project was built as **TASK 2** for the CodeAlpha Internship, focusing on backend logic, database relationships, and real-world workflows.

---

## Core Concepts Implemented

- RESTful API architecture
- MongoDB relational modeling using references
- Input validation & error handling
- Capacity-based event registration
- User-specific event history
- Soft cancellation of registrations
- Frontend-to-backend API integration

---

## Folder Structure

```text
CodeAlpha_event-registration/
├── .env                # Environment variables (not committed)
├── .env sample         # Sample environment configuration
├── .gitignore          # Git ignore rules
├── package.json        # Project dependencies & scripts
├── package-lock.json   # Dependency lock file
├── README.md           # Project documentation
├── TODO.md             # Task checklist
├── public/
│   └── index.html      # Basic frontend UI
└── src/
	 ├── server.js           # Server entry point
	 ├── app.js              # Express app & route mounting
	 ├── config/
	 │   └── db.js           # MongoDB connection logic
	 ├── models/
	 │   ├── Event.js        # Event schema
	 │   ├── User.js         # User schema
	 │   └── Registration.js # Registration schema
	 └── routes/
		  ├── event.routes.js        # Event APIs
		  └── registration.routes.js # Registration & history APIs
```

---

## Database Models (Design Decisions)

### Event

- Stores event metadata
- Includes capacity to limit registrations
- Used as a reference in registrations

### User

- Identified uniquely by email
- Created automatically on first registration

### Registration

- Connects **User** ↔ **Event**
- Stores registration status (registered, cancelled)
- Used for history and capacity tracking

This separation ensures scalability, data integrity, and clean relationships.

---

## API Endpoints

### Event APIs

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| POST   | /api/events     | Create a new event |
| GET    | /api/events     | Fetch all events   |
| DELETE | /api/events/:id | Delete an event    |

### Registration APIs

| Method | Endpoint                          | Description             |
| ------ | --------------------------------- | ----------------------- |
| POST   | /api/registrations                | Register user for event |
| GET    | /api/registrations/history/:email | User’s event history    |
| DELETE | /api/registrations/:id            | Cancel registration     |

---

## Frontend (Optional UI)

A basic UI is included to:

- Enter user details
- Create events
- Select events from a dropdown
- Register users
- View and cancel registrations

The frontend dynamically fetches events to prevent invalid ObjectId input.

---

## Setup & Installation

### Prerequisites

- Node.js
- MongoDB (local or cloud)

### Setup Steps

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Configure environment variables:**
   - Copy `.env sample` → `.env`
   - Required variables:
     ```env
     PORT=5050
     MONGO_URL=mongodb://127.0.0.1:27017/eventregistration
     ```
3. **Start development server:**
   ```sh
   npm run dev
   ```
   Server runs on: [http://localhost:5050](http://localhost:5050)

---

## Usage Flow

1. Create an Event
2. Register a User for an Event
3. View User Event History
4. Cancel Registration (Soft Cancel)

Each step is validated to ensure:

- Valid event IDs
- Capacity limits
- No duplicate registrations

---

## Error Handling & Validation

- ObjectId validation for event IDs
- Duplicate registration prevention
- Capacity enforcement
- Graceful API error responses
- Safe fallbacks for missing users/events

---

## Design Decisions

- Email-based user identity for simplicity
- Soft cancellation instead of deletion
- Event dropdown UI instead of manual ID input
- Backend-first architecture
- ES Modules for modern Node.js compatibility

---

## Limitations

- No authentication or login system
- No role-based access (admin/user)
- No payment or ticketing
- No automated tests
- Not production-ready

---

## Scope & Intent

This project is intended for:

- Backend practice
- Internship evaluation
- Interview demonstrations
- Learning database relationships

---

## Future Improvements

- JWT authentication
- Admin dashboard
- Pagination & filters
- Event search
- Email notifications
- Deployment (Render / Railway / AWS)

---

## License

This project is created for educational and internship purposes. No license is specified.

---

## Author

**Tanish Sharma**

```text

CodeAlpha Internship – Task 2
Event Registration System
├── .env sample # Sample environment configuration
├── .gitignore # Git ignore rules
├── package.json # Project dependencies & scripts
├── package-lock.json # Dependency lock file
├── README.md # Project documentation
├── TODO.md # Task checklist
├── public/
│ └── index.html # Basic frontend UI
└── src/
├── server.js # Server entry point
├── app.js # Express app & route mounting
├── config/
│ └── db.js # MongoDB connection logic
├── models/
│ ├── Event.js # Event schema
│ ├── User.js # User schema
│ └── Registration.js # Registration schema
└── routes/
├── event.routes.js # Event APIs
└── registration.routes.js # Registration & history APIs

```

Database Models (Design Decisions)
Event

Stores event metadata

Includes capacity to limit registrations

Used as a reference in registrations

User

Identified uniquely by email

Created automatically on first registration

Registration

Connects User ↔ Event

Stores registration status (registered, cancelled)

Used for history and capacity tracking

This separation ensures scalability, data integrity, and clean relationships.

API Endpoints
Event APIs
Method Endpoint Description
POST /api/events Create a new event
GET /api/events Fetch all events
DELETE /api/events/:id Delete an event
Registration APIs
Method Endpoint Description
POST /api/registrations Register user for event
GET /api/registrations/history/:email User’s event history
DELETE /api/registrations/:id Cancel registration
Frontend (Optional UI)

A basic UI is included to:

Enter user details

Create events

Select events from a dropdown

Register users

View and cancel registrations

The frontend dynamically fetches events to prevent invalid ObjectId input.

Setup & Installation
Prerequisites

Node.js

MongoDB (local or cloud)

Setup Steps

Install dependencies:

npm install

Configure environment variables:

Copy .env sample → .env

Required variables:

```
PORT=5050
MONGO_URL=mongodb://127.0.0.1:27017/eventregistration
```

Start development server:

```
npm run dev
```

Server runs on:

```
http://localhost:5050
```

Usage Flow

Create an Event

Register a User for an Event

View User Event History

Cancel Registration (Soft Cancel)

Each step is validated to ensure:

Valid event IDs

Capacity limits

No duplicate registrations

Error Handling & Validation

ObjectId validation for event IDs

Duplicate registration prevention

Capacity enforcement

Graceful API error responses

Safe fallbacks for missing users/events

Design Decisions

Email-based user identity for simplicity

Soft cancellation instead of deletion

Event dropdown UI instead of manual ID input

Backend-first architecture

ES Modules for modern Node.js compatibility

Limitations

No authentication or login system

No role-based access (admin/user)

No payment or ticketing

No automated tests

Not production-ready

Scope & Intent

This project is intended for:

Backend practice

Internship evaluation

Interview demonstrations

Learning database relationships

Future Improvements

JWT authentication

Admin dashboard

Pagination & filters

Event search

Email notifications

Deployment (Render / Railway / AWS)

License

This project is created for educational and internship purposes.
No license is specified.

Author

Tanish Sharma
CodeAlpha Internship – Task 2
Event Registration System
