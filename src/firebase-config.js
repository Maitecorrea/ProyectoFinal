// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.KEYS_FIREBASE_REACT_APIKEY,
  authDomain: process.env.KEYS_FIREBASE_REACT_AUTHDOMAIN,
  projectId: process.env.KEYS_FIREBASE_REACT_PROJECTID,
  storageBucket: process.env.KEYS_FIREBASE_REACT_STORAGEBUCKET,
  messagingSenderId: process.env.KEYS_FIREBASE_REACT_MESSAGINGSENDERID,
  appId: process.env.KEYS_FIREBASE_REACT_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;