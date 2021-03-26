import React from 'react'

import { Link } from 'react-router-dom'

import { useGlobalContext } from '../../util/context'

const TopBar = () => {
  const { logout } = useGlobalContext()
  return (
    <div
      className="h-12 p-3 text-white ourYellowBg grid grid-cols-2 fixed w-full z-50 content-center"
    >
      <Link to="/" className="text-lg font-semibold pl-4">KUWYS</Link>
      <div className="text-right cursor-pointer mr-3" onClick={logout}>Déconnexion</div>
    </div>
  )
}

export default TopBar
