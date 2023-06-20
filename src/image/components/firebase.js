// Import the functions you need from the SDKs you need
// import { initializeApp } from "@firebase/app";
// import { getAuth,signInWithEmailAndPassword } from "@firebase/auth";
// // import '@firebase/database';
// import { getDatabase } from "firebase/database";
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getDatabase } from "@firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6UVJRUkpFqt9NlaE2gAu1YHEDOIM1ia8",
  authDomain: "smart-home-eed03.firebaseapp.com",
  databaseURL: "https://smart-home-eed03-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-home-eed03",
  storageBucket: "smart-home-eed03.appspot.com",
  messagingSenderId: "283530992289",
  appId: "1:283530992289:web:eb16a104959090c17faee0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
 export { app, auth, db };