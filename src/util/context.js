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
    window.localStorage.setItem('token', token)
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    API.get('/user', config)
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
