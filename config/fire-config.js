import firebase from 'firebase';

const firebaseConfig = {
  // INSERT YOUR OWN CONFIG HERE
  apiKey: "AIzaSyD5ZbRMnRdqubGNSc2KzEVDg2fKizxbniU",
  authDomain: "blog-594a2.firebaseapp.com",
  databaseURL: "https://blog-594a2-default-rtdb.firebaseio.com",
  projectId: "blog-594a2",
  storageBucket: "blog-594a2.appspot.com",
  messagingSenderId: "554911575314",
  appId: "1:554911575314:web:5462233055b1566e4e57cb",
  measurementId: "G-F92XYFF2VB"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

const fire = firebase;
export default fire;