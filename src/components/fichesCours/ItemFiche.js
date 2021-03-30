import React from 'react'
import Pdf from '../Pdf'
import { Link } from 'react-router-dom'

// TODO
const ItemFiche = (props) => {
  const { post } = props

  return (
    <div className="popUpEffect">
      <div className="fiches w-64">
        <figure className="grid justify-items-center bg-yellow-100 border-2 rounded-xl h-70 p-8">
          <Link to={{ pathname: `/fiche/${post.id}` }}>
            <Pdf
              titre={post.title}
              pdfUrl={
                !post.documents[0]
                  ? 'https://firebasestorage.googleapis.com/v0/b/pjs4-iut-ts.appspot.com/o/fiches%2Fdefault.pdf?alt=media'
                  : post.documents[0]
              }
              type="canvas"
              firstPage={true}
              width={100}
            />

            <div className="pt-6 ">
              <p className="text-md overflow-ellipsis font-semibold">
                {post.title}
              </p>
            </div>
          </Link>
          <Link to={{
              pathname:`/profil/user/${post.author}`,
            }}>
            <p className="text-lg">{post.author}</p>
          </Link>
        </figure>
      </div>
    </div>
  )
}

export default ItemFiche
