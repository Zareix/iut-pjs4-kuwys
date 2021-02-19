import React from 'react'

const Parametres = () => {
    return (
        <div className="grid border w-11/12 h-50 shadow-lg p-4 gap-3 text-lg">
            <h1 className="font-bold text-2xl ml-2">Paramètres</h1>
            <fieldset className="grid gap-3 border px-4 pb-3 pt-2 mx-7 bg-gray-50">
                <legend className="ml-4 font-semibold px-2">Mot de passe</legend>
                <label >Anciens mot de passe :<input className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                <label >Nouveau mot de passe :<input className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                <label >Confirmer mot de passe :<input className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                <div className="grid justify-end">
                    <button className="border bg-yellow-300 text-white font-bold text-xs w-20 h-6 px-1 rounded-full">Confirmer</button>
                </div>
            </fieldset>
        </div>
    )
}

export default Parametres
