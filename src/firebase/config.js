import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhtXl-cH66Hzcu3MSmVxNsO7XbB1s8_qI",
  authDomain: "contact-refactor-app.firebaseapp.com",
  projectId: "contact-refactor-app",
  storageBucket: "contact-refactor-app.firebasestorage.app",
  messagingSenderId: "789984651902",
  appId: "1:789984651902:web:fde11d94704844f483062f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
