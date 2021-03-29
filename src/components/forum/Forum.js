import React, { useState, useEffect } from 'react'
import Gui from '../gui/Gui'
import API from '../../util/api'
import SearchBar from '../tools/SearchBar'
import AllPost from '../fichesCours/AllPost'

const Forum = () => {
  const [posts, setPosts] = useState()
  const [Tags, setTags] = useState([])

  useEffect(() => {
    API.get('/tags').then((res) => {
      setTags(res.data)
    })

    API.get('/posts', { docTypes: ['forum'] })
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Gui>
      <SearchBar tags={Tags} />
      <p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">Forum</p>
      <div className="w-full overflow-x-auto overflow-y-hidden">
        {posts && <AllPost type="forum" posts={posts} />}
      </div>
    </Gui>
  )
}

export default Forum
