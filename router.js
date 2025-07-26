import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { app } from "./firebaseConfig.js"; // Asegúrate de que tu config esté separada

const auth = getAuth();
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const docRef = doc(db, "usuarios", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const tipo = docSnap.data().tipo;

      if (tipo === "paciente") window.location.href = "panel_paciente.html";
      else if (tipo === "medico") window.location.href = "panel_medico.html";
      else if (tipo === "farmacia") window.location.href = "panel_farmacia.html";
      else if (tipo === "clinica") window.location.href = "panel_clinica.html";
      else if (tipo === "laboratorio") window.location.href = "panel_laboratorio.html";
      else alert("Tipo de usuario desconocido.");
    } else {
      alert("No se encontró el perfil del usuario.");
    }
  }
});
