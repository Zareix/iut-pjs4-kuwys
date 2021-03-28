import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import NavigationPanel from './NavigationPanel'



const TopBarMobile = (props) => {
  const [isNavVisible, setIsNavVisible] = useState(false)

  return (
    <div className="fixed w-screen z-50">
      <div className="h-14 p-3 text-white ourYellowBg grid grid-cols-2 w-full content-center items-center">
        <Link to="/" className="text-lg font-semibold">
          KUWYS
        </Link>
        <div className="grid justify-end">
          <AiOutlineMenu
            size={30}
            onClick={() => setIsNavVisible(!isNavVisible)}
          />
        </div>
      </div>
      <SwipeableDrawer
        open={isNavVisible}
        anchor="right"
        onClose={() => setIsNavVisible(false)}
        onOpen={() => setIsNavVisible(true)}
      >
        <div className="w-screen">
          <NavigationPanel deconnexion/>
        </div>
      </SwipeableDrawer>
    </div>
  )
}

export default TopBarMobile
