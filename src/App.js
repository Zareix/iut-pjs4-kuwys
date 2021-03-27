import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Ecole from "./components/ecole/Ecole"
import NouveauGroupe from './components/groupesTravail/NouveauGroupe'
import PrivateRoute from './components/PrivateRoute'
import './css/App.css'
import Login from './components/authentification/Login.js'
import AccueilUser from './components/accueilUser/AccueilUser.js'
import Accueil from './components/Accueil.js'
import Register from './components/authentification/Register.js'
import Page404 from './components/Page404'
import Profil from './components/profil/Profil'
import FichesCours from './components/fichesCours/FichesCours'
import GroupesTravail from './components/groupesTravail/GroupesTravail'
import { AppProvider } from './util/context'
import Post from './components/fichesCours/Post'

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute exact path="/accueil">
            <AccueilUser />
          </PrivateRoute>
          <PrivateRoute exact path="/ecole">
            <Ecole />
          </PrivateRoute>
          <PrivateRoute
            exact
            path="/fiche/:postId"
            component={Post}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/cours/:postId"
            component={Post}
          ></PrivateRoute>
          <PrivateRoute exact path="/profil">
            <Profil />
          </PrivateRoute>
          <PrivateRoute exact path="/fichesCours">
            <FichesCours />
          </PrivateRoute>
          <PrivateRoute exact path="/groupestravail">
            <GroupesTravail />
          </PrivateRoute>
          <PrivateRoute exact path="/groupestravail/nouveaugroupe">
            <NouveauGroupe />
          </PrivateRoute>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
      <ToastContainer />
    </AppProvider>
  )
}

export default App
