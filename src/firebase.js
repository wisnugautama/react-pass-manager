import firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6hweGYG0323wzUA6fNZq1XaRHo4k1A64",
    authDomain: "pass-manager-132d5.firebaseapp.com",
    databaseURL: "https://pass-manager-132d5.firebaseio.com",
    projectId: "pass-manager-132d5",
    storageBucket: "pass-manager-132d5.appspot.com",
    messagingSenderId: "990440129923"
};

firebase.initializeApp(config);

var db = firebase.firestore();

export default db