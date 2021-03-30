import React, { useState, useRef } from 'react'

import { toast } from 'react-toastify'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { useGlobalContext } from '../../util/context'

import API from '../../util/api'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}))

const Bio = (props) => {
  const { setUser, user } = useGlobalContext()
  const selectedUser = props.user
  const classes = useStyles()

  const [bio, setBio] = useState()
  const [selectedPP, setSelectedPP] = useState(null)
  const [selectedPPUrl, setSelectedPPUrl] = useState()

  const hiddenFileInput = useRef(null)

  let formD

  const handleInputClickPp = (e) => {
    hiddenFileInput.current.click()
  }

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0]
    console.log(fileUploaded)
    const f = new FormData()
    f.append('image', fileUploaded, fileUploaded.name)
    formD = f
    setSelectedPP(fileUploaded)
    setSelectedPPUrl(URL.createObjectURL(fileUploaded))
  }

  const updateBio = () => {
    API.post('/userUpdateBio', {
      user: selectedUser,
      bio: bio,
    })
      .then(() => {
        toast('Biographie mise à jour !', {
          className: 'ourYellowBg',
          style: { color: 'white' },
          progressStyle: { background: 'white' },
          position: 'bottom-right',
          autoClose: 3000,
        })
        setUser({ ...user, bio })
      })
      .catch((err) => {
        toast.error('Une erreur est survenue, merci de réessayer.', {
          position: 'bottom-right',
          autoClose: 3000,
        })
        console.log(err)
      })
  }

  const updatePP = () => {
    const endpoint = '/user/image'
    API.post(endpoint, formD)
  }

  return (
    <div className="grid md:grid-cols-3 h-50 p-4 newGroupResearchDiv">
      <div className="grid justify-items-center content-center col-span-1 mx-2">
        <Avatar
          alt="user pp avatar"
          src={selectedPP !== null ? selectedPPUrl : selectedUser.imageUrl}
          className={classes.large}
        />
        {!props.readonly && (
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
        )}
      </div>
      <div className="py-4 md:col-span-2">
        <h1 className="font-bold text-xl ourYellow">{selectedUser.username}</h1>
        <h2 className="mt-2 mb-1">Mini-Biographie</h2>
        {!props.readonly ? (
          <textarea
            style={{ resize: 'none' }}
            className="border w-full md:w-4/5 h-20 shadow-inner"
            onChange={(e) => setBio(e.target.value)}
            defaultValue={selectedUser.bio}
            value={bio}
          ></textarea>
        ) : (
          <textarea
            style={{ resize: 'none' }}
            className="border w-full md:w-4/5 h-20 shadow-inner"
            defaultValue={selectedUser.bio}
            readOnly
          ></textarea>
        )}
        {!props.readonly && (
          <div className="grid justify-end w-4/5 mt-1">
            <button
              className="border bg-yellow-300 text-white font-bold text-xs h-6 px-2 rounded-full"
              onClick={updateBio}
            >
              Modifier la biographie
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Bio
