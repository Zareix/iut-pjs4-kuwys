import React from "react"

const PresentationButton = (props) => {
  return (
    <a
      href="#"
      className="w-full flex items-center justify-center bg-white presentationButton grow px-8 py-3 font-bold rounded-lg text-black md:py-4 md:text-xs md:px-10"
    >
      <span>{props.text}</span>
    </a>
  )
}

export default PresentationButton
