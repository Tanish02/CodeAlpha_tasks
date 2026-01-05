# URL Shortener

A simple URL Shortener application built using Node.js, Express, and MongoDB. It provides both a REST API and a basic web interface to generate short URLs that redirect to their original long URLs.

This project is intended for learning, practice, and demonstration purposes, showcasing backend fundamentals and basic frontend integration.

## Features

- Generate short URLs from long URLs
- Redirect short URLs to original destinations
- Persistent storage using MongoDB
- RESTful API design
- Lightweight frontend for end-to-end demonstration
- Environment-based configuration
- Clean and modular project structure

## Technologies & Libraries

**Languages & Runtime**

- JavaScript (ES Modules)
- Node.js

**Frameworks & Libraries**

- Express.js – Web framework
- MongoDB – NoSQL database
- Mongoose – MongoDB ODM
- dotenv – Environment variable management
- crypto – Short code generation

**Development Tools**

- nodemon – Development server auto-reload

## Core Logic & Design Decisions

**URL Shortening Logic**

- A random `shortCode` is generated using Node.js crypto module.
- Only `shortCode` and `originalUrl` are stored in the database.
- The full shortened URL is constructed dynamically using the request’s protocol and host.
- _Decision rationale_: Storing only the short code keeps the database independent of environment-specific base URLs (localhost, production domain, etc.).

**Redirect Logic**

- Public redirect route is defined as:

  `GET /:shortCode`

  The server:

  - Extracts the short code from the URL
  - Looks it up in MongoDB
  - Redirects to the original URL

- _Decision rationale_: Public redirect URLs are intentionally kept outside `/api`, while `/api` is reserved for backend operations.

**Database Design**

- MongoDB collection stores:
  - `originalUrl`
  - `shortCode` (unique)
  - `createdAt`, `updatedAt`
- A unique index is applied only on `shortCode`.
- _Important note_: Schema refactoring required manual cleanup of obsolete database indexes, highlighting real-world database maintenance considerations.

**Frontend Design**

- Built using plain HTML, CSS, and Vanilla JavaScript.
- Uses Fetch API to communicate with the backend.
- _Decision rationale_: Keeps the project lightweight while still demonstrating full-stack integration.

## Repository Structure

```
url-shortener/
├── .env                 # Environment variables (not committed)
├── .env.sample          # Sample environment variable file
├── .gitignore           # Git ignore rules
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Dependency lock file
├── public/
│   └── index.html       # Basic frontend UI
├── README.md            # Project documentation
├── TODO.md              # Task notes
└── src/
    ├── app.js           # Express app setup & route registration
    ├── server.js        # Application entry point
    ├── config/
    │   └── db.js        # MongoDB connection logic
    ├── models/
    │   └── Url.js       # Mongoose schema/model
    └── routes/
        └── url.routes.js # API routes for URL shortening
```

## API Endpoints

### Create Short URL

**POST**

`/api/shorten`

**Request Body**

```json
{
  "longUrl": "https://www.example.com"
}
```

**Response**

```json
{
  "shortUrl": "http://localhost:5050/abcd1234"
}
```

### Redirect to Original URL

**GET**

`/:shortCode`

Automatically redirects to the original URL.

## Setup & Requirements

**Prerequisites**

- Node.js
- MongoDB (local or remote)

**Setup Steps**

1. Install dependencies:
   ```sh
   npm install
   ```
2. Configure environment variables:
   - Copy `.env.sample` to `.env`
   - Required variables:
     ```env
     PORT=5050
     MONGO_URI=mongodb://127.0.0.1:27017/urlshortener
     ```
3. Start the application:
   ```sh
   npm run dev
   ```
   or
   ```sh
   npm start
   ```
4. Open in browser:
   - [http://localhost:5050](http://localhost:5050)

## Scope & Intent

This project is designed to:

- Practice REST API development
- Understand MongoDB schema & indexing
- Demonstrate backend–frontend integration
- Serve as an internship / portfolio project

## Limitations

- No authentication or user management
- Minimal input validation
- No rate limiting or abuse prevention
- No automated tests
- Random short code generation without collision handling
- Not intended for production use

## Author

Tanish Sharma
Backend / Mern-Stack Developer (Junior)

## License

No license specified.
