import React from 'react'
import { useGlobalContext } from '../../util/context'

import Gui from '../gui/Gui'
import EcoleAPropos from './EcoleAPropos'
import EcoleFichesCours from './EcoleFichesCours'
import EcoleGroupesDeTravail from './EcoleGroupesDeTravail'
import EcoleMembersNumber from './EcoleMembersNumber'

const Ecole = () => {
  const { user } = useGlobalContext()
  const institute = user.institute

  return (
    <Gui>
      <EcoleAPropos institute={institute} />
      <div className="grid md:grid-cols-2 md:mt-10">
        <EcoleMembersNumber className="block md:hidden px-10 mb-4" />
        <div>
          <h2 className="ourMainFontColor font-semibold mb-2">
            Dernières questions
          </h2>
          <div className="greyBox h-64 overflow-y-auto px-6 py-3">
            
          </div>
        </div>
        <div className="hidden md:block px-10">
          <EcoleMembersNumber />
          <EcoleGroupesDeTravail />
        </div>
      </div>
      <EcoleGroupesDeTravail className="block md:hidden mb-4" />
      <EcoleFichesCours />
    </Gui>
  )
}

export default Ecole
