import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCGr3qVvC77vzY29E3goEe7WJD1xKRpDXI",
  authDomain: "tarefasplus-971cf.firebaseapp.com",
  projectId: "tarefasplus-971cf",
  storageBucket: "tarefasplus-971cf.firebasestorage.app",
  messagingSenderId: "694005443946",
  appId: "1:694005443946:web:5ee13d3478d55862f3c913"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

 export {db};