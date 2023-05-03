// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3ojYispfGUv-jGO2JJ8ZgckLe455iKxQ",
  authDomain: "foodian-7ebc2.firebaseapp.com",
  projectId: "foodian-7ebc2",
  storageBucket: "foodian-7ebc2.appspot.com",
  messagingSenderId: "1003451622996",
  appId: "1:1003451622996:web:40155da493b2ec3685afc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;