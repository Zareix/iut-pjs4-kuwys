import React, { useState, useEffect } from 'react'
import Gui from '../gui/Gui'
import API from '../../util/api'
import Pdf from '../Pdf'
import TagsPost from '../tools/TagsPost'
import Comments from '../tools/Comments'

import { RiArrowUpCircleFill,RiArrowDownCircleFill } from 'react-icons/ri';
import { toast } from 'react-toastify'

const Post = (props) => {
  const [post, setPost] = useState()
  const [size, setSize] = useState(false)
  const [comm, setComm] = useState()
  const [votes,setVotes] = useState(0)
  let postId = props.match.params.postId
  let clDiv = ""

  useEffect(() => {
    
    setSize((window.innerWidth * 4) / 6)
    window.addEventListener('resize', () => {
      setSize((window.innerWidth * 5) / 6)
    })

    const config = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    }
    API.get('/post/' + postId, config)
      .then((res) => {
        setPost(res.data)
        setVotes(res.data.votes)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  if (post && post.postType ==='fiche') clDiv="grid md:grid-cols-2 gap-3 w-full"
  else if (post && post.postType ==='cours')clDiv="grid gap-3 w-full"
  //TODO - To component, used in ButtonGrTravail
  const firebaseHorodatageToString = (timestamp) => {
    //console.log('Time', timestamp)
    let date = new Date(timestamp * 1000)
    //console.log(date);
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
    }
  }
  const addComm = () => {

    API({
      method: 'post',
      url: `/post/${postId}/comment`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
      data: {
        body: comm,
      },
    })
      .then((res) => {
        
        
        toast('Commentaire ajouté !', {
          className: 'ourYellowBg',
          style: { color: 'white' },
          progressStyle: { background: 'white' },
          position: 'bottom-right',
          autoClose: 3000,
        })
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
    API({
      method: 'post',
      url: `/post/${postId}/vote`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        setVotes(votes+1)
        //console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const removeVote = () => {
    API({
      method: 'post',
      url: `/post/${postId}/unVote`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        setVotes(votes-1)
        //console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Gui>

      {post && post.postType === 'fiche' && (<p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">FICHE</p>)}
      {post && post.postType === 'cours' && (<p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">COURS</p>)}

      <div className="w-full flex justify-center">
        <div className={clDiv}>
        {post && post.postType === 'fiche' && (
          <div className="flex border h-50 shadow-lg p-4 justify-center">
            {post && (
              <Pdf
                titre={post.title}
                pdfUrl={
                  !post.documents[0]
                    ? 'https://firebasestorage.googleapis.com/v0/b/pjs4-iut-ts.appspot.com/o/fiches%2Fdefault.pdf?alt=media'
                    : post.documents[0]
                }
                type="canvas"
                firstPage={false}
                width={(window.innerWidth <= 768)?  size:(size / 2)}
              />
            )}
          </div>)}
          <div className="md:grid-cols-1 border shadow-lg p-4 justify-center">
            {post && (
              <div className="grid p-4">
                <div className="flex border w-auto shadow-lg p-2">
                  <img src={post.userImage} className="h-16 m-2" alt="profil pp"></img>
                  <h1 className="font-bold text-xl">{post.author}</h1>
                </div>
                <TagsPost tags={post.tags}></TagsPost>
                <div className="flex mt-5 gap-4">
                  <div className="justify-items-center">
                    <RiArrowUpCircleFill className="text-2xl text-blue-400 hover:text-blue-500 cursor-pointer popUpEffect" onClick={() => addVote()} />
                    <p className="font-semibold text-center ourMainFontColor">{votes}</p>
                    <RiArrowDownCircleFill className="text-2xl text-blue-400 hover:text-blue-500 cursor-pointer popUpEffect" onClick={() => removeVote()} />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl">{post.title}</h1>
                    <p>{firebaseHorodatageToString(post.createdAt)}</p>
                  </div>
                  
                </div>
                <p className=" my-4 flex text-justify">{post.body}</p>
                <div className="mt-2">
                  
                  
                  <div className="p-4 rounded-xl mt-5 border-2 border-gray h-52 overflow-y-auto">
                    {post &&(<Comments comments={post.comments}></Comments>)}
                    <h2 className="m-2 font-bold">Ajouter un commentaire</h2>
                    <textarea
                      style={{ resize: 'none' }}
                      className="  border w-full h-20 shadow-inner"
                      onChange={(e) => setComm(e.target.value)}
                      placeholder="Ecivez de belles choses"
                    ></textarea>
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
              </div>
            )}
          </div>
        </div>
      </div>
    </Gui>
  )
}

export default Post
