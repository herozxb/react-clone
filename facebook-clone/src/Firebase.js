import firebase from "firebase"



const firebaseConfig = {
  apiKey: "AIzaSyDisoSIavzk_UiC3Pu2eJdejOAkPkaGYXA",
  authDomain: "45.32.212.231",
  projectId: "facebook-clone-a1926",
  storageBucket: "facebook-clone-a1926.appspot.com",
  messagingSenderId: "485605890180",
  appId: "1:485605890180:web:e35becdbedcf0a45374ad1",
  measurementId: "G-L1RR7B6RR5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider }
export default db;