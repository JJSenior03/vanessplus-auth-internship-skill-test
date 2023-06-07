// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8ZZf9riDEkK-sIn4URykf44p0uxZxPM4",
  authDomain: "vanessplus-auth.firebaseapp.com",
  projectId: "vanessplus-auth",
  storageBucket: "vanessplus-auth.appspot.com",
  messagingSenderId: "325666144021",
  appId: "1:325666144021:web:34bd9ae035bc4bee62f31c",
  measurementId: "G-Y1TXZF99MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
