import React, { useState, useEffect } from 'react'

import { ReactComponent as FavCoursIcon } from '../../svg/024-file.svg'
import { ReactComponent as FavFichesIcon } from '../../svg/025-file-1.svg'

import FavFiches from './FavFiches'
import FavCours from './FavCours'

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
  }, [])

  const handleOnClik = (setter) => {
    if (favPosts.length === 0)
      toast.error('Aucun(e)s fiches/cours favorit(e)s.', {
        position: 'bottom-right',
        autoClose: 1000,
      })
    else setter(true)
  }

  return (
    <Gui>
      {isFavCours ? (
        <FavCours posts={favPosts} />
      ) : isFavFiches ? (
        <FavFiches posts={favPosts} />
      ) : (
        <div>
          <h1 className="ourYellow font-bold text-2xl">
            Bienvenue{' '}
            <span className="ourMainFontColor">{user.username} !</span>
          </h1>
          <div className="grid grid-cols-2 gap-y-10 mt-4 font-semibold ourMainFontColor">
            <div className="flex p-4 pl-0">
              <div
                className="w-1/3 border rounded-xl m-2 p-4 shadow grid justify-center justify-items-center cursor-pointer"
                onClick={() => handleOnClik(setIsFavCours)}
              >
                <FavCoursIcon className="h-8 mb-2" />
                <p>Cours favoris</p>
              </div>
              <div
                className="w-1/3 border rounded-xl m-2 p-4 shadow grid justify-center justify-items-center cursor-pointer"
                onClick={() => handleOnClik(setIsFavFiches)}
              >
                <FavFichesIcon className="h-8 mb-2" />
                <p>Fiches favorites</p>
              </div>
            </div>
            <div>
              <h2>Mes groupes de travail</h2>
              <div className="greyBox m-6"></div>
            </div>

            <div>
              <h2>Dernières fiches consultées</h2>
              <div className="greyBox m-6"></div>
            </div>
            <div>
              <h2>Derniers cours consultés</h2>
              <div className="greyBox m-6"></div>
            </div>
          </div>
        </div>
      )}
    </Gui>
  )
}

export default AccueilUser
