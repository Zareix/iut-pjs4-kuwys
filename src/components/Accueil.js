import React, { useState, useEffect, useRef } from "react"
import "../App.css"

import imgHeader from "../pictures/Graduation.jpg"
import imgQuestionsReponsesDefault from "../pictures/ajaccio.jpg"
import PresentationButton from "./PresentationButton"


const Accueil = (props) => {
  var tailleDivImage = null

  const [presentationImageUrl, setPresentationImageUrl] = useState(imgHeader)

  const switchImage = (newPresentationImage) => {
    setPresentationImageUrl(newPresentationImage)
    console.log("Daccodacc")
  }

  const onLoadFunction = () => {
    tailleDivImage = document.getElementById("divPresentationImage").clientHeight
    console.log(tailleDivImage)
  }






  return (
    <div>
      <div className="wave-container">
        <div className="grid grid-cols-3 gap-14 md:grid-cols-11 md:grid-rows-3">
          <div className="col-start-2 col-span-1 md:col-span-2 md:col-start-4 md:row-start-3">
            <div href="#" className="w-full flex items-center justify-center shadow-xl px-8 py-3 font-bold rounded-full text-white mainButton md:py-4 md:text-lg md:px-10">
              <a>Connexion</a>
            </div>
          </div>
          <div className="col-start-2 col-span-1 md:col-span-2 md:col-start-7 md:row-start-3">
            <div href="#" className="w-full flex items-center justify-center shadow-xl px-8 py-3 font-bold rounded-full text-white mainButton md:py-4 md:text-lg md:px-10">
              <a>S'inscrire</a>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260"><path fill="#ffffff" fill-opacity="1" d="M0,256L80,240C160,224,320,192,480,192C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>

      <div>

        {/** ---------- MODULE DE PRESENTATION IMAGEE DU SITE ---------- */}

        <div id="onHoverPresentation">
          <div className="grid gap-9 md:grid-cols-10 md:grid-rows-7">
            <div className="md:col-start-4 md:col-span-4 w-full flex items-center justify-center">
              <span className="md:mt-12 text-5xl font-black ourYellow">Etudiez solidaire</span>
            </div>
            <div className="md:col-start-3 md:col-span-6 w-full items-center justify-center text-center">
              <p className="text-base font-bold">KUWYS regroupe tous les outils partagés dont vous pourriez avoir besoin en un seul et même endroit.</p>
              <span className="text-base">Découvrez sans plus tarder le fonctionnement de la 1ère plateforme d'entraide étudiante.</span>
            </div>

            {/** BOUTONS AUTOUR DE L'IMAGE DE PRESENTATION */}

            <div onMouseOver={() => switchImage(imgQuestionsReponsesDefault)} className="col-start-2 col-span-2 md:col-span-2 md:col-start-2 md:row-start-4">
              <PresentationButton text={"ESPACE QUESTIONS-REPONSES"}></PresentationButton>
            </div>
            <div id="divPresentationImage" onLoad={() => onLoadFunction()} className="rounded-lg col-start-4 col-span-4 md:col-span-4 md:col-start-4 md:row-start-3 md:row-span-5 bg-black">
              <img id="presentationImage" className="object-cover rounded-lg" style={{ width: "100%" }, { height: "100%" }} src={presentationImageUrl} />
            </div>
            <div onMouseOver={() => switchImage(imgQuestionsReponsesDefault)} className="col-start-2 col-span-2 md:col-span-2 md:col-start-8 md:row-start-4">
              <PresentationButton text={"PARTAGE DE FICHES"}></PresentationButton>
            </div>
            <div onMouseOver={() => switchImage(imgHeader)} className="col-start-2 col-span-2 md:col-span-2 md:col-start-2 md:row-start-5">
              <PresentationButton text={"MESSAGES PRIVES AVEC TUTEUR"}></PresentationButton>
            </div>
            <div onMouseOver={() => switchImage(imgHeader)} className="col-start-2 col-span-2 md:col-span-2 md:col-start-8 md:row-start-5">
              <PresentationButton text={"COURS PERSONNELS"}></PresentationButton>
            </div>
            <div onMouseOver={() => switchImage(imgQuestionsReponsesDefault)} className="col-start-2 col-span-2 md:col-span-2 md:col-start-2 md:row-start-6">
              <PresentationButton text={"ESPACE ECOLE"}></PresentationButton>
            </div>
            <div onMouseOver={() => switchImage(imgHeader)} className="col-start-2 col-span-2 md:col-span-2 md:col-start-8 md:row-start-6">
              <PresentationButton text={"GROUPES DE TRAVAIL"}></PresentationButton>
            </div>
          </div>

        </div>

      </div>
      
      
      {/** ---------- PETIT TEXTE QUI SOMMES NOUS ---------- */}

      <div className="grid gap-9 md:grid-cols-9 md:m-20">
          <div className="md:p-20 md:col-start-3 md:col-span-5 w-full items-center justify-center bg-white shadow-lg textPresentation rounded-lg text-center">
              <p className="md:mt-12 md:mb-8 text-3xl font-bold ourYellow">Keeping Up With Your Studies !</p>
              <span className="md:mt-12 text-sm font-basic">La communauté étudiante solidaire vous ouvre les bras ! KUWYS est le companion idéale pour toutes vos années d’étude, et ce quelle que soit votre formation.
                Communiquez et échanger avec plus de 20.000 autres étudiants sur vos difficultés, vos questionnements, ou tout simplement pour trouver des fiches de révision.
                Vous pourriez même devenir l’ange-gardien d’un autre étudiant en l’aidant à surmonter ses difficultés !</span>
          </div>
      </div>

    </div>


  )
}

export default Accueil
