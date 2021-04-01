import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Gui from '../gui/Gui'
import API from '../../util/api'
import TagsPost from '../tools/TagsPost'
import Comments from '../tools/Comments'
import Avatar from '@material-ui/core/Avatar'

import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineStar,
  AiFillStar,
} from 'react-icons/ai'
import { toast } from 'react-toastify'
import LoadingPage from '../loadingPage/LoadingPage'

const PostForum = (props) => {
  const [post, setPost] = useState()
  const [comm, setComm] = useState()
  const [votes, setVotes] = useState(0)
  const [loading, setLoading] = useState(false)
  let { postId } = useParams()

  useEffect(() => {
    setLoading(true)
    API.get('/post/' + postId)
      .then((res) => {
        setPost(res.data)
        setVotes(res.data.votes)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }, [])

  //TODO - To component, used in ButtonGrTravail
  const firebaseHorodatageToString = (timestamp) => {
    let date = new Date(timestamp * 1000)
    let dateString =
      dayToString(date.getDay()) +
      ' ' +
      beautifyingDate(date.getDate()) +
      '/' +
      beautifyingDate(date.getMonth()) +
      ' - ' +
      beautifyingDate(date.getHours()) +
      'h' +
      beautifyingDate(date.getMinutes())

    return dateString
  }

  const beautifyingDate = (number) => {
    //console.log(number);
    if (number < 10) {
      let beautifiedDate = '0' + number
      return beautifiedDate
    } else {
      return number
    }
  }
  const dayToString = (day) => {
    switch (day) {
      case 0:
        return 'Dimanche'
      case 1:
        return 'Lundi'
      case 2:
        return 'Mardi'
      case 3:
        return 'Mercredi'
      case 4:
        return 'Jeudi'
      case 5:
        return 'Vendredi'
      case 6:
        return 'Samedi'
      default:
        return 'Néant'
    }
  }
  const addComm = () => {
    API.post(`/post/${postId}/comment`, { body: comm })
      .then((res) => {
        toast('Commentaire ajouté !', {
          className: 'ourYellowBg',
          style: { color: 'white' },
          progressStyle: { background: 'white' },
          position: 'bottom-right',
          autoClose: 3000,
        })
        setComm('')
        console.log(res.data)
      })
      .catch((err) => {
        toast.error('Une erreur est survenu, merci de réessayer.', {
          position: 'bottom-right',
          autoClose: 3000,
        })
        console.log(err)
      })
  }
  const addVote = () => {
    API.post(`/post/${postId}/vote`)
      .then((res) => {
        toast('Post recommandé !', {
          className: 'ourYellowBg',
          style: { color: 'white' },
          progressStyle: { background: 'white' },
          position: 'bottom-right',
          autoClose: 3000,
        })
        setVotes(votes + 1)
        let isVote = true
        setPost({ ...post, isVote })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const removeVote = () => {
    API.post(`/post/${postId}/unVote`)
      .then((res) => {
        toast("Post n'est plus recommandé !", {
          className: 'ourYellowBg',
          style: { color: 'white' },
          progressStyle: { background: 'white' },
          position: 'bottom-right',
          autoClose: 3000,
        })
        setVotes(votes - 1)
        let isVote = false
        setPost({ ...post, isVote })
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const removeFav = () => {
    API.post(`/post/${postId}/unlike`)
      .then((res) => {
        toast('Post retiré des favoris !', {
          className: 'ourYellowBg',
          style: { color: 'white' },
          progressStyle: { background: 'white' },
          position: 'bottom-right',
          autoClose: 3000,
        })
        let isFav = false
        setPost({ ...post, isFav })
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const addFav = () => {
    API.post(`/post/${postId}/like`)
      .then((res) => {
        toast('Post ajouté en Favoris!', {
          className: 'ourYellowBg',
          style: { color: 'white' },
          progressStyle: { background: 'white' },
          position: 'bottom-right',
          autoClose: 3000,
        })
        let isFav = true
        setPost({ ...post, isFav })
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  if (loading)
    return (
      <Gui>
        <LoadingPage></LoadingPage>
      </Gui>
    )
  return (
    <Gui>
      {post && (
        <p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">
          POST FORUM
        </p>
      )}

      <div className="w-full flex justify-center">
        <div className="grid md:grid-cols gap-3 w-full">
          <div className="md:grid-cols-1 border shadow-lg p-4 justify-center">
            {post && (
              <div className="grid p-4">
                <div className="flex border w-auto shadow-lg p-2">
                  {post && post.isFav ? (
                    <AiFillStar
                      className="ourYellow text-2xl text-blue-400 hover:yellowDark cursor-pointer popUpEffect"
                      onClick={() => removeFav()}
                    />
                  ) : (
                    <AiOutlineStar
                      className="ourYellow text-2xl text-blue-400 hover:yellowDark cursor-pointer popUpEffect"
                      onClick={() => addFav()}
                    />
                  )}
                  <Avatar
                    src={post.userImage}
                    className="h-16 m-2"
                    alt="user pp"
                  />
                  <h1 className="font-bold self-center text-xl">
                    {post.author}
                  </h1>
                </div>
                <TagsPost tags={post.tags}></TagsPost>
                <div className="flex mt-5 gap-4">
                  <div className="justify-items-center">
                    {post && post.isVote ? (
                      <AiFillLike
                        className="text-2xl text-blue-400 hover:text-blue-500 cursor-pointer popUpEffect"
                        onClick={() => removeVote()}
                      />
                    ) : (
                      <AiOutlineLike
                        className="text-2xl text-blue-400 hover:text-blue-500 cursor-pointer popUpEffect"
                        onClick={() => addVote()}
                      />
                    )}
                    <p className="font-semibold text-center ourMainFontColor">
                      {votes}
                    </p>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl">{post.title}</h1>
                    <p>{firebaseHorodatageToString(post.createdAt)}</p>
                  </div>
                </div>
                <p className=" my-4 flex text-justify">{post.body}</p>
                <div className="mt-2">
                  <div className="p-4 mt-5 border-t-2 border-gray">
                    {post && <Comments comments={post.comments}></Comments>}
                  </div>
                  <h2 className="m-2 font-bold">Ajouter un commentaire</h2>
                  <textarea
                    style={{ resize: 'none' }}
                    className="  border w-full h-20 shadow-inner"
                    value={comm}
                    onChange={(e) => setComm(e.target.value)}
                    placeholder="Ecivez de belles choses"
                  />
                  <div className="grid justify-end w-full mt-1">
                    <button
                      className="border bg-yellow-300 text-white font-bold text-xs h-6 px-2 rounded-full"
                      onClick={addComm}
                    >
                      Envoyer son commentaire
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Gui>
  )
}

export default PostForum
