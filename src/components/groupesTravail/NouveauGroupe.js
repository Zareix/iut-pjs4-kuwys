import React from 'react'

import Gui from '../gui/Gui'
import API from '../../util/api'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { RiArrowUpCircleFill } from 'react-icons/ri';
import { RiArrowDownCircleFill } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';

import { ReactComponent as IconSvg } from '../../svg/046-network-3.svg'

const NouveauGroupe = (props) => {

    let redMarkerIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })

    return (
        <HelmetProvider>
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
                        <div class="newGroupResearchDiv text-center px-10 py-20">
                            <div className="flex justify-center">
                                <div style={{ borderColor: "#f7b91c" }} className="w-3/6 rounded-full bg-white border-solid border md:py-3 md:px-3 text-center flex justify-center">
                                    <BsSearch className="text-2xl" />
                                    <input className="md:ml-3" name="firstName" placeholder="Adresse / Lieu / Ville" />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="grid grid-cols-1 md:grid-rows-2 md:mt-6">
                                    <div className="col-start-1 col-span-1 md:col-span-1 md:col-start-1 md:row-start-1 md:row-span-1 flex justify-end md:mr-4">
                                        <RiArrowUpCircleFill className="text-4xl text-blue-400 hover:text-blue-500 cursor-pointer popUpEffect" />
                                    </div>
                                    <div className="col-start-1 col-span-1 md:col-span-1 md:col-start-1 md:row-start-2 md:row-span-1 flex justify-end md:mr-4">
                                        <RiArrowDownCircleFill className="text-4xl text-blue-400 hover:text-blue-500 cursor-pointer popUpEffect" />
                                    </div>
                                    <div className="col-start-1 col-span-1 md:col-span-5 md:col-start-2 md:row-start-1 md:row-span-2 align-middle flex items-center">
                                        <p className="text-3xl font-bold text-blue-400 flex items-center">4 <span className="text-base font-semibold md:ml-3 ourMainFontColor">bibliothèques les plus proches</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div
                                    id="ButtonAddNewGroup"
                                    className="w-52 flex items-center justify-center shadow-xl px-8 py-3 font-bold rounded-full text-white m-autp md:py-3 md:px-3 md:mt-7 buttonAddNewGrWork cursor-pointer popUpEffect"
                                >
                                    <span className="md:pl-2 align-middle text-base" >
                                        VALIDER
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-start-5 col-span-3 row-start-1 row-span-1">
                        <div class="h-5/6">
                            <MapContainer center={[48.84172, 2.26824]} zoom={13} scrollWheelZoom={true} className="h-full rounded-lg">
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker icon={redMarkerIcon} position={[48.84172, 2.26824]}></Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>

            </Gui>
        </HelmetProvider>
    )

}

export default NouveauGroupe