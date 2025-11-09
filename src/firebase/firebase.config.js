import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAOL0eV2oxz7NcAU8OEVCtQo4YRmpBTDWc",
//   authDomain: "freelance-marketplace-a3cd2.firebaseapp.com",
//   projectId: "freelance-marketplace-a3cd2",
//   storageBucket: "freelance-marketplace-a3cd2.firebasestorage.app",
//   messagingSenderId: "313666614002",
//   appId: "1:313666614002:web:ab7e4da70ade455e7e166b"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
