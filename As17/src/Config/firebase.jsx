import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzqMAtr8HH4bbe-D1_2fpQQOLq-X-0tYQ",
  authDomain: "as17-d1fca.firebaseapp.com",
  projectId: "as17-d1fca",
  storageBucket: "as17-d1fca.appspot.com",
  messagingSenderId: "876619185940",
  appId: "1:876619185940:web:072752157195244a010c01"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default db;