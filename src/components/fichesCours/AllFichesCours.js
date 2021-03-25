import React from 'react'

import ItemFiche from './ItemFiche'
import ItemCours from './ItemCours'

const AllFichesCours = (props) => {
  const type = props.type
  const posts = props.posts

  switch (type) {
    case 'fiche':
      return posts.map(
        (post) =>
          post.postType == 'fiche' && (
            <ItemFiche post={post} key={post.postId}></ItemFiche>
          )
      )
    case 'cours':
      return posts.map(
        (post) =>
          post.postType == 'cours' && (
            <ItemFiche post={post} key={post.postId}></ItemFiche>
          )
      )
    default:
      return <div></div>
  }

  return <div className="grid grid-flow-col grid-cols-5 gap-4">}</div>
}

export default AllFichesCours
