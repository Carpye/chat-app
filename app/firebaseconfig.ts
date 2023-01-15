// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsN7J8tLp2ZZtVRa1Tl-WVAjYAgrnb2U8",
  authDomain: "chat-app-e6000.firebaseapp.com",
  projectId: "chat-app-e6000",
  storageBucket: "chat-app-e6000.appspot.com",
  messagingSenderId: "308889519393",
  appId: "1:308889519393:web:565e368a9a1816c2986a60",
  measurementId: "G-7YSKMDPKYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db }