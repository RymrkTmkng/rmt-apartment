import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpRxr1hS4gc9FJ5Lo6vEg4l6jjK4CI61g",
  authDomain: "rmt-apartment-e51ea.firebaseapp.com",
  projectId: "rmt-apartment-e51ea",
  storageBucket: "rmt-apartment-e51ea.firebasestorage.app",
  messagingSenderId: "661903619161",
  appId: "1:661903619161:web:acea583c4a7f739b156d48",
  measurementId: "G-CTT3CZZ6WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);
export { auth, db };