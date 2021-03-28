import React, { useState, useEffect } from 'react'

import { toast } from 'react-toastify'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

import { ReactComponent as FavCoursIcon } from '../../svg/024-file.svg'
import { ReactComponent as FavFichesIcon } from '../../svg/025-file-1.svg'

import { useGlobalContext } from '../../util/context'

import FavFiches from './FavFiches'
import API from '../../util/api'
import Gui from '../gui/Gui'
import ButtonGrTravail from '../groupesTravail/ButtonGrTravail'

const AccueilUser = () => {
  const { user } = useGlobalContext()
  const [isFavCours, setIsFavCours] = useState(false)
  const [isFavFiches, setIsFavFiches] = useState(false)
  const [favPosts, setFavPosts] = useState([])
  const [userGroups, setUserGroups] = useState([])

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    }
    API.get('/user/' + user.username + '/groups', config).then((res) => {
      console.log(res.data)
      setUserGroups(res.data)
    })
    API.get('/user/' + user.username + '/favposts', config).then((res) =>
      setFavPosts(res.data)
    )
  }, [user])

  const checkHasFicheCours = (type, msg, setter) => {
    for (var p in favPosts) {
      if (favPosts[p].postType === type) {
        setter(true)
        return
      }
    }
    toast.error(msg, {
      position: 'bottom-right',
      autoClose: 2500,
    })
  }

  const retour = () => {
    setIsFavCours(false)
    setIsFavFiches(false)
  }

  return (
    <Gui>
      {isFavCours ? (
        <FavFiches
          title="Cours favoris"
          posts={favPosts}
          retour={retour}
          type="cours"
        />
      ) : isFavFiches ? (
        <FavFiches
          title="Fiches favorites"
          posts={favPosts}
          retour={retour}
          type="fiche"
        />
      ) : (
        <div>
          <h1 className="ourYellow font-bold text-2xl">
            Bienvenue{' '}
            <span className="ourMainFontColor">{user.firstName} !</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-y-6 md:gap-y-10 mt-4 font-semibold ourMainFontColor">
            <div className="flex justify-center items-start gap-8 md:py-4 text-center">
              <div
                className="w-1/3 border rounded-xl p-4 shadow grid gap-2 justify-items-center cursor-pointer"
                onClick={() =>
                  checkHasFicheCours(
                    'cours',
                    'Aucuns cours favoris.',
                    setIsFavCours
                  )
                }
              >
                <FavCoursIcon className="h-10" />
                <p>Cours favoris</p>
              </div>
              <div
                className="w-1/3 border rounded-xl p-4 shadow grid gap-2 justify-items-center cursor-pointer"
                onClick={() =>
                  checkHasFicheCours(
                    'fiche',
                    'Aucunes fiches favorites.',
                    setIsFavFiches
                  )
                }
              >
                <FavFichesIcon className="h-10" />
                <p>Fiches favorites</p>
              </div>
            </div>
            <div>
              <h2>Mes groupes de travail</h2>
              <div className="greyBox mr-4 mt-2 ml-0 h-48">
                <PerfectScrollbar>
                    {userGroups.map((g) => (
                      <ButtonGrTravail dataUneBibliotheque={g} />
                    ))}
                </PerfectScrollbar>
              </div>
            </div>

            <div>
              <h2>Dernières fiches consultées</h2>
              <div className="greyBox mr-4 mt-2 ml-0">fiche</div>
            </div>
            <div>
              <h2>Derniers cours consultés</h2>
              <div className="greyBox mr-4 mt-2 ml-0">cours</div>
            </div>
          </div>
        </div>
      )}
    </Gui>
  )
}

export default AccueilUser
