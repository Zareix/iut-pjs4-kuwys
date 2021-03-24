import React, { useState, useEffect } from 'react'

import { useGlobalContext } from '../../util/context'
import API from '../../util/api'

import { toast } from 'react-toastify'

const APropos = () => {
  const { user } = useGlobalContext()

  const [firstName, setFirstName] = useState('------')
  const [name, setName] = useState('------')
  const [email, setEmail] = useState('------')
  const [birthday, setBirthday] = useState('------')

  const [ecoles, setEcoles] = useState('------')
  const [studyLevel, setStudyLevel] = useState('------')
  const [formations, setFormations] = useState('------')

  useEffect(() => {
    setFirstName(user.firstName)
    setName(user.name)
    setEmail(user.email)
    setBirthday(user.birthday)
  }, [])

  const updateUserInfo = () => {
    API.post('/userUpdate', {
      user: user,
      firstName: firstName,
      name: name,
      birthday: birthday,
    })
      .then((res) => {
        toast('Informations mises à jour !', {
          className: 'ourYellowBg',
          style: { color: 'white' },
          progressStyle: { background: 'white' },
          position: 'bottom-right',
          autoClose: 3000,
        })
        console.log(res.data)
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
    <div className="grid border w-11/12 h-50 shadow-lg p-4 gap-3 text-lg">
      <h1 className="font-bold text-2xl ml-2">A propos</h1>
      <div className="grid gap-4 mx-7">
        <div className="flex gap-10">
          <label>
            Prénom :
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border ml-2 rounded-lg px-2 align-middle"
            ></input>
          </label>
          <label>
            Nom :
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border ml-2 rounded-lg px-2 align-middle"
            ></input>
          </label>
        </div>
        <label>
          Adresse e-mail :
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
            className="border ml-2 rounded-lg px-2 align-middle"
          ></input>
        </label>
        <label>
          Date de naissance :
          <input
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="border ml-2 rounded-lg px-2 align-middle"
          ></input>
        </label>
        <fieldset className="border px-4 pb-3 pt-2 bg-gray-50">
          <legend className="ml-4 font-semibold px-2">Mes études</legend>
          <div className="flex gap-10 mb-4">
            <label>
              Ecoles :
              <input
                value={ecoles}
                onChange={(e) => setEcoles(e.target.value)}
                className="border ml-2 rounded-lg px-2 align-middle"
              ></input>
            </label>
            <label>
              Niveau d'études :
              <input
                value={studyLevel}
                onChange={(e) => setStudyLevel(e.target.value)}
                className="border ml-2 rounded-lg px-2 align-middle"
              ></input>
            </label>
          </div>
          <label>
            Formations :
            <input
              value={formations}
              onChange={(e) => setFormations(e.target.value)}
              className="border ml-2 rounded-lg px-2 align-middle"
            ></input>
          </label>
        </fieldset>
        <div className="grid justify-end">
          <button
            onClick={updateUserInfo}
            className="border bg-yellow-300 text-white font-bold text-sm w-28 h-11 px-1 rounded-lg"
          >
            Confirmer ces informations
          </button>
        </div>
      </div>
    </div>
  )
}

export default APropos
