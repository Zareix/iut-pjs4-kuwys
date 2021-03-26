import React, { useState, useEffect } from 'react'

import { toast } from 'react-toastify'

import API from '../../util/api'
import { useGlobalContext } from '../../util/context'

import pp from '../../svg/PPAnonymous.svg'

const Bio = () => {
  const { user } = useGlobalContext()

  const [bio, setBio] = useState()

  const updateBio = () => {
    API.post('/userUpdateBio', {
      user: user,
      bio: bio,
    })
      .then((res) => {
        toast('Biographie mise à jour !', {
          className: 'ourYellowBg',
          style: { color: 'white' },
          progressStyle: { background: 'white' },
          position: 'bottom-right',
          autoClose: 3000,
        })
      })
      .catch((err) => {
        toast.error('Une erreur est survenu, merci de réessayer.', {
          position: 'bottom-right',
          autoClose: 3000,
        })
        console.log(err)
        console.log(err.response.data)
      })
  }

  return (
    <div className="grid md:grid-cols-3 border h-50 shadow-lg p-4">
      <div className="grid justify-center content-start col-span-1">
        <img src={pp} className="h-36" alt="profil pp"></img>
        <button className="border bg-yellow-300 text-white font-bold text-xs h-6 mt-4 px-2 rounded-full">
          Modifier la photo
        </button>
      </div>
      <div className="py-4 md:col-span-2">
        <h1 className="font-bold text-xl">{user.username}</h1>
        <h2 className="mt-2 mb-1">Mini-Biographie</h2>
        <textarea
          style={{ resize: 'none' }}
          className="border w-full md:w-4/5 h-20 shadow-inner"
          onChange={(e) => setBio(e.target.value)}
          value={user.bio}
        ></textarea>
        <div className="grid justify-end w-4/5 mt-1">
          <button
            className="border bg-yellow-300 text-white font-bold text-xs h-6 px-2 rounded-full"
            onClick={updateBio}
          >
            Modifier la biographie
          </button>
        </div>
      </div>
    </div>
  )
}

export default Bio
