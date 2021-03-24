import React from 'react'

import Gui from '../gui/Gui'
import Parametres from './Parametres'
import Bio from './Bio'
import APropos from './APropos'

const Profil = () => {
  return (
    <Gui>
      <div className="grid gap-8">
        <Bio />
        <APropos />
        <Parametres />
      </div>
    </Gui>
  )
}

export default Profil
