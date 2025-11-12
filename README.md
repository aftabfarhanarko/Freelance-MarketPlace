# 🧑‍💼 Freelance MarketPlace

### 🌐 Live Site URL

🔗 https://freelance-marketplace-a3cd2.web.app/

### 🌍 Server Live URL
🔗 https://server-freelance-marketplace.vercel.app/

---

## 📖 Project Overview

**Freelance MarketPlace** is a full-stack web application designed to connect clients and freelancers in one digital platform.  
Users can **create, view, update, and delete jobs**, while authenticated users can **manage their own tasks** and **accept jobs posted by others**.

This project demonstrates complete integration of **React (Vite)**, **Node.js + Express.js**, **MongoDB Atlas**, and **Firebase Authentication**, ensuring a seamless and secure user experience.

---

## ⚙️ Core Features

✅ **User Authentication**

- Firebase authentication (Email/Password & Google login)
- Conditional rendering for Login/Logout buttons
- Protected private routes

✅ **Job Management (CRUD)**

- Add, View, Update, and Delete jobs
- Dynamic data stored in MongoDB Atlas
- Toast notifications for all operations (No alert used)

✅ **Job Acceptance System**

- Users can accept other users’ posted jobs
- Accepted jobs appear in “My Accepted Tasks”
- DONE and CANCEL buttons remove tasks dynamically

✅ **UI & Responsiveness**

- Fully responsive for all devices
- Smooth animations using Framer Motion
- Uniform card layout, consistent colors, and typography
- Includes dark/light mode toggle

✅ **Additional Functionalities**

- Job sorting by posted date/time
- Custom 404 error page
- Loading spinner during data fetch
- No Lorem Ipsum or placeholder alerts used

---

## 🧩 Technologies Used

| Category           | Technologies                                                                           |
| ------------------ | -------------------------------------------------------------------------------------- |
| **Frontend**       | React.js (Vite), React Router DOM, Tailwind CSS, Framer Motion, Axios, React Hot Toast |
| **Backend**        | Node.js, Express.js, MongoDB Atlas                                                     |
| **Authentication** | Firebase Authentication                                                                |
| **Data Fetching**  | Axios / TanStack Query                                                                 |
| **Hosting**        | Client: Netlify / Firebase • Server: Vercel                                            |

---

## 📂 Folder Structure

freelance-marketplace/
│
├── client/
│ ├── src/
│ ├── components/
│ ├── pages/
│ ├── hooks/
│ ├── firebase.config.js
│ └── .env
│
├── server/
│ ├── index.js
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ └── .env
│
└── README.md

---

## 🧠 Key Pages

| Page                 | Route                  | Description                         |
| -------------------- | ---------------------- | ----------------------------------- |
| 🏠 Home              | `/`                    | Banner, Latest Jobs, About Platform |
| 📋 All Jobs          | `/allJobs`             | Displays all jobs from MongoDB      |
| ➕ Add Job           | `/addJob`              | Add new job (Private route)         |
| ✏️ Update Job        | `/updateJob/:id`       | Edit job details                    |
| 🗑️ My Added Jobs     | `/myAddedJobs`         | Manage user-posted jobs             |
| ✅ My Accepted Tasks | `/my-accepted-tasks`   | Manage accepted jobs                |
| 🔐 Login / Register  | `/login` / `/register` | Firebase Authentication             |
| ❌ Error Page        | `/*`                   | Custom 404 page                     |

---

## 🧾 Database Structure (MongoDB)

```json
{
  "title": "Frontend Developer Needed",
  "postedBy": "Aftab Farhan Arko",
  "category": "Web Development",
  "summary": "Looking for a React developer to build a responsive portfolio website.",
  "coverImage": "https://i.ibb.co/example.jpg",
  "userEmail": "user@gmail.com",
  "create_at": "2025-11-12T10:00:00Z"
}

🔒 Protected Routes

These routes are accessible only to authenticated users:

/addJob

/updateJob/:id

/deleteJob/:id

/myAddedJobs

/my-accepted-tasks

/allJobs/:id

🛠️ Environment Variables

Create a .env file in both client and server folders.

Client-side (.env):

VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id


Server-side (.env):

DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password

🚀 Deployment

Client: Hosted on Netlify / Firebase

Server: Hosted on Vercel

Database: MongoDB Atlas

Authorization: Firebase authentication domain added

🧩 Challenges Implemented

Sorting by Posted Date/Time

Dark/Light Theme Toggle

Restriction: Users can’t accept their own jobs

Used Framer Motion for card and banner animation

No default alert or Lorem Ipsum text used

🧾 GitHub Commit Summary

Client-side: 15+ meaningful commits

Server-side: 8+ meaningful commits

Commit Messages: Descriptive and relevant

📢 Credits & Inspiration

Design inspiration and resources from:

uiverse.io

ThemeForest

UXDesign Blog

👨‍💻 Developer

👤 Name: AFTAB FARHAN ARKO
📧 Email: your.email@example.com

🌐 Portfolio: https://yourportfolio.com

🏁 Thank You for Visiting My Freelance MarketPlace Project 🚀

---

Would you like me to:
1. Add your **real live site links** (Netlify + Vercel), and
2. Format this as a **downloadable README.md file** you can directly upload to GitHub?


---

## 🌐 My Another Web Applications  

Here are some of my other full-stack and frontend web applications built with modern web technologies.

---

### 🧭 1. HERO.IO  
**🔗 Live Link:** https://heroio-assingment8-project.netlify.app/


### 🎨 2. Green Nestet 
**🔗 Live Link:** https://home-green-plant.netlify.app/


### 💻 3. Dregon Letes News 
**🔗 Live Link:** https://dragon-letes-news.netlify.app/caterogy/1


### 📕 4. Book Vibe Api 
**🔗 Live Link:** https://darling-florentine-333e4b.netlify.app/



### 🛍️ 5. Coustomer Support Service
**🔗 Live Link:** https://coustomer-support.netlify.app/


### 💂 6. Help Desk
**🔗 Live Link:** https://help-desk-project.netlify.app/



### 💓 7. Bbl Beating 
**🔗 Live Link:**  https://react-bpl-dream-project.netlify.app/



### 🚆 8. Travel Website Demo
**🔗 Live Link:** https://jazzy-cendol-f0764c.netlify.app/#home



### ✔️ 9. Smart Deals Full Webapplications
**🔗 Live Link:** https://smartdeals-3e017.web.app/




