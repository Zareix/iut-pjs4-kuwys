import React, { useState } from 'react'

const APropos = () => {
  const [prenom, setPrenom] = useState("prenom")
  const [nom, setNom] = useState("nom")
  const [email, setEmail] = useState("email")
  const [birthDate, setBirthDate] = useState("JJ/MM/AAAA")

  const [ecoles, setEcoles] = useState("ecoles")
  const [studyLevel, setStudyLevel] = useState("niveau d'études")
  const [formations, setFormations] = useState("formations")

  return (
    <div className="grid border w-11/12 h-50 shadow-lg p-4 gap-3 text-lg">
      <h1 className="font-bold text-2xl ml-2">A propos</h1>
      <div className="grid gap-4 mx-7">
        <div className="flex gap-10">
          <label >Prénom :<input value={prenom} onChange={(e) => setPrenom(e.value)} className="border ml-2 rounded-lg px-2 align-middle"></input></label>
          <label >Nom :<input value={nom} onChange={(e) => setNom(e.value)} className="border ml-2 rounded-lg px-2 align-middle"></input></label>
        </div>
        <label >Adresse e-mail :<input value={email} onChange={(e) => setEmail(e.value)} className="border ml-2 rounded-lg px-2 align-middle"></input></label>
        <label >Date de naissance :<input value={birthDate} onChange={(e) => setBirthDate(e.value)} className="border ml-2 rounded-lg px-2 align-middle"></input></label>
        <fieldset className="border px-4 pb-3 pt-2 bg-gray-50">
          <legend className="ml-4 font-semibold px-2">Mes études</legend>
          <div className="flex gap-10 mb-4">
            <label >Ecoles :<input value={ecoles} onChange={(e) => setEcoles(e.value)} className="border ml-2 rounded-lg px-2 align-middle"></input></label>
            <label >Niveau d'études :<input value={studyLevel} onChange={(e) => setStudyLevel(e.value)} className="border ml-2 rounded-lg px-2 align-middle"></input></label>
          </div>
          <label >Formations :<input value={formations} onChange={(e) => setFormations(e.value)} className="border ml-2 rounded-lg px-2 align-middle"></input></label>
        </fieldset>
        <div className="grid justify-end">
          <button className="border bg-yellow-300 text-white font-bold text-sm w-28 h-11 px-1 rounded-lg">Confirmer ces informations</button>
        </div>
      </div>
    </div>
  )
}

export default APropos
