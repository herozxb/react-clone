import firebase from 'firebase';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2ZvHwgipZskT6tyAPlpstng4lFa1vUF0",
  authDomain: "fiery-guru-302017.firebaseapp.com",
  projectId: "fiery-guru-302017",
  storageBucket: "fiery-guru-302017.appspot.com",
  messagingSenderId: "190878894390",
  appId: "1:190878894390:web:94b7c8df86f357668ecb97",
  measurementId: "G-8DF9GWG7N2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }