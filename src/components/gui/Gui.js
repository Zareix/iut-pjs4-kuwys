import React from 'react'
import { Link } from 'react-router-dom'

import { useGlobalContext } from '../../util/context'
import TopBar from './TopBar'
import Footer from './Footer'

const Gui = (props) => {
  const { user } = useGlobalContext()
  return (
    <div>
      <TopBar />
      <div style={{ minHeight: '100vh' }} className="grid grid-cols-6 z-50">
        <div
          className="col-span-1 fixed top-12 h-full pt-6 p-12"
          style={{ backgroundColor: '#ECECEC' }}
        >
          <div className="grid justify-items-center my-10 text-sm">
            <img src={user.imageUrl} className="w-16 mb-2" alt="profil pp" />
            <p>{user.username}</p>
          </div>
          <div className="grid grid-cols-2">{/* icons */}</div>
          <div className="grid gap-4 justify-center text-xs">
            <Link to="/">Accueil</Link>
            <Link to="/profil">Profil</Link>
            <p>Espace Ecole</p>
            <Link to="/fichescours">Fiches & Cours</Link>
            <p>Forum Q&R</p>
            <Link to="/groupestravail">Groupes de travail</Link>
          </div>
        </div>
        <div className="col-start-2 col-span-6 mt-12 p-6 min-h-screen">{props.children}</div>
        <div className="col-start-2 col-span-6">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Gui
