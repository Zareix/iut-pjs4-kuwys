import React from 'react'

import PerfectScrollbar from "react-perfect-scrollbar"

import AllPost from "../fichesCours/AllPost"

const EcoleFichesCours = (props) => {
  const { posts } = props

  return (
    <div className="greyBox mt-8 mb-20 px-6 py-3">
      <h2 className="ourMainFontColor font-semibold mb-2">
        Les fiches et les cours des étudiants de l’école
      </h2>
      <PerfectScrollbar options={{
        wheelPropagation: false,
        suppressScrollY: true,
      }}>
        <AllPost type="fiche-cours" posts={posts}></AllPost>
      </PerfectScrollbar>
    </div>
  )
}

export default EcoleFichesCours
