import React from 'react'

const EcoleGroupesDeTravail = (props) => {
  return (
    <div className={"mt-4 " + (props.className !== null ? props.className : "")}>
      <h2 className="ourMainFontColor font-semibold mb-2">
        Les groupes de travail de l'école
      </h2>
      <div className="greyBox px-6 py-3 h-32">{/*AllGroupesDeTravail */}</div>
    </div>
  )
}

export default EcoleGroupesDeTravail
