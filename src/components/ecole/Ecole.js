import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../util/context'

import axios from "axios"

import API from "../../util/api"
import Gui from '../gui/Gui'
import EcoleAPropos from './EcoleAPropos'
import EcoleFichesCours from './EcoleFichesCours'
import EcoleGroupesDeTravail from './EcoleGroupesDeTravail'
import EcoleMembersNumber from './EcoleMembersNumber'
import EcoleQuestions from './EcoleQuestions'

const Ecole = () => {
  const { user } = useGlobalContext()
  const [instituteGroups, setInstituteGroups] = useState([])
  const [insitutePosts, setInsitutePosts] = useState([])
  const institute = user.institute


  useEffect(() => {
    let mounted = true
    axios
      .all([
        API.get('/user/groups'),
        API.get('/posts'),
      ])
      .then((response) => {
        setInstituteGroups(response[0].data)
        if (mounted) setInsitutePosts(response[1].data)
      })
    return () => (mounted = false)
  }, [user])

  return (
    <Gui>
      <EcoleAPropos institute={institute} />
      <div className="grid md:grid-cols-2 md:mt-10">
        <EcoleMembersNumber className="block md:hidden px-10 mb-4" />
        <div>
          <EcoleQuestions questions={insitutePosts}/>
        </div>
        <div className="hidden md:block px-10">
          <EcoleMembersNumber />
          <EcoleGroupesDeTravail  groups={instituteGroups} />
        </div>
      </div>
      <EcoleGroupesDeTravail className="block md:hidden mb-4" groups={instituteGroups} />
      <EcoleFichesCours posts={insitutePosts} />
    </Gui>
  )
}

export default Ecole
