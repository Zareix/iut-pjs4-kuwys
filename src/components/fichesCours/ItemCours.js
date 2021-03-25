import React from 'react'
import { Link } from 'react-router-dom'

// TODO
const ItemCours = (props) => {
  const { post } = props

  return <div className="cours">
    <figure className="bg-gray-100 rounded-xl p-8">
      <div className="pt-6 space-y-4">
        <blockquote>
          <Link to="/"><p className="text-lg font-semibold">{post.title}</p></Link>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600"></div>
          <div></div>
        </figcaption>
      </div>
    </figure>
  </div>
}

export default ItemCours