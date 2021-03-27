import React, { useState, useRef } from 'react'

import { toast } from 'react-toastify'

import API from '../../util/api'
import { useGlobalContext } from '../../util/context'

const Bio = () => {
  const { user } = useGlobalContext()

  const [bio, setBio] = useState()
  const [selectedPP, setSelectedPP] = useState(null)
  const [selectedPPUrl, setSelectedPPUrl] = useState()

  const hiddenFileInput = useRef(null)

  let formD

  const handleInputClickPp = (event) => {
    hiddenFileInput.current.click()
  }

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0]
    console.log(fileUploaded)
    const f = new FormData()
    f.append('image', fileUploaded, fileUploaded.name)
    formD = f
    setSelectedPP(fileUploaded)
  }

  const updateBio = () => {
    const token = window.localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    API.post('/userUpdateBio', {
      user: user,
      bio: bio,
    }, config)
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
        toast.error('Une erreur est survenue, merci de réessayer.', {
          position: 'bottom-right',
          autoClose: 3000,
        })
        console.log(err)
        console.log(err.response.data)
      })
  }

  const updatePP = () => {
    const endpoint = '/user/image'
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      }
    }
    API.post(endpoint, formD, config)
  }

  return (
    <div className="grid md:grid-cols-3 border h-50 shadow-lg p-4">
      <div className="grid justify-center justify-items-center content-start col-span-1 mx-2">
        <img
          src={selectedPP !== null ? selectedPPUrl : user.imageUrl}
          className="h-36 object-contain"
          alt="profil pp"
        ></img>
        <div className="w-full grid justify-center">
          <div className="border ourMainFontColor text-xs mt-3 mx-4 py-1 px-2">
            <button onClick={handleInputClickPp} className="w-full font-bold">
              {selectedPP !== null
                ? selectedPP.name
                : 'Choisir sa photo de profil'}
            </button>
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={handleChange}
              className="hidden"
            />
          </div>
          {selectedPP !== null && (
            <button
              onClick={updatePP}
              className="border bg-yellow-300 text-white text-xs mt-1 mx-4 py-1 px-2 rounded-full"
            >
              Changer de photo de profil
            </button>
          )}
        </div>
      </div>
      <div className="py-4 md:col-span-2">
        <h1 className="font-bold text-xl">{user.username}</h1>
        <h2 className="mt-2 mb-1">Mini-Biographie</h2>
        <textarea
          style={{ resize: 'none' }}
          className="border w-full md:w-4/5 h-20 shadow-inner"
          onChange={(e) => setBio(e.target.value)}
          defaultValue={user.bio}
          value={bio}
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
