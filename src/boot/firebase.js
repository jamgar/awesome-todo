import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCA-I0Tr0BVkLeatD5y1ghxrOQlWXpc5fY",
  authDomain: "awesome-todo-5a1a2.firebaseapp.com",
  databaseURL: "https://awesome-todo-5a1a2.firebaseio.com",
  projectId: "awesome-todo-5a1a2",
  storageBucket: "awesome-todo-5a1a2.appspot.com",
  messagingSenderId: "582992616868",
  appId: "1:582992616868:web:157354c8aae0cc417e3531"
};
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb };
