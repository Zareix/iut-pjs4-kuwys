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

const DbContext = React.createContext()

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
    <DbContext.Provider value={firebase}>
      <Router>
        <div className="m-4 p-4 flex divide-x-2 gap-x-2 border-b-2">
          <Link to="/accueil">Accueil</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        <Switch>
          <Route path="/accueil">
            <Accueil />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </DbContext.Provider>
  )
}

export { DbContext }
export default App
