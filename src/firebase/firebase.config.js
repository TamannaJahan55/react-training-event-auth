// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWpQHgoPIHuEzahwvSlDt2j-eljP9zcVs",
  authDomain: "react-training-event-auth.firebaseapp.com",
  projectId: "react-training-event-auth",
  storageBucket: "react-training-event-auth.appspot.com",
  messagingSenderId: "157104474184",
  appId: "1:157104474184:web:5e4d7f35d599dc3223307d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;