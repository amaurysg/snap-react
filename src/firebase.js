import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCYfhgMmSkknkgIhePpU_rQpKq7cOapH44",
  authDomain: "snap-a0edc.firebaseapp.com",
  projectId: "snap-a0edc",
  storageBucket: "snap-a0edc.appspot.com",
  messagingSenderId: "673973409763",
  appId: "1:673973409763:web:6527921f672516dbd4f2d6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider() 

export {db, auth, storage, provider}