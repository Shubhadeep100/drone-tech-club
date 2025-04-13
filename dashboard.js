
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

document.getElementById("logout").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
});
