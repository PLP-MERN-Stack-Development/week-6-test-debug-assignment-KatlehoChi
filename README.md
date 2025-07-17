#  MERN Bug Tracker

A full-stack bug tracking application built with the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates comprehensive testing and debugging strategies, including unit, integration, and end-to-end testing.

---

## Project Structure

```plaintext
project-root/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── utils/          # Frontend utilities
│   │   ├── tests/          # Unit and integration tests
│   │   └── App.jsx         # Main app component
│   ├── cypress/            # End-to-end tests
│   └── package.json        # Client dependencies
├── server/                 # Express backend
│   ├── src/
│   │   ├── models/         # Mongoose models (Bug, Post, User)
│   │   ├── routes/         # API route handlers
│   │   ├── middleware/     # Error handling and auth
│   │   ├── utils/          # Server utilities
│   │   └── app.js          # Express app setup
│   ├── tests/              # Server-side tests
│   └── package.json        # Server dependencies
├── jest.config.js          # Jest configuration
└── README.md               # Project documentation



---

## Features

- Report, view, update, and delete bugs
- Authenticated post creation and filtering
- Pagination and slug support for posts
- Error boundaries and debugging tools
- Full test coverage with Jest, Supertest, and Cypress

---

## Technologies Used

- **Frontend**: React, Axios, React Testing Library, Cypress
- **Backend**: Express, Mongoose, JWT, Supertest, Jest
- **Testing**: Jest, Supertest, React Testing Library, Cypress, MongoDB Memory Server

---

## Testing Strategy

###  Unit Tests
- `Button.test.jsx`: Tests rendering, props, variants, sizes, and click behavior
- `bugModel.test.js`: Validates schema constraints

###  Integration Tests
- `posts.test.js`: Covers all CRUD operations for posts with authentication and validation
- Uses `MongoMemoryServer` for isolated DB testing

###  End-to-End Tests
- `bugFlow.cy.js`: Simulates full user flow — reporting and viewing bugs

### Coverage
To generate coverage reports:

```bash
npm test -- --coverage



## Debugging Techniques

- console.log() for tracking values

- Chrome DevTools for inspecting React state and network requests

Node.js Inspector:

- bash
node --inspect index.js

- Error Boundaries in React:
ErrorBoundary.jsx catches rendering errors and displays fallback UI


## Installation & Setup

- 1. Clone the Repository
bash
git clone https://github.com/PLP-MERN-Stack-Development/week-6-test-debug-assignment-KatlehoChi.git
cd mern-bug-tracker


- 2. Install Backend Dependencies
bash
cd server
npm install
npm start

- 3. Install Frontend Dependencies
bash
cd client
npm install
npm start

## Running Tests

- Backend
bash
cd server
npm test

- Frontend
bash
cd client
npm test

- Cypress E2E
bash
cd client
npx cypress open

## Author
Katleho — Built as part of PLP Academy Week 6 assignment on Testing & Debugging MERN Applications.

📄 License
This project is licensed under the MIT License.


