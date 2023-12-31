// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwCrwx9IqYM2LFXg5dYQFgk8VRBN7tHDs",
  authDomain: "order-management-8d76b.firebaseapp.com",
  projectId: "order-management-8d76b",
  storageBucket: "order-management-8d76b.appspot.com",
  messagingSenderId: "155839707201",
  appId: "1:155839707201:web:24833765fe55a729feaec0",
  measurementId: "G-F3KCF9ZB9F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

// Access the Firestore collection
const orderCollection = collection(db, "orderCollection");

console.log("Firebase database is connected.");

export default orderCollection;
