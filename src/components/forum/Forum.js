import React, { useState, useEffect } from 'react'
import Gui from '../gui/Gui'
import API from '../../util/api'
import SearchBar from '../tools/SearchBar'
import AllPost from '../fichesCours/AllPost'

const Forum = () => {
  const [posts, setPosts] = useState()
  const [chipData, setChipData] = useState([])

  useEffect(() => {
    console.log(chipData.map((chip)=> {return chip.label}))
    API.get('/posts', { tags:['a'] ,docTypes: ['forum'] })
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [chipData])

  return (
    <Gui>
      <SearchBar chipData={chipData} setChipData={setChipData} />
      <p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">Forum</p>
      <div className="w-full overflow-x-auto overflow-y-hidden">
        {posts && <AllPost type="forum" posts={posts} />}
      </div>
    </Gui>
  )
}

export default Forum
