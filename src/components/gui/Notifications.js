import React, { useState } from 'react'

import Gui from '../gui/Gui'
import { useGlobalContext } from '../../util/context';

const Notifications = (props) => {
    const { user } = useGlobalContext()

    return (
        <Gui>
            <div className="greyBox md:mx-60 md:my-10 md:py-5 md:px-7">
                {user.notifications.map((dn) =>
                    <div>
                        
                    </div>
                )}
            </div>
        </Gui>
    )
}

export default Notifications