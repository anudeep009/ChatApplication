# Real-Time Chat Application

## Description
This is a **real-time chat application** built using the **MERN stack** (MongoDB, Express, React, Node.js). The application allows multiple users to communicate in real-time by exchanging messages instantly. It features user authentication, individual and group chats, and notifications for new messages.

The backend server leverages **WebSockets (Socket.IO)** to enable real-time, bidirectional communication between the users and the server. This ensures that messages are delivered instantly without needing to refresh the page. The app is designed with a responsive UI, making it usable on both desktop and mobile devices.

## Features
- **Real-Time Messaging**: Users can send and receive messages instantly with the help of WebSockets (Socket.IO).
- **User Authentication**: Secure login and registration system using JWT (JSON Web Tokens) for authentication.
- **Individual and Group Chats**: Support for private 1:1 chats as well as group chats.
- **Message Notifications**: Real-time notifications for new messages in active and background chats.
- **Responsive UI**: A user-friendly interface designed for both desktop and mobile users.
- **Chat History**: All conversations are stored in MongoDB, so users can view their chat history anytime.

## Tech Stack
- **Frontend**: 
  - **React**: Dynamic and interactive user interface.
  - **CSS/TailwindCSS**: For styling and responsive design.
  
- **Backend**: 
  - **Node.js**: Server-side JavaScript runtime.
  - **Express**: Web framework for building the API.
  - **Socket.IO**: For real-time communication between the client and server.

- **Database**: 
  - **MongoDB**: NoSQL database to store user data, chat history, and messages.

- **Authentication**: 
  - **JWT (JSON Web Tokens)**: Used for secure authentication and user sessions.

## Setup and Installation

### Prerequisites
- Node.js
- MongoDB
- A code editor (e.g., VSCode)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/anudeep009/ChatApplication.git
