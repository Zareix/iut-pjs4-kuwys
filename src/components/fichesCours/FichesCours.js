import React, { useState, useEffect } from 'react'
import Gui from '../gui/Gui'
import ItemFiche from './ItemFiche'
import API from '../../util/api'
import ItemCours from './ItemCours'
import SearchBar from '../tools/SearchBar'

const FichesCours = () => {
  const [posts, setPosts] = useState()
  let Tags = []


  
  console.log(Tags)
  API.get('/tags')
        .then((res)=>{
          Tags = res.data
          console.log(Tags)
        })
  console.log(Tags)

  useEffect(() => {
    API.get('/posts')
      .then((res) => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response.data)
      })
  }, [])
  
  
  return (
    <Gui>
      <SearchBar Tags={Tags}></SearchBar>
      <p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">LES FICHES</p>
      <div className="grid grid-flow-col grid-cols-5 gap-4">
        {posts &&
          posts.map((post) => (
            post.postType === 'fiche' && (
              // TODO mettre tout ca dans un composant Fiche
              <ItemFiche post={post} key={post.postId}></ItemFiche>
            )
          ))}
          
      </div>
      <p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">LES COURS</p>
      <div className="grid grid-flow-col grid-cols-5 gap-4">
      
        {posts &&
          posts.map((post) => (
            post.postType === 'cours' && (
              // TODO mettre tout ca dans un composant Fiche
              <ItemCours post={post} key={post.postId}></ItemCours>
            ) 
          ))}
      </div>
    </Gui>
  )
}

export default FichesCours
