import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAw6p2srtCBwJk3RHz4hkQ5GG9dV_ZFFuc",
  authDomain: "saludpredictai.firebaseapp.com",
  projectId: "saludpredictai",
  storageBucket: "saludpredictai.firebasestorage.app",
  messagingSenderId: "706368280280",
  appId: "1:706368280280:web:d3417482e15641ec9629ad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function guardarUsuario(userId, datos) {
  await setDoc(doc(db, "usuarios", userId), datos);
}