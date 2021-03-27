import React from 'react'
import { Link } from 'react-router-dom'

// TODO
const ItemCours = (props) => {
  const { post } = props

  return <div className="popUpEffect"><Link to={{
    pathname: `/cours/${post.id}`
  }}><div className="cours">
    <figure className="grid justify-items-center bg-yellow-100 border-2 rounded-xl p-8">
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
  </div></Link></div>
}

export default ItemCours
