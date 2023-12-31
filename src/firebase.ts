// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtwXl_4W1BHdJAsAiT_woFqIP2S3iTu1k",
  authDomain: "pc-builder-dc7ae.firebaseapp.com",
  projectId: "pc-builder-dc7ae",
  storageBucket: "pc-builder-dc7ae.appspot.com",
  messagingSenderId: "701178720061",
  appId: "1:701178720061:web:d4596519c2c35f8e9b1f54",
  measurementId: "G-FGQ506DLF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);