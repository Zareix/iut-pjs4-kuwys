import React, { useState } from 'react'

import { toast } from 'react-toastify'

import API from '../../util/api'
import Gui from '../gui/Gui'

const CreateForum = (props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [error, setError] = useState('')

console.log("on est dans la creation de post forum")
  const createNewPost = (e) => {
    e.preventDefault()
    setError('')

    if (title.trim() === '') {
      setError("Merci d'entrer un titre")
      return
    }
    if (description.trim() === '') {
      setError("Merci d'entrer une description")
      return
    }
    if (tags.trim() === '') {
      setError("Merci d'entrer au moins un tag")
      return
    }
    
    API.post('/post', {
      title: title,
      tags: tags.split('/'),
      postType: "forum",
      body: description,
    })
      .then((res) => {
        toast(
          'Votre post forum a bien été ajouté',
          {
            className: 'ourYellowBg',
            style: { color: 'white' },
            progressStyle: { background: 'white' },
            position: 'bottom-right',
            autoClose: 3000,
          }
        )
      })
      .then(() => {
        setTitle('')
        setDescription('')
        setTags('')
      })
      .catch((err) => {
        console.log(err)
        setTitle('')
        setDescription('')
        setTags('')
      })
  }



 

  return (
    <Gui>
      <div className="flex justify-center">
        <div className="newGroupResearchDiv w-11/12 p-6">
          <h1 className="text-xl ourMainFontColor font-semibold mb-4">
            Ajouter post sur le forum
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
            <label>
              Description :<br></br>
              <textarea
                style={{ resize: 'none' }}
                className="border w-full md:w-3/5 h-20 shadow-inner rounded-lg px-2"
                value={description}
                placeholder={'Décrivez votre post'}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              Tags <span className="italic text-sm">(séparés par des "/")</span>
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

export default CreateForum
