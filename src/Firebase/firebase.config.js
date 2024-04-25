// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbpFtVpbEvO0tGo__cZdlyfOtMCdTcUhw",
    authDomain: "nr-tourism.firebaseapp.com",
    projectId: "nr-tourism",
    storageBucket: "nr-tourism.appspot.com",
    messagingSenderId: "431399842744",
    appId: "1:431399842744:web:aa943937ffbf73fb3ad54d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;