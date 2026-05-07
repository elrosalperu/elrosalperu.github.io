import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2h4dSZRrGigF_uwBfYG1Oof006ks9Fx4",
  authDomain: "elrosalperu.firebaseapp.com",
  projectId: "elrosalperu",
  storageBucket: "elrosalperu.firebasestorage.app",
  messagingSenderId: "1038107853367",
  appId: "1:1038107853367:web:ed579c2c322d6fd071b5b2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy };
