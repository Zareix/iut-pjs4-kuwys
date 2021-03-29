import React, { useEffect } from 'react'

import Gui from '../gui/Gui'
import { useGlobalContext } from '../../util/context'
import SoloNotif from './SoloNotif'
import API from '../../util/api'

const Notifications = () => {
  const { user } = useGlobalContext()

  useEffect(() => {
    API.post('/user/markNotifsSeen')
  }, [])

  return (
    <Gui>
      <div className="greyBox mx-1 py-2 px-1 md:mx-60 md:my-10 md:py-5 md:px-5">
        {user.notifications &&
          user.notifications.map((n) => (
            <div>
              <SoloNotif dataNotif={n} />
            </div>
          ))}
      </div>
    </Gui>
  )
}

export default Notifications
