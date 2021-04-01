import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Ecole from './components/ecole/Ecole'
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
import ScrollToTop from './components/tools/ScrollToTop'
import Post from './components/fichesCours/Post'
import Forum from './components/forum/Forum'
import MesInformations from './components/profil/MesInformations'
import Notifications from './components/gui/Notifications'
import PostForum from './components/forum/PostForum'
import CreateFicheCours from './components/fichesCours/CreateFicheCours'
import BonsPlans from './components/bonsPlans/BonsPlans'
import PublicRoute from './components/PublicRoute'
import CreateForum from './components/forum/CreateForum'

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <Switch>
          <PublicRoute exact path="/" component={Accueil} restricted={false} />
          <PublicRoute exact path="/login" component={Login} restricted={true} />
          <PublicRoute exact path="/register" component={Register} restricted={true} />
          <PrivateRoute exact path="/accueil" component={AccueilUser} />
          <PrivateRoute exact path="/ecole" component={Ecole} />
          <PrivateRoute exact path="/fichesCours" component={FichesCours} />
          <PrivateRoute exact path="/fichesCours/create" component={CreateFicheCours} />
          <PrivateRoute exact path="/fiche/:postId" component={Post} />
          <PrivateRoute exact path="/cours/:postId" component={Post} />
          <PrivateRoute exact path="/forum/post/:postId" component={PostForum} />
          <PrivateRoute exact path="/forum/create" component={CreateForum} />
          <PrivateRoute exact path="/profil" component={Profil} />
          <PrivateRoute exact path="/profil/user/:username" component={Profil} />
          <PrivateRoute exact path="/profil/mesinformations" component={MesInformations} />
          <PrivateRoute exact path="/forum" component={Forum} />
          <PrivateRoute exact path="/bonsplans" component={BonsPlans} />
          <PrivateRoute exact path="/groupestravail" component={GroupesTravail} />
          <PrivateRoute exact path="/groupestravail/nouveaugroupe" component={NouveauGroupe} />
          <PrivateRoute exact path="/notifications" component={Notifications} />
          <PublicRoute restricted={false} component={Page404} />
        </Switch>
      </Router>
      <ToastContainer />
    </AppProvider>
  )
}

export default App
