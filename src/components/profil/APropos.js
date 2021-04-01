import React, { useState } from 'react'

import { useGlobalContext } from '../../util/context'
import API from '../../util/api'

import { toast } from 'react-toastify'

const APropos = () => {
  const { user } = useGlobalContext()

  const [firstName, setFirstName] = useState(null)
  const [name, setName] = useState(null)
  const [birthday, setBirthday] = useState(null)

  const [studyLevel, setStudyLevel] = useState(null)
  const [formations, setFormations] = useState(null)

  const updateUserInfo = () => {
    API.post('/userUpdate', {
      user: user,
      firstName: firstName ? firstName : user.firstName,
      name: name ? name : user.name,
      birthday: birthday ? birthday : user.birthday,
      studyLevel: studyLevel ? studyLevel : user.studyLevel,
      formations: formations ? formations : user.formations
    })
      .then((res) => {
        toast('Informations mises à jour !', {
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

  return (
    <div className="grid h-50 newGroupResearchDiv p-4 gap-3 text-lg">
      <h1 className="font-bold text-2xl ml-2">A propos</h1>
      <div className="grid gap-4 md:mx-7">
        <div className="grid md:flex gap-2 md:gap-10">
          <label className="grid md:block">
            Prénom :
            <input
              defaultValue={user.firstName}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border ml-2 rounded-lg px-2 align-middle"
            ></input>
          </label>
          <label className="grid md:block">
            Nom :
            <input
              defaultValue={user.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border ml-2 rounded-lg px-2 align-middle"
            ></input>
          </label>
        </div>
        <label className="grid md:block">
          Adresse e-mail :
          <input
            value={user.email}
            readOnly
            disabled
            className="border ml-2 rounded-lg px-2 align-middle cursor-not-allowed"
          ></input>
        </label>
        <label className="grid md:block">
          Date de naissance :
          <input
            defaultValue={user.birthday}
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="border ml-2 rounded-lg px-2 align-middle"
          ></input>
        </label>
        <fieldset className="border px-4 pb-3 pt-2 bg-gray-50">
          <legend className="ml-4 font-semibold px-2">Mes études</legend>
          <div className="grid md:flex gap-2 md:gap-10">
            <label className="grid md:block">
              Ecole :
              <input
                value={user.institute.libelle}
                readOnly
                className="border ml-2 rounded-lg px-2 align-middle largerInputOnMobile"
              ></input>
            </label>
            <label className="grid md:block">
              Niveau d'études :
              <input
                defaultValue={user.studyLevel}
                value={studyLevel}
                onChange={(e) => setStudyLevel(e.target.value)}
                className="border ml-2 rounded-lg px-2 align-middle largerInputOnMobile"
              ></input>
            </label>
          </div>
          <label className="grid md:block mt-2 md:mt-4">
            Formations :
            <input
              defaultValue={user.formation ? user.formation : "------"}
              value={formations}
              onChange={(e) => setFormations(e.target.value)}
              className="border ml-2 rounded-lg px-2 align-middle largerInputOnMobile"
            ></input>
          </label>
        </fieldset>
        <div className="grid justify-end">
          <button
            onClick={updateUserInfo}
            className="border bg-yellow-300 text-white font-bold text-sm w-28 h-11 px-1 rounded-lg popUpEffect"
          >
            Confirmer ces informations
          </button>
        </div>
      </div>
    </div>
  )
}

export default APropos
