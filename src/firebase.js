// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reddy-blog-2k00.firebaseapp.com",
  projectId: "reddy-blog-2k00",
  storageBucket: "reddy-blog-2k00.appspot.com",
  messagingSenderId: "1045492967663",
  appId: "1:1045492967663:web:6e1b6237dde6d0a021131a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);