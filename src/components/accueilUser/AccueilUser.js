import React, { useState, useEffect } from 'react'

import { toast } from 'react-toastify'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

import { ReactComponent as FavCoursIcon } from '../../svg/024-file.svg'
import { ReactComponent as FavFichesIcon } from '../../svg/025-file-1.svg'

import { useGlobalContext } from '../../util/context'

import FavFiches from './FavFiches'
import API from '../../util/api'
import Gui from '../gui/Gui'
import ButtonGrTravail from '../groupesTravail/ButtonGrTravail'
import { Link } from 'react-router-dom'

const AccueilUser = () => {
  const { user } = useGlobalContext()
  const [isFavCours, setIsFavCours] = useState(false)
  const [isFavFiches, setIsFavFiches] = useState(false)
  const [favPosts, setFavPosts] = useState([])
  const [userGroups, setUserGroups] = useState([])
  const [userPosts, setUserPosts] = useState([])

  const scrollBarXConfig = {
    wheelPropagation: false,
    suppressScrollY: true,
  }

  const scrollBarYConfig = {
    wheelPropagation: false,
    suppressScrollX: true,
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    }
    API.get('/user/' + user.username + '/groups', config).then((res) =>
      setUserGroups(res.data)
    )
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
              {userGroups.length === 0 ? (
                <p className="ml-2 font-normal">
                  Vous n'avez aucun groupe de travail
                </p>
              ) : (
                <div className="greyBox mr-4 mt-2 ml-0 h-52">
                  <PerfectScrollbar options={scrollBarYConfig}>
                    {userGroups.map((g) => (
                      <ButtonGrTravail dataUneBibliotheque={g} />
                    ))}
                  </PerfectScrollbar>
                </div>
              )}
            </div>

            <div>
              <h2>Vos fiches</h2>
              {userPosts.length === 0 ? (
                <p className="ml-2 font-normal">
                  Vous n'avez aucune fiche.{' '}
                  <Link to="/fichescours">Postez votre première fiche !</Link>
                </p>
              ) : (
                <div className="greyBox mr-4 mt-2 ml-0 h-52">
                  <PerfectScrollbar options={scrollBarXConfig}>
                    {userPosts.map((p) => (
                      <p>todo</p>
                    ))}
                  </PerfectScrollbar>
                </div>
              )}
            </div>
            <div>
              <h2>Vos cours</h2>
              {userPosts.length === 0 ? (
                <p className="ml-2 font-normal">
                  Vous n'avez aucun cours.{' '}
                  <Link to="/fichescours">Postez votre premier cours !</Link>
                </p>
              ) : (
                <div className="greyBox mr-4 mt-2 ml-0 h-52">
                  <PerfectScrollbar options={scrollBarXConfig}>
                    {userPosts.map((p) => (
                      <p>todo</p>
                    ))}
                  </PerfectScrollbar>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Gui>
  )
}

export default AccueilUser
