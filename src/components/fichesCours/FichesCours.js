import React, { useState, useEffect, useContext } from 'react'

import Fiche from './Fiche'
import { DbContext } from '../../App'
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
        console.log(err.response.data)
      })
  }, [])

  return (
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
      {posts &&
        posts.map((f, index) => (
          <div>
            {f.postType === 'fiche' ? (
              // TODO mettre tout ca dans un composant Fiche
              <div className="fiches" key={index}>
                <figure className="bg-gray-100 rounded-xl p-8">
                  <Pdf
                    pdfPath={
                      !f.documents[0] ? 'fiches/default.pdf' : f.documents[0]
                    }
                    type="canvas"
                    firstPage={false}
                    width={100}
                  ></Pdf>
                  <div className="pt-6 space-y-4">
                    <blockquote>
                      <p className="text-lg font-semibold">{f.title}</p>
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
                      <p className="text-lg font-semibold">{f.title}</p>
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
