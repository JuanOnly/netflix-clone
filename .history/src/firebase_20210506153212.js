import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAACVC5_Idsd4osjht9h1siOHae3ENCu-A",
    authDomain: "netflix-clone-ff193.firebaseapp.com",
    projectId: "netflix-clone-ff193",
    storageBucket: "netflix-clone-ff193.appspot.com",
    messagingSenderId: "1065511323532",
    appId: "1:1065511323532:web:70019ec84d3b249ad1f8a9"
  }; //npm install -g firebase-tools

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;