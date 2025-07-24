// Importa e inicializa Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAw6p2srtCBwJk3RHz4hkQ5GG9dV_ZFFuc",
  authDomain: "saludpredictai.firebaseapp.com",
  projectId: "saludpredictai",
  storageBucket: "saludpredictai.appspot.com",
  messagingSenderId: "706368280280",
  appId: "1:706368280280:web:d3417482e15641ec9629ad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
