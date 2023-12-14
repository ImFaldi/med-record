// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzEiLxuOWlrUzxp2_WBwdtVGoFJjCFJnw",
  authDomain: "med-record-17294.firebaseapp.com",
  projectId: "med-record-17294",
  storageBucket: "med-record-17294.appspot.com",
  messagingSenderId: "550257977352",
  appId: "1:550257977352:web:79130c11231a547f0589bd",
  measurementId: "G-BL1XDKN0TK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };