import React, { useEffect } from 'react'

import Gui from '../gui/Gui'
import { useGlobalContext } from '../../util/context'
import SoloNotif from './SoloNotif'
import API from '../../util/api'

const Notifications = () => {
  const { user, setUser } = useGlobalContext()

  useEffect(() => {
    API.post('/user/markNotifsSeen')
    const notifications = user.notifications.map((notif) => {
      return { ...notif, seen: true }
    })
    setUser({ ...user, notifications })
  }, [])

  return (
    <Gui>
      <div className="greyBox mx-1 py-2 px-1 md:mx-60 md:my-10 md:py-5 md:px-5">
        {user.notifications &&
          user.notifications.map((n, i) => (
            <div key={i}>
              <SoloNotif dataNotif={n} />
            </div>
          ))}
      </div>
    </Gui>
  )
}

export default Notifications
