import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcRUsaaruQPaAJK0bQ2t5pXYVN92MgfGk",  
  authDomain: "avaliacao-psico-empregados.firebaseapp.com",
  projectId: "avaliacao-psico-empregados",
  storageBucket: "avaliacao-psico-empregados.firebasestorage.app",
  messagingSenderId: "365944981400",
  appId: "1:365944981400:web:55e4068a6501a040860ded"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut };