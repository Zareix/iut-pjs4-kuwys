import React from "react"

import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div style={{backgroundColor: "#4F4F4F"}} className="flex items-center h-52 text-gray-100 text-xs">
      <div className="w-1/4">[Logo]</div>
      <div className="grid grid-cols-3">
        <div>
          <p className="font-bold center pb-8 text-gray-50">Utilisation</p>
          <p className="my-2">
            <Link to="/login">Connexion</Link>
          </p>
          <p>
            <Link to="/register">S'enregistrer</Link>
          </p>
        </div>
        <div>
          <p className="font-bold center pb-8">Nous Contacter</p>
          <p className="my-2">Point presse</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
        <div>
          <p className="font-bold center pb-8">Mentions Légales</p>
          <p className="my-2">Conditions générales d'utilisation</p>
          <p></p>
        </div>
      </div>
      <div>
          
      </div>
    </div>
  )
}

export default Footer
