import React, { useState, useEffect } from 'react'
import Gui from '../gui/Gui'
import API from '../../util/api'
import SearchBar from '../tools/SearchBar'
import AllPost from '../fichesCours/AllPost'
import { Link } from 'react-router-dom'

const Forum = () => {
  const [posts, setPosts] = useState()
  const [chipData, setChipData] = useState([])

  useEffect(() => {
    console.log(
      chipData.map((chip) => {
        return chip.label
      })
    )

    API.get('/posts')
      .then((res) => {
        const tags = chipData.map((chip) => {
          return chip.label
        })
        if (tags.length === 0) setPosts(res.data)
        else {
          const sortedPost = []
          res.data.forEach((post) => {
            if (post.tags.some((r) => tags.indexOf(r) >= 0))
              sortedPost.push(post)
          })
          setPosts(sortedPost)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [chipData])

  return (
    <Gui>
      <SearchBar chipData={chipData} setChipData={setChipData} />
      <div className="flex justify-center my-6">
        <Link
          to="/forum/create"
          className="buttonAddNewGrWork shadow-xl px-5 py-2 font-bold rounded-full text-white md:py-3 md:px-3 cursor-pointer popUpEffect"
        >
          Ajouter un post
        </Link>
      </div>
      <p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">Forum</p>
      <div className="w-full overflow-x-auto overflow-y-hidden">
        {posts && <AllPost type="forum" posts={posts} />}
      </div>
    </Gui>
  )
}

export default Forum
