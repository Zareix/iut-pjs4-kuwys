import React, { useState, useContext, useEffect, createContext } from 'react'
import API from './api'
import LoadingPage from '../components/loadingPage/LoadingPage'
import jwt_decode from 'jwt-decode'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [isLogin, setIsLogin] = useState(false)
  const [loading, setLoading] = useState(false)

  const login = (token) => {
    setLoading(true)
    setIsLogin(true)
    window.localStorage.setItem('FBToken', token)
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`
    API.get('/user')
      .then((res) => {
        console.log(res.data)
        setUser({ ...res.data})
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const logout = () => {
    setIsLogin(false)
    setUser({})
    window.localStorage.removeItem('FBToken')
  }

  useEffect(() => {
    const token = window.localStorage.getItem('FBToken')
    console.log(token)
    if (token !== null) {
      if (jwt_decode(token).exp * 1000 < Date.now()) {
        console.log('Connection expired')
        logout()
      } else {
        console.log(jwt_decode(token));
        console.log('User logged in')
        login(token)
      }
    } else {
      logout()
    }
  }, [])

  if (loading) return <LoadingPage />
  return (
    <AppContext.Provider value={{ user, isLogin, login, logout, loading }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
