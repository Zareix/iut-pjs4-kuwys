import React from 'react'

import AllFichesCours from "../fichesCours/AllFichesCours"

const FavFiches = (props) => {
    //TODO : Get all fav fiches
    const favPosts = props.favPosts

    return <div><AllFichesCours posts={favPosts} type="fiche"/></div>
}

export default FavFiches
