import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';
import 'irebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDFfVIcOyW_sjKdyFdsZlOn3dvFfQNCwtw",
  authDomain: "rehamo-wheelchair-solution.firebaseapp.com",
  databaseURL: "https://rehamo-wheelchair-solution-default-rtdb.firebaseio.com",
  projectId: "rehamo-wheelchair-solution",
  storageBucket: "rehamo-wheelchair-solution.appspot.com",
  messagingSenderId: "619097365065",
  appId: "1:619097365065:web:faf5fd2253846a8023bd98",
  measurementId: "G-MEG87B461Y"
};

 firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const db = firebase.firestore();
  firebase.analytics();

 export {fire, projectStorage, db};
