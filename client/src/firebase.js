import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp(  {
  apiKey: "AIzaSyBoQgZrxKjPQ6LuKKr2sklhs8n06yA8v_g",
  authDomain: "rekt-7f3c8.firebaseapp.com",
  projectId: "rekt-7f3c8",
  storageBucket: "rekt-7f3c8.appspot.com",
  messagingSenderId: "533468841107",
  appId: "1:533468841107:web:e6f0d1aa1bb1e84ce93966",
  measurementId: "G-F1CQMBBQMN"
  });
//   const db=firebaseApp.firestore()
  const auth=firebase.auth()
  export {auth}
//   export default firebase