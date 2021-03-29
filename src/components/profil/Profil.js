import React, { useState, useEffect } from 'react'

import { Redirect, useParams } from 'react-router'
import API from '../../util/api'

import { useGlobalContext } from '../../util/context'
import Gui from '../gui/Gui'
import LoadingPage from '../loadingPage/LoadingPage'
import Bio from './Bio'

const Profil = (props) => {
  const { user } = useGlobalContext()
  const [isCurrentUser, setIsCurrentUser] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [selectedUser, setSelectedUser] = useState()

  let { username } = useParams()

  useEffect(() => {
    console.log(username)
    if (user.username === username) {
      setIsCurrentUser(true)
      setSelectedUser(user)
    } else
      API.get('user/' + username, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })
      .then((res) => setSelectedUser(res.data))
  }, [])

  if (redirect) return <Redirect to="/profil/mesinformations"></Redirect>

  return (
    <Gui>
      {!selectedUser ? (
        <LoadingPage />
      ) : (
        <div>
          <div className="mx-auto grid grid-cols-2 w-full md:w-9/12">
            <h1 className="uppercase text-xl">Profil</h1>
            {isCurrentUser && (
              <div className="justify-self-end">
                <button
                  className="border bg-yellow-300 text-white text-xs font-semibold py-1 px-2 rounded-full"
                  onClick={() => setRedirect(true)}
                >
                  Changer vos informations
                </button>
              </div>
            )}
          </div>
          <div className="w-full flex justify-center mt-3">
            <div className="grid gap-8 w-full md:w-9/12">
              <Bio readonly />
              <div className="newGroupResearchDiv h-50 p-4">
                <h2 className="font-semibold text-lg ourMainFontColor">
                  En savoir plus sur{' '}
                  <span className="ourYellow">{selectedUser.username}</span>
                </h2>
                <div className="grid gap-2 mt-3">
                  <label>
                    Actuellement étudiant en :
                    <input
                      value={selectedUser.institute.libelle}
                      readOnly
                      className="border ml-2 rounded-lg px-2 align-middle largerInputOnMobile"
                    ></input>
                  </label>
                  <label className="grid md:block">
                    Niveau d'études :
                    <input
                      defaultValue={selectedUser.studyLevel}
                      readOnly
                      className="border ml-2 rounded-lg px-2 align-middle largerInputOnMobile"
                    ></input>
                  </label>
                </div>
              </div>
              <div className="newGroupResearchDiv h-50 p-4">
                <h2 className="font-semibold text-lg ourMainFontColor">
                  Les fiches et cours proposés par{' '}
                  <span className="ourYellow">{selectedUser.username}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </Gui>
  )
}

export default Profil
