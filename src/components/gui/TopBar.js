import React from 'react'
import { useGlobalContext } from '../../util/context'
import { Link } from 'react-router-dom'

const TopBar = () => {
  const { logout } = useGlobalContext()
  return (
    <div
      style={{ backgroundColor: '#F7B91C' }}
      className="h-12 p-3 text-white grid grid-cols-2 fixed w-full"
    >
      <Link to="/">[KUWYS LOGO]</Link>
      <div className="text-right" onClick={logout}>Déconnexion</div>
    </div>
  )
}

export default TopBar
