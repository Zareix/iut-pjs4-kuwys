import React from 'react'

import { Link } from 'react-router-dom'

import logo from '../../pictures/logo-big.png'

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: '#4F4F4F' }}
      className="flex flex-wrap items-center justify-center h-60 md:h-52 text-gray-100 text-xs px-2 md:pl-5 mt-10"
    >
      <img src={logo} className="w-1/2 md:w-1/4" alt="logo kuwys footer"/>
      <div className="grid grid-cols-3 md:ml-8">
        <div>
          <p className="font-bold center mb-5 text-gray-50">Utilisation</p>
          <p className="my-2">
            <Link to="/login">Connexion</Link>
          </p>
          <p>
            <Link to="/register">S'enregistrer</Link>
          </p>
        </div>
        <div>
          <p className="font-bold center mb-5">Nous Contacter</p>
          <div className="grid gap-3">
            <p>Point presse</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>
        <div>
          <p className="font-bold center mb-5">Mentions Légales</p>
          <p className="my-2">Conditions générales d'utilisation</p>
          <p></p>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Footer
