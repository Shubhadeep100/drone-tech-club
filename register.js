
// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYf62CejhMgH5ub7wwAb0iTRe9ngQg30w",
  authDomain: "dtc-student-portal.firebaseapp.com",
  projectId: "dtc-student-portal",
  storageBucket: "dtc-student-portal.firebasestorage.app",
  messagingSenderId: "894429401641",
  appId: "1:894429401641:web:4cb76408a63e230eae8238",
  measurementId: "G-4DBNT2JX7Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "students", user.uid), {
      name: document.getElementById("name").value,
      roll: document.getElementById("roll").value,
      reg: document.getElementById("reg").value,
      branch: document.getElementById("branch").value,
      sem: document.getElementById("sem").value,
      email: email,
      phone: document.getElementById("phone").value,
      whatsapp: document.getElementById("whatsapp").value
    });

    document.getElementById("status").innerText = "Registration successful!";
  } catch (error) {
    document.getElementById("status").innerText = "Error: " + error.message;
  }
});
