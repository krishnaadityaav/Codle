# Codle

This is a Collaborative Code Editor web application that supports real-time collaboration, syntax highlighting, and user authentication.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Monaco Editor
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Real-time Communication**: WebSocket
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Custom CSS with background image and logo

## Features

- **Real-time Collaboration**: Multiple users can edit code simultaneously.
- **Syntax Highlighting**: Code syntax is highlighted using Monaco Editor.
- **User Authentication**: Users can sign up and log in securely.
- **Responsive Design**: The application is designed to be visually appealing and user-friendly.

## Installation

1. **Install Backend Dependencies**

   ```sh
   cd backend
   npm install
   ```

2. **Install Frontend Dependencies**

   ```sh
   cd ../frontend
   npm install http-server -g
   ```

3. **Setup MongoDB**

   Ensure MongoDB is installed and running on your machine. You can start MongoDB using the following command:

   ```sh
   mongod
   ```

## Running the Application

1. **Start the Backend Server**

   ```sh
   cd backend
   node app.js
   ```

2. **Serve the Frontend**

   ```sh
   cd ../frontend
   http-server -c-1
   ```

   Open your browser and navigate to the URL provided by `http-server` (e.g., `http://localhost:3000`).

## Backend Overview

- `app.js`: Main backend file that sets up Express server and WebSocket server.
- `editorController.js`: Handles code synchronization logic.
- `editorRoutes.js`: Defines routes for login and signup.
- `models/userModel.js`: Mongoose schema and model for user authentication.

## Frontend Overview

- `index.html`: Main HTML file for the frontend.
- `styles.css`: CSS file for styling the frontend.
- `main.js`: JavaScript file that initializes Monaco Editor and handles authentication.


## Acknowledgements

- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
