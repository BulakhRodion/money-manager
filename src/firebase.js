import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const FIREBASE = process.env.REACT_APP_FIREBASE_APIKEY

const firebaseConfig = {
    apiKey: FIREBASE,
    authDomain: "mywallet-cb2fd.firebaseapp.com",
    projectId: "mywallet-cb2fd",
    storageBucket: "mywallet-cb2fd.appspot.com",
    messagingSenderId: "689900914900",
    appId: "1:689900914900:web:49833819c32df7b8281341"
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth();