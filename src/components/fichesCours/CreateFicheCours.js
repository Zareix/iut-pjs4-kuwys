import React, { useState } from 'react'

import { toast } from 'react-toastify'
import { Redirect } from 'react-router-dom'

import API from '../../util/api'
import Gui from '../gui/Gui'

const CreateFicheCours = (props) => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('fiche')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [error, setError] = useState('')

  const createNewPost = (e) => {
    e.preventDefault()
    setError('')
    console.log(tags.split('/'))

    if (title === '') {
      setError("Merci d'entrer un titre")
      return
    }
    if (description === '') {
      setError("Merci d'entrer une description")
      return
    }
    if (tags === '') {
      setError("Merci d'entrer au moins un tag")
      return
    }

    API.post('/post', {
      title: title,
      tags: tags.split('/'),
      postType: type,
      body: description,
    }).then((res) => {
      toast(
        'Votre ' + type + ' a bien été ajouté' + type === 'fiche' ? 'e' : '',
        {
          className: 'ourYellowBg',
          style: { color: 'white' },
          progressStyle: { background: 'white' },
          position: 'bottom-right',
          autoClose: 3000,
        }
      )
      setTitle('')
      setType('')
      setDescription('')
      setTags('')
    })
  }

  return (
    <Gui>
      <div className="flex justify-center">
        <div className="newGroupResearchDiv w-11/12 p-6">
          <h1 className="text-xl ourMainFontColor font-semibold mb-4">
            Ajouter une fiche ou un cours
          </h1>
          <form className="grid gap-4 ml-5" onSubmit={createNewPost}>
            <label>
              Titre : <br></br>
              <input
                className="border rounded-lg px-2 align-middle largerInput"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </label>
            <div className="grid">
              <label>Type :</label>
              <label>
                <input
                  type="radio"
                  value="fiche"
                  checked={type === 'fiche'}
                  className="radio"
                  onChange={(e) => setType(e.target.value)}
                />
                Fiche
              </label>
              <label>
                <input
                  type="radio"
                  value="cours"
                  checked={type === 'cours'}
                  className="radio"
                  onChange={(e) => setType(e.target.value)}
                />
                Cours
              </label>
            </div>
            <label>
              Description :<br></br>
              <textarea
                style={{ resize: 'none' }}
                className="border w-full md:w-3/5 h-20 shadow-inner rounded-lg px-2"
                value={description}
                placeholder={'Décrivez votre ' + type}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              Tags <span className="italic text-sm">(séparés par des "/")</span>{' '}
              :<br></br>
              <input
                className="border rounded-lg px-2 align-middle largerInput"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="base de données/sgbd/mld"
              />
            </label>
            <p className="ourRed text-center">{error}</p>
            <button
              type="submit"
              className="border ourYellowBg text-white mx-auto mt-1 py-1 px-2 rounded-full transition transform hover:scale-110 duration-500 ease-in-out"
            >
              Poster
            </button>
          </form>
        </div>
      </div>
    </Gui>
  )
}

export default CreateFicheCours
