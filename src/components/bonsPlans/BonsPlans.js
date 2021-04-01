import React, { useEffect } from 'react'


import { useGlobalContext } from '../../util/context'

import Gui from '../gui/Gui'
import ItemBonPlan from './ItemBonPlan'
import ItemUnidays from './ItemUnidays'
import logoUnidays from '../../pictures/logoUnidays.png'
const BonsPlans = () => {

  const { unidaysPromo } = useGlobalContext()

  useEffect(() => {
    console.log(unidaysPromo);
  }, [])

  return (
    <Gui>
      <div>
        <div>
          <p className="text-2xl ourYellow font-bold md:pb-5">Bons plans et astuces du moment</p>
          <div className="grid grid-cols-3 grid-rows-1 md:gap-10 md:pt-5">
            <div className="col-start-1 col-span-1 row-start-1 row-span-1">
              <ItemBonPlan title="IMAGINE'R" desc="Avantages tout au long de l'année sur dans de nombreuses enseignes grâce à ce forfait transport Navigo destiné aux jeunes" site="https://www.imagine-r.com/" />
            </div>
            <div className="col-start-2 col-span-1 row-start-1 row-span-1">
              <ItemBonPlan title="CAPCAMPUS : Site spécial bons plans" desc="Aides, bons plans spécial étudiants" site="https://www.capcampus.com/" />
            </div>
            <div className="col-start-3 col-span-1 row-start-1 row-span-1">
              <ItemBonPlan title="SNCF : Carte élève et apprentis" desc="-50% de réduction sur le plein tarif loisir à partir du 10e trajet | 9 trajets par mois au prix de la seule réservation" site="https://www.sncf.com/fr/offres-voyageurs/cartes-tarifs-grandes-lignes/eleves-apprentis" />
            </div>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 md:gap-10 md:pt-5">
            <div className="col-start-1 col-span-1 row-start-1 row-span-1">
              <ItemBonPlan title="PASS CULTURE" desc="500€ à dépenser dans tous les lieux culturels près de cher toi si tu as 18 ans (disponibles dans certaines régions uniquement" site="https://pass.culture.fr/" />
            </div>
            <div className="col-start-2 col-span-1 row-start-1 row-span-1">
              <ItemBonPlan title="CROUS : Bourse et aide au logement" desc="Une aide gouvernementale attribuée en fonction d'une grille de critères sociaux" site="https://www.messervices.etudiant.gouv.fr/envole/" />
            </div>
            <div className="col-start-3 col-span-1 row-start-1 row-span-1">
              <ItemBonPlan title="VELIB'" desc="1,55€ / mois pour les jeunes et les étudiants" site="https://blog.velib-metropole.fr/2020/09/01/tarifs-jeunes-etudiants/" />
            </div>
          </div>

        </div>

        <div id="promosUnidays" className="grid grid-cols-4 grid-rows-5 gap-5 md:mt-16">
          <div className="col-start-1 col-span-1 row-start-1 row-span-5 unidaysDiv flex items-center bg-pink-400 md:p-4">
            <a href="https://www.myunidays.com/FR/fr-FR">
              <img src={logoUnidays} className="m-auto"></img>
            </a>
          </div>
          <div className="col-start-2 col-span-3 row-start-1 row-span-5 text-center">
            <p>Tu connais probablement déjà Unidays, mais si tu viens juste d'entrer dans l'enseignement supérieur, laisse nous te dévoiler le bon plan à connaître !
              Unidays est un <span className="font-bold text-pink-400">site web de réductions pour les étudiants du monde entier</span>. Il suffit de t'inscrire pour pouvoir bénéficier gratuitement de toutes les réductions obtenues grâce
              aux marques partenaires. Chez KUWYS, nous avons donc décidé de te permettre d'accéder facilement à leur catalogue de promotions mis à jour quotidiennement, et rediriger ainsi vers
              les meilleurs promos du moment !
            </p>
          </div>
        </div>
        <div className="md:mt-10 md:mx-96">
          {unidaysPromo.map((p) => (
            <div>
              <ItemUnidays marque={p.marque} rabais={p.rabais} />
            </div>
          ))}
        </div>

      </div>

    </Gui>
  )
}

export default BonsPlans
