import React from 'react'
import { Link } from 'react-router-dom'

import {useGlobalContext} from '../../util/context'
import TopBar from './TopBar'
import Footer from './Footer'

const Gui = (props) => {
  const { user } = useGlobalContext()
  return (
    <div>
      <TopBar />
      <div style={{ minHeight: '100vh' }} className="grid grid-cols-6">
        <div
          className="col-span-1 w-1/6 fixed top-12 h-full"
          style={{ backgroundColor: '#ECECEC' }}
        >
          <div className="grid justify-items-center my-10 text-sm">
            <img src={user.imageUrl} className="w-16 mb-2" />
            <p>{user.username}</p>
            {/* TODO A modif avec nom prenom mais pas dispo pour le moment */}
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
        <div className="col-start-2 col-span-6">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Gui
