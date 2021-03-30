import React, { useState, useEffect } from 'react'

import { toast } from 'react-toastify'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

import { ReactComponent as FavCoursIcon } from '../../svg/024-file.svg'
import { ReactComponent as FavFichesIcon } from '../../svg/025-file-1.svg'

import { useGlobalContext } from '../../util/context'

import AccueilFiches from './AccueilFiches'
import API from '../../util/api'
import Gui from '../gui/Gui'
import ButtonGrTravail from '../groupesTravail/ButtonGrTravail'
import { Link } from 'react-router-dom'
import AllPost from '../fichesCours/AllPost'

const AccueilUser = () => {
  const { user } = useGlobalContext()
  const [isFavCours, setIsFavCours] = useState(false)
  const [isFavFiches, setIsFavFiches] = useState(false)
  const [isFiches, setIsFiches] = useState(false)
  const [isCours, setIsCours] = useState(false)
  const [favPosts, setFavPosts] = useState([])
  const [userGroups, setUserGroups] = useState([])
  const [userPosts, setUserPosts] = useState([])
  const [lastSeenPost, setLastSeenPost] = useState([])

  const scrollBarXConfig = {
    wheelPropagation: false,
    suppressScrollY: true,
  }

  const scrollBarYConfig = {
    wheelPropagation: false,
    suppressScrollX: true,
  }

  useEffect(() => {
    let mounted = true
    API.get('/user/groups').then((res) => setUserGroups(res.data))
    API.get('/user/favposts').then((res) => setFavPosts(res.data))
    API.get('/user/' + user.username).then((res) => {
      if (mounted) setUserPosts(res.data.posts)
    })
    API.get('/user/lastSeenPosts').then((res) => setLastSeenPost(res.data))
    return () => (mounted = false)
  }, [user])

  const checkHasFicheCoursFav = (type, msg, setter) => {
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

  const checkHasFicheCours = (type, msg, setter) => {
    for (var p in userPosts) {
      if (userPosts[p].postType === type) {
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
    setIsCours(false)
    setIsFiches(false)
  }

  return (
    <Gui>
      {isFavCours ? (
        <AccueilFiches
          title="Cours favoris"
          posts={favPosts}
          retour={retour}
          type="cours"
        />
      ) : isFavFiches ? (
        <AccueilFiches
          title="Fiches favorites"
          posts={favPosts}
          retour={retour}
          type="fiche"
        />
      ) : isFiches ? (
        <AccueilFiches
          title="Vos fiches"
          posts={userPosts}
          retour={retour}
          type="fiche"
        />
      ) : isCours ? (
        <AccueilFiches
          title="Vos cours"
          posts={userPosts}
          retour={retour}
          type="cours"
        />
      ) : (
        <div>
          <h1 className="ourYellow font-bold text-2xl">
            Bienvenue{' '}
            <span className="ourMainFontColor">{user.firstName} !</span>
          </h1>
          <div className="grid md:w-auto md:grid-cols-2 gap-y-6 md:gap-y-10 mt-4 font-semibold ourMainFontColor">
            <div className="flex flex-wrap justify-center justify-items-center items-start gap-8 md:py-4 text-center">
              <div
                className="w-1/3 border rounded-xl p-4 shadow grid gap-2 justify-items-center cursor-pointer"
                onClick={() =>
                  checkHasFicheCours('cours', 'Aucun cours posté.', setIsCours)
                }
              >
                <FavCoursIcon className="h-10" />
                <p>Vos cours</p>
              </div>
              <div
                className="w-1/3 border rounded-xl p-4 shadow grid gap-2 justify-items-center cursor-pointer"
                onClick={() =>
                  checkHasFicheCours(
                    'fiche',
                    'Aucune fiche postée.',
                    setIsFiches
                  )
                }
              >
                <FavFichesIcon className="h-10" />
                <p>Vos fiches</p>
              </div>
              <div
                className="w-1/3 border rounded-xl p-4 shadow grid gap-2 justify-items-center cursor-pointer"
                onClick={() =>
                  checkHasFicheCoursFav(
                    'cours',
                    'Aucun cours favori.',
                    setIsFavCours
                  )
                }
              >
                <FavCoursIcon className="h-10" />
                <p>Cours favorites</p>
              </div>
              <div
                className="w-1/3 border rounded-xl p-4 shadow grid gap-2 justify-items-center cursor-pointer"
                onClick={() =>
                  checkHasFicheCoursFav(
                    'fiche',
                    'Aucune fiche favorite.',
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
                <p className="font-normal">
                  Vous n'avez aucun groupe de travail
                </p>
              ) : (
                <div className="greyBox mx-auto md:mr-4 mt-2 ml-0 h-64">
                  <PerfectScrollbar options={scrollBarYConfig}>
                    {userGroups.map((group, i) => (
                      <ButtonGrTravail key={i} dataUneBibliotheque={group} />
                    ))}
                  </PerfectScrollbar>
                </div>
              )}
            </div>

            <div className="md:mr-4">
              <h2>Vos dernières fiches consultées</h2>
              {lastSeenPost.length === 0 ? (
                <p className="font-normal">
                  Vous n'avez consulté aucune fiche.{' '}
                  <Link to="/fichescours">Découvrez les ici !</Link>
                </p>
              ) : (
                <div className="greyBox mx-auto md:mr-4 mt-2 md:ml-0 allPosts">
                  <PerfectScrollbar options={scrollBarXConfig} >
                    <AllPost type="fiche" posts={lastSeenPost}></AllPost>
                  </PerfectScrollbar>
                </div>
              )}
            </div>
            <div>
              <h2>Vos derniers cours consultés</h2>
              {lastSeenPost.length === 0 ? (
                <p className="font-normal">
                  Vous n'avez consulté aucun cours.{' '}
                  <Link to="/fichescours">Découvrez les ici !</Link>
                </p>
              ) : (
                <div className="greyBox mx-auto md:mr-4 mt-2 md:ml-0 allPosts">
                  <PerfectScrollbar options={scrollBarXConfig}>
                    <AllPost type="cours" posts={lastSeenPost}></AllPost>
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
