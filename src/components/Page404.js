import React from 'react'

import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div>
            <p>Oups page non trouvée 😶</p>
            <Link to="/" className="underline">Revenir au menu</Link>
        </div>
    )
}

export default Page404
