import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { DbContext } from "../../App"

import TopBar from "./TopBar"
import Footer from "./Footer"

const defaultAvatar =
    "https://firebasestorage.googleapis.com/v0/b/pjs4-iut-ts.appspot.com/o/pp_anonymous.svg?alt=media&token=55f0ac31-baff-42ac-8b0d-7c52b1b43aad"


const Gui = (props) => {
  const { auth } = useContext(DbContext)
  const user = auth.currentUser

  /*
    if(!user)
        return <Redirect to="/login"></Redirect>
    */

  return (
    <div>
      <TopBar />
      <div style={{ minHeight: "100vh" }} className="grid grid-cols-6">
        <div className="col-span-1 w-1/6 fixed top-12 h-full" style={{backgroundColor : "#ECECEC"}}>
          {/**user && (
            <div>
              <img src={user.photoURL} />
              <p>{user.displayName}</p>
            </div>
          )*/}
          <div className="grid justify-items-center my-10 text-sm">
            <img src={defaultAvatar} className="w-16 mb-2"/>
            <p>Lola-Marie Moron</p>
          </div>
          <div className="grid grid-cols-2">{/* icons */}</div>
          <div className="grid gap-4 ml-4 text-xs">
            <Link to="/">Accueil</Link>
            <p>Mon profil</p>
            <p>Espace Ecole</p>
            <Link to="/fichescours">Fiches & Cours</Link>
            <p>Forum Q&R</p>
            <p>Groupes de travail</p>
          </div>
        </div>
        <div className="col-start-2 col-span-6 mt-12">{props.children}</div>
        <div className="col-start-2 col-span-6" >
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Gui
