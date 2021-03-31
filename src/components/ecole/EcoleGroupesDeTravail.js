import React from 'react'

import PerfectScrollbar from "react-perfect-scrollbar"

import ButtonGrTravail from "../groupesTravail/ButtonGrTravail"

const EcoleGroupesDeTravail = (props) => {
  const { groups } = props

  return (
    <div className={"mt-4 " + (props.className !== null ? props.className : "")}>
      <h2 className="ourMainFontColor font-semibold mb-2">
        Les groupes de travail de l'école
      </h2>
      <div className="greyBox px-6 py-3 h-40">
        <PerfectScrollbar options={{
          wheelPropagation: false,
          suppressScrollX: true,
        }}>
          {groups.map((group, i) => (
            <ButtonGrTravail
              key={i}
              dataUneBibliotheque={group}
            />
          ))}
        </PerfectScrollbar>
      </div>
    </div>
  )
}

export default EcoleGroupesDeTravail
