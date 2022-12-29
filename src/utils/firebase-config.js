// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBqOfdrTm-mzenQWLoYkXPtGeJqyYk3w8",
  authDomain: "react-netflix-clone-8ee48.firebaseapp.com",
  projectId: "react-netflix-clone-8ee48",
  storageBucket: "react-netflix-clone-8ee48.appspot.com",
  messagingSenderId: "595126791059",
  appId: "1:595126791059:web:7c13cfc79905bbb88ed666",
  measurementId: "G-L0YVTB9HPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
