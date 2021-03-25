import React from 'react'
import Pdf from '../Pdf'
import { Link } from 'react-router-dom'

// TODO
const ItemFiche = (props) => {
  const { post } = props

  return <div className="fiches">
    <figure className="grid justify-items-center bg-gray-100 border-2 rounded-xl p-8">
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
      <div className="pt-6 space-y-4">
        <blockquote>
          <Link to={{
            pathname: `/fiche/${post.postId}`
          }}>
            <p className="text-lg font-semibold">{post.title}</p></Link>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600"></div>
          <div></div>
        </figcaption>
      </div>
    </figure>
  </div>
}

export default ItemFiche