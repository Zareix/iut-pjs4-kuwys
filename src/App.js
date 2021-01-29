import React from "react"

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

import "./App.css"
import Login from "./components/Login.js"
import Home from "./components/Home.js"

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app"

// Add the Firebase services that you want to use
import "firebase/auth"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgFeqJUZHVMB--gTaaahweCQIbADUnNkg",
  authDomain: "pjs4-iut-ts.firebaseapp.com",
  databaseURL:
    "https://pjs4-iut-ts-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pjs4-iut-ts",
  storageBucket: "pjs4-iut-ts.appspot.com",
  messagingSenderId: "291848628623",
  appId: "1:291848628623:web:dac0799f99f6541b8d83fa",
  measurementId: "G-PDZVB2VGCW",
}

firebase.initializeApp(firebaseConfig)

function App() {

  var firestore = firebase.firestore()

  return (
    <Router>
      <Link to="/login">Login</Link>
      <Switch>
        <Route path="/login">
          <Login firebase={firebase}/>
        </Route>
        <Route path="/home">
          <Home  firebase={firebase}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
