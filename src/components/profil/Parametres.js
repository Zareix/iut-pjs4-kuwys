import React, { useState } from 'react'

import { useGlobalContext } from '../../util/context'
import API from '../../util/api'

import { toast } from 'react-toastify'

const Parametres = () => {
  const { user } = useGlobalContext()

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('')

  const updatePassword = () => {
    API({
      method: 'post',
      url: '/userUpdatePassword',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
      data: {
        user: user,
        oldPassword: oldPassword,
        newPassword: newPassword,
        newPasswordConfirm: newPasswordConfirm,
      },
    })
      .then((res) => {
        toast('Mot de passe mis à jour !', {
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
    <div className="grid border h-50 shadow-lg p-4 gap-3 text-lg">
      <h1 className="font-bold text-2xl ml-2">Paramètres</h1>
      <fieldset className="border px-4 pb-3 pt-2 md:mx-7 bg-gray-50">
        <legend className="ml-4 font-semibold px-2">Mot de passe</legend>
        <div className="grid gap-3">
          <label className="grid md:block">
            Ancien mot de passe :
          <input
              className="border ml-2 rounded-lg px-2 align-middle"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            ></input>
          </label>
          <label className="grid md:block">
            Nouveau mot de passe :
          <input
              className="border ml-2 rounded-lg px-2 align-middle"
              alue={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            ></input>
          </label>
          <label className="grid md:block">
            Confirmer mot de passe :
          <input
              className="border ml-2 rounded-lg px-2 align-middle"
              alue={newPasswordConfirm}
              onChange={(e) => setNewPasswordConfirm(e.target.value)}
            ></input>
          </label>
        </div>

        <div className="grid justify-end">
          <button
            className="border bg-yellow-300 text-white font-bold text-xs w-20 h-6 px-1 rounded-full"
            onClick={updatePassword}
          >
            Confirmer
          </button>
        </div>
      </fieldset>
    </div>
  )
}

export default Parametres
