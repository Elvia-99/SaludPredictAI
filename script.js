import { register, login, loginWithGoogle } from './auth.js';

window.registerUser = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const tipo = document.getElementById("rol").value;
  register(email, password, tipo)
    .then(() => alert("Registro exitoso"))
    .catch(error => alert("Error: " + error.message));
};

window.loginUser = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  login(email, password)
    .then(() => alert("Inicio de sesión exitoso"))
    .catch(error => alert("Error: " + error.message));
};

window.loginWithGoogle = () => {
  loginWithGoogle()
    .then(() => alert("Inicio con Google exitoso"))
    .catch(error => alert("Error: " + error.message));
};