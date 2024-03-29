import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

import { useGlobalContext } from '../util/context'
import imgHeader from '../pictures/Graduation.jpg'
import miniLogo from '../pictures/pageAccueilLogo.png'
import logoLetudiant from '../pictures/L_etudiant_magazine_logo.png'
import logoEducationNationale from '../pictures/EducationNationale.png'
import logoLusineNouvelle from '../pictures/lusinenouvelle.png'
import logoUnivParis from '../pictures/UnivParis.png'
import imgCours from '../pictures/cours.png'
import imgGroupe from '../pictures/groupes.png'
import gradutedWoman from '../pictures/GradutatedWoman.jpg'
import imgFiche from '../pictures/fiche.png'
import imgAccueil from '../pictures/accueil.png'
import imgEspaceEcole from '../pictures/espaceecole.png'
import imgForum from '../pictures/forum.png'
import PresentationButton from './PresentationButton'
import Footer from '../components/gui/Footer'
import '../css/App.css'

const Accueil = () => {
  const { isUserLoggedIn } = useGlobalContext()

  const [presentationImageUrl, setPresentationImageUrl] = useState(imgHeader)
  if (isUserLoggedIn()) return <Redirect to="/accueil" />

  const switchImage = (newPresentationImage) => {
    setPresentationImageUrl(newPresentationImage)
  }

  return (
    <div>
      <div className="wave-container">
        <div className="grid grid-cols-3 gap-14 md:grid-cols-11 md:grid-rows-3">
          <div className="col-start-2 col-span-1 md:col-span-2 md:col-start-4 md:row-start-3">
            <Link
              to="/login"
              className="w-full flex items-center popUpEffect justify-center shadow-xl px-8 py-3 font-bold rounded-full text-white mainButton md:py-4 md:text-lg md:px-10"
            >
              <span>Connexion</span>
            </Link>
          </div>
          <div className="col-start-2 col-span-1 md:col-span-2 md:col-start-7 md:row-start-3">
            <Link
              to="/register"
              className="w-full flex items-center popUpEffect justify-center shadow-xl px-8 py-3 font-bold rounded-full text-white mainButton md:py-4 md:text-lg md:px-10"
            >
              <span>S'inscrire</span>
            </Link>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L80,240C160,224,320,192,480,192C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="z-0 backgroundMainDiv pb-16">
        <div>
          {/** ---------- MODULE DE PRESENTATION IMAGEE DU SITE ---------- */}
          <div id="onHoverPresentation">
            <div className="grid gap-9 md:grid-cols-10 md:grid-rows-7">
              <div className="md:col-start-4 md:col-span-4 w-full flex items-center justify-center">
                <span className="md:mt-12 text-5xl font-black ourYellow">
                  Etudiez solidaire
                </span>
              </div>
              <div className="md:col-start-3 md:col-span-6 w-full items-center justify-center text-center">
                <p className="text-base font-bold">
                  KUWYS regroupe tous les outils partagés dont vous pourriez
                  avoir besoin en un seul et même endroit.
                </p>
                <span className="text-base">
                  Découvrez sans plus tarder le fonctionnement de la 1ère
                  plateforme d'entraide étudiante.
                </span>
              </div>

              {/** BOUTONS AUTOUR DE L'IMAGE DE PRESENTATION */}
              <div
                onMouseOver={() => switchImage(imgAccueil)}
                className="col-start-2 col-span-2 md:col-span-2 md:col-start-2 md:row-start-4"
              >
                <PresentationButton
                  text={'ACCUEIL UTILISATEUR'}
                ></PresentationButton>
              </div>
              <img
                id="presentationImage"
                className="rounded-lg self-center object-cover col-start-4 col-span-4 md:col-span-4 md:col-start-4 md:row-start-3 md:row-span-5 bg-black"
                src={presentationImageUrl}
                style={{ width: '100%', height: '25rem' }}
                alt="presentation"
              />
              <div
                onMouseOver={() => switchImage(imgFiche)}
                className="col-start-2 col-span-2 md:col-span-2 md:col-start-8 md:row-start-4"
              >
                <PresentationButton text={'PARTAGE DE FICHES'} />
              </div>
              <div
                onMouseOver={() => switchImage(imgForum)}
                className="col-start-2 col-span-2 md:col-span-2 md:col-start-2 md:row-start-5"
              >
                <PresentationButton
                  text={'ESPACE QUESTIONS-REPONSES'}
                ></PresentationButton>
              </div>
              <div
                onMouseOver={() => switchImage(imgCours)}
                className="col-start-2 col-span-2 md:col-span-2 md:col-start-8 md:row-start-5"
              >
                <PresentationButton text={'COURS PERSONNELS'} />
              </div>
              <div
                onMouseOver={() => switchImage(imgEspaceEcole)}
                className="col-start-2 col-span-2 md:col-span-2 md:col-start-2 md:row-start-6"
              >
                <PresentationButton text={'ESPACE ECOLE'}/>
              </div>
              <div
                onMouseOver={() => switchImage(imgGroupe)}
                className="col-start-2 col-span-2 md:col-span-2 md:col-start-8 md:row-start-6"
              >
                <PresentationButton
                  text={'GROUPES DE TRAVAIL'}
                />
              </div>
            </div>
          </div>
        </div>

        {/** ---------- PETIT TEXTE QUI SOMMES NOUS ---------- */}

        <div className="grid gap-9 md:grid-cols-9 md:m-20">
          <div className="md:p-20 md:col-start-3 md:col-span-5 w-full items-center justify-center bg-white shadow-lg textPresentation rounded-lg text-center">
            <p className="text-3xl font-bold ourYellow">
              Keeping Up With Your Studies !
            </p>
            <img
              src={miniLogo}
              className="h-32 w-32 m-auto md:mt-8 md:mb-8"
              alt="mini logo kuwys"
            />

            <span className="md:mt-12 text-sm font-basic">
              La communauté étudiante solidaire vous ouvre les bras ! KUWYS est
              le companion idéale pour toutes vos années d’étude, et ce quelle
              que soit votre formation. Communiquez et échanger avec plus de
              20.000 autres étudiants sur vos difficultés, vos questionnements,
              ou tout simplement pour trouver des fiches de révision. Vous
              pourriez même devenir l’ange-gardien d’un autre étudiant en
              l’aidant à surmonter ses difficultés !
            </span>
          </div>
        </div>

        <div className="backgroundLinearGradientYellow md:mx-40 rounded-lg grid grid-cols-2 grid-rows-5 md:p-20 gap-4">
          <div className="col-start-1 col-span-1 row-start-1 row-span-5 rounded-lg shadow-inner">
            <img
              src={gradutedWoman}
              className="rounded-lg"
              alt="graduate woman"
            />
          </div>
          <div className="col-start-2 col-span-1 row-start-1 row-span-1">
            <p className="text-center text-white text-2xl font-bold">
              Ils parlent de nous
            </p>
          </div>
          <div className="col-start-2 col-span-1 row-start-2 row-span-1">
            <img
              src={logoLetudiant}
              className="rounded-lg w-auto max-h-24 m-auto"
              alt="logo letudiant"
            />
          </div>
          <div className="col-start-2 col-span-1 row-start-3 row-span-1">
            <img
              src={logoEducationNationale}
              className="rounded-lg w-auto max-h-24 m-auto"
              alt="logo education nationale"
            />
          </div>
          <div className="col-start-2 col-span-1 row-start-4 row-span-1">
            <img
              src={logoLusineNouvelle}
              className="rounded-lg w-auto max-h-24 m-auto"
              alt="logo lusine nouvelle"
            />
          </div>
          <div className="col-start-2 col-span-1 row-start-5 row-span-1">
            <img
              src={logoUnivParis}
              className="rounded-lg w-auto max-h-24 m-auto"
              alt="logo univ paris"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Accueil
