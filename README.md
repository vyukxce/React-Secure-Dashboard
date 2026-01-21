# 🌟 User Explorer Dashboard

[![React](https://img.shields.io/badge/React-v18-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3-green?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Completed-brightgreen)]()

---

## 🚀 Project Overview

**User Explorer Dashboard** is a **premium, responsive React dashboard** showcasing:

- **Authentication** with context API + persistent login  
- **Protected Routes** using React Router DOM  
- **Dark/Light Theme Toggle** with smooth transitions  
- **Responsive Dashboard Cards** with pastel UI, shadows, scale hover  
- **Professional, resume-ready design**  

This project demonstrates **real-world frontend skills** including **state management, routing, and premium UI/UX**.

---

## 🎨 Features

- Login / Logout system with input validation (`trim()` edge cases handled)  
- Persistent login with `localStorage`  
- Theme toggle (Dark/Light) globally applied  
- Fully responsive dashboard layout  
- Cards with **hover scale, shadow, and pastel colors**  
- Navbar with user info, logout, and theme toggle  
- Context API for **Auth** and **Theme**  
- Smooth transitions & premium UI feel  

---

## 💻 Technologies Used

- **React v18**  
- **React Router DOM**  
- **TailwindCSS v3**  
- **Context API** (Auth + Theme)  
- **LocalStorage** (Persistence)  

---

## 🗂 Folder Structure
---

User-Explorer-Dashboard/
├── public/
│   └── vite.svg
├── screenshots/                # GIF / screenshots for README
│   └── dashboard-preview.gif
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Card.jsx
│   │   └── Navbar.jsx
│   ├── context/                # Context API providers
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/                   # Static / dummy data
│   │   └── dashboardData.js
│   ├── pages/                  # App pages
│   │   ├── Dashboard.jsx
│   │   └── Login.jsx
│   ├── routes/                 # Routing helpers
│   │   └── ProtectedRoute.jsx
│   ├── App.jsx                 # Main router setup
│   └── main.jsx                # Entry point, providers wrap
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js



---

## ⚡ Installation & Running Locally

```bash
# Clone the repo
git clone https://github.com/vyukxce/User-Explorer-Dashboard.git

# Enter folder
cd User-Explorer-Dashboard

# Install dependencies
npm install

# Run dev server
npm run dev

---

## 🔮 Future Enhancements

- **Connect real API backend** – login + dynamic data fetch  
- **Add analytics charts & graphs** – for dashboard insights  
- **Role-based dashboard permissions** – admin, user, guest roles  
- **Notifications, alerts, and tooltips** – interactive user experience  
- **Deploy live** – via Netlify or Vercel  

---

## 📌 Author

**Vineet Dwivedi**  

- GitHub: [vyukxce](https://github.com/vyukxce)    
- Email: vineetdwivedi409@gmail.com
