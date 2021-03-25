import React, { useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import API from '../../util/api'
import { useGlobalContext } from '../../util/context'

const Login = () => {
  const { login, isLogin } = useGlobalContext()

  const location = useLocation()
  const { from } = location.state || { from: { pathname: '/home' } }

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        className="w-full max-w-xs"
        style={{ transform: 'translate(-10%, -10%)' }}
      >
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              E-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="user@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
            {errors.general && (
              <p className="text-red-500 text-xs italic">{errors.general}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Login
