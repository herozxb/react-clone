import firebase from "firebase"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFANswcQBl8XV0FaKmlRif0VQa9jouC70",
  authDomain: "discord-clone-a182c.firebaseapp.com",
  projectId: "discord-clone-a182c",
  storageBucket: "discord-clone-a182c.appspot.com",
  messagingSenderId: "707612608049",
  appId: "1:707612608049:web:33f3c987043a9d633c7710",
  measurementId: "G-6HMGDYKQBT"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider }
export default db;