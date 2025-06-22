# AI-Driven Learning Platform – Frontend

This is the frontend for the AI-Driven Learning Platform. It is built with **React**, **TypeScript**, **Redux Toolkit**, and **Vite**.  
Users can submit prompts, receive AI-generated responses, view their learning history, and manage their profile. Admins can manage users and view all prompts.

---

## ✨ Features

- AI-powered prompt/response system
- User authentication and profile management
- Category and subcategory organization for prompts
- Prompt history and tracking
- Admin dashboard for user and content management
- Responsive, modern UI

---

## 🛠 Technologies Used

- **React** (with Vite)
- **TypeScript**
- **Redux Toolkit**
- **React Router**
- **CSS Modules**

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── api/           # API calls
│   ├── components/    # React components
│   ├── pages/         # Page components
│   ├── store/         # Redux store and slices
│   ├── styles/        # CSS files
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── logo.png
├── .env.example
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📋 Assumptions Made

- The backend API is available at `http://localhost:3000` (or as set in your `.env`).
- The backend is already running and accessible.
- Environment variables are required for configuration (see `.env.example`).

---

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd AI-Driven-Learning-Platform/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Copy the example file and fill in your values:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` to set your backend API URL (e.g., `VITE_API_URL=http://localhost:3000`).

4. **Start the application**
   ```bash
   npm run dev
   ```
   The frontend will start on [http://localhost:5173](http://localhost:5173) by default.

---

## 🧪 Sample `.env.example` File

```
VITE_API_URL=http://localhost:3000
```

---

## 🖼️ Screenshots



---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

---

## 📝 License

This project is licensed under the MIT License.

---