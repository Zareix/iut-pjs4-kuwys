import React, { useState } from 'react'

import { Link } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"

import NavigationPanel from './NavigationPanel'

const TopBarMobile = (props) => {
    const [isNavVisible, setIsNavVisible] = useState(false)

    return (
        <div className="fixed w-screen z-50">
            <div
                className="h-14 p-3 text-white ourYellowBg grid grid-cols-2 w-full content-center items-center"
            >
                <Link to="/" className="text-lg font-semibold">KUWYS</Link>
                <div className="grid justify-end">
                    <AiOutlineMenu size={30} onClick={() => setIsNavVisible(!isNavVisible)} />
                </div>
            </div>
            <div className="top-14 mobileNavBar overflow-hidden bgGrey" style={{height : isNavVisible ? "100vh" : "0"}}>
                <NavigationPanel/>
            </div>
        </div>
    )
}

export default TopBarMobile
