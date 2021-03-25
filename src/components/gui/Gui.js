import React, { useEffect, useState } from 'react'

import GuiWideScreen from './GuiWideScreen'
import GuiMobile from './GuiMobile'

const Gui = (props) => {
  const [isMobile, setIsMobile] = useState(false)

  const checkIsMobile = () => {
    window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false)
  }

  useEffect(() => {
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
  })

  return isMobile ? <GuiMobile>{props.children}</GuiMobile> : <GuiWideScreen>{props.children}</GuiWideScreen>

}

export default Gui
