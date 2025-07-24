import { auth, db, provider } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

export async function register(email, password, role) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await setDoc(doc(db, "usuarios", user.uid), {
    email: user.email,
    role: role,
    uid: user.uid
  });
  return userCredential;
}

export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  await setDoc(doc(db, "usuarios", user.uid), {
    email: user.email,
    role: "paciente",
    uid: user.uid
  }, { merge: true });
  return result;
}
