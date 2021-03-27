import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../util/context'

const NavigationPanel = (props) => {
  const { user } = useGlobalContext()
  const {active} = props

  return (
    <div className="grid justify-items-center  text-base md:text-sm">
      <Link to="/profil" className="grid justify-items-center my-10">
        <img src={user.imageUrl} className="w-16 mb-2" alt="profil pp" />
        <p>{user.username}</p>
        {/* TODO A modif avec nom prenom mais pas dispo pour le moment */}
      </Link>
      <div className="grid grid-cols-2">{/* icons */}</div>
      <div className="grid gap-4 w-2/3 md:w-full">
        <NavLink to="/accueil" activeClassName="font-semibold">Accueil</NavLink>
        <NavLink to="/profil" activeClassName="font-semibold">Profil</NavLink>
        <NavLink to="/ecole" activeClassName="font-semibold">Espace Ecole</NavLink>
        <NavLink to="/fichescours" activeClassName="font-semibold">Fiches & Cours</NavLink>
        <p>Forum Q&R</p>
        <NavLink to="/groupestravail" activeClassName="font-semibold">Groupes de travail</NavLink>
      </div>
    </div>
  )
}

export default NavigationPanel
