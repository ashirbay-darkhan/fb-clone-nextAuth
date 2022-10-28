import firebase from "firebase/compat/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIO8AI_xXC3BWQeHScndaKVjppheaIcVs",
  authDomain: "fb-clone-33578.firebaseapp.com",
  projectId: "fb-clone-33578",
  storageBucket: "fb-clone-33578.appspot.com",
  messagingSenderId: "753265519815",
  appId: "1:753265519815:web:e1eea9fa0190cc463462e2",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };