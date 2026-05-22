# 🚀 Perplexity AI Clone

An AI-powered conversational web application inspired by Perplexity AI that allows users to interact with multiple LLM models, manage conversation history, and experience secure authentication with email verification.

---

## ✨ Features

### 🤖 Multi-LLM Support
- Integrated **Google Gemini**
- Integrated **Mistral AI**
- Users can switch between AI models for different responses.

### 🔐 Authentication & Security
- JWT-based Authentication
- Secure Login & Registration
- Email Verification System
- Protected Routes

### 💬 AI Conversations
- Real-time AI chat experience
- Save conversation history
- View previous AI chats anytime

### 📚 Conversation History
- Store and retrieve user conversations
- Organized chat history interface

### ⚡ State Management
- Redux for global state management
- Optimized UI updates

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Redux Toolkit
- React Router
- Axios

## Backend
- Express.js
- Node.js
- JWT Authentication

## Database
- MongoDB

## AI Models
- Gemini API
- Mistral API

---

# 📂 Project Structure

```bash
project/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   └── App.jsx
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <your-repo-url>
```

Move into project:

```bash
cd project-name
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create `.env`

```env
PORT=

MONGODB_URI=

JWT_SECRET=

EMAIL_USER=
EMAIL_PASSWORD=

GEMINI_API_KEY=

MISTRAL_API_KEY=
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🔄 Workflow

1. User registers
2. Email verification completed
3. Login using JWT authentication
4. Start AI conversation
5. Select Gemini or Mistral model
6. Chat gets stored in MongoDB
7. Access previous conversation history

---

# 📸 Main Features Preview

- Authentication
- Email Verification
- AI Chat Interface
- Multiple LLM Selection
- Conversation History
- Responsive UI

---

# 🎯 Future Improvements

- Streaming Responses
- Voice Input
- Chat Export
- RAG Integration
- Docker Deployment
- Kubernetes Deployment

---

# 👨‍💻 Author

Developed by **Dinesh Singh**

---

⭐ If you like this project, give it a star.