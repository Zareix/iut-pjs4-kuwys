import React, { useState, useEffect } from "react"

import Fiche from "./Fiche"

const FichesCours = () => {
  const [selectedFiche, setSelectedFiche] = useState()

  useEffect(() => {
    return () => {}
  }, [])

  return selectedFiche ? <Fiche /> : <div></div>
}

export default FichesCours
