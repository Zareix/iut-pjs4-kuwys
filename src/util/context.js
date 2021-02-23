import React, { useState, useContext, useEffect, createContext } from 'react'
import API from './api'
import jwt_decode from 'jwt-decode'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [isLogin, setIsLogin] = useState(true)

  const login = (token) => {
    setIsLogin(true)
    window.localStorage.setItem('token', token)
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    API.get('/user', config)
      .then((res) => {
        console.log(res.data)
        setUser({ ...res.data })
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  const logout = () => {
    setIsLogin(false)
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
    } else {
      logout()
    }
  }, [])

  return (
    <AppContext.Provider value={{ user, isLogin, login, logout }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
