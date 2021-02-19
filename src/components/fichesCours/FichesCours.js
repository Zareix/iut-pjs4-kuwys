import React, { useState, useEffect, useContext } from "react"

import Fiche from "./Fiche"
import { DbContext } from "../../App"
import Pdf from "../Pdf"
import axios from "axios"

const FichesCours = () => {
  const [selectedFiche, setSelectedFiche] = useState()
  const [snapshotPosts, setSnapshotPosts] = useState()

  const { db } = useContext(DbContext)

  useEffect(() => {
    const getSnapshot = async () => {
      axios.get("/posts").then((data) => {
        if (data.error) {
          console.log(data.error)
        }
        setSnapshotPosts(data.data)
        console.log(data.data)
      })
    }
    getSnapshot()
    return () => {}
  }, [])

  return selectedFiche ? (
    <Fiche fiche={selectedFiche} />
  ) : (
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
      {snapshotPosts &&
        snapshotPosts.map((f, index) => (
          <div>
            {f.postType === "fiche" ? (
              <div className="fiches" key={index}>
                <figure className="bg-gray-100 rounded-xl p-8">
                  <Pdf
                    pdfPath={
                      !f.documents[0] ? "fiches/default.pdf" : f.documents[0]
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
