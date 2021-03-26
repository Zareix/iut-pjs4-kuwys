import React, { useState, useEffect } from 'react'

import { ReactComponent as FavCoursIcon } from '../../svg/024-file.svg'
import { ReactComponent as FavFichesIcon } from '../../svg/025-file-1.svg'

import FavFiches from './FavFiches'

import { useGlobalContext } from '../../util/context'
import API from '../../util/api'

import Gui from '../gui/Gui'
import { toast } from 'react-toastify'

const AccueilUser = () => {
  const { user } = useGlobalContext()
  const [isFavCours, setIsFavCours] = useState(false)
  const [isFavFiches, setIsFavFiches] = useState(false)
  const [favPosts, setFavPosts] = useState([])

  useEffect(() => {
    API.get('/favposts?username=' + user.username).then((res) =>
      setFavPosts(res.data)
    )
  }, [user])

  const handleOnClickCours = () => {
    if (favPosts.length === 0)
      toast.error('Aucuns cours favoris.', {
        position: 'bottom-right',
        autoClose: 2000,
      })
    else setIsFavCours(true)
  }

  const handleOnClickFiche = () => {
    if (favPosts.length === 0)
      toast.error('Aucunes fiches favorites.', {
        position: 'bottom-right',
        autoClose: 2000,
      })
    else setIsFavFiches(true)
  }

  const retour = () => {
    setIsFavCours(false)
    setIsFavFiches(false)
  }

  return (
    <Gui>
      {isFavCours ? (
        <FavFiches title="Cours favoris" posts={favPosts} retour={retour} type="cours"/>
      ) : isFavFiches ? (
        <FavFiches title="Fiches favorites" posts={favPosts} retour={retour} type="fiche"/>
      ) : (
        <div>
          <h1 className="ourYellow font-bold text-2xl">
            Bienvenue{' '}
            <span className="ourMainFontColor">{user.firstName} !</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-y-6 md:gap-y-10 mt-4 font-semibold ourMainFontColor">
            <div className="flex justify-center md:p-4 pl-0 text-center">
              <div
                className="w-1/2 md:w-1/3 border rounded-xl m-2 p-4 shadow grid gap-2 justify-center justify-items-center cursor-pointer"
                onClick={handleOnClickCours}
              >
                <FavCoursIcon className="h-10" />
                <p>Cours favoris</p>
              </div>
              <div
                className="w-1/2 md:w-1/3 border rounded-xl m-2 p-4 shadow grid gap-2 justify-center justify-items-center cursor-pointer"
                onClick={handleOnClickFiche}
              >
                <FavFichesIcon className="h-10" />
                <p>Fiches favorites</p>
              </div>
            </div>
            <div>
              <h2>Mes groupes de travail</h2>
              <div className="greyBox m-6 ml-0">grp</div>
            </div>

            <div>
              <h2>Dernières fiches consultées</h2>
              <div className="greyBox m-6 ml-0">fiche</div>
            </div>
            <div>
              <h2>Derniers cours consultés</h2>
              <div className="greyBox m-6 ml-0">cours</div>
            </div>
          </div>
        </div>
      )}
    </Gui>
  )
}

export default AccueilUser
