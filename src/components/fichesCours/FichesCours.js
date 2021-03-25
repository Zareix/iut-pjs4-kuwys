import React, { useState, useEffect } from 'react'
import Gui from '../gui/Gui'
import API from '../../util/api'
import SearchBar from '../tools/SearchBar'
import AllFichesCours from './AllFichesCours'

const FichesCours = () => {
  const [posts, setPosts] = useState()
  const [Tags, setTags] = useState([])

  useEffect(() => {
    API.get('/tags').then((res) => {
      setTags(res.data)
    })

    API.get('/posts')
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Gui>
      <SearchBar tags={Tags}></SearchBar>
      <p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">LES FICHES</p>
      {posts && (
        <AllFichesCours type='fiche' posts={posts}/>
      )}
      <p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">LES COURS</p>
      {posts && (
        <AllFichesCours type='cours' posts={posts}/>
      )}
    </Gui>
  )
}

export default FichesCours
