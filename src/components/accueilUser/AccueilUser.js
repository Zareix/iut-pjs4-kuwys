import React, { useState, useEffect } from 'react'

import { toast } from 'react-toastify'
import PerfectScrollbar from 'react-perfect-scrollbar'
import axios from 'axios'
import 'react-perfect-scrollbar/dist/css/styles.css'

import { ReactComponent as FavCoursIcon } from '../../svg/024-file.svg'
import { ReactComponent as FavFichesIcon } from '../../svg/025-file-1.svg'
import LikeFicheIcon from '../../svg/ficheLike.png'
import LikeCoursIcon from '../../svg/coursLike.png'

import { useGlobalContext } from '../../util/context'

import AccueilFiches from './AccueilFiches'
import API from '../../util/api'
import Gui from '../gui/Gui'
import ButtonGrTravail from '../groupesTravail/ButtonGrTravail'
import { Link } from 'react-router-dom'
import AllPost from '../fichesCours/AllPost'
import LoadingPage from '../loadingPage/LoadingPage'
import Fade from '../tools/Fade'

const AccueilUser = () => {
  const { user } = useGlobalContext()
  const [isLoading, setIsLoading] = useState(true)
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
    axios
      .all([
        API.get('/user/groups'),
        API.get('/user/favposts'),
        API.get('/user/lastSeenPosts'),
        API.get('/user/' + user.username),
      ])
      .then((response) => {
        setUserGroups(response[0].data)
        setFavPosts(response[1].data)
        setLastSeenPost(response[2].data)
        if (mounted) setUserPosts(response[3].data.posts)
        setIsLoading(false)
      })
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

  const hasSeen = (type) => {
    return lastSeenPost.some((p) => p.postType === type)
  }

  return (
    <Gui>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Fade>
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
                    className="w-1/3 border rounded-xl p-4 shadow grid gap-2 justify-items-center cursor-pointer popUpEffect"
                    onClick={() =>
                      checkHasFicheCours(
                        'cours',
                        'Aucun cours posté.',
                        setIsCours
                      )
                    }
                  >
                    <FavCoursIcon className="h-10" />
                    <p>Vos cours</p>
                  </div>
                  <div
                    className="w-1/3 border rounded-xl p-4 shadow grid gap-2 justify-items-center cursor-pointer popUpEffect"
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
                    className="w-1/3 border rounded-xl p-4 shadow grid gap-2 justify-items-center cursor-pointer popUpEffect"
                    onClick={() =>
                      checkHasFicheCoursFav(
                        'cours',
                        'Aucun cours favori.',
                        setIsFavCours
                      )
                    }
                  >
                    <img src={LikeCoursIcon} className="h-10"></img>
                    <p>Cours favoris</p>
                  </div>
                  <div
                    className="w-1/3 border rounded-xl p-4 shadow grid gap-2 justify-items-center cursor-pointer popUpEffect"
                    onClick={() =>
                      checkHasFicheCoursFav(
                        'fiche',
                        'Aucune fiche favorite.',
                        setIsFavFiches
                      )
                    }
                  >
                    <img src={LikeFicheIcon} className="h-10"></img>
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
                          <ButtonGrTravail
                            key={i}
                            dataUneBibliotheque={group}
                          />
                        ))}
                      </PerfectScrollbar>
                    </div>
                  )}
                </div>

                <div className="md:mr-4">
                  <h2>Vos dernières fiches consultées</h2>
                  {!hasSeen('fiche') ? (
                    <p className="font-normal">
                      Vous n'avez consulté aucune fiche.{' '}
                      <Link to="/fichescours">Découvrez les ici !</Link>
                    </p>
                  ) : (
                    <div className="greyBox mx-auto md:mr-4 mt-2 md:ml-0 allPosts">
                      <PerfectScrollbar options={scrollBarXConfig}>
                        <AllPost type="fiche" posts={lastSeenPost}></AllPost>
                      </PerfectScrollbar>
                    </div>
                  )}
                </div>
                <div>
                  <h2>Vos derniers cours consultés</h2>
                  {!hasSeen('cours') ? (
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
        </Fade>
      )}
    </Gui>
  )
}

export default AccueilUser
