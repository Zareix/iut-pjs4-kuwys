import React from 'react'

import { Link } from 'react-router-dom'
import { styled } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { useGlobalContext } from '../../util/context'

const LogoutButton = styled(Button)({
  color: 'white',
  textTransform: 'capitalize',
})

const TopBar = () => {
  const { logout } = useGlobalContext()

  return (
    <div className="h-12 p-3 text-white ourYellowBg grid grid-cols-2 fixed w-full z-50 content-center items-center">
      <Link to="/" className="text-lg font-semibold pl-4 align-middle">
        KUWYS
      </Link>
      <div className="text-right mr-3">
        <LogoutButton onClick={logout}>Déconnexion</LogoutButton>
      </div>
    </div>
  )
}

export default TopBar
