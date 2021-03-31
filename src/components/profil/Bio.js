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

  let fileUploaded = null

  const handleInputClickPp = (e) => {
    hiddenFileInput.current.click()
  }

  const handleChange = (event) => {
    fileUploaded = event.target.files[0]
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

  const updatePP = (e) => {
    e.target.disabled = true
    console.log(e.target)
    const formData = new FormData()
    formData.append('image', selectedPP, selectedPP.name)
    API.post('/user/image', formData)
      .then((res) => {
        console.log(res)
        setUser({ ...user, imageUrl: res.data.newImageUrl })
        toast('Photo de profil mise à jour !', {
          className: 'ourYellowBg',
          style: { color: 'white' },
          progressStyle: { background: 'white' },
          position: 'bottom-right',
          autoClose: 3000,
        })
        e.target.disabled = false
      })
      .catch((err) => {
        console.log(err)
        e.target.disabled = false
      })
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
            <div className="border ourMainFontColor text-xs mt-3 py-1 px-2">
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
                className="border ourYellowBg text-white text-xs mt-1 mx-4 py-1 px-2 rounded-full"
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
          />
        ) : (
          <div>
            <textarea
              style={{ resize: 'none' }}
              className="border w-full md:w-4/5 h-20 shadow-inner"
              defaultValue={selectedUser.bio}
              readOnly
            />
            <br></br>
            <a href={'mailto:' + selectedUser.email}>
              <button className="border ourYellowBg text-white font-bold px-2 rounded-full popUpEffect">
                Contacter
              </button>
            </a>
          </div>
        )}
        {!props.readonly && (
          <div className="grid justify-end w-4/5 mt-1">
            <button
              className="border ourYellowBg text-white font-bold text-xs h-6 px-2 rounded-full popUpEffect"
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
