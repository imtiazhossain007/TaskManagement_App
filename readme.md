<div align="center">

# 📱 Task Management Mobile Application

### *A Full-Stack Mobile App with Backend Integration*

<img src="https://img.shields.io/badge/React%20Native-Expo-blue" />
<img src="https://img.shields.io/badge/Backend-Node.js-green" />
<img src="https://img.shields.io/badge/Database-MongoDB-brightgreen" />
<img src="https://img.shields.io/badge/Auth-JWT-orange" />

---

**Developed by:** Imtiaz Hossain  
**Assignment:** Mobile Application Development with Backend Integration  

</div>

---

## 🚀 Overview

This is a **full-stack Task Management mobile application** built using **React Native (Expo)** for the frontend and **Node.js + Express + MongoDB** for the backend.

The app allows users to:

- Register and login securely
- Create, view, update, and delete tasks
- Mark tasks as completed
- Maintain persistent login sessions
- Interact with a real backend API

The project demonstrates **real-world mobile ↔ backend integration**, authentication, and CRUD operations.

---

## ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- JWT-based authentication
- Secure password hashing
- Persistent login using AsyncStorage

### 📝 Task Management
- Add new tasks
- View all user-specific tasks
- Mark tasks as completed (radio-button style)
- Completed tasks visually fade
- Delete tasks

### 🎨 UI / UX
- Clean and minimal beige aesthetic
- Intuitive task cards
- Bottom tab navigation
- Responsive design

---

## 🛠 Tech Stack

### 📱 Frontend
- React Native (Expo)
- Expo Router
- Axios
- AsyncStorage

### 💻 Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt

---

## 🧠 How the App Works

1. User registers or logs in from the mobile app
2. Backend validates credentials and issues a JWT
3. JWT is stored securely on the device
4. All task requests are authenticated using JWT
5. Tasks are stored in MongoDB Atlas
6. Each task is linked to the logged-in user
7. UI updates dynamically based on backend data

---

## 📂 Project Structure

