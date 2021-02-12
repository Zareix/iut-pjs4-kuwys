import React, { useContext } from "react"
import { Redirect } from "react-router-dom"

import { DbContext } from "../../App"

import TopBar from "./TopBar"
import Footer from "./Footer"

const Gui = (props) => {
  const firebase = useContext(DbContext)
  const user = firebase.auth().currentUser

  /*
    if(!user)
        return <Redirect to="/login"></Redirect>
    */

  return (
    <div>
      <TopBar />
      <div style={{ minHeight: "100vh" }} className="flex">
        <div className="bg-gray-100 w-52 text-center">
          {user && (
            <div>
              <img src={user.photoURL} />
              <p>{user.displayName}</p>
            </div>
          )}
          <div className="grid grid-cols-2">{/* icons */}</div>
          <div className="grid gap-4">
            <p>Accueil</p>
            <p>Mon profil</p>
            <p>Espace Ecole</p>
            <p>Fiches & Cours</p>
            <p>Forum Q&R</p>
            <p>Groupes de travail</p>
          </div>
        </div>
        <div className="col-span-3">{props.children}</div>
      </div>
      <Footer/>
    </div>
  )
}

export default Gui
