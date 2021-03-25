import React from 'react'

import AllFichesCours from "../fichesCours/AllFichesCours"

const FavCours = (props) => {
  const favPosts = props.posts

  return <AllFichesCours posts={favPosts} type="cours"/>
}

export default FavCours
