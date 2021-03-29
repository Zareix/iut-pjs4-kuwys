import React from 'react'

import ItemFiche from './ItemFiche'
import ItemCours from './ItemCours'
import ItemPostForum from '../forum/ItemPostForum'

const AllPost = (props) => {
  const { type, posts } = props

  switch (type) {
    case 'fiche':
      return <div className="flex gap-4 flex-nowrap p-4">{posts.map(
        (post) =>
          post.postType === 'fiche' && (
            <ItemFiche post={post} key={post.id}></ItemFiche>
          )
      )}
      </div>
    case 'cours':
      return <div className="flex gap-4 flex-nowrap p-4"> {posts.map(
        (post) =>
          post.postType === 'cours' && (
            <ItemCours post={post} key={post.id}></ItemCours>
          )
      )}
      </div>
    case 'fiche-cours':
      return <div className="flex gap-4 flex-nowrap p-4"> {posts.map(
        (post) =>
          post.postType === 'cours' ? (
            <ItemCours post={post} key={post.id}></ItemCours>
          ) : post.postType === 'fiche' && (
            <ItemFiche post={post} key={post.id}></ItemFiche>)
      )}
      </div>
    case 'forum':
      return <div className="grid gap-4 flex-nowrap p-4"> {posts.map(
        (post) =>
          post.postType === 'cours' && (
            <ItemPostForum post={post} key={post.id}></ItemPostForum>
          )
      )}
      </div>
    default:
      return <div></div>
  }
}

export default AllPost
