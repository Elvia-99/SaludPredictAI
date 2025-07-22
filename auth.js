import { auth, provider } from './firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { guardarUsuario } from './db.js';

export function register(email, password, tipo = "paciente") {
  return createUserWithEmailAndPassword(auth, email, password).then(cred => {
    return guardarUsuario(cred.user.uid, {
      correo: email,
      tipo: tipo,
      creadoEn: new Date()
    });
  });
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginWithGoogle() {
  return signInWithPopup(auth, provider);
}
