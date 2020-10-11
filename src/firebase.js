import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBjDE-RYoyYivnwwuPM6xI2X7-1iXwKuVE",
    authDomain: "discord-clone-6ee6e.firebaseapp.com",
    databaseURL: "https://discord-clone-6ee6e.firebaseio.com",
    projectId: "discord-clone-6ee6e",
    storageBucket: "discord-clone-6ee6e.appspot.com",
    messagingSenderId: "490423028454",
    appId: "1:490423028454:web:2ad8822f504e3611250927",
    measurementId: "G-SM9LETL046"
  };
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;