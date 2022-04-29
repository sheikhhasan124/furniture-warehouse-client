// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGfDcpexsYvbpzJMeD70i2iiYQhqzxVKw",
  authDomain: "furniture-warehouse-35670.firebaseapp.com",
  projectId: "furniture-warehouse-35670",
  storageBucket: "furniture-warehouse-35670.appspot.com",
  messagingSenderId: "866934322841",
  appId: "1:866934322841:web:27542d741319849dec2a08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;