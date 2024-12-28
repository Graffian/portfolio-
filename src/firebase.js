// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import {  signInWithPopup } from "firebase/auth"
import { OAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9YbAUc5I0TLY3sVhsjyoXig-WX7QqQ7k",
  authDomain: "fir-app-38cfe.firebaseapp.com",
  projectId: "fir-app-38cfe",
  storageBucket: "fir-app-38cfe.firebasestorage.app",
  messagingSenderId: "743792323476",
  appId: "1:743792323476:web:efb1cf5b0b9a44ba237d81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app)
 export const googleProvider = new GoogleAuthProvider();
export const googlePopup=()=>signInWithPopup(auth,googleProvider)
export const microsoftProvider=new OAuthProvider('microsoft.com');
export const microsoftPopup=()=>signInWithPopup(auth,microsoftProvider)