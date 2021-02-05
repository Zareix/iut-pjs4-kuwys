import React, { useEffect } from "react"
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//import { Document } from "react-pdf"
import { Document,Page, pdfjs } from "react-pdf";

import "./App.css"
import Login from "./components/Login.js"
import Home from "./components/Home.js"
import Accueil from "./components/Accueil.js"
import Register from "./components/Register.js"

import firebase from "firebase/app"

import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

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
  //pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  
  async function getImage() {
    //setimgsrc(await )
    await firebase
      .storage()
      .ref()
      .child("FichePartiels.pdf")
      .getDownloadURL()
      .then((url) => {
        console.log(url)
        ReactDOM.render(<Document file={url} onLoadError={console.error}><Page pageNumber={4}></Page></Document>, document.getElementById('pdf'));
        //document.getElementById('img').setAttribute(url)
      })
  }

  useEffect(() => {
    getImage()
    return () => {}
  }, [])

  return (
    <DbContext.Provider value={firebase}>
      <Router>
        <div id="pdf"></div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Accueil />
          </Route>
        </Switch>
      </Router>
    </DbContext.Provider>
  )
}

export { DbContext }
export default App
