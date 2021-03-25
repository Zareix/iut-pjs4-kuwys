import React from 'react'

import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../util/context'

const NavigationPanel = (props) => {
    const { user } = useGlobalContext()

    return (
        <div>
            <div className="grid justify-items-center my-10 text-sm">
                <img src={user.imageUrl} className="w-16 mb-2" alt="profil pp" />
                <p>{user.username}</p>
                {/* TODO A modif avec nom prenom mais pas dispo pour le moment */}
            </div>
            <div className="grid grid-cols-2">{/* icons */}</div>
            <div className="grid gap-4 ml-4 text-xs">
                <Link to="/">Accueil</Link>
                <Link to="/profil">Profil</Link>
                <Link to="/ecole">Espace Ecole</Link>
                <Link to="/fichescours">Fiches & Cours</Link>
                <p>Forum Q&R</p>
                <Link to="/groupestravail">Groupes de travail</Link>
            </div>
        </div >
    )
}

export default NavigationPanel
