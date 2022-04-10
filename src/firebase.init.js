// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfSBNTsnC1dtMEebEoZ4e6EH6eXVC-Byo",
    authDomain: "ema-john-simple-ef4db.firebaseapp.com",
    projectId: "ema-john-simple-ef4db",
    storageBucket: "ema-john-simple-ef4db.appspot.com",
    messagingSenderId: "560068251740",
    appId: "1:560068251740:web:0e393787d23d3001b0d699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;