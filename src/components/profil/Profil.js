import React from 'react'

import Gui from "../gui/Gui"

import pp from "../../svg/PPAnonymous.svg"

// TODO : gérer les inputs et appliquer les modifs à la DB
// TODO : afficher les infos de l'user
const Profil = () => {
    return (
        <Gui>
            <div className="p-10 grid gap-8">
                {/* PP et Bio */}
                <div className="grid grid-cols-3 border w-11/12 h-50 shadow-lg p-4">
                    <div className="grid justify-center content-start col-span-1">
                        <img src={pp}></img>
                        <button className="border bg-yellow-300 text-white font-bold text-xs h-6 mt-4 px-2 rounded-full">Modifier la photo</button>
                    </div>
                    <div className="py-4 col-span-2">
                        <h1 className="font-bold text-xl">Pseudo</h1>
                        <h2 className="mt-2 mb-1">Mini-Biographie</h2>
                        <textarea style={{ resize: "none" }} placeholder="Ecrivez ici" className="border w-4/5 h-20 shadow-inner"></textarea>
                        <div className="grid justify-end w-4/5">
                            <button className="border bg-yellow-300 text-white font-bold text-xs h-6 px-2 rounded-full">Modifier la biographie</button>
                        </div>
                    </div>
                </div>

                {/* A propos */}
                <div className="grid border w-11/12 h-50 shadow-lg p-4 gap-3 text-lg">
                    <h1 className="font-bold text-2xl">A propos</h1>
                    <div className="grid gap-4 mx-7">
                        <div className="flex gap-10">
                            <label >Prénom :<input placeholder="prénom" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                            <label >Nom :<input placeholder="nom" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                        </div>
                        <label >Adresse e-mail :<input placeholder="email" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                        <label >Date de naissance :<input placeholder="date de naissance" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                        <fieldset className="border px-4 pb-3 pt-2 bg-gray-50">
                            <legend className="ml-4 font-semibold">Mes études</legend>
                            <div className="flex gap-10 mb-4">
                                <label >Ecoles :<input placeholder="écoles" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                                <label >Niveau d'études :<input placeholder="niveau d'études" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                            </div>
                            <label >Formations :<input placeholder="formations" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                        </fieldset>
                        <div className="grid justify-end">
                            <button className="border bg-yellow-300 text-white font-bold text-xs w-28 h-9 px-1 rounded-lg">Modifier ces informations</button>
                        </div>
                    </div>
                </div>

                {/* Paramètres */}
                <div className="grid border w-11/12 h-50 shadow-lg p-4 gap-3 text-lg">
                    <h1 className="font-bold text-2xl">Paramètres</h1>
                    <fieldset className="grid gap-3 border px-8 pb-3 pt-2 mx-7 bg-gray-50">
                        <legend className="ml-4 font-semibold">Mot de passe</legend>
                        <label >Anciens mot de passe :<input className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                        <label >Nouveau mot de passe :<input className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                        <label >Confirmer mot de passe :<input className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                        <div className="grid justify-end">
                            <button className="border bg-yellow-300 text-white font-bold text-xs w-20 h-8 px-1 rounded-lg">Confirmer</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </Gui>
    )
}

export default Profil
