import React, { useState, useEffect } from 'react'
import Gui from '../gui/Gui'
import API from '../../util/api'
import SearchBar from '../tools/SearchBar'
import AllPost from './AllPost'
import { Link } from 'react-router-dom'
import LoadingPage from '../loadingPage/LoadingPage'

const FichesCours = () => {
  const [allPosts, setAllPosts] = useState([])
  const [posts, setPosts] = useState([])
  const [chipData, setChipData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchPosts = async () => {
    const res = await API.get('/posts', { params: { docTypes: 'fiche;cours' } })
    return res.data
  }

  const filterPost = (postsData) => {
    const tags = chipData.map((chip) => chip.label)
    if (chipData.length > 0) {
      const filteredPost = postsData.filter((post) =>
        post.tags.some((tag) => tags.indexOf(tag) >= 0)
      )
      setPosts(filteredPost)
    } else setPosts(postsData)
  }

  const updatePost = () => {
    setLoading(true)
    fetchPosts()
      .then((postsData) => {
        setAllPosts(postsData)
        filterPost(postsData)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    filterPost(allPosts)
  }, [chipData])

  useEffect(() => {
    updatePost()
  }, [])

  return (
    <Gui>
      <div>
        <SearchBar
          chipData={chipData}
          setChipData={setChipData}
          updatePost={updatePost}
        />
        <div className="flex justify-center my-6">
          <Link
            to="/fichescours/create"
            className="buttonAddNewGrWork shadow-xl px-5 py-2 font-bold rounded-full text-white md:py-3 md:px-3 cursor-pointer popUpEffect"
          >
            Ajouter une fiche/un cours
          </Link>
        </div>
        {loading ? (
          <LoadingPage />
        ) : (
          <div>
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
        )}
      </div>
    </Gui>
  )
}

export default FichesCours
