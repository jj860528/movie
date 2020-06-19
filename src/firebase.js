import firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const database = firebase.database();
export default { db, database };
