import React from 'react'

import Gui from '../gui/Gui'
import Parametres from './Parametres'
import Bio from './Bio'
import APropos from './APropos'

// TODO : gérer les inputs et appliquer les modifs à la DB
// TODO : afficher les infos de l'user
const Profil = () => {
  return (
    <Gui>
      <div className="p-10 grid gap-8">
        <Bio />
        <APropos />
        <Parametres />
      </div>
    </Gui>
  )
}

export default Profil
