import React, { useState } from "react"
import Gui from "../gui/Gui"
import {Helmet} from "react-helmet";
import ButtonGrTravail from "./ButtonGrTravail"



import imgBarreRecherche from "../../svg/GroupesTravailVector1.svg"
import imgQuestionsReponsesDefault from "../../pictures/ajaccio.jpg"
import PresentationButton from "../PresentationButton"
import { Link } from "react-router-dom"

const GroupesTravail = (props) => {
  

  return (
    <Gui>
    <Helmet><script src="https://kit.fontawesome.com/6290d5c636.js" crossorigin="anonymous"></script></Helmet>
    <div id="LocationHeader" className="grid grid-cols-1 gap-14 md:grid-cols-2 md:grid-rows-1">
      <div className="col-start-1 col-span-1 md:col-span-1 md:col-start-1 flex justify-center items-center">
        <img src={imgBarreRecherche}/>
      </div>
      <div style={{backgroundColor :'yellow'}} className="col-start-1 col-span-1 md:col-span-1 md:col-start-2">
        Salut
        <p>JE '</p>
        <p>JE '</p>
        <p>JE '</p>
        <p>JE '</p>

      </div>
    </div>

    {/* BOUTON ADD NEW GROUP*/}
    <div className="flex justify-center">
      <div id="ButtonAddNewGroup" className="w-52 flex items-center justify-center shadow-xl px-8 py-3 font-bold rounded-full text-white md:py-3 md:px-3 md:mt-20 buttonAddNewGrWork">
        <i className="fas fa-plus align-middle"></i>
        <span style={{fontSize : '1rem'}} className="md:pl-2 align-middle">NOUVEAU GROUPE</span>
      </div>
    </div>

    <div>
      <div className="grid grid-cols-1 w-6/12 md:m-auto md:mt-16 md:pb-4 greyBox">
        <div className="col-start-1 col-span-1">
            <ButtonGrTravail
              text={"Jeudi 18/03 - 14h"}
            ></ButtonGrTravail>
            <ButtonGrTravail
              text={"LONGUE VIE ENIKOUMOUK"}
            ></ButtonGrTravail>
        </div>
        
      </div>

    </div>
    </Gui>
  )
}

export default GroupesTravail
