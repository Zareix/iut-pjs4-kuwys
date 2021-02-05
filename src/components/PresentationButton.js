import React from 'react'

const PresentationButton = (props) => {
    return (
        <div href="#" className="w-full flex items-center justify-center presentationButton grow px-8 py-3 font-bold rounded-lg text-black md:py-4 md:text-xs md:px-10">
            <a>{props.text}</a>
        </div>
    )
}

export default PresentationButton
