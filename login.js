
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYf62CejhMgH5ub7wwAb0iTRe9ngQg30w",
  authDomain: "dtc-student-portal.firebaseapp.com",
  projectId: "dtc-student-portal",
  storageBucket: "dtc-student-portal.appspot.com",
  messagingSenderId: "894429401641",
  appId: "1:894429401641:web:4cb76408a63e230eae8238",
  measurementId: "G-4DBNT2JX7Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
