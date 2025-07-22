import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAw6p2srtCBwJk3RHz4hkQ5GG9dV_ZFFuc",
  authDomain: "saludpredictai.firebaseapp.com",
  projectId: "saludpredictai",
  storageBucket: "saludpredictai.firebasestorage.app",
  messagingSenderId: "706368280280",
  appId: "1:706368280280:web:d3417482e15641ec9629ad"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };