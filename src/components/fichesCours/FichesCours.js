import React, { useState, useEffect, useContext } from "react"

import Fiche from "./Fiche"
import { DbContext } from "../../App"
import Pdf from "../Pdf"
const FichesCours = () => {
  const [selectedFiche, setSelectedFiche] = useState()
  const firebase = useContext(DbContext)
  const [snapshotFiche, setSnapshotFiche] = useState([])
  const [snapshotCours, setSnapshotCours] = useState([])

  const firebase = useContext(DbContext)

  useEffect(() => {
    const getSnapshot = async () => {
      const listeFicheRef = firebase.firestore().collection("posts")
      const dataFiche = await listeFicheRef
        .where("typeDoc", "==", "fiche")
        .get()
      const dataCours = await listeFicheRef
        .where("typeDoc", "==", "cours")
        .get()
      dataFiche.forEach((item) => {
        setSnapshotFiche([...snapshotFiche, item.data()])
      })

      dataCours.forEach((item) => {
        setSnapshotCours([...snapshotCours, item.data()])
      })
    }
    getSnapshot()
    return () => {}
  }, [])

  return selectedFiche ? (
    <Fiche fiche={selectedFiche} />
  ) : (
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
      {snapshotFiche &&
        snapshotFiche.map((f, index) => (
          <div className="fiches" key={index}>
            <figure className="bg-gray-100 rounded-xl p-8">
            <Pdf pdfPath={f.documents[0]}></Pdf>

              <div className="pt-6 space-y-4">
                <blockquote>
                  <p className="text-lg font-semibold">{f.titre}</p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-cyan-600"></div>
                  <div></div>
                </figcaption>
              </div>
            </figure>
          </div>
        ))}
      {snapshotCours &&
        snapshotCours.map((f, index) => (
          <div className="cours" key={index}>
            <figure className="bg-gray-100 rounded-xl p-8">
              <div className="pt-6 space-y-4">
                <blockquote>
                  <p className="text-lg font-semibold">{f.titre}</p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-cyan-600"></div>
                  <div></div>
                </figcaption>
              </div>
            </figure>
          </div>
        ))}
    </div>
  )
}

export default FichesCours
