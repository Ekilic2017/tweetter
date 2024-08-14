// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlLzF4zVObdnc5mI59kG1t5601EQ-iv40",
  authDomain: "twitter-4a392.firebaseapp.com",
  projectId: "twitter-4a392",
  storageBucket: "twitter-4a392.appspot.com",
  messagingSenderId: "1051609883236",
  appId: "1:1051609883236:web:ee6030e80795d4c8c3f571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//kimlik doğrulama yapısının referansını al
export const auth=getAuth(app);
//google kurulumu
export const provider=new GoogleAuthProvider()
//veritabanının referansını verir
export const db=getFirestore(app);
//Storage ın referansını verir
export const storage=getStorage(app);