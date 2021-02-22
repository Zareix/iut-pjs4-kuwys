import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css"
import Login from "./components/connexion/Login.js"
import Home from "./components/Home.js"
import Accueil from "./components/Accueil.js"
import Register from "./components/inscription/Register.js"
import Rien from "./components/Rien"
import Page404 from "./components/Page404"
import Profil from "./components/profil/Profil"

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import FichesCours from "./components/fichesCours/FichesCours";
import GroupesTravail from "./components/groupesTravail/GroupesTravail";

const DbContext = React.createContext();

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
};

firebase.initializeApp(firebaseConfig);

function App() {
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const [token, setToken] = useState("");

  return (
    <DbContext.Provider
      value={{ firebase, db, auth, storage, token, setToken }}
    >
      <Router>
        <Switch>
          <Route exact path="/fichesCours">
            <FichesCours />
          </Route>
          <Route exact path="/groupestravail">
            <GroupesTravail />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/profil">
            <Profil />
          </Route>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route exact path="/test">
            <Rien />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </DbContext.Provider>
  );
}

export { DbContext };
export default App;
