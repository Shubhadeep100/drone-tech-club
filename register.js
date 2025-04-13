
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

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
const db = getFirestore(app);

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const branch = document.getElementById("branch").value;
  const semester = document.getElementById("semester").value;
  const address = document.getElementById("address").value;
  const regno = document.getElementById("regno").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "students", user.uid), {
      name,
      roll,
      branch,
      semester,
      address,
      regno,
      email,
      phone,
      whatsapp
    });

    alert("Registration Successful!");
    window.location.href = "login.html";
  } catch (error) {
    alert(error.message);
  }
});
