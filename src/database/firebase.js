// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIydk7oXrQ94p5Q1wNDLzM9j9cQLUXV_c",
    authDomain: "pokestore-d71f9.firebaseapp.com",
    projectId: "pokestore-d71f9",
    storageBucket: "pokestore-d71f9.appspot.com",
    messagingSenderId: "628450899617",
    appId: "1:628450899617:web:f3cb9122fb6d377022a2e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
