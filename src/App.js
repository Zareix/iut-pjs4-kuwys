import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import './css/App.css'
import Login from './components/authentification/Login.js'
import Home from './components/Home.js'
import Accueil from './components/Accueil.js'
import Register from './components/authentification/Register.js'
import Page404 from './components/Page404'
import Profil from './components/profil/Profil'
import PrivateRoute from './components/PrivateRoute'

import FichesCours from './components/fichesCours/FichesCours'
import Fiche from './components/fichesCours/Fiche'
import GroupesTravail from './components/groupesTravail/GroupesTravail'
import { AppProvider } from './util/context'

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
          <PrivateRoute exact path="/home">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/fiche/:postId" component={Fiche}>
          </PrivateRoute>
          <PrivateRoute exact path="/profil">
            <Profil />
          </PrivateRoute>
          <PrivateRoute exact path="/fichesCours">
            <FichesCours />
          </PrivateRoute>
          <PrivateRoute exact path="/groupestravail">
            <GroupesTravail />
          </PrivateRoute>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
      <ToastContainer/>
    </AppProvider>
  )
}

export default App
