import React, { useState, useContext, useEffect, createContext } from 'react'
import API from './api'
import LoadingPage from '../components/loadingPage/LoadingPage'
import jwt_decode from 'jwt-decode'
import unidaysPromoJson from '../scraping/promotionsUnidays.json'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [isLogin, setIsLogin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [unidaysPromo, setUnidaysPromo] = useState(
    unidaysPromoJson.promotionsUnidays
  )

  const isUserLoggedIn = () => {
    return isLogin
  }

  const login = (token) => {
    if (!loading) setLoading(true)
    window.localStorage.setItem('FBToken', token)
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`
    API.get('/user')
      .then((res) => {
        setUser({ ...res.data })
        setIsLogin(true)
        setLoading(false)
        return
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        return
      })
  }

  const logout = () => {
    setIsLogin(false)
    setUser({})
    window.localStorage.removeItem('FBToken')
    if (loading) setLoading(false)
  }

  useEffect(() => {
    const token = window.localStorage.getItem('FBToken')
    if (token !== null) {
      if (jwt_decode(token).exp * 1000 < Date.now()) {
        console.log('Connection expired')
        logout()
      } else {
        console.log('User logged in')
        login(token)
      }
    } else {
      logout()
    }
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <AppContext.Provider
      value={{
        user,
        isUserLoggedIn,
        login,
        logout,
        loading,
        setUser,
        unidaysPromo,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
