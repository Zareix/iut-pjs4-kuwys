import React, { useState } from "react"

import imgBarreRecherche from "../../svg/GroupesTravailVector1.svg"

const ButtonGrTravail = (props) => {
  
  return (
    <a
      href="#"
      style={{}}
      className="w-2/5 flex items-center justify-center grow grButton px-8 py-3 font-bold rounded-lg text-black md:py-4 md:text-xs md:px-10 md:mt-6 md:m-auto"
    >
      <span>{props.text}</span>
    </a>
  )
}

export default ButtonGrTravail
