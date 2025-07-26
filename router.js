import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { app } from "./firebaseConfig.js";

const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (!user) return;
  const snap = await getDoc(doc(db, "usuarios", user.uid));
  if (!snap.exists()) return alert("Perfil no encontrado");
  const tipo = snap.data().tipo;
  const rutas = {
    paciente: "panel_paciente.html",
    medico: "panel_medico.html",
    farmacia: "panel_farmacia.html",
    clinica: "panel_clinica.html",
    laboratorio: "panel_laboratorio.html"
  };
  window.location.href = rutas[tipo] || "index.html";
});