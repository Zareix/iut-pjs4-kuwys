import React from 'react'

import Gui from '../gui/Gui'
import API from '../../util/api'
import { Helmet } from 'react-helmet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { BsSearch } from 'react-icons/bs';

import { ReactComponent as IconSvg } from '../../svg/046-network-3.svg'

const NouveauGroupe = (props) => {

    return (
        <Gui>
            <Helmet>
                <script
                    src="https://kit.fontawesome.com/6290d5c636.js"
                    crossorigin="anonymous"
                ></script>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
            </Helmet>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-7 ourMainFontColor font-bold mb-4">
                <div className="col-start-1 col-span-1 md:col-span-3 md:col-start-2 ">
                    <p>Chercher dans un périmètre</p>
                </div>
                <div className="col-start-2 col-span-1 md:col-start-5 md:col-span-3">
                    <p>Paramètre de recherche actuel</p>
                </div>
            </div>
            <div class="grid grid-cols-7 grid-rows-1 gap-10">

                <div class="col-start-1 col-span-1 row-start-1 row-span-1">
                    <IconSvg />
                </div>
                <div class="col-start-2 col-span-3 row-start-1 row-span-1">
                    <div class="newGroupResearchDiv">
                        <div style={{ borderColor: "#f7b91c" }} className="w-3/6 rounded-full bg-white border-solid border md:py-3 md:px-3 text-center flex justify-center">
                            <BsSearch className="text-2xl" />
                            <input className="md:ml-3" name="firstName" placeholder="Adresse / Lieu / Ville" />
                        </div>
                        <p>Bonjour</p>
                        <p>Bonjour</p>
                        <p>Bonjour</p>
                        <p>Bonjour</p>
                        <p>Bonjour</p>
                        <p>Bonjour</p>
                        <p>Bonjour</p>
                        <p>Bonjour</p>
                        <p>Bonjour</p>
                        <p>Bonjour</p>
                        <p>Bonjour</p>
                        <p>Bonjour</p>
                        <p>Bonjour</p>
                        <p>Bonjour</p>
                    </div>
                </div>
                <div class="col-start-5 col-span-3 row-start-1 row-span-1">
                    <div class="h-5/6">
                        <MapContainer center={[48.84172, 2.26824]} zoom={13} scrollWheelZoom={true} className="h-full rounded-lg">
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[48.84172, 2.26824]}></Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>

        </Gui>
    )

}

export default NouveauGroupe