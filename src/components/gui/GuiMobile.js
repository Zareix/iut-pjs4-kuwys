import React from 'react'

import Fade from "../tools/Fade"

import Footer from './Footer'
import TopBarMobile from './TopBarMobile'

const GuiMobile = (props) => {
  return (
    <div className="w-screen">
      <TopBarMobile />
      <div className="relative top-14 z-10">
        <div className="min-h-screen px-4 pt-4">
          <Fade>{props.children}</Fade>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default GuiMobile
