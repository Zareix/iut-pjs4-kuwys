import React from 'react'

import Gui from '../gui/Gui'
import Parametres from './Parametres'
import Bio from './Bio'
import APropos from './APropos'

const Profil = () => {
  return (
    <Gui>
      <div className="w-full flex justify-center">
        <div className="grid gap-8 w-full md:w-9/12">
          <Bio />
          <APropos />
          <Parametres />
        </div>

      </div>
    </Gui>
  )
}

export default Profil
