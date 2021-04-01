import React, { useState, useEffect } from 'react'
import Gui from '../gui/Gui'
import API from '../../util/api'
import SearchBar from '../tools/SearchBar'
import AllPost from './AllPost'
import { Link } from 'react-router-dom'

const FichesCours = () => {
  const [posts, setPosts] = useState()
  const [chipData, setChipData] = useState([])

  useEffect(() => {
    API.get('/posts')
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Gui>
      <div>
        <SearchBar chipData={chipData} setChipData={setChipData} />
        <div className="flex justify-center my-6">
          <Link
            to="/fichescours/create"
            className="buttonAddNewGrWork shadow-xl px-5 py-2 font-bold rounded-full text-white md:py-3 md:px-3 cursor-pointer popUpEffect"
          >
            Ajouter une fiche/un cours
          </Link>
        </div>
        <p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">
          LES FICHES
        </p>
        <div className="w-full overflow-x-auto overflow-y-hidden">
          {posts && <AllPost type="fiche" posts={posts} />}
        </div>
        <p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">
          LES COURS
        </p>
        {posts && <AllPost type="cours" posts={posts} />}
      </div>
    </Gui>
  )
}

export default FichesCours
