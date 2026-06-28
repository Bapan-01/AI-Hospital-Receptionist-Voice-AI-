# Voice Agent Backend
A Node.js and Express backend for a Voice Agent, powered by the Google Gemini API using the official `@google/genai` SDK. This backend provides endpoints for chatting with the Gemini model and a mock appointment booking system that can be integrated with function calling or external services.
---
## Features
- **Gemini Chat Integration**: Connects to `gemini-2.5-flash` using the official Google Gen AI SDK.
- **Appointment Booking System**: A mock endpoint (`/book-appointment`) to simulate booking appointments with doctors.
- **Environment Configuration**: Simple configuration using `dotenv`.
---
## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **AI SDK**: `@google/genai` (v2.10.0+)
- **Configuration**: `dotenv`
---
## Prerequisites
Ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A Gemini API Key (get one from [Google AI Studio](https://aistudio.google.com/))
---
## Getting Started
### 1. Installation
Clone or download the project files, navigate to the project directory, and install the dependencies:
```bash
npm install
```
### 2. Configuration
Create a `.env` file in the root directory of the project and add your Gemini API key:
```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
```
*Note: The `.env` file is excluded from git tracking to protect your API key.*
### 3. Running the Server
Start the Express server by running:
```bash
node index.js
```
The server will start running on `http://localhost:3000`.
---
## API Reference
### 1. Health Check
Checks if the backend is running.
- **URL**: `/`
- **Method**: `GET`
- **Response**:
  ```text
  Voice Agent is running!
  ```
---
### 2. Chat with Gemini
Sends a message to the `gemini-2.5-flash` model and returns the text response.
- **URL**: `/chat`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "message": "Explain quantum computing in one sentence."
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "reply": "Quantum computing is a type of computation that harnesses the collective properties of quantum states, such as superposition and entanglement, to perform calculations far more efficiently than classical computers for certain complex problems."
  }
  ```
---
### 3. Book Appointment
A mock endpoint to book an appointment with a doctor.
- **URL**: `/book-appointment`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "doctor": "Smith",
    "date": "2026-07-01",
    "time": "10:30 AM"
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "message": "John Doe's appointment with Dr. Smith has been booked for 2026-07-01 at 10:30 AM."
  }
  ```
---
## Next Steps
To turn this into a fully autonomous voice or chat agent:
1. **Gemini Function Calling**: Configure the Gemini model in `/chat` with a tool definition for `book-appointment`.
2. **Audio Integration**: Integrate with WebRTC or WebSocket audio streaming to process voice input and generate voice output.
