import React, { useState, useRef } from 'react'

import { toast } from 'react-toastify'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

import API from '../../util/api'
import { useGlobalContext } from '../../util/context'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}))

const Bio = () => {
  const { user } = useGlobalContext()
  const classes = useStyles()

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
    API.post(
      '/userUpdateBio',
      {
        user: user,
        bio: bio,
      },
      config
    )
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
      },
    }
    API.post(endpoint, formD, config)
  }

  return (
    <div className="grid md:grid-cols-3 h-50 p-4 newGroupResearchDiv">
      <div className="grid justify-items-center content-center col-span-1 mx-2">
        <Avatar
          alt="user pp avatar"
          src={selectedPP !== null ? selectedPPUrl : user.imageUrl}
          className={classes.large}
        />
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
