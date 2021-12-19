import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { addDoc,collection,doc,onSnapshot,setDoc,getDoc,query } from "firebase/firestore";

import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC4ddq5oBD7tKDHRPKuDCnOO84n5PHsnoU",
    authDomain: "saylani-hackathon-foodapp.firebaseapp.com",
    projectId: "saylani-hackathon-foodapp",
    storageBucket: "saylani-hackathon-foodapp.appspot.com",
    messagingSenderId: "138724307714",
    appId: "1:138724307714:web:f685efcee2b654adef481b",
    measurementId: "G-C891E99LZS"
  };

initializeApp(firebaseConfig)

const db = getFirestore();

export {db,getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, addDoc, collection, doc, onSnapshot, setDoc, getDoc,query}

