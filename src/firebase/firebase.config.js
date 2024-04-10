// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr0_vPJsgP6wCqaNoZSfNZFkPQUe8uwgw",
  authDomain: "coffee-store-8f765.firebaseapp.com",
  projectId: "coffee-store-8f765",
  storageBucket: "coffee-store-8f765.appspot.com",
  messagingSenderId: "340638067898",
  appId: "1:340638067898:web:dc155e8de9629fed682683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;