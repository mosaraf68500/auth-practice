import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBylMEd332Khyd0Pa6pSWPdJbbkLzO3M-w",
  authDomain: "auth-practice-227fa.firebaseapp.com",
  projectId: "auth-practice-227fa",
  storageBucket: "auth-practice-227fa.firebasestorage.app",
  messagingSenderId: "312232250398",
  appId: "1:312232250398:web:4a3f9bc664a354459e320f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
