
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAw6p2srtCBwJk3RHz4hkQ5GG9dV_ZFFuc",
  authDomain: "saludpredictai.firebaseapp.com",
  projectId: "saludpredictai",
  storageBucket: "saludpredictai.appspot.com",
  messagingSenderId: "706368280280",
  appId: "1:706368280280:web:d3417482e15641ec9629ad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.buscarMedicos = async () => {
  const especialidad = document.getElementById("especialidad").value.toLowerCase();
  const ciudad = document.getElementById("ciudad").value.toLowerCase();
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "Buscando...";

  const q = query(collection(db, "usuarios"),
    where("rol", "==", "medico"),
    where("especialidad", "==", especialidad),
    where("ciudad", "==", ciudad)
  );

  const querySnapshot = await getDocs(q);
  resultado.innerHTML = "";

  if (querySnapshot.empty) {
    resultado.innerHTML = "No se encontraron médicos con esos criterios.";
    return;
  }

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    resultado.innerHTML += `<p><strong>${data.nombre}</strong> - ${data.especialidad}, ${data.ciudad}</p>`;
  });
};
