import React, { useState, useEffect } from 'react'
import Gui from '../gui/Gui'
import { Helmet } from 'react-helmet'
import ButtonGrTravail from './ButtonGrTravail'
import { RiArrowUpCircleFill } from 'react-icons/ri';
import { RiArrowDownCircleFill } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import API from '../../util/api'
import imgBarreRecherche from '../../svg/GroupesTravailVector1.svg'
import imgQuestionsReponsesDefault from '../../pictures/ajaccio.jpg'
import PresentationButton from '../PresentationButton'
import { Link } from 'react-router-dom'
import JoinGroup from './JoinGroup';


const GroupesTravail = (props) => {
  const [donnees, setDonnees] = useState([])
  const [biblioNearCity, setBiblioNearCity] = useState([])
  const [chosenCity, setChosenCity] = useState('')
  const [limiteDonnees, setlimiteDonnees] = useState(5)


  const settingUpLimiteDonnees = () => {
    if (limiteDonnees < 50) {
      var l = limiteDonnees + 1
      console.log(l);
      getBiblioNearCity(l);
      setlimiteDonnees(l);
    }
  }

  const settingDownLimiteDonnees = () => {
    if (limiteDonnees > 1) {
      var l = limiteDonnees - 1
      getBiblioNearCity(l);
      setlimiteDonnees(l);
    }
  }

  const cityToString = (address) => {
    if (address.hamlet)
      return address.hamlet

    if (address.village)
      return address.village

    if (address.town)
      return address.town

    if (address.city)
      return address.city

    return address.municipality
  }

  const getBiblioNearCity = (limite) => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=bibliothèques+près+de+${chosenCity}&limit=${limite}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setBiblioNearCity(myJson)
      })
      .catch((err) => console.log(err));
  }

  const requestAPI = async () => {

    let tableauBiblioNearCityWithWorkingGroup = []
    for (let i = 0; i < biblioNearCity.length; i++) {
      let element = biblioNearCity[i]
      const res = await API({
        method: "get",
        url: "/library/groups",
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
        params: {
          library: element.address.amenity
        }
      })
        .catch((err) => {
          console.log('Une erreur est survenu, merci de réessayer.')
          console.log(err.response)
        })
      if (res.data.length != 0) {
        tableauBiblioNearCityWithWorkingGroup.push(res.data)
      }
    }
    return tableauBiblioNearCityWithWorkingGroup
  }


  useEffect(() => {
    requestAPI().then((res) => {
      console.log(res);
      setDonnees(res)})
  }, [biblioNearCity])




  return (
    <Gui>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/6290d5c636.js"
          crossorigin="anonymous"
        ></script>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
      </Helmet>
      <div id="LocationHeader">
        <div className="grid grid-cols-1 grid-rows-1 gap-14 md:grid-cols-2">
          <div className="col-start-1 col-span-1 row-start-1 row-span-1 md:col-span-1 md:col-start-1">
          <p className="ourMainFontColor font-bold">Chercher dans un périmètre</p>
            <div className="relative">
              <img className="m-auto" src={imgBarreRecherche} />
            </div>
            <div className="relative w-full text-center -top-60 md:-top-2/4">
              <div className="flex justify-center">
                <div style={{ borderColor: "#f7b91c" }} className="w-11/12 md:w-3/6 rounded-full bg-white border-solid border py-3 px-3 md:py-3 md:px-3 text-center flex justify-center">
                  <BsSearch className="text-2xl" />
                  <input className="ml-3 md:ml-3" name="firstName" placeholder="Adresse / Lieu / Ville" onChange={e => setChosenCity(e.target.value)} />
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  id="ButtonAddNewGroup"
                  className="md:w-52 flex items-center justify-center shadow-xl px-5 py-2 mt-10 font-bold rounded-full text-white md:py-3 md:px-3 md:mt-20 buttonAddNewGrWork cursor-pointer popUpEffect"
                  onClick={() => getBiblioNearCity(limiteDonnees)}
                >
                  <span className="md:pl-2 align-middle text-base" >
                    VALIDER
          </span>
                </div>
              </div>
            </div>

          </div>
          <div
            className="col-start-1 col-span-1 row-start-1 row-span-1 mt-64 md:mt-0 md:col-span-1 md:col-start-2"
          >
            <p className="ourMainFontColor font-bold">Paramètre de recherche actuel</p>
            <div className="grid grid-cols-5 grid-rows-2 md:grid-cols-5 md:grid-rows-2 mt-3 md:mt-3 md:mb-3">
              <div className="col-start-1 col-span-1 row-start-1 row-span-1 md:col-span-1 md:col-start-1 md:row-start-1 md:row-span-1 flex justify-end md:mr-4">
                <RiArrowUpCircleFill className="text-4xl text-blue-400 hover:text-blue-500 cursor-pointer popUpEffect" onClick={() => settingUpLimiteDonnees()} />
              </div>
              <div className="col-start-1 col-span-1 row-start-2 row-span-1 md:col-span-1 md:col-start-1 md:row-start-2 md:row-span-1 flex justify-end md:mr-4">
                <RiArrowDownCircleFill className="text-4xl text-blue-400 hover:text-blue-500 cursor-pointer popUpEffect" onClick={() => settingDownLimiteDonnees()} />
              </div>
              <div className="col-start-2 col-span-4 row-start-1 row-span-2 md:col-span-4 md:col-start-2 md:row-start-1 md:row-span-2 align-middle flex items-center">
                <p className="text-3xl ml-2 md:ml-0 font-bold text-blue-400 flex items-center">{limiteDonnees} <span className="text-base font-semibold ml-2 md:ml-3 ourMainFontColor">bibliothèques les plus proches</span></p>
              </div>
            </div>
            <div className="h-56 md:h-2/3 mt-5 md:mt-0">

              <MapContainer center={[48.84172, 2.26824]} zoom={13} scrollWheelZoom={true} className="h-full rounded-lg">
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {biblioNearCity.map((b, i) =>
                  <Marker key={i} position={[b.lat, b.lon]}>
                    <Popup>
                      <h1 className="font-bold text-base">{b.address.amenity}</h1>
                      <h2 className="italic">{b.address.house_number} {b.address.road}, {cityToString(b.address)}</h2>
                    </Popup>
                  </Marker>
                )}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>

      {/* BOUTON ADD NEW GROUP*/}
      <div className="flex justify-center mt-8 md:mt-0">
        <Link to="/groupestravail/nouveaugroupe">
          <div
            id="ButtonAddNewGroup"
            className="w-52 flex items-center cursor-pointer justify-center shadow-xl px-2 py-2 font-bold rounded-full text-white md:py-3 md:px-3 buttonAddNewGrWork popUpEffect"
          >
            <i className="fas fa-plus align-middle"></i>
            <span style={{ fontSize: '1rem' }} className="md:pl-2 align-middle">
              NOUVEAU GROUPE
          </span>
          </div>
        </Link>
      </div>

      <div>
        <div className="grid grid-cols-1 w-6/12 md:m-auto md:mt-16 md:pb-4 greyBox">
          <div className="col-start-1 col-span-1">
            {donnees.length != 0 && donnees.map((d) =>
              <div>
                <ButtonGrTravail dataUneBibliotheque={d[0]}></ButtonGrTravail>
              </div>
            )}
          </div>
        </div>
      </div>
    </Gui>
  )
}

export default GroupesTravail
