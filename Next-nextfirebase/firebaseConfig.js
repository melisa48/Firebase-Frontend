import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6VZ3cuIs5DR44BD_2n5gm71XiTEzuTwk",
  authDomain: "next-auth-crud-c7b8d.firebaseapp.com",
  projectId: "next-auth-crud-c7b8d",
  storageBucket: "next-auth-crud-c7b8d.appspot.com",
  messagingSenderId: "610362670356",
  appId: "1:610362670356:web:118cfb636f6d6ef4d2d601"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);