// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQhhaOweWt3rErFnUIitoUsWVBrOPV-NM",
    authDomain: "pc-builder-10e50.firebaseapp.com",
    projectId: "pc-builder-10e50",
    storageBucket: "pc-builder-10e50.appspot.com",
    messagingSenderId: "1070160590821",
    appId: "1:1070160590821:web:30a0d237627f5f8907210c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
