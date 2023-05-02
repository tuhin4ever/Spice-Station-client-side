// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzuMuzX5Hg4pcna1nsGeciV_9jReg1zvY",
  authDomain: "spice-station-client-side.firebaseapp.com",
  projectId: "spice-station-client-side",
  storageBucket: "spice-station-client-side.appspot.com",
  messagingSenderId: "871335627844",
  appId: "1:871335627844:web:5989bbfd6fc84a46a48011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
