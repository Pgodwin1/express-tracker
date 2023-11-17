// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnPgutC4_c0VML7QN4qYBvPa7TsTMnGIE",
  authDomain: "express-tracker-42650.firebaseapp.com",
  projectId: "express-tracker-42650",
  storageBucket: "express-tracker-42650.appspot.com",
  messagingSenderId: "116691805063",
  appId: "1:116691805063:web:e38e8fb4e3e81dc5eaa922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// firebase login
// firebase init 
// firebase deploy