import { initializeApp , getApp, getApps} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5xZKkK-u_3V7NSx7KEUz7_SGWniCnulE",
    authDomain: "facebookv2-6c41d.firebaseapp.com",
    projectId: "facebookv2-6c41d",
    storageBucket: "facebookv2-6c41d.appspot.com",
    messagingSenderId: "1080017198164",
    appId: "1:1080017198164:web:e53fcd49fc601bffeca1c1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp() ;
const db = getFirestore();
const storage= getStorage();

export {app,db,storage}
