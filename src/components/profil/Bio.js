import React, { useState, useEffect } from 'react'

import API from '../../util/api'
import { useGlobalContext } from "../../util/context"

import pp from '../../svg/PPAnonymous.svg'

const Bio = () => {
  const { user } = useGlobalContext()

  const [pseudo, setPseudo] = useState("Pseudo")
  const [bio, setBio] = useState()

  const updateBio = () => {
    API.post('/userUpdateBio',
      {
        user : user,
        bio: bio
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data)
      })
  }

  return (
    <div className="grid grid-cols-3 border w-11/12 h-50 shadow-lg p-4">
      <div className="grid justify-center content-start col-span-1">
        <img src={pp} alt="profil pp"></img>
        <button className="border bg-yellow-300 text-white font-bold text-xs h-6 mt-4 px-2 rounded-full">
          Modifier la photo
        </button>
      </div>
      <div className="py-4 col-span-2">
        <h1 className="font-bold text-xl">{pseudo}</h1>
        <h2 className="mt-2 mb-1">Mini-Biographie</h2>
        <textarea
          style={{ resize: 'none' }}
          className="border w-4/5 h-20 shadow-inner"
          onChange={(e) => setBio(e.value)}
        >{bio}</textarea>
        <div className="grid justify-end w-4/5 mt-1">
          <button className="border bg-yellow-300 text-white font-bold text-xs h-6 px-2 rounded-full"
            onClick={updateBio}>
            Modifier la biographie
          </button>
        </div>
      </div>
    </div>
  )
}

export default Bio
