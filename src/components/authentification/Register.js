import React, { useState } from 'react'
import API from '../../util/api'
import { Link, Redirect } from 'react-router-dom'
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

  if (isLogin) return <Redirect to="/" />
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const user = {
      username,
      email,
      password,
      confirmPassword,
      name: nom,
      firstName: prenom,
      institute: 'gXTmLhOdR3veCAuePOCq', // TODO choose institute
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
        console.log(err)
        console.log(err.response.data)
        setErrors({ ...err.response.data })
        setLoading(false)
      })
  }
  if (logged) return <Redirect to="/" />

  return (
    <div className="flex w-screen h-screen md:h-auto justify-center items-center authBg">
      <div className="m-10">
        <h1 className="text-2xl text-center ourMainFontColor font-bold mb-4">Bienvenue sur <span className="ourYellow">KUWYS</span> !</h1>
        <form
          className="shadow-md rounded newGroupResearchDiv p-10"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block ourMainFontColor text-sm font-bold mb-2">
              Nom
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 "
                id="nom"
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => {
                  setNom(e.target.value)
                }}
              />
            </label>
            {errors.nom && (
              <p className="ourRed text-xs italic">{errors.nom}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block ourMainFontColor text-sm font-bold mb-2">
              Prénom
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 "
                id="prenom"
                type="text"
                placeholder="Prénom"
                value={prenom}
                onChange={(e) => {
                  setPrenom(e.target.value)
                }}
              />
            </label>
            {errors.prenom && (
              <p className="ourRed text-xs italic">{errors.prenom}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block ourMainFontColor text-sm font-bold mb-2">
              Pseudo
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 "
                id="username"
                type="text"
                placeholder="Pseudo"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
              />
            </label>
            {errors.username && (
              <p className="ourRed text-xs italic">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block ourMainFontColor text-sm font-bold mb-2">
              Email
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 "
                id="email"
                type="text"
                placeholder="etudiant@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </label>
            {errors.email && (
              <p className="ourRed text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block ourMainFontColor text-sm font-bold mb-2">
              Password
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 "
                id="password"
                type="password"
                placeholder="*************"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </label>
            {errors.password && (
              <p className="ourRed text-xs italic">{errors.password}</p>
            )}
          </div>
          <div className="mb-7">
            <label className="block ourMainFontColor text-sm font-bold mb-2">
              Confirm Password
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 ourMainFontColor mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmpassword"
                type="password"
                placeholder="******************"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
              />
            </label>
            {errors.confirmPassword && (
              <p className="ourRed text-xs italic">
                {errors.confirmPassword}
              </p>
            )}
            {errors.general && (
              <p className="ourRed text-xs italic">{errors.general}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              className="border ourYellowBg text-white py-1 px-2 rounded-full"
              type="submit"
              disabled={loading}
            >
              Inscription
            </button>
          </div>
        </form>

        <div className="newGroupResearchDiv mt-6 p-5 text-center">
          Déjà un compte ?{' '}
          <Link className="ourYellow" to="/login">
            Connectez vous
          </Link>
          .
        </div>
      </div>
    </div>
  )
}

export default Register
