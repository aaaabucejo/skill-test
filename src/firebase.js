import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAizDZX_bs6wMP_ego0A9HFtcWQqqABzMU",
  authDomain: "skilltest-app.firebaseapp.com",
  projectId: "skilltest-app",
  storageBucket: "skilltest-app.appspot.com",
  messagingSenderId: "451970537453",
  appId: "1:451970537453:web:aaf2428146cacbb89679e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

// console.log("Firestore instance:", firestore);

export { app, firestore, auth };
