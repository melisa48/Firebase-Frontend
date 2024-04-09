import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  //Your Own
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
