import React from "react"

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

import "./App.css"
import Login from "./components/Login.js"
import Home from "./components/Home.js"
import Accueil from "./components/Accueil.js"
import Register from "./components/Register.js"

import firebase from "firebase/app"

import "firebase/auth"
import "firebase/firestore"

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
  return (
    <Router>
      <div className="m-4 p-4 flex divide-x-2 gap-x-2 border-b-2">
        <Link to="/login">Login</Link><Link to="/register">Register</Link>
      </div>
      <Switch>
        <Route path="/login">
          <Login firebase={firebase} />
        </Route>
        <Route path="/register">
          <Register firebase={firebase} />
        </Route>
        <Route path="/home">
          <Home firebase={firebase} />
        </Route>
        <Route path="/accueil">
          <Accueil firebase={firebase} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
