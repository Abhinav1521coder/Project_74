import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDbEp1yYePCNwewKU_Hi0X3E-VjYuWi9JA",
  authDomain: "project-71-f21d7.firebaseapp.com",
  projectId: "project-71-f21d7",
  storageBucket: "project-71-f21d7.appspot.com",
  messagingSenderId: "162543026528",
  appId: "1:162543026528:web:5555f1954ce79b25e85e05"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
