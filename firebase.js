// firebase configs
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD18Crk4TnUQUcwvSMou95pq56d9e4H3ZY",
  authDomain: "login-nextjs-1dd3b.firebaseapp.com",
  projectId: "login-nextjs-1dd3b",
  storageBucket: "login-nextjs-1dd3b.appspot.com",
  messagingSenderId: "10624860117",
  appId: "1:10624860117:web:c1cd02f1c9ea679b6ec75c",
  measurementId: "G-DGKEBR915L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
