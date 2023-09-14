import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPkg6i9GXST18JM4vKyenvno8AHphoN9Q",
  authDomain: "fir-firebase-246ab.firebaseapp.com",
  projectId: "fir-firebase-246ab",
  storageBucket: "fir-firebase-246ab.appspot.com",
  messagingSenderId: "12364447906",
  appId: "1:12364447906:web:91aab6057950cf50b097fb",
  measurementId: "G-158F8CRBF9"
};

// Initialize Firebase
const firebasedb = initializeApp(firebaseConfig); 
export default firebasedb;