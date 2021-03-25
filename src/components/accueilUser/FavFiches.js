import React from 'react'

import AllFichesCours from '../fichesCours/AllFichesCours'

const FavFiches = (props) => {
  const favPosts = props.posts

  return <AllFichesCours posts={favPosts} type="fiche" />
}

export default FavFiches
