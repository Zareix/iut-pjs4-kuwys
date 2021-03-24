import React from 'react'

import ItemFiche from './ItemFiche'
import ItemCours from './ItemCours'

const AllFichesCours = (props) => {
  const type = props.type
  const posts = props.posts

  return (
    <div className="grid grid-flow-col grid-cols-5 gap-4">
      {posts.map((post) =>
        (type === 'fiche' && post.postType ==='fiche') ? (
          <ItemFiche post={post} key={post.postId}></ItemFiche>
        ) : (
          (type === 'cours'&& post.postType ==='cours') && (
            <ItemCours post={post} key={post.postId}></ItemCours>
          )
        )
      )}
    </div>
  )
}

export default AllFichesCours
