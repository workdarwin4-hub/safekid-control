// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyBBovs_DnQWnjOrJucTHeotMl5z4j30HjI",
    authDomain: "hack-ffa2f.firebaseapp.com",
    databaseURL: "https://hack-ffa2f-default-rtdb.firebaseio.com",
    projectId: "hack-ffa2f",
    storageBucket: "hack-ffa2f.firebasestorage.app",
    messagingSenderId: "743390397717",
    appId: "1:743390397717:web:b88bc79e56491005ce551c"
};

// تهيئة الفايرباس
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
