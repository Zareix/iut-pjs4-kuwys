import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillLike } from 'react-icons/ai'
// BiUpArrowCircle
// TODO
const ItemCours = (props) => {
  const { post } = props

  return (
    <div className="popUpEffect">
      <div className="cours">
        <figure className="grid bg-yellow-100 border-2 rounded-xl p-3">
          <div className="flex ">
            <p className="text-lg font-semibold">{post.votes}</p>
            <AiFillLike className="mx-2 ourYellow text-2xl text-black-400 hover:yellowDark cursor-pointer popUpEffect" />

            <Link to={{}}>
              <p className="text-lg mx-4">{post.author}</p>
            </Link>
            <Link
              to={{
                pathname: `/forum/${post.id}`,
              }}
            >
              <div className="space-y-4">
                <p className="text-lg font-semibold">{post.title}</p>
              </div>
            </Link>
          </div>
        </figure>
      </div>
    </div>
  )
}

export default ItemCours
