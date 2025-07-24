import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

export async function agendarCita(usuarioId, medicoId, fecha, hora) {
  return await addDoc(collection(db, "citas"), {
    usuarioId,
    medicoId,
    fecha,
    hora,
    estado: "pendiente"
  });
}
