import  { config } from "dotenv"
import { initializeApp } from "firebase/app";

config()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "clone-ts-25a0e.firebaseapp.com",
  projectId: "clone-ts-25a0e",
  storageBucket: "clone-ts-25a0e.appspot.com",
  messagingSenderId: "124887483515",
  appId: "1:124887483515:web:3be6ccc596aa27571d4ede",
  measurementId: "G-WN6S37NSX1"
};

export const app = initializeApp(firebaseConfig);
    
  