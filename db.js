import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

export async function agendarCita(usuario, medico, fecha, hora) {
  return await addDoc(collection(db, "citas"), {
    usuarioId: usuario,
    medicoId: medico,
    fecha: fecha,
    hora: hora,
    estado: "pendiente"
  });
}
