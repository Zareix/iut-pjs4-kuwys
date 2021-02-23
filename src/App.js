import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import api from './util/api'
import jwt_decode from 'jwt-decode'

import './App.css'
import Login from './components/connexion/Login.js'
import Home from './components/Home.js'
import Accueil from './components/Accueil.js'
import Register from './components/inscription/Register.js'
import Page404 from './components/Page404'
import Profil from './components/profil/Profil'

import FichesCours from './components/fichesCours/FichesCours'
import GroupesTravail from './components/groupesTravail/GroupesTravail'

const DbContext = React.createContext()

function App() {
  const [user, setUser] = useState({})

  const login = (token) => {
    window.localStorage.setItem('token', token)
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    api
      .get('/user', config)
      .then((res) => {
        console.log(res.data)
        setUser({ ...res.data })
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  const logout = () => {
    setUser({})
    window.localStorage.removeItem('token')
  }

  useEffect(() => {
    const tmp = window.localStorage.getItem('token')
    if (tmp !== null) {
      if (jwt_decode(tmp).exp * 1000 < Date.now()) {
        console.log('Connection expired')
        logout()
      } else {
        console.log('User logged in')
        login(tmp)
      }
    }
  }, [])

  return (
    <DbContext.Provider value={{ user, login, logout }}>
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
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </DbContext.Provider>
  )
}

export { DbContext }
export default App
