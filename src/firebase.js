import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBP9R12sIFIondueDhGcXS6L8NuHPJgHoA",
    authDomain: "discord-clone-8ca5a.firebaseapp.com",
    databaseURL: "https://discord-clone-8ca5a.firebaseio.com",
    projectId: "discord-clone-8ca5a",
    storageBucket: "discord-clone-8ca5a.appspot.com",
    messagingSenderId: "199133230327",
    appId: "1:199133230327:web:78fa7a8950d559045f4ff2",
    measurementId: "G-9TTREX3TPM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
