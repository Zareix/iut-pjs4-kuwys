import React from 'react'
import { Link } from 'react-router-dom'

// TODO
const ItemCours = (props) => {
  const { post } = props

  return <div className="popUpEffect"><div className="cours">
    <figure className="grid justify-items-center bg-yellow-100 border-2 rounded-xl p-8">
    <Link to={{
    pathname: `/cours/${post.id}`
    }}>
      <div className="space-y-4">
          <p className="text-lg font-semibold">{post.title}</p>
          
      </div>
    </Link>
    <Link to={{
    }}><p className="text-lg">{post.author}</p></Link>
    </figure>
  </div></div>
}

export default ItemCours
