import React, { useState } from "react"

import epingleFlatIcon from "../../svg/epingle.svg"
import userFlatIcon from "../../svg/utilisateur.svg"

const ButtonGrTravail = (props) => {
  
  return (
    <a
      href="#"
      style={{}}
      className="w-11/12 bg-white grow grButton px-8 py-3 text-black md:py-4 md:text-xs md:px-6 md:mt-4 md:m-auto
      grid grid-cols-6 grid-rows-2"
    >
      <div style={{color : "#585858"}} className="col-start-1 col-span-3 row-start-1 row-span-1 text-sm font-bold">{props.text}</div>
      <div style={{color : "#585858"}} className="col-start-1 col-span-5 row-start-2 row-span-1 text-sm flex">
        <img src={epingleFlatIcon} style={{width:'1.4rem'}} className="md:mt-0.5"/>
        <p className="mt-0.5 ml-1 font-semibold">Bibliothèque Georges Pompidou</p>
      </div>
      <div style={{color : "#585858"}} className="col-start-4 col-span-2 row-start-1 row-span-1 text-sm font-semibold">Jusqu'à : <b>12</b> participants</div>
      <div style={{color : "#585858"}} className="col-start-6 col-span-1 row-start-1 row-span-1 text-sm flex justify-end md:mr-3">
        <img src={userFlatIcon} style={{width:'1.4rem'}} className="md:mt-0.5"/>
        <p className="mt-0.5 ml-1 font-bold">08</p>
      </div>
      <div style={{color : "#585858"}} className="col-start-6 col-span-1 row-start-2 row-span-1 text-sm flex justify-end">
        <p style={{backgroundColor : "#5FCAD6", color:"white", borderRadius:'12px'}} className="md:px-2 mt-0.5 ml-1 font-semibold">ADMIN</p>
      </div>
    </a>
  )
}

export default ButtonGrTravail
