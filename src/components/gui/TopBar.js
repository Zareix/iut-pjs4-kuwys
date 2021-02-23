import React from 'react'

import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div
      style={{ backgroundColor: '#F7B91C' }}
      className="h-12 p-3 text-white grid grid-cols-2 fixed w-full"
    >
      <Link to="/">[KUWYS LOGO]</Link>
      <div className="text-right">Déconnexion</div>
    </div>
  )
}

export default TopBar
