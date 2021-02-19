import React, { useState, useContext } from "react"

import { Link } from "react-router-dom"

import { DbContext } from "../../App"

const defaultAvatar = "../../svg/PPAnonymous.svg"

const Register = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [pseudo, setPseudo] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [logged, setLogged] = useState(false)

  const { db, auth } = useContext(DbContext)

  const checkUniquePseudo = async (pseudo) => {
    console.log(pseudo)
    const snapshot = await db
      .collection("users")
      .where("pseudo", "==", pseudo)
      .get()
    if (snapshot.empty) {
      return true
    }
    console.log(snapshot, "faux")
    return false
  }

  const verifAll = async () => {
    if (nom === "") {
      setErrorMessage("Merci d'entrer un nom valide.")
      return false
    } else if (prenom === "") {
      setErrorMessage("Merci d'entrer un prenom valide.")
      return false
    } else if (!(await checkUniquePseudo(pseudo))) {
      setErrorMessage("Pseudo deja pris.")
      return false
    }
    console.log("form valid")
    return true
  }

  const formatNom = (nom) => {
    return nom.charAt(0).toUpperCase() + nom.substr(1).toLowerCase()
  }

  const createUser = async (id) => {
    const user = await db
      .collection("users")
      .doc(id)
      .set({
        age: null,
        avatar: defaultAvatar,
        codePostal: null,
        email: email,
        formations: [],
        likes: [],
        nom: formatNom(nom),
        prenom: formatNom(prenom),
        pseudo: pseudo,
      })
    return user
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage("")

    if (verifAll()) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          let session = userCredential.user
          const user = createUser(session.uid)

          console.log(session.uid)
          session.updateProfile({
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
                required
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
                required
              />
            </div>
            <div>
              <label>Pseudo</label>
              <input
                type="text"
                id="pseudo"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                className="border-2 ml-2"
                required
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
                required
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
                required
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
