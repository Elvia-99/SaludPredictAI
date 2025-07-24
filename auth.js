import { auth, provider } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

export async function register(email, password, role) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  // Podrías guardar el rol en Firestore si deseas
  return userCredential;
}

export async function login(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential;
}

export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  return result;
}
