import React, { useState, useContext } from "react"

import { Link } from "react-router-dom"

import { DbContext } from "../App"

const Register = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")

  const [errorMessage, setErrorMessage] = useState("")
  const [logged, setLogged] = useState(false)

  const firebase = useContext(DbContext)

  const verifAll = () => {
    if (nom === "") {
      setErrorMessage("Merci d'entrer un nom valide.")
      return false
    } else if (prenom === "") {
      setErrorMessage("Merci d'entrer un prenom valide.")
      return false
    }
    return true
  }

  const formatNom = (nom) => {
    return nom.charAt(0).toUpperCase() + nom.substr(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage("")

    if (verifAll()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user
          firebase
            .firestore()
            .collection("users")
            .add({
              email: email,
              nom: formatNom(nom),
              prenom: formatNom(prenom),
            })
          user.updateProfile({
            displayName: formatNom(prenom) + " " + formatNom(nom),
          })
          setLogged(true)
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              setErrorMessage("Cette adresse email est déjà utilisée.")
              break
            case "auth/invalid-email":
              setErrorMessage("Merci d'entrer une adresse mail valide.")
              break
            case "auth/weak-password":
              setErrorMessage("Votre mot de passe est trop faible.")
              break
            default:
              setErrorMessage(error.message)
          }
        })
    }
  }

  return (
    <div className="m-4">
      {logged && (
        <div>
          <p>Utilisateur enregistré !</p>
          <Link to="/home" className="underline text-blue-500">
            Retourner à la page d'accueil
          </Link>
        </div>
      )}
      {!logged && (
        <div>
          <form onSubmit={handleSubmit} className="grid gap-y-4">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 ml-2"
              />
            </div>
            <div>
              <label htmlFor="password">Mot de passe </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 ml-2"
              />
            </div>
            <div>
              <label>Nom</label>
              <input
                type="text"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="border-2 ml-2"
              />
            </div>
            <div>
              <label>Prénom</label>
              <input
                type="text"
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="border-2 ml-2"
              />
            </div>
            <div>
              <input type="submit" value="Valider"></input>
            </div>
          </form>
          <div>{errorMessage}</div>
        </div>
      )}
    </div>
  )
}

export default Register
