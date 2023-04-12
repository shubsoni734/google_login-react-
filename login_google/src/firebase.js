import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA753jifMn8zZ7vdL5olDmWTlHq-33-izo",
  authDomain: "login-shub.firebaseapp.com",
  projectId: "login-shub",
  storageBucket: "login-shub.appspot.com",
  messagingSenderId: "461243473365",
  appId: "1:461243473365:web:1147e378dcc6b479bcb15c",
  measurementId: "G-5GR5GQKK46",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
