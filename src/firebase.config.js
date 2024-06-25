// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtm24tkhRJR11AtlXkOwpzMUB4FmMDTBw",
  authDomain: "online-job-portal-e5948.firebaseapp.com",
  projectId: "online-job-portal-e5948",
  storageBucket: "online-job-portal-e5948.appspot.com",
  messagingSenderId: "103032288676",
  appId: "1:103032288676:web:91ddf16966b4965e4c3d31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
