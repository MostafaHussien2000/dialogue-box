// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlpxw6zt85FitRH18rzgssQsVJ7EssWN4",
  authDomain: "dialogue-box-6689e.firebaseapp.com",
  projectId: "dialogue-box-6689e",
  storageBucket: "dialogue-box-6689e.appspot.com",
  messagingSenderId: "580827845814",
  appId: "1:580827845814:web:33166f690348393410c217",
  measurementId: "G-GCLMFVNYFN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
