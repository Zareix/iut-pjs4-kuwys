import React, { useState, useEffect, useContext } from "react"

import { DbContext } from "../../App"

import Fiche from "./Fiche"
import Gui from "../gui/Gui"

const FichesCours = () => {
  const [selectedFiche, setSelectedFiche] = useState()

  const firebase = useContext(DbContext)

  useEffect(() => {
    return () => {}
  }, [])

  return (
		<Gui>
			{selectedFiche ? <Fiche /> : <div></div>}
			<Fiche></Fiche>
		</Gui>
	)
}

export default FichesCours
