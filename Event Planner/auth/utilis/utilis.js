import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5S6vwptm-6HpK4Q40-AtyYnDBzx-GOoU",
  authDomain: "todo-app-debad.firebaseapp.com",
  projectId: "todo-app-debad",
  storageBucket: "todo-app-debad.appspot.com",
  messagingSenderId: "1024247183800",
  appId: "1:1024247183800:web:03aeeff54fcec9656ef74d",
  measurementId: "G-YN4T3SV7DW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const dataBase = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  dataBase,
  storage,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
  ref,
  uploadBytes,
  getDownloadURL,
};
