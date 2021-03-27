import React from 'react'

import Footer from './Footer'
import NavigationPanel from './NavigationPanel'

import TopBar from './TopBar'

const GuiWideScreen = (props) => {
    return (
        <div>
            <TopBar />
            <div style={{ minHeight: '100vh' }}>
                <div className="grid grid-cols-6 z-50">
                    <div
                        className="col-span-1 w-1/6 fixed top-12 h-full p-8 z-50 bgGrey"
                    >
                        <NavigationPanel />
                    </div>
                    <div className="col-start-2 col-span-6 mt-12 px-8 pt-5 min-h-screen z-10">{props.children}</div>
                    <div className="col-start-2 col-span-6">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuiWideScreen
