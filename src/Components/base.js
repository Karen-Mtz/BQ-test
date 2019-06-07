import * as firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const app = firebase.initializeApp({ 
    apiKey: "AIzaSyBb-oHfr0tcFSho9tuGguFujzL22_DBZSQ",
    authDomain: "bqueen-24hrs.firebaseapp.com",
    databaseURL: "https://bqueen-24hrs.firebaseio.com",
    projectId: "bqueen-24hrs",
    storageBucket: "bqueen-24hrs.appspot.com",
    messagingSenderId: "336678171527",
    appId: "1:336678171527:web:d1e40d3ea27588f6"
})

export default app;
