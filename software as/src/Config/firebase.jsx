import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_qhRjlnQq7dfcXjVFaoX0F5g2Jc9jO4o",
  authDomain: "softwareas-5bb33.firebaseapp.com",
  projectId: "softwareas-5bb33",
  storageBucket: "softwareas-5bb33.appspot.com",
  messagingSenderId: "73908355834",
  appId: "1:73908355834:web:3122c9ece4afc2b904bf43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getFirestore(app);


export {auth, provider,database}