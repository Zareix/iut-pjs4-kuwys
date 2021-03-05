import React, { useState } from 'react'
import API from '../../util/api'
import { Redirect } from 'react-router-dom'
import { useGlobalContext } from '../../util/context'

const Register = () => {
  const { login, isLogin } = useGlobalContext()
  

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')

  const [errors, setErrors] = useState({})
  const [logged, setLogged] = useState(false)
  const [loading, setLoading] = useState(false)
  
  if (isLogin) return <Redirect to='/home'/>
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const user = {
      username,
      email,
      password,
      confirmPassword,
      prenom,
      nom
    }
    API.post('/register', user)
      .then((res) => {
        console.log(res.data)
        const token = res.data.token
        login(token)
        setLoading(false)
        setLogged(true)
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data)
        setErrors({ ...err.response.data })
        setLoading(false)
      })
  }
  if (logged) return <Redirect to="/" />

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nom"
            >
              Nom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nom"
              type="text"
              placeholder="nom"
              value={nom}
              onChange={(e) => {
                setNom(e.target.value)
              }}
            />
            {errors.nom && (
              <p className="text-red-500 text-xs italic">{errors.nom}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="prenom"
            >
              Prenom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="prenom"
              type="text"
              placeholder="prenom"
              value={prenom}
              onChange={(e) => {
                setPrenom(e.target.value)
              }}
            />
            {errors.prenom && (
              <p className="text-red-500 text-xs italic">{errors.prenom}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="pseudo"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">{errors.username}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
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
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*************"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>
          <div className="mb-10">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmpassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmpassword"
              type="password"
              placeholder="******************"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
              }}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic">
                {errors.confirmPassword}
              </p>
            )}
            {errors.general && (
              <p className="text-red-500 text-xs italic">{errors.general}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={loading}
            >
              Inscription
            </button>
          </div>
        </form>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-blue"
            href="/login "
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  )
}

export default Register
