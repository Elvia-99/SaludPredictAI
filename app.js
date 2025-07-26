import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAw6p2srtCBwJk3RHz4hkQ5GG9dV_ZFFuc",
  authDomain: "saludpredictai.firebaseapp.com",
  projectId: "saludpredictai",
  storageBucket: "saludpredictai.appspot.com",
  messagingSenderId: "706368280280",
  appId: "1:706368280280:web:d3417482e15641ec9629ad"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.registerUser = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const rol = document.getElementById("rol").value;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "usuarios"), {
      uid: userCredential.user.uid,
      email,
      rol
    });
    alert("Registro exitoso");
  } catch (error) {
    alert("Error en registro: " + error.message);
  }
};

window.loginUser = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Inicio de sesión exitoso");
  } catch (error) {
    alert("Error al iniciar sesión: " + error.message);
  }
};

window.loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    alert("Inicio con Google exitoso");
  } catch (error) {
    alert("Error con Google: " + error.message);
  }
};

window.agendarCita = async () => {
  const medicoId = document.getElementById("medicoId").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const user = auth.currentUser;
  if (!user) {
    alert("Debes iniciar sesión para agendar");
    return;
  }
  try {
    await addDoc(collection(db, "citas"), {
      usuarioId: user.uid,
      medicoId,
      fecha,
      hora,
      estado: "pendiente"
    });
    alert("Cita agendada exitosamente");
  } catch (error) {
    alert("Error al agendar cita: " + error.message);
  }
};
