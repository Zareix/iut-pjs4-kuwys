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
            Et in ut ipsum ut culpa labore nulla velit ut eiusmod. Nisi
            exercitation officia in do ut. Dolore reprehenderit pariatur duis
            sit irure pariatur incididunt nisi ex id minim qui sunt pariatur. Ex
            in ea fugiat qui ullamco dolor labore culpa dolore in reprehenderit.
            Sit ut occaecat cillum reprehenderit incididunt minim quis aliqua.
            Cupidatat officia amet fugiat ad cupidatat culpa enim consequat
            irure duis incididunt irure cillum minim.Aliquip ad nisi nulla
            consequat duis velit deserunt anim amet. Sunt esse incididunt
            ullamco do sint sunt ipsum cillum voluptate fugiat non labore.
            Pariatur ea deserunt minim nostrud proident amet non veniam.Mollit
            veniam deserunt eu consectetur. Minim velit irure fugiat et
            incididunt minim duis duis ex nisi duis ipsum. Exercitation est ex
            magna nostrud ad in. Dolor excepteur dolore non velit labore.
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
