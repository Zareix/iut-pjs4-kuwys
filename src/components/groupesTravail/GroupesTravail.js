import React, { useState } from 'react'
import Gui from '../gui/Gui'
import { Helmet } from 'react-helmet'
import ButtonGrTravail from './ButtonGrTravail'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


import imgBarreRecherche from '../../svg/GroupesTravailVector1.svg'
import imgQuestionsReponsesDefault from '../../pictures/ajaccio.jpg'
import PresentationButton from '../PresentationButton'
import { Link } from 'react-router-dom'


const GroupesTravail = (props) => {
  const [donnees, setDonnees] = useState([])
  const [chosenCity, setChosenCity] = useState('')
  const [limiteDonnees, setlimiteDonnees] = useState(5)

  const getBiblioNearCity = () => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=bibliothèques+près+de+${chosenCity}&limit=${limiteDonnees}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setDonnees(myJson)
      });
  }


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
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:mt-8 ourMainFontColor font-bold">
          <div className="col-start-1 col-span-1 md:col-span-1 md:col-start-1 md:ml-8">
            <p>Chercher dans un autre périmètre</p>
          </div>
          <div className="col-start-2 col-span-1 md:col-span-1 md:col-start-2">
            <p>Rayon de recherche actuel</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          <div className="col-start-1 col-span-1 md:col-span-1 md:col-start-1 md:ml-8">
            <div className="relative">
              <img src={imgBarreRecherche} />
            </div>
            <div className="relative w-full text-center -top-2/4">
              <input className="bg-yellow" name="firstName" onChange={e => setChosenCity(e.target.value)} />
              <div className="flex justify-center">
                <div
                  id="ButtonAddNewGroup"
                  className="w-52 flex items-center justify-center shadow-xl px-8 py-3 font-bold rounded-full text-white md:py-3 md:px-3 md:mt-20 buttonAddNewGrWork"
                >
                  <i className="fas fa-plus align-middle"></i>
                  <span style={{ fontSize: '1rem' }} className="md:pl-2 align-middle" onClick={() => getBiblioNearCity()} >
                    valider
          </span>
                </div>
              </div>
            </div>

          </div>
          <div
            className="col-start-2 col-span-1 md:col-span-1 md:col-start-2"
          >
            <div className="h-full">
              <MapContainer center={[48.84172, 2.26824]} zoom={13} scrollWheelZoom={false} className="h-full rounded-lg">
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[48.84172, 2.26824]}>
                  <Popup>
                    A pretty CSS3 popup. Easily customizable.
                </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => getBiblioNearCity()}>test fetch</button>
      <div>
        {donnees.map((d) => <div key={d.place_id}>{d.address.amenity}</div>)}
      </div>

      {/* BOUTON ADD NEW GROUP*/}
      <div className="flex justify-center">
        <div
          id="ButtonAddNewGroup"
          className="w-52 flex items-center justify-center shadow-xl px-8 py-3 font-bold rounded-full text-white md:py-3 md:px-3 md:mt-20 buttonAddNewGrWork"
        >
          <i className="fas fa-plus align-middle"></i>
          <span style={{ fontSize: '1rem' }} className="md:pl-2 align-middle">
            NOUVEAU GROUPE
          </span>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 w-6/12 md:m-auto md:mt-16 md:pb-4 greyBox">
          <div className="col-start-1 col-span-1">
            {donnees.map((d) =>
              <ButtonGrTravail dataUneBibliotheque={d}></ButtonGrTravail>
            )}
          </div>
        </div>
      </div>
    </Gui>
  )
}

export default GroupesTravail
