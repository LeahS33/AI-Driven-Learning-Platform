# AI-Driven Learning Platform – Backend

## Overview
This is the backend API for the AI-Driven Learning Platform, built with TypeScript, Express, and MongoDB.  
It provides endpoints for managing users, prompts, categories, subcategories, and admin features.

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── api/           # External API integrations (e.g., OpenAI)
│   ├── config/        # Configuration and DB connection
│   ├── controllers/   # Express route handlers
│   ├── middlewares/   # Express middlewares (auth, admin, etc.)
│   ├── models/        # Mongoose data models
│   ├── routes/        # Express route definitions
│   ├── seeds/         # Seed scripts (e.g., admin user)
│   ├── services/      # Business logic and DB queries
│   ├── types.ts       # Shared TypeScript types
│   ├── app.ts         # Express app setup
│   └── index.ts       # App entry point
├── .env               # Environment variables (not committed)
├── .env.example       # Example env file
├── package.json       # Project metadata and dependencies
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

---

## 🛠 Technologies Used

- **Node.js** & **Express** (API server)
- **TypeScript** (type safety)
- **MongoDB Atlas** with **Mongoose** (database)
- **OpenAI API** (AI responses)
- **dotenv** (environment variables)

---

## 📋 Assumptions Made

- MongoDB Atlas is used as the primary database (but you can use local MongoDB if you wish).
- The backend runs on `http://localhost:3000` by default.
- Environment variables are required for sensitive configuration (see `.env.example`).
- The backend is intended to be used with the matching frontend project.

---

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy the example file and fill in your values:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` to include your MongoDB Atlas connection string and OpenAI API key.

4. **Start the application:**
   ```bash
   npm run dev
   ```
   The backend will start on the port specified in your `.env` (default: `3000`).

---

## 🧪 Sample `.env.example` File

```
DATABASE_URL=your_mongodb_atlas_connection_string
OPENAI_API_KEY=your_openai_api_key
PORT=3000
NODE_ENV=development
```

---


## 📖 Usage

- The API provides endpoints for user management, prompt management, categories, subcategories, and admin actions.
- Refer to the API documentation or code comments for detailed usage instructions.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

---

## 📝 License

This project is licensed under the MIT License.

---