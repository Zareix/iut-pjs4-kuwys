import React from 'react'

import AllFichesCours from '../fichesCours/AllFichesCours'

const FavFiches = (props) => {
  const favPosts = props.posts
  const title = props.title ? props.title : "FICHES"

  return <div>
    <h1 className="text-lg mb-5">FICHES</h1>
    <div className="border-2 border-yellow-500 border-opacity-50 shadow-lg p-5">
      <AllFichesCours posts={favPosts} type="fiche" />
    </div>
  </div>
}

export default FavFiches
