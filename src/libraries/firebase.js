// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeCeQCY3V9BwfCcACoraRqvOF64oGPrGM",
  authDomain: "eduniyasa-c25ac.firebaseapp.com",
  projectId: "eduniyasa-c25ac",
  storageBucket: "eduniyasa-c25ac.appspot.com",
  messagingSenderId: "294992099398",
  appId: "1:294992099398:web:31594450f234274648f247",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);
export const AUTH = getAuth(app);
