import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBf6lC6VMEHm-TRJZSLxzr2J7f81NCEnNk",
    authDomain: "todo-app-f00ad.firebaseapp.com",
    databaseURL: "https://todo-app-f00ad.firebaseio.com",
    projectId: "todo-app-f00ad",
    storageBucket: "todo-app-f00ad.appspot.com",
    messagingSenderId: "959196345806",
    appId: "1:959196345806:web:e699d1283e06b455d1e79f"
});

const db = firebaseApp.firestore();

export default db;