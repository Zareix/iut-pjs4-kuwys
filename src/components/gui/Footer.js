import React from 'react'

import { Link } from 'react-router-dom'

import logo from '../../pictures/logo-big.png'

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: '#4F4F4F' }}
      className="grid grid-cols-1 md:grid-cols-3 justify-items-center items-center text-gray-100 text-xs px-2 md:pl-5 py-10 mt-80"
    >
      <img src={logo} className="mb-6 w-2/3" alt="logo kuwys footer" />
      <div className="grid grid-cols-3 md:col-span-2 justify-self-start md:ml-8">
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
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.instagram.com">Instagram</a>
            <a href="https://www.twitter.com">Twitter</a>
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
