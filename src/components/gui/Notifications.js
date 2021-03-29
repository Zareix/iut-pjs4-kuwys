import React, { useState, useEffect } from 'react'

import Gui from '../gui/Gui'
import { useGlobalContext } from '../../util/context';
import SoloNotif from './SoloNotif';

const Notifications = (props) => {
    const { user } = useGlobalContext()

    useEffect(() => {
        console.log(user);
    }, [])

    return (
        <Gui>
            <div className="greyBox mx-1 py-2 px-1 md:mx-60 md:my-10 md:py-5">
                {user.notifications && user.notifications.map((n) =>
                    <div>
                        <SoloNotif dataNotif = {n}></SoloNotif>
                    </div>
                )}
            </div>
        </Gui>
    )
}

export default Notifications