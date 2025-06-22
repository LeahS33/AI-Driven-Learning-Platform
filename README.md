# AI-Driven Learning Platform

This project is a full-stack web application that leverages AI to enhance the learning experience. Users can submit prompts, receive AI-generated responses, and track their learning history. The platform features user authentication, category-based prompt organization, and an admin dashboard for managing users and content. Built with React and TypeScript on the frontend, Node.js and Express on the backend, and MongoDB for data storage, it is designed for scalability, usability, and modern development workflows.

## ✨ Features

- AI-powered prompt/response system
- User authentication and profile management
- Category and subcategory organization for prompts
- Prompt history and tracking
- Admin dashboard for user and content management
- Responsive, modern UI

---

## 🖼️ Screenshots

![users](https://github.com/user-attachments/assets/fa8ba582-bcb6-4f99-a0d5-61a49bd192a2)
---
![admin learning history](https://github.com/user-attachments/assets/c3ca2e22-26dd-4f3b-a4ad-c0735e88d3fd)
---
![user learning history](https://github.com/user-attachments/assets/21fc602b-ed58-4958-9151-b5cf2e3dc921)
---
![prompt input](https://github.com/user-attachments/assets/0cbaef19-c4eb-4237-9856-6463c134476f)
---
![login](https://github.com/user-attachments/assets/f2b53d3d-51c9-4cd7-8291-483020a283b9)

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd AI-Driven-Learning-Platform
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Configure environment variables**
   - Copy the example files and fill in your values:
     ```bash
     cp backend/.env.example backend/.env
     cp frontend/.env.example frontend/.env
     ```
     These commands copy the example environment variable files to `.env` files, which you should edit to include your actual secrets and configuration (such as your MongoDB Atlas connection string and OpenAI API key).

---

## 🛠 Technologies Used

- **Frontend:** React, TypeScript, Redux Toolkit, React Router, CSS Modules, Vite
- **Backend:** Node.js, Express, TypeScript, MongoDB (Mongoose)
- **Database:** MongoDB Atlas

---

## 📁 Project Structure

```
AI-Driven-Learning-Platform/
├── backend/
│   ├── src/
│   │   ├── api/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── seeds/
│   │   ├── services/
│   │   ├── app.ts
│   │   ├── index.ts
│   │   └── types.ts
│   ├── .env.example
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── ...
└── README.md
```

---

## 💻 How to Run Locally

### Backend

```bash
cd backend
npm install
npm run dev
```
The backend will start on the port specified in your `.env` (default: `3000`).

### Frontend

```bash
cd frontend
npm install
npm run dev
```
The frontend will start on `http://localhost:5173`.

> **Note:**  
> If you are using MongoDB Atlas, you do **not** need to run a local MongoDB instance or use Docker Compose for the database.  
> Just set your `DATABASE_URL` in `.env` to your Atlas connection string.
---

## 🧪 Sample `.env.example` Files

### backend/.env.example
```
DATABASE_URL=database_url_here
OPENAI_API_KEY=api_key_here
PORT=3000
NODE_ENV=development
```

---

## 📞 Contact

For questions or issues, please open an issue on GitHub.

---

## 📝 License

This project is licensed under the MIT License.

---
