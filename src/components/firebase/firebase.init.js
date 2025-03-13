// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATJmkoK0A0bHDrKJCEE35aqj8eMOtD7aI",
  authDomain: "coffee-store-c1607.firebaseapp.com",
  projectId: "coffee-store-c1607",
  storageBucket: "coffee-store-c1607.firebasestorage.app",
  messagingSenderId: "958426535253",
  appId: "1:958426535253:web:db2ca2316f0e44c386cbdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);