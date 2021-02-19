import React from 'react'

const APropos = () => {
    return (
        <div className="grid border w-11/12 h-50 shadow-lg p-4 gap-3 text-lg">
            <h1 className="font-bold text-2xl ml-2">A propos</h1>
            <div className="grid gap-4 mx-7">
                <div className="flex gap-10">
                    <label >Prénom :<input placeholder="prénom" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                    <label >Nom :<input placeholder="nom" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                </div>
                <label >Adresse e-mail :<input placeholder="email" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                <label >Date de naissance :<input placeholder="date de naissance" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                <fieldset className="border px-4 pb-3 pt-2 bg-gray-50">
                    <legend className="ml-4 font-semibold px-2">Mes études</legend>
                    <div className="flex gap-10 mb-4">
                        <label >Ecoles :<input placeholder="écoles" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                        <label >Niveau d'études :<input placeholder="niveau d'études" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                    </div>
                    <label >Formations :<input placeholder="formations" className="border ml-2 rounded-lg px-2 align-middle"></input></label>
                </fieldset>
                <div className="grid justify-end">
                    <button className="border bg-yellow-300 text-white font-bold text-sm w-28 h-11 px-1 rounded-lg">Confirmer ces informations</button>
                </div>
            </div>
        </div>
    )
}

export default APropos
