import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAcd1jD7plpQy2Zy4s2Vekw6HyxkS1ludA",
  authDomain: "udemy-vue-firebase-site-47d14.firebaseapp.com",
  projectId: "udemy-vue-firebase-site-47d14",
  storageBucket: "udemy-vue-firebase-site-47d14.appspot.com",
  messagingSenderId: "127479391389",
  appId: "1:127479391389:web:abd5861d751cf726c4a074"
};

// init firebse
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }