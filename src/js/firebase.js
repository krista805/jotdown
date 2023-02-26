// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgPGqOVXDPcWO2I52Dq0GMxKAdfpbnhQo",
  authDomain: "jotdown-ec85d.firebaseapp.com",
  projectId: "jotdown-ec85d",
  storageBucket: "jotdown-ec85d.appspot.com",
  messagingSenderId: "78452130035",
  appId: "1:78452130035:web:518f60e88a5d674a177786",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { db }
