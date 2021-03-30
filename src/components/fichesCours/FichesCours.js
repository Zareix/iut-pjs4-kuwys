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
    </Gui>
  )
}

export default FichesCours
