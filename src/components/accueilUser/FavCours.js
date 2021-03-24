import React from 'react'

import AllFichesCours from "../fichesCours/AllFichesCours"

const FavCours = (props) => {
  //TODO : Get all fav cours
  const favPosts = props.favPosts

  return <div><AllFichesCours posts={favPosts} type="cours"/></div>
}

export default FavCours
