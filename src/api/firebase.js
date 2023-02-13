// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWz_nRCLN1GUKMOplLjMHHmHCNY1sP3Ag",
  authDomain: "react-ts-facebook.firebaseapp.com",
  projectId: "react-ts-facebook",
  storageBucket: "react-ts-facebook.appspot.com",
  messagingSenderId: "1060663110401",
  appId: "1:1060663110401:web:bf98412bb04ba12aa50900",
  measurementId: "G-GD69XL2SHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
