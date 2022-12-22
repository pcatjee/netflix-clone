import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0NOG7LEAobLzY0GSuMRQhGn5fPBxD0W8",
  authDomain: "netflix-clone-45c1c.firebaseapp.com",
  projectId: "netflix-clone-45c1c",
  storageBucket: "netflix-clone-45c1c.appspot.com",
  messagingSenderId: "733592294825",
  appId: "1:733592294825:web:8b36b9a36ae4dbbdb8e0b8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
