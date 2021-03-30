import React, { useState, useEffect } from 'react'
import Gui from '../gui/Gui'
import API from '../../util/api'
import SearchBar from '../tools/SearchBar'
import AllPost from './AllPost'

const FichesCours = () => {
  const [posts, setPosts] = useState()
  const [chipData, setChipData] = useState([])

  useEffect(() => {
    

    API.get('/posts', { docTypes: ['fiche', 'cours'] })
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Gui>
      <SearchBar chipData={chipData} setChipData={setChipData} />
      <p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">LES FICHES</p>
      <div className="w-full overflow-x-auto overflow-y-hidden">
        {posts && <AllPost type="fiche" posts={posts} />}
      </div>
      <p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">LES COURS</p>
      {posts && <AllPost type="cours" posts={posts} />}
    </Gui>
  )
}

export default FichesCours
