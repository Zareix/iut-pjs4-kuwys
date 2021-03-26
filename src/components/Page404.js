import React from 'react'

import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className="w-1/5 m-auto h-screen grid items-center">
      <div className="text-center border p-5 shadow rounded-lg">
        <p>Oups page non trouvée 😶</p>
        <Link to="/" className="underline">
          Revenir à l'accueil
        </Link>
      </div>
    </div>
  )
}

export default Page404
