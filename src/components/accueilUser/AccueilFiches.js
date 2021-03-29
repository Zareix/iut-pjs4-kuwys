import React from 'react'

import AllPost from '../fichesCours/AllPost'

const FavFiches = (props) => {
  const { posts, retour, title, type } = props

  return (
    <div>
      <button
        className="border bg-yellow-300 text-white font-bold text-xs h-6 mt-4 px-2 rounded-full"
        onClick={retour}
      >
        Retour
      </button>
      <h1 className="text-xl font-semibold my-5">{title}</h1>
      <div className="border-2 border-yellow-500 border-opacity-50 shadow-lg p-5">
        <AllPost posts={posts} type={type} />
      </div>
    </div>
  )
}

export default FavFiches
