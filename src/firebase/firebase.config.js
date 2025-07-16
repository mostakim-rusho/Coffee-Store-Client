// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTizSu0yIwDAwAsNBY1tqsLD9Le_Jgj6Y",
  authDomain: "coffee-store-5941b.firebaseapp.com",
  projectId: "coffee-store-5941b",
  storageBucket: "coffee-store-5941b.firebasestorage.app",
  messagingSenderId: "778657803608",
  appId: "1:778657803608:web:f22f8aaf9fbfe1fd21892d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;