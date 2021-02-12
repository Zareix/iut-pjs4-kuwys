import React from 'react'

import TopBar from "./TopBar"

const Gui = (props) => {
    return (
        <div>
            <TopBar/>
            <div style={{minHeight : "90vh"}} className="flex">
                <div className="bg-gray-100 w-52">

                </div>
                <div className="col-span-3">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Gui
