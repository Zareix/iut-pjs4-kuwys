import React, { useState, useEffect } from 'react'

import Fiche from './Fiche'
import Pdf from '../Pdf'
import API from '../../util/api'

const FichesCours = () => {
  const [posts, setPosts] = useState()

  useEffect(() => {
    API.get('/posts')
      .then((res) => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response.data)
      })
  }, [])

  
  return (
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
      {posts &&
        posts.map((post, index) => (
          <div key={post.postId}>
            {post.postType === 'fiche' ? (
              // TODO mettre tout ca dans un composant Fiche
              <div className="fiches">
                <figure className="bg-gray-100 rounded-xl p-8">
                  <Pdf
                    titre={post.title}
                    pdfUrl={
                      !post.documents[0]
                        ? 'https://firebasestorage.googleapis.com/v0/b/pjs4-iut-ts.appspot.com/o/fiches%2Fdefault.pdf?alt=media'
                        : post.documents[0]
                    }
                    type="canvas"
                    firstPage={false}
                    width={100}
                  />
                  <div className="pt-6 space-y-4">
                    <blockquote>
                      <p className="text-lg font-semibold">{post.title}</p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-cyan-600"></div>
                      <div></div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            ) : (
              // TODO mettre tout ca dans un composant Cours
              <div className="cours" key={index}>
                <figure className="bg-gray-100 rounded-xl p-8">
                  <div className="pt-6 space-y-4">
                    <blockquote>
                      <p className="text-lg font-semibold">{post.title}</p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-cyan-600"></div>
                      <div></div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            )}
          </div>
        ))}
    </div>
  )
}

export default FichesCours
