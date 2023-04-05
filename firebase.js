// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIZMmThYf3ZeOPEBwMacpp-zPbDb8qeLU",
  authDomain: "expedia-da1e7.firebaseapp.com",
  projectId: "expedia-da1e7",
  storageBucket: "expedia-da1e7.appspot.com",
  messagingSenderId: "1052458720027",
  appId: "1:1052458720027:web:427409766fb324511551be",
  measurementId: "G-K02FFVZ2HB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);