import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeIL_yNMun-RyakJlXKMCH2qGN-3hQLfA",
  authDomain: "aulafirebase-544b6.firebaseapp.com",
  projectId: "aulafirebase-544b6",
  storageBucket: "aulafirebase-544b6.appspot.com",
  messagingSenderId: "638724231219",
  appId: "1:638724231219:web:f93618b60c5c44f8eb1346",
  measurementId: "G-4EGMV1FPXD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth }