import React, { useState } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'

import kuwysBigLogo from '../../pictures/logo-big.png'

import API from '../../util/api'
import { useGlobalContext } from '../../util/context'

const Login = () => {
  const { login, isLogin } = useGlobalContext()

  const location = useLocation()
  const { from } = location.state || { from: { pathname: '/' } }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [redirect, setRedirect] = useState(false)
  if (isLogin) return <Redirect to={from} />

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors({})
    API.post('/login', { email, password })
      .then((res) => {
        console.log(res.data)
        login(res.data.token)
        setRedirect(true)
      })
      .catch((err) => {
        console.log(err)
        setErrors({ ...err })
      })
  }
  if (redirect) return <Redirect to={from} />

  return (
    <div className="grid justify-center items-center h-screen w-screen authBg">
      <img
        src={kuwysBigLogo}
        className="w-48 absolute top-14"
        style={{ left: '50%', marginLeft: '-6rem' }}
      />
      <div className="border-4 border-yellow-100 mx-3 p-8 md:p-10 bg-white">
        <form className="newGroupResearchDiv p-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block ourMainFontColor text-sm font-bold mb-2"
              htmlFor="username"
            >
              E-mail
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3"
                id="email"
                type="text"
                placeholder="user@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </label>
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-7">
            <label
              className="block ourMainFontColor text-sm font-bold mb-2"
              htmlFor="password"
            >
              Mot de passe
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </label>

            {errors.password && (
              <p className="ourRed text-xs italic">{errors.password}</p>
            )}
            {errors.general && (
              <p className="ourRed text-xs italic">{errors.general}</p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="border ourYellowBg text-white py-1 px-2 rounded-full"
              type="submit"
            >
              Se connecter
            </button>
          </div>
        </form>
        <div className="newGroupResearchDiv mt-6 p-5 text-center">
          <p>
            Vous n'avez pas de compte ?{' '}
            <Link to="/register" className="ourYellow">
              Inscrivez-vous
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
