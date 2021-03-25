import React from 'react'

import Footer from './Footer'
import TopBarMobile from './TopBarMobile'

const GuiMobile = (props) => {
    return (
        <div className="w-screen">
            <TopBarMobile />
            <div className="relative top-14 z-10">
                <div className="min-h-screen px-4 pt-4">
                    {props.children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}


export default GuiMobile
