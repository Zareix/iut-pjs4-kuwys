import React from 'react'

import ItemFiche from './ItemFiche'
import ItemCours from './ItemCours'

const AllFichesCours = (props) => {
  const { type, posts } = props

  switch (type) {
    case 'fiche':
      return <div className="flex gap-4 flex-nowrap">{posts.map(
        (post) =>
          post.postType === 'fiche' && (
            <ItemFiche post={post} key={post.postId}></ItemFiche>
          )
      )}
      </div>
    case 'cours':
      return <div className="flex gap-4"> {posts.map(
        (post) =>
          post.postType === 'cours' && (
            <ItemCours post={post} key={post.postId}></ItemCours>
          )
      )}
      </div>
    default:
      return <div></div>
  }
}

export default AllFichesCours
